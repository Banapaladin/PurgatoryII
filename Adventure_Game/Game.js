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
  
    alert("Welcome to the land of the Fey");
    
    var PC = prompt("What is your name, miscreant?");
    
    var LastWords = prompt("What a name. huh. you know, I really don't care. Your friend is dead. You will be soon. Any last words, "+ PC+"?");
    alert("I really don't care, to be honest. Time to end this once and for all!");
    alert("The figure before you suddenly flashes with bright light and there is an explosion. You hear a scream, most likely your own.");
    
    Temple();
    
    function Temple(){
        var temple = prompt("You wake up against a column in a building entirely made out of white marble. You are battered and bruised, and you cannot seem to remember why you are here. Where is this? Who are you? Questions that you may never remember the answer to. One thing is for sure, the Elf next to you probably shouldn’t have a sword in his face.").toLowerCase();
        
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
            var templeInspect = prompt("Inspect what?");
            
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
            var templeTake = prompt("What do you want to take?");
        
            if(templeTake == "sword"){
                alert("The elegant blade pulls cleanly from the Elf’s skull. No blood is left on the blade. You relize that there is a scabbard at your side that fits this blade perfectly. What kind of person were you? You put the sword in the scabbard.");
            }
            else if(templeTake == "shortsword" || templeTake == "shortswords"){
                alert("You take both of the shorswords next to the Elf. They don't fit in your scabbard at all, so you strap them into your belt.");
            }
            else if(templeTake == "armor" || templeTake == "leather armor"){
                alert("Your chainmail is already better than this decimated armor, and it would take too long to get off him. you really need to figure out... something.");
            }
            else(alert("I don't think you can take that... nice try though."));
            Temple();
        }
        
        else if(temple == "cheat" || temple == "win"){
            alert("You think you're smart, don't you?")
        }
        
        else if(temple == ""){
            
        }
    
        else(alert("I don't know what -"+temple+"- is!"));
        Temple();
    }
}