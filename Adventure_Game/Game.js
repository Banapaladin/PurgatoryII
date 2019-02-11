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
    }
    var doors = {
        dd:0,
        d4:0,
        
    }
  
    alert("Welcome to the land of the Fey. things tend to get out of hand here, so we have recently implememented large amounts of order. Whenever you want to do something, please put in what action you want to perform, and then the world will ask you what you want to do it to. \n A few things you can do in most places are 'inspect', 'move' and 'take'. we like to tell you that now so we don't have to tell you EVERY STINKING TIME. Have a nice last few moments of your life. See you in the next one!");
    
    var PC = prompt("What is your name, miscreant?");
    
    var lastWords = prompt("What a name. huh. you know, I really don't care. Your friend is dead. You will be soon. Any last words, "+ PC+"?");
    alert("I really don't care, to be honest. Time to end this once and for all!");
    alert("The figure before you suddenly flashes with bright light and there is an explosion. You hear a scream, most likely your own.");
    
    Temple();
    
    function Temple(){
        var temple = prompt("You wake up against a column in a building entirely made out of white marble. You are battered and bruised, and you cannot seem to remember why you are here. Where is this? Who are you? Questions that you may never remember the answer to. One thing is for sure, the Elf next to you probably shouldn’t have a sword in his face. \n -inspect (I won't tell you this one again) \n -take (I won't tell you this one anymore either) \n -move (I'll still tell you this one)").toLowerCase();
        
        if(temple == "sleep"){
                alert("you let unconciousness close back around you.");
            var resume = confirm("Do you wish to continue?");
            if(resume){
                Temple();
            }
            else if(quit){
                alert("game over!");
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
                alert("the tome crumbled to dust in your hands. You couldn’t read the script on the front anyways.");
                }
            
            else(alert("I don't know what -"+templeInspect+"- is!"));
            Temple();
            }
        
        
        //need to put in the inventory for this bit, otherwise it is useless.
        else if(temple == "take"){
            var templeTake = prompt("What do you want to take?").toLowerCase();
        
            if(templeTake == "sword" || templeTake == "silversword"){
                if(pc.silversword == 0){
                alert("The elegant blade pulls cleanly from the Elf’s skull. No blood is left on the blade. You realize that there is a scabbard at your side that fits this blade perfectly. What kind of person were you? You put the sword in the scabbard.");
                pc.silversword = 1;
                }
                else(alert("you already took that"));
            }
            else if(templeTake == "shortsword" || templeTake == "shortswords"){
                if(pc.shortsword == 0){
                alert("You take both of the shorswords next to the Elf. They don't fit in your scabbard at all, so you strap them into your belt.");
                pc.shortsword = 2;
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
        var hallway = prompt("You are in a long hallway with ten doors, and one large set of double-doors at the end of the hallway. \n -move \n -interact with door").toLowerCase();
        if(hallway == "move"){
            var hallMove = prompt("move where? \n -north/back/temple \n -through door #(1-10)/door #(1-10) (ex. 'through door 1') \n -through double-doors/double-doors").toLowerCase();
            switch(hallMove){
                case "north" || "back" || "temple":
                    alert("you go back through the smashed doorway into the temple.");
                    Temple();
                    break;
                    
                case "through door 1" || "door 1":
                    alert("for some strange reason, the architect decided it was a good idea to have a brick wall here.");
                    break;
                    
                case "through door 2" || "door 2":
                    alert("before you can respond, a hand darts out of the darkness and shanks you. As you recoil in pain, the door closes again. probably shouldn't try that again.");
                    pc.health -= 2;
                    break;
                    
                case "through door 3" || "door 3":
                    alert("This architect really likes brick walls.");
                    break;
                    
                case "through door 4" || "door 4":
                    if(door.d4 == 0){
                        alert("you did see the lock on the door, right?");
                    }
                    else if(door.d4 == 1){
                        alert("the lock is no longer effective, and you pass through the door.");
                        Room2();
                    }
                    break;
                    
                case "through door 5" || "door 5":
                    alert("it's another brick wall... seriously?");
                    break;
                    
                case "through door 6" || "door 6":
                    alert("you open the door to find... a room, what did you expect?");
                    Room1();
                    break;
                    
                case "through door 7" || "door 7":
                    alert("okay, this architect has a problem with brick walls.");
                    break;
                    
                case "through door 8" || "door 8":
                    
                    break;
                    
                case "through door 9" || "door 9":
                    alert("another. freaking. brick. wall. what fun.");
                    break;
                    
                case "through door 10" || "door 10":
                    
                    break;
                    
                case "through double-doors" || "double-doors":
                    if(door.dd == "0"){
                        alert("the doors are locked with locks. What did you expect?");
                    }
                    else if(door.dd == "1"){
                        alert("the doors are slightly less locked now. whoop dee do.");
                    }
                    else if(door.dd == "2"){
                        alert("wow. much door. many lock. now many less lock. door still locked.");
                    }
                    else if(door.dd == "3"){
                        alert("so... you have unlocked a few locks. that's nice.");
                    }
                    else if(door.dd == "4"){
                        alert("turns out the other locks were illusory. the door opens");
                        //end of game. make something happen here.
                    }
                    break;
                    
                default:
                    alert("I don't know what "+hallMove+" is.");
                    Hallway();
            }
        }
        else if(hallway == "inspect"){
            
        }
        else if(hallway == "interact with door"){
            
        }
        else if(hallway == "take"){
            
        }
        else(alert("I don't know what "+hallway+" is."))
        Hallway();
    }
}