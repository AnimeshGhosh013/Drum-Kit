
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);

});



function makesound(key)
{
  var str="sounds/";
  switch(key)
  {
    case "w":
              str=str+"crash.mp3";
              break;
    case "a":
              str=str+"kick-bass.mp3";
              break;
    case "s":
              str=str+"snare.mp3";
              break;
    case "d":
              str=str+"tom-1.mp3";
              break;
    case "j":
              str=str+"tom-2.mp3";
              break;
    case "k":
              str=str+"tom-3.mp3";
              break;
    case "l":
              str=str+"tom-4.mp3";
              break;

  }
  var audio=new Audio(str);
  audio.play();
}

function buttonAnimation(currentKey)
{
      var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
}
