sndv=0;Reloaded=0;Monet=0;reloadGifs();setInterval(reloadGifs, 4000);

//PWA
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js')}

function snd(){
    if(sndv==0){
        console.debug('[SND] Playing!')
        document.getElementById('sound').style.backgroundImage="url('./assets/sound.png')"
        document.getElementById("Audio").play()
        sndv=1
    }else{
        console.debug('[SND] Pausing!')
        document.getElementById('sound').style.backgroundImage="url('./assets/mute.png')"
        document.getElementById("Audio").pause()
        sndv=0
    }
}
function reloadGifs(){
    console.debug('[GIF] Reloading!')
    if(Monet==1){
        if(Reloaded==1){
            rand1=Math.floor(Math.random()*85)+1
            rand2=Math.floor(Math.random()*58)+1
        }else{
            rand1=Math.floor(Math.random()*53)+1
            rand2=Math.floor(Math.random()*38)+1
        }
    }else{
        rand1=Math.floor(Math.random()*105)+1
        rand2=Math.floor(Math.random()*95)+1
    }
    console.debug('[GIF] Random FG = '+rand1)
    console.debug('[GIF] Random BG = '+rand2)
    document.getElementById('center').src="./assets/FG/"+rand1+".gif"
    document.body.style.backgroundImage="url(./assets/BG/"+rand2+".gif)"
}