var x = document.getElementById("Audio"); 
muted = true;
function toggleSound(){
  if (muted) {
    muted = false;
    x.play(); 
  } else {
    muted = true;
    x.pause(); 
  }
}