//document.write("Hello World!");
//document.write("<h1> hello bob.");
// I was thinking maybe have my game be a player vs world game. start with the above bit?
/*
just practicing those comments
multiline comments
*/
//alert("Warning bob... Warning!");
//state the obvious
//confirm("Do you like cheese?");
// takes ok or cancel feedback
//prompt("What kind of cheese?");
// text feedback
/*
while loop:
while(!confirm("are you sure you want that?")){
    something = prompt("what do you want");
}
for loop:
for(i = 1; 1 <= var1; 1++){
inventory.var1 ++;
inventory.var2 --;
console.log("you have "+inv.var1+" var1);
console.log("you have "+inv.var2+" var2);
}
alert("you have gained "+var1+" var1, thanks.);
Recursive();
*/

Game();

function Game(){
    
    var pc = {
        silversword:0,
        shortsword:0,
        health:10,
        chainmail:0,
        ddkey:0,
        key1:0,
        key2:0,
        key3:0,
        guilt:0,
    }
    var doors = {
        dd:0,
        d4:0,
        d8:0,
        d10:0,
    }
    var bookswitch = 0;
    var slime = 1;
    var ddkey1 = 0;
    var ddkey2 = 0;
    var ddkey3 = 0;
    var ddkey4 = 0;
    
  
    alert("Welcome to the land of the Fey. things tend to get out of hand here, so we have recently implememented large amounts of order. Whenever you want to do something, please put in what action you want to perform, and then the world will ask you what you want to do it to. \n A few things you can do in most places are 'inspect', 'move' and 'take'. we like to tell you that now so we don't have to tell you EVERY STINKING TIME. Have a nice last few moments of your life. See you in the next one!");
    
    var PC = prompt("What is your name, miscreant?");
    
    prompt("What a name. huh. you know, I really don't care. You will be dead soon. Any last words, "+ PC+"?");
    alert("I really don't care, to be honest. Time to end this once and for all, you scum!");
    alert("The figure before you suddenly flashes with bright light and there is an explosion. You hear a scream, most likely your own.");
    
    Temple();
    
    function Temple(){
        var temple = prompt("You wake up against a column in a building entirely made out of white marble. You are battered and bruised, and you cannot seem to remember why you are here. Where is this? Who are you? Questions that you may never remember the answer to. One thing is for sure, the Elf next to you probably shouldn’t have a sword in his face. \n -inspect (I won't tell you this one again) \n -take (I won't tell you this one anymore either) \n -move (I'll still tell you this one) \n -pray").toLowerCase();
        
        if(temple == "sleep"){
                alert("you let unconciousness close back around you.");
            var resume = confirm("Do you wish to continue?");
            if(resume){
                Temple();
            }
            else if(quit){
                alert("seriously? if you don't want to play, go away.");
                GameEnd();
            }
                }
        else if(temple == "pray" || temple == "repent"){
            if(pc.guilt == 0){
                alert("nah. not feeling it. maybe I'll come back later. (heavy foreshadowing)");
            }
            else if(pc.guilt == 2){
                alert("you aren't feeling particularly religious today. Maybe you should come back when you need to repent or something.");
            }
            else if(pc.guilt == 4){
                alert("you sit down in front of the altar and try to pray, but you just can't focus right now. Just not feeling like you particularly need to repent right now. maybe later.");
            }
            else if(pc.guilt == 6){
                alert("You reach out to God to forgive you of the horrible things you have done. You seen to have brutalized this elf, and destroyed a holy text. The guilt tears at your soul. You hear a quiet voice saying \"Don't worry, it might be your sword, but you didn't kill that elf. The book was a book of evil magic, thank you.\" \n The voice is so reassuring, it's as if it were perfectly trustworthy. You believe its words. You feel great. Your guilt slips away, and so does your consciousness. You wake up in heaven. \n No, I won't describe it, use your imagination!");
                GameEnd();
            }
        }
        
        else if(temple == "inspect"){
            var templeInspect = prompt("Inspect what?").toLowerCase();
            
            if(templeInspect == "sword"){
                alert("The slender white blade appears to be made entirely of mirror-like silver. It is the most incredible blade you have ever seen.");
            }
            else if(templeInspect == "elf"){
                alert("this man appears to have been a fighter of some sort, with thick leather armor and two shortswords near his open hands. There is a longsword made entirely out of silver sticking out of his face, piercing through the marble floor beneath him.");
            }
            else if(templeInspect == "altar"){
                alert("this once-massive marble altar has been smashed down the middle by some great force. There is a shredded book on the ground nearby.");
            }
            else if(templeInspect == "self"){
                alert("You are wearing chainmail for some reason, and you have a long scabbard at your side. You still feel very sore for some unknown reason, perhaps you were in a fight with the elf?");
                //I want to use this later so that, depending on WHEN they check on themself, they are more recovered.
            }
            else if(templeInspect == "room" || templeInspect == "area"){
                alert("the building around you appears to be some sort of religious center, with high barreled ceilings, massive stained glass windows depicting beautiful scenes, and a shattered stone altar at the front. There is one exit, which appears to have been a large wooden door, and is now in smithereens around the gaping hole in the otherwise perfect southern wall.");
            }
            else if(templeInspect == "book"){
                if(bookswitch == 0){
                    pc.guilt += 2;
                    alert("the tome crumbled to dust in your hands. You couldn’t read the script on the front anyways.");
                    bookswitch += 1;
                }
                else if(bookswitch == 1){
                    alert("That book was probably a holy text. and you ruined it.")
                    pc.guilt += 2;
                    bookswitch += 1;
                }
                else if(bookswitch == 2){
                    alert("why is this book so interesting to you? did it make you feel that guilty?");
                }
                }
            
            else(alert("I don't know what -"+templeInspect+"- is!"));
            Temple();
            }
        
        
        //need to put in the inventory for this bit, otherwise it is useless.
        else if(temple == "take"){
            var templeTake = prompt("What do you want to take?").toLowerCase();
        
            if(templeTake == "sword" || templeTake == "silversword"){
                if(pc.silversword == 0){
                alert("The elegant blade pulls cleanly from the Elf’s skull. No blood is left on the blade. You realize that there is a scabbard at your side that fits this blade perfectly. What kind of person were you? Did you kill this man? You put the sword in the scabbard.");
                pc.silversword = 1;
                pc.guilt += 2;
                }
                else(alert("you already took that"));
            }
            else if(templeTake == "shortsword" || templeTake == "shortswords"){
                if(pc.shortsword == 0){
                alert("You take both of the shorswords next to the Elf. They don't fit in your scabbard at all, so you strap them into your belt.");
                pc.shortsword = 1;
                }
                else(alert("you already took those"));
            }
            else if(templeTake == "armor" || templeTake == "leather armor"){
                alert("Your chainmail is already better than this decimated armor, and it would take too long to get off him. you really need to figure out... something.");
            }
            else(alert("I don't think you can take that... nice try though."));
            Temple();
        }
        
        else if(temple == "cheat" || temple == "win"){
            alert("You think you're smart, don't you?");
        }
        
        else if(temple == "move" || temple == "go"){
            var templeMove = prompt("where do you want to go?").toLowerCase();
            if(templeMove == "south" || templeMove == "exit" || templeMove == "to exit" || templeMove == "out" || templeMove == "out the southern exit"){
                alert("you walk out of the decimated doors into another room");
                Hallway();
            }
            else(alert("the only way to go is out the southern exit."));
            Temple();
        }
    
        else(alert("I don't know what -"+temple+"- is!"));
        Temple();
    }
    
    
    function Hallway(){
        var hallway = prompt("You are in a long hallway with ten doors, and one large set of double-doors at the end of the hallway. \n -move \n -interact with door/interact/door").toLowerCase();
        if(hallway == "move"){
            var hallMove = prompt("move where? \n -north/back/temple \n -through door #(1-10)/door #(1-10) (ex. 'through door 1') \n -through doubledoors/doubledoors").toLowerCase();
            switch(hallMove){
                case "north":
                case "back":
                case "temple":
                    alert("you go back through the smashed doorway into the temple.");
                    Temple();
                    break;
                    
                case "through door 1":
                case "door 1":
                    alert("for some strange reason, the architect decided it was a good idea to have a brick wall here.");
                    break;
                    
                case "through door 2":
                case "door 2":
                    alert("before you can respond, a hand darts out of the darkness and shanks you.");
                    pc.health -= 2;
                    if(pc.health > 0){
                        alert("As you recoil in pain, the door closes again. probably shouldn't try that again.")
                    }
                    else if(pc.health < 1){
                        alert("you dead sonny. I don't know whether to laugh or to shake my head in shame for the suicidal nature of some gamer kids.")
                        GameEnd();
                    }
                    break;
                    
                case "through door 3":
                case "door 3":
                    alert("This architect really likes brick walls.");
                    break;
                    
                case "through door 4":
                case "door 4":
                    if(doors.d4 == 0){
                        alert("you did see the lock on the door, right?");
                    }
                    else if(doors.d4 == 1){
                        alert("the lock is now gone, and you pass through the door.");
                        Room2();
                    }
                    break;
                    
                case "through door 5":
                case "door 5":
                    alert("it's another brick wall... seriously?");
                    break;
                    
                case "through door 6":
                case "door 6":
                    alert("you open the door to find... a room, what did you expect?");
                    if(slime == 1){
                    alert("As you enter the room, you notice a large number of small, gelatinous shapes on the floor. suddenly, they all clamber together, and you are 'staring' down a massive slime. It begins to slowly creep towards you.");
                    Room1();
                    }
                    else if(slime == 0){
                        Room12();
                    }
                    break;
                    
                case "through door 7":
                case "door 7":
                    alert("okay, this architect has a problem with brick walls.");
                    break;
                    
                case "through door 8":
                case "door 8":
                    if(doors.d8 == 0){
                        alert("Seriously, can't you tell you need a key, and not any key, the RIGHT key. There are a lot of keys... and brick walls. this door be locked. maybe you could try UNlocking it?");
                    }
                    else if(doors.d8 == 1){
                        alert("The door appears to be unlocked, so you pass through into another room.");
                        Room3();
                    }
                    break;
                    
                case "through door 9":
                case "door 9":
                    alert("another. freaking. brick. wall. what fun.");
                    break;
                    
                case "through door 10":
                case "door 10":
                    if(doors.d10 == 0){
                        alert("I'm afraid this door is locked. If you have the key, please don't forget to use it.");
                    }
                    else if(doors.d10 == 1){
                        alert("cool! the door is unlocked, so you go on through into the room beyond.");
                        Room4();
                    }
                    break;
                    
                case "through doubledoors":
                case "doubledoors":
                    if(doors.dd == 0){
                        alert("the doors are locked with locks. What did you expect?");
                    }
                    else if(doors.dd == 1){
                        alert("the doors are slightly less locked now. whoop dee do.");
                    }
                    else if(doors.dd == 2){
                        alert("wow. much door. many lock. now many less lock. door still locked.");
                    }
                    else if(doors.dd == 3){
                        alert("so... you have unlocked a few locks. that's nice.");
                    }
                    else if(doors.dd == 4){
                        alert("turns out the other locks were illusory. The doors are now unlocked.");
                        alert("you push open the large set of double doors into the world beyond. Welcome to the land of the Fey. No, you aren't dead. no, you didn't stab the elf. what did you do? You'll never know, because we won't tell you. Have a nice cliffhanger! \n \n -FIN-");
                        GameEnd();
                    }
                    break;
                    
                default:
                    alert("I don't know what "+hallMove+" is.");
                    Hallway();
            }
        }
        else if(hallway == "inspect"){
            var hallInspect = prompt("Inspect what? \n -door # \n -doubledoors \n -area/room").toLowerCase();
            switch(hallInspect){
                case "door 1":
                    alert("It appears to be an unlocked door.");
                    break;
                    
                case "door 2":
                    if(pc.health <= 9){
                    alert("It appears to be an unlocked door. you probably shouldn't open random doors you probably opened before.");
                    }
                    else(alert("it appears to be an unlocked door."));
                    break;
                    
                case "door 3":
                    alert("It appears to be an unlocked door.");
                    break;
                    
                case "door 4":
                    if(doors.d4 == 0){
                        alert("It is a locked bronze door.");
                    }
                    else if(doors.d4 == 1){
                        alert("This is the bronze door you unlocked.");
                    }
                    break;
                    
                case "door 5":
                    alert("It appears to be an unlocked door.");
                    break;
                    
                case "door 6":
                    alert("this is an unlocked wooden door. What sets this wooden door apart from the rest? It has this text, that's what.")
                    break;
                    
                case "door 7":
                    alert("It appears to be an unlocked door.");
                    break;
                    
                case "door 8":
                    if(doors.d8 == 0){
                        alert("This is a locked silver door. expensive."); 
                    }
                    else if(doors.d8 == 1){
                        alert("This fancy pants silver door has been unlocked. by you. who else could have done it?");
                    }
                    break;
                    
                case "door 9":
                    alert("It appears to be an unlocked door.");
                    break;
                    
                case "door 10":
                    if(doors.d10 == 0){
                        alert("This locked golden door is freaking amazing. solid gold. unfortunately, you don't think you could carry it out. also, it's locked.");
                    }
                    else if(doors.d10 == 1){
                        alert("you wasted a solid gold key to unlock the solid gold door. sad, but necessary. No, you still can't take the door.");
                    }
                    break;
                    
                case "doubledoors":
                    if(doors.dd == 0){
                        alert("These massive, gilded doors are covered, every inch, in locks. So many locks. something tells you this is PROBABLY the way out...");
                    }
                    else if(doors.dd == 1){
                        alert("Now that you used that random key on a random lock, and it worked... there is one less lock on this door.");
                    }
                    else if(doors.dd == 2){
                        alert("You've used two keys on this door now... how many are left?");
                    }
                    else if(doors.dd == 3){
                        alert("So. Many. Locks.");
                    }
                    else if(doors.dd == 4){
                        alert("Surprisingly, all the locks but three are gone. those three are the ones you unlocked. you can open it now... but then... where would you go? \n Probably anywhere but here.");
                    }
                    break;
                    
                case "area":
                case "room":
                    alert("This large hallway has ten doors, five on each side, and then a large set of double doors at the far end that is literally COVERED in locks. One door is bronze (door 4), another is silver (door 8), another is Gold (door 10), and all the rest are wooden. The gaping hole in the wall behind you probably once held another set of double doors, but is in smithereens.");
                    break;
                    
                default:
                    alert("I don't know what "+hallInspect+" is.");
                    Hallway();
            }
        }
        else if(hallway == "interact with door" || hallway == "interact" || hallway == "door"){
            var hallInteract = prompt("which door? \n -doubledoors \n -door #");
            switch(hallInteract){
                case "doubledoors":
                    var dd = prompt("do what to the double doors? \n -open \n -unlock/use key").toLowerCase();
                    if(dd == "open"){
                        if(doors.dd == 4){
                            alert("you push open the large set of double doors into the world beyond. Welcome to the land of the Fey. No, you aren't dead. no, you didn't stab the elf. what did you do? You'll never know, because we won't tell you. Have a nice cliffhanger! \n \n -FIN-");
                            GameEnd();
                        }
                        else(alert("fat chance, fatso."));
                    }
                    else if(dd == "unlock" || dd == "use key"){
                        if(pc.ddkey = 0){
                            alert("You kind of don't have any keys for any of the locks on this door, which are all strangely identical.");
                        }
                        else if(pc.ddkey > 0){
                            alert("You stick the key in a random lock and turn. the lock pops open, and the key dissolves in your hand.");
                            pc.ddkey -= 1;
                            doors.dd += 1;
                            if(doors.dd == 4){
                                alert("As the key dissolves, so do all of the remaining locked locks. The doors are now unlocked.")
                            }
                            else(alert("The door is still locked."));
                        }
                    }
                    else(alert("I don't know what "+dd+" is."));
                    Hallway();
                    break;
                
                case "door 1":
                    var d1 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d1 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d1 == "admire" || d1 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d1+" is."));
                    break;
                    
                case "door 2":
                    var d2 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d2 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d2 == "admire" || d2 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d2+" is."));
                    break;
                    
                case "door 3":
                    var d3 = prompt("do what to the door? \n -open \n -admire").tolowercase();
                    if(d3 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d3 == "admire" || d3 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d3+" is."));
                    break;
                    
                case "door 4":
                    var d4 = prompt("do what to the bronze door? \n -open \n -admire \n -unlock/use key").toLowerCase();
                    if(d4 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d4 == "admire" || d4 == "look at"){
                            alert("it's a door. made of bronze. chances are, if you were to open it, you would make some progress.");
                    }
                    else if(d4 == "unlock" || d4 == "use key"){
                        if(pc.key1 == 0){
                            alert("I'm afraid you don't have the bronze key. nice try though.");
                        }
                        else if(pc.key1 == 1){
                            alert("you insert the bronze key into the lock and turn. the key vaporizes with the lock.");
                            pc.key1 -= 1;
                            doors.d4 = 1;
                        }
                    }
                    else(alert("I don't know what "+d4+" is."));
                    break;
                    
                case "door 5":
                    var d5 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d5 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d5 == "admire" || d5 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d5+" is."));
                    break;
                    
                case "door 6":
                    var d6 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d6 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d6 == "admire" || d6 == "look at"){
                            alert("it's a door. made of wood. The chances are really high that, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d6+" is."));
                    break;
                    
                case "door 7":
                    var d7 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d7 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d7 == "admire" || d7 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d7+" is."));
                    break;
                    
                case "door 8":
                    var d8 = prompt("do what to the door? \n -open \n -admire \n -unlock/use key").toLowerCase();
                    if(d8 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d8 == "admire" || d8 == "look at"){
                            alert("it's a door. made of silver. chances are, if you were to open it, you would make some progress.");
                    }
                    else if(d8 == "unlock" || d8 == "use key"){
                        alert("once again, the key vaporizes, along with the lock.");
                        pc.key2 -= 1;
                        doors.d8 = 1;
                    }
                    else(alert("I don't know what "+d8+" is."));
                    break;
                    
                case "door 9":
                    var d9 = prompt("do what to the door? \n -open \n -admire").toLowerCase();
                    if(d9 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d9 == "admire" || d9 == "look at"){
                            alert("it's a door. made of wood. chances are, if you were to open it, you would make some progress.");
                    }
                    else(alert("I don't know what "+d9+" is."));
                    break;
                    
                case "door 10":
                    var d10 = prompt("do what to the door? \n -open \n -admire \n -take/steal(does it even belong to anybody?) \n -unlock/use key").toLowerCase();
                    if(d10 == "open"){
                        alert("you think I have the time to code another path for every single door? you're crazy. if you want to go through, use the 'move' command, for heaven's sake!");
                    }
                    else if(d10 == "admire" || d10 == "look at"){
                            alert("it's a door. made of gold. chances are, if you were to open it, you would make some progress.");
                    }
                    else if(d10 == "take" || d10 == "steal"){
                        alert("nope. magically indestructible and irremovable. not a chance.")
                    }
                    else if(d10 == "unlock" || d10 == "use key"){
                        alert("sadly, just like the last two doors, that solid gold key vaporized with the solid gold lock. at least now you can go through the door... but it's so sad you couldn't keep the key.");
                        pc.key3 -= 1;
                        doors.d10 = 1;
                    }
                    else(alert("I don't know what "+d10+" is."));
                    break;
            }
        }
        else if(hallway == "take"){
            var hallTake = prompt("what do you want to take? \n -door # \n lock").toLowerCase();
            switch(hallTake){
                case "door 1":
                case "door 2":
                case "door 3":
                case "door 4":
                case "door 5":
                case "door 6":
                case "door 7":
                case "door 8":
                case "door 9":
                case "door 10":
                case "doubledoors":
                    alert("Did you honestly think you could take a door? Especially the metal ones or the big ones, but why on earth do you need a door? Get your own door, you greedy completionist!");
                    break;
                case "lock":
                case "locks":
                    alert("The locks are attached to the doors... so no, you cna't take them, and even if you could, they would be closed, so you still wouldn't be able to.");
                    break;
                default:
                    alert("I don't know what "+hallTake+" is.");
            }
        }
        else if(hallway == "cheat"){
            while(!confirm("are you sure you want to try cheating?")){
                var cheatConfirm = confirm("do you want to do something else?");
                
                //if they press cancel twice, it ends the game. just closes it.
                
                if(cheatConfirm){
                    alert("good");
                    Hallway();
                }
                else if(quit){
                    alert("you asked for it. seeya sucker.");
                    GameEnd();
                }
            }
        }
        else(alert("I don't know what "+hallway+" is."))
        Hallway();
    }
    
    
    function Room1(){
        var room1 = prompt("What do you do? \n -run/leave \n -attack \n -talk \n -inspect").toLowerCase();
        switch(room1){
            case "run":
            case "leave":
                alert("like the coward you are, you dash back out of the door, but as you go to close it, the slime shoots out a tentacle, bruising your side. you manage to close the door on it. you hear slurping and rolling sounds before all is quiet behind the door.");
                pc.health -= 2;
                if(pc.health < 1){
                    alert("You've simply taken one too many hits, you crumple to the ground as the adrenaline leaves you, and die a very sad death. A cowardly death.");
                    GameEnd();
                }
                break;
            case "attack":
                
                //I really want this to only list the objects that the player has in their inventory.
                
                var attack = prompt("attack the slime with what? \n -fist \n -weapon").toLowerCase();
                if(attack == "fist"){
                    alert('you punch the gelatinous creature. OBVIOUSLY, your hand sinks in. You feel a great pain as the slime presses in on your arm, crushing it. You scream as you pull out your hand. You can still use the arm, it seems.');
                    pc.health -= 3;
                    if(pc.health < 0){
                        alert("unfortunately, you can't use the rest of your body, and are dead.");
                        GameEnd();
                    }
                }
                else if(attack == "weapon"){
                    if(pc.silversword == 0 && pc.shortsword == 0){
                        alert("You don't have a weapon. The slime nonchalantly slaps you against the wall. You feel some ribs break.");
                        pc.health -= 3;
                    }
                    else if(pc.silversword == 1 && pc.shortsword == 1){
                        var weapon = confirm("Do you want to use the shortswords?");
                        if(weapon){
                            alert("you swing the shortswords through the slime effortlessly... and it effortlessly comes back together. unharmed. It lashes out, taking your shortswords and smacking you away.");
                            pc.shortsword = 0;
                            pc.health -= 1;
                            if(pc.health < 1){
                                alert("you are somehow hurt enough that this slight hit kills you. dang.");
                                GameEnd();
                            }
                        }
                        else if(quit){
                            var weapon2 = confirm("do you want to use the silver sword?");
                            if(weapon2){
                                alert("As you swipe the shimmering blade through the slime creature, it vaporizes entirely. You hear a clink as a bronze key drops to the floor from inside the slime.");
                                slime = 0;
                                Room12();
                            }
                            else if(quit){
                                alert("what do you want, miscreant? You have no more weapons, what do you want to use? your wit? it must not be very sharp! the slime charges you, engulfing you entirely before crushing your entire frame. you are dead.");
                                GameEnd();
                            }
                        }
                    }
                    else if(pc.silversword == 1 && pc.shortsword == 0){
                        alert("You swing your shimmering blade through the slime, vaporizing it. You hear a clink as a bronze key from inside the slime drops to the floor.");
                        slime = 0;
                        Room12();
                    }
                    else if(pc.silversword == 0 && pc.shortsword == 1){
                        alert("you swing the shortswords through the slime effortlessly... and it effortlessly comes back together. unharmed. It lashes out, taking your shortswords and smacking you away.");
                        pc.shortsword = 0;
                        pc.health -= 1;
                        if(pc.health < 1){
                                alert("you are somehow hurt enough that this slight hit kills you. dang.");
                                GameEnd();
                    }
                    }
                }
                break;
            case "talk":
            case "diplomacy":
                alert("If you intended to talk to the slime, first, let me ask you... what the heck? it doesn't listen as it slams you into the wall. You hear some things break. those things hurt a lot.");
                pc.health -= 3;
                if(pc.health < 1){
                    alert("yeahhhh... you're dead.");
                }
                break;
            case "inspect":
                var slimeInspect = confirm("Are you sure you want to be inspecting stuff with a hostile creature here?");
                if(slimeInspect){
                    alert("the slime grabs your head and proceeds to bash it on the wall, but you notice a shiny object inside of it before you hit the wall.");
                    pc.health -= 4;
                    if(pc.health < 1){
                        alert("Whay did you think that was a good idea? you're dead.");
                        GameEnd();
                    }
                }
                else if(quit){
                        alert("good choice.");
                        Room1();
                    }
                break;
        }
    Room1();
    }
    
    
    function Room12(){
        //slime dead room 1.
        var room12 = prompt("The slime is dead now, the room seems to be safe. what do you do? \n -leave \n -the other things which I have previously stated that I won't tell you again.");
        switch(room12){
            case "leave":
            case "exit":
                alert("You walk out of the room into the hallway.");
                Hallway();
                break;
            case "take":
                var take12 = prompt("take what?");
                if(take12 == "key" || take12 == "bronze key"){
                    if(pc.key1 == 0 && doors.d4 == 0){
                        alert("you pick up the bronze key and put it in your pocket.");
                        pc.key1 += 1;
                    }
                    else if(pc.key1 == 1){
                        alert("You already picked that up... did you forget?");
                    }
                    else if(doors.d4 == 1){
                        alert("you already used the key you found here. By what strange logic did you think it would come back?");
                    }
                }
                else if(take12 == "slime"){
                    alert("It would appear that the word 'vaporized' is too hard for you to understand. The slime is gone.");
                }
                else if(take12 == "black key" || take12 == "hidden key"){
                    if(ddkey1 == 0){
                    alert("You pick up the inconspicuous black key and put it in your pocket. I wonder what it opens?");
                    pc.ddkey += 1;
                    ddkey1 += 1;
                    }
                    else if(ddkey1 == 1){
                        alert("You already took that... trying to cheat, are we?");
                    }
                }
                else(alert("I don't know what "+take12+" is."));
                Room12();
                break;
            case "inspect":
            case "search":
            case "look":
                var look12 = prompt("inspect what?"){
                    if(look12 == "area" || look12 == "room" || look12 == "floor"){
                        alert("You look around for a bit. You find four walls, a floor, a ceiling, and a door. Not very interesting. In fact, this is the most boring room ever. Oh, and you found a black key too.");
                        ddkey1 += 1;
                        pc.ddkey +=1;
                    }
                    else(alert("not much to look at... maybe you should check the area."));
                    Room12();
                }
                break;
        }
    }
    
    function Room2(){
    //make sure to call something like a name out of an array here. (look at github).    
    }
    
    
    function Room3(){
        
    }
    
    
    function Room4(){
        
    }
    
    
    function GameEnd(){
        alert("Game over, go away or restart.");
        GameEnd();
    }
}