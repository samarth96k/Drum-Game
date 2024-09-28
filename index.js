for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        make_sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
} 

document.addEventListener("keydown",function(event){
    var keydown_key=event["key"];
    make_sound(keydown_key);
    buttonAnimation(keydown_key);

})

function make_sound(key){
    switch (key) {
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;    
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break; 
        case "k":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;     
        case "l":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;           
    default:
        console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
    
}