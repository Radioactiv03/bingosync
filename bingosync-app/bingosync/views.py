from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

import json

from .settings import SOCKETS_URL
from .bingo_generator import BingoGenerator
from .forms import RoomForm, JoinRoomForm
from .models import Room, Game
from .publish import publish_goal

AUTHORIZED_ROOMS = 'authorized_rooms'

def rooms(request):
    if request.method == "POST":
        form = RoomForm(request.POST)
        if form.is_valid():
            room = form.create_room()
            return redirect("room_view", encoded_room_uuid=room.encoded_uuid)
    else:
        form = RoomForm()

    return render(request, "bingosync/index.html", {"form": form})

def _is_authorized(session, encoded_room_uuid):
    return encoded_room_uuid in session.get(AUTHORIZED_ROOMS, {})

def _authorize(session, encoded_room_uuid):
    # have to set the session this way so that it saves properly
    authorized_rooms = session.get(AUTHORIZED_ROOMS, {})
    authorized_rooms[encoded_room_uuid] = True
    session[AUTHORIZED_ROOMS] = authorized_rooms

def _join_room(request, join_form, encoded_room_uuid):
    params = {
        "form": join_form,
        "encoded_room_uuid": encoded_room_uuid
    }
    return render(request, "bingosync/join_room.html", params)

def room_view(request, encoded_room_uuid):
    if request.method == "POST":
        join_form = JoinRoomForm(request.POST)
        if join_form.is_valid():
            room = join_form.get_room()
            # use the form uuid, not the url parameter
            encoded_room_uuid = room.encoded_uuid

            _authorize(request.session, encoded_room_uuid)
            return redirect("room_view", encoded_room_uuid=encoded_room_uuid)
        return _join_room(request, join_form, encoded_room_uuid)
    else:
        room = Room.get_for_encoded_uuid(encoded_room_uuid)
        if not _is_authorized(request.session, encoded_room_uuid):
            join_form = JoinRoomForm.for_room(room)
            return _join_room(request, join_form, encoded_room_uuid)
        else:
            params = {
                "room": room,
                "sockets_url": SOCKETS_URL
            }
            return render(request, "bingosync/bingosync.html", params)

def room_board(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    board = room.current_game.board
    return JsonResponse(board, safe=False)

def board_view(request, seed):
    params = {
        "seed": seed,
        "sockets_url": SOCKETS_URL
    }
    return render(request, "bingosync/bingosync.html", params)

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)

@csrf_exempt
def goal_selected(request):
    data = json.loads(request.body.decode("utf8"))
    name = data["name"]
    goal = data["goal"]
    slot = data["slot"]
    color = data["color"]
    publish_goal(name, goal, slot, color)
    return HttpResponse("Got goal: " + goal)

