var numberofDrumButtons= document.querySelectorAll(".drum").length;
for (var i = 0; i<numberofDrumButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
    case "w":
        var crash= new Audio("sounds/crash.mp3")
        crash.play(); 
        break;

            case "a":
                var kick= new Audio("sounds/kick-bass.mp3")
               kick.play();
                break;
                
                    case "s":
                        var snare= new Audio("sounds/snare.mp3")
                       snare.play();
                        break;
                        
                            case "d":
                                var tom= new Audio("sounds/tom-1.mp3")
                               tom.play();
                                break;
                                
                                    case "j":
                                        var tom= new Audio("sounds/tom-2.mp3")
                                       tom.play();
                                        break;
                                       
                                            case "k":
                                                var tom= new Audio("sounds/tom-3.mp3")
                                               tom.play();
                                                break;
                                                
                                                    case "l":
                                                        var tom= new Audio("sounds/tom-4.mp3")
                                                       tom.play();
                                                        break;
                                                
                                        
                        
                

        
            default: console.log();
        }

});
}







/*
   this.style.color="green";  
var audio= new Audio("sounds/crash.mp3")
    audio.play(); 
    
    */