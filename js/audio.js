muted = true;
function toggleSound(){
	if (muted) {
		muted = false;
		document.getElementById('sb').classList.remove('mute');
    	document.getElementById("Audio").play()
	}else{
		muted = true;
		document.getElementById('sb').classList.add('mute');
		document.getElementById("Audio").pause()
	}
}