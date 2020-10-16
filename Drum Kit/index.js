
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var button = this.innerHTML;
        makeSound(button);
    });
}

document.addEventListener("keydown",function(event){
    // event.preventDefault();
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        
        case "a":
            var kick = new Audio('sounds/aud1.wav');
            kick.play();
            kick.currentTime = 0;
            break;
        case "s" : 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            tom1.currentTime = 0;
            break;
        case "d" : 
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "f" : 
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "j" : 
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "k" : 
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l" : 
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }
}





