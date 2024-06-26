bingoGenerator = require("./generators/generator_bases/simple_generator.js");
var bingoList =
[{"name": "ELP N.Sanity Beach & The Lab"},
{"name": "ELP both 'Roll' level"},
{"name": "ELP Temple Ruins & Jaws of Darkness"},
{"name": "ELP both 'Boulder' levels"},
{"name": "ELP Upstream & Up the Creek"},
{"name": "ELP both 'Hog' levels"},
{"name": "ELP The Great Gate & Native Fortress"},
{"name": "ELP The Lost City & Sunset Vista"},
{"name": "ELP both 'Road' levels"},
{"name": "ELP both “Machinery” levels"},
{"name": "ELP Slippery Climb & Stormy Ascent"},
{"name": "ELP Cortex Power & Toxic Waste"},
{"name": "ELP Lights Out & Fumbling in the Dark"},
{"name": "ELP Generator Room & The Great Hall"},
{"name": "Boulders & Castle Machinery gems"},
{"name": "Defeat Papu Papu & Pinstripe"},
{"name": "Defeat Ripper Roo & Koala Kong"},
{"name": "Defeat Brio & N.Cortex"},
{"name": "Boulder Dash gem"},
{"name": "Upstream gem"},
{"name": "Rolling Stones gem"},
{"name": "Cortex Power gem"},
{"name": "Jaws of Darkness gem"},
{"name": "Native Fortress gem"},
{"name": "Road to Nowhere gem"},
{"name": "Jungle Rollers gem"},
{"name": "N.Sanity Beach & Up the Creek gems"},
{"name": "The Great gate gem"},
{"name": "Hog Wild & Sunset Vista gems"},
{"name": "1 key & The High Road gem"},
{"name": "Whole Hog gem"},
{"name": "Fumbling in the Dark gem"},
{"name": "Temple Ruins & Heavy Machinery gems"},
{"name": "Gold relic from Fumbling in the Dark "},
{"name": "Gold relic from N.Sanity Beach"},
{"name": "Gold relic from Jungle Rollers"},
{"name": "Gold relic from The Great Gate"},
{"name": "Gold relic from Boulders"},
{"name": "Gold relic from Upstream"},
{"name": "Gold relic from Hog Wild"},
{"name": "Gold relic from Whole Hog"},
{"name": "Gold relic from Native Fortress"},
{"name": "Gold relic from Rolling Stones"},
{"name": "Gold relic from Up the Creek"},
{"name": "Gold relic from The Lost City"},
{"name": "Gold relic from Temple Ruins"},
{"name": "Gold relic from Road to Nowhere"},
{"name": "Gold relic from Boulder Dash"},
{"name": "Gold relic from Sunset Vista"},
{"name": "Gold relic from Heavy Machinery"},
{"name": "Gold relic from Cortex Power"},
{"name": "Gold relic from Generator Room"},
{"name": "Gold relic from Toxic Waste"},
{"name": "Gold relic from The High Road"},
{"name": "Gold relic from Slippery Climb"},
{"name": "Gold relic from Jaws of Darkness"},
{"name": "Gold relic from Castle Machinery"},
{"name": "Gold relic from The Lab"},
{"name": "Relic or gem from Stormy Ascent"},
{"name": "7 relics"},
{"name": "10 relics"},
{"name": "5 gold relics"},
{"name": "3 platinum relics"},
{"name": "1 platinum relic from each island"},
{"name": "4 gems"},
{"name": "7 gems"},
{"name": "10 gems"},
{"name": "Relics from Generator Room & The Great Gate"},
{"name": "Relics from Hog Wild & Jaws of Darkness"},
{"name": "Relics from Jungle Rollers & Toxic Waste"},
{"name": "Relics from Castle Machinery & Temple Ruins"},
{"name": "Relics from Boulders & The High Road"},
{"name": "Relics from Upstream & The Lab"},
{"name": "Relics from Rolling Stones & Slippery Climb"},
{"name": "Relics from Road to Nowhere & The Lost City"},
{"name": "Relics from N.Sanity Beach & Sunset Vista"},
{"name": "Relics from Up the Creek & Cortex Power"},
{"name": "Relics from Heavy Machinery & Native Fortress"},
{"name": "Relics from Lights Out & Boulder Dash"},
{"name": "Relic or gem from Whole Hog"},
{"name": "Relic or gem from Fumbling In The Dark"},
{"name": "Complete Jungle Rollers, The Lab & Road to Nowhere Tawna Bonus"},
{"name": "Complete The Lost City, Heavy Machinery & Upstream Tawna Bonus"},
{"name": "Complete Native Fortress, Jaws of Darkness & Toxic Waste Tawna Bonus"},
{"name": "Complete The Great Gate, The High road & Up the Creek Tawna Bonus"},
{"name": "Complete Rolling Stones, Sunset Vista & Generator Room Tawna Bonus"},
{"name": "Complete The Lost City & Slippery Climb Brio Bonus"},
{"name": "Complete Stormy Ascent Brio Bonus"},
{"name": "Complete Rolling Stones, Heavy Machinery Brio Bonus Rounds"},
{"name": "ELP 3 levels and watch 30 boxes fall on Crash's head per level"},
{"name": "Purple gem & defeat Papu Papu"},
{"name": "Red gem & defeat Ripper roo"},
{"name": "Green gem & defeat Pinstripe"},
{"name": "Blue gem & defeat Koala Kong"},
{"name": "Yellow gem & defeat N.brio"},
{"name": "Orange gem & Defeat Cortex"},
{"name": "40 lives "},
{"name": "20 lives "},
{"name": "30 lives "},
{"name": "Defeat 3 Bosses"},
{"name": "Collect 1 key, 1 platinum relic and 1 coloured gem"},
{"name": "Finish 6 Tawna Bonus Rounds "},
{"name": "Finish one of each kind of bonus round"},
{"name": "Finish 2 N.brio bonus rounds"},
{"name": "3 gems from Cortex island"},
{"name": "Stand on a gem platform in 3 different levels"},
{"name": "Stand on 3 gem platforms"},
{"name": "Stand on 2 gem platforms of each of two colours"},
{"name": "Finish 8 Bonus rounds of any kind"},
{"name": "2 gems that require a coloured gem"},
{"name": "ELP a level from each island"},
{"name": "ELP 7 levels "},
{"name": "ELP 5 N.Sanity Island levels"},
{"name": "ELP 4 Wumpa Island levels"},
{"name": "ELP 4 Cortex Island levels"},
{"name": "2 relics from each island"},
{"name": "3 coloured gems"},
{"name": "2 coloured gems and 3 clear gems"},
{"name": "4 relics from N.Sanity Island"},
{"name": "3 relics from Wumpa Island"},
{"name": "3 relics from Cortex Island"},
{"name": "Two gems from each island"},
{"name": "Gem in all of the first 4 levels"},
{"name": "Red gem & 1 'Boulder' platinum relic"},
{"name": "Yellow gem & 1 'Hog' platinum relic"},
{"name": "Orange Gem & 1 'Up' platinum relic"},
{"name": "Green Gem & 1 'Road' platinum relic"},
{"name": "Blue gem & 1 'Machinery' platinum relic"},
{"name": "Purple gem & 1 'Roll' platinum relic"},
{"name": "One red platform level gem"},
{"name": "One yellow platform level gem"},
{"name": "One blue platform level gem"},
{"name": "One green platform level gem"},
{"name": "One orange or purple platform level gem"},
{"name": "3 'the' levels gems"},
{"name": "Relic in 3 'the' levels"},
{"name": "ELP 4 'the' levels"},
{"name": "Hit a ! crate in 5+ different levels"},
{"name": "Hit all ! crates in Road to Nowhere"},
{"name": "Hit 9 non-'The Lab ! boxes"},
{"name": "Explode a TNT in 6+ different levels"},
{"name": "Become invincible in 5+ different levels"},
{"name": "1 platinum relic & defeat 1 boss "},
{"name": "1 gem in a 'Dark' level"},
{"name": "ELP all blue platform levels"},
{"name": "ELP all green platform levels"},
{"name": "ELP all red platform levels"},
{"name": "ELP all yellow platform levels"},
{"name": "ELP Upstream & Boulder Dash"},
{"name": "Kill a blob in both N.Brio & The Lab"},
{"name": "Smash a time crate in 9 levels"},
{"name": "Smash a '3' time crate in 5 levels"},
{"name": "Kill a turtle in 5 different levels"},
{"name": "Collect both keys"},
{"name": "Hit both instances of ! crates in N.Sanity Island"},
{"name": "Stand on all blue gem platforms in Jaws of Darkness"},
{"name": "Stand on all orange gem platforms in Upstream"},
{"name": "Hit a checkpoint in 10 levels"},
{"name": "Get all boxes and ELV 1 coloured gem level with at least one death after the first checkpoint"},
{"name": "Get Eaten, Burnt, Electrocuted, & Shot by bullets"}]
