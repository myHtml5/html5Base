/**
 * Created by wqs on 2016/3/10.
 */

var displayStatus;
displayStatus = document.getElementById("status");

var src = "1.mp3";

createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload",playSound);
createjs.Sound.registerSounds(src);

function playSound(event){
    console.log(event.src);
    soundInstance = createjs.Sound.play(event.src);
    displayStatus.innerHTML = "Playing source:"+event.src;
}
