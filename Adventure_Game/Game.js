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
        
        if(temple == "look around" || temple == "look"){
            var TempleLook = prompt("descriptive text, yaaaaay");
        }
        
        else if(temple == "sleep"){
                alert("you let unconciousness close back around you.");
            var resume = confirm("Do you wish to continue?");
            if(resume){
                Temple();
            }
            else if(quit){
                alert("game over!");
            }
                }
        else("I don't know what "+temple+" is!");
        Temple();
    }
}