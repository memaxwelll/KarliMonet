sndv=0;var Reloaded=0;var Monet=0;time=4000
timer=setInterval(reloadGifs, time)
chTimer()

if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js')} //PWA setup

function githubPage(){window.location.href="https://github.com/ThaBluNate/ClassicMonet"}

function snd(){ //This runs if you click the sound button
    if(sndv==0){
        document.getElementById('sound').style.backgroundImage="url('./assets/sound.png')"
        document.getElementById("Audio").play()
        sndv=1
    }else{
        document.getElementById('sound').style.backgroundImage="url('./assets/mute.png')"
        document.getElementById("Audio").pause()
        sndv=0
    }
}
function settings(oc){if(oc=='open'){document.getElementById('setpanel').className=""}else{document.getElementById('setpanel').className="invis"}}
document.getElementById('slide').oninput=function(){reloadGifs(this.value)}
function chTimer(){
    time=document.getElementById('text').value
    document.getElementById('MS').innerHTML=time+" MS"
    sec=Math.round(time/1000)
    document.getElementById('Sec').innerHTML=sec+" Sec"
    reTimer()
}
function reTimer(){
    reloadGifs()
    clearInterval(timer);
    timer=setInterval(reloadGifs, time);
}
function reloadGifs(gifset){
    if(gifset==1){window.Monet=1} //Cachemonet gifs only
    if(gifset==2){window.Monet=0;window.Reloaded=1} //Cachemonet+CMReloaded
    if(gifset==3){window.Monet=0;window.Reloaded=0} //CacheMonet+CMReloaded+ClassicMonet
    if(window.Monet==1){
        document.getElementById('GIFs').innerHTML="CacheMonet"
        rand1=Math.floor(Math.random()*53)+1
        rand2=Math.floor(Math.random()*38)+1
    }else{
        if(window.Reloaded==1){
            document.getElementById('GIFs').innerHTML="CM-Reloaded"
            rand1=Math.floor(Math.random()*85)+1
            rand2=Math.floor(Math.random()*58)+1
        }else{
        document.getElementById('GIFs').innerHTML="ClassicMonet"
        rand1=Math.floor(Math.random()*105)+1
        rand2=Math.floor(Math.random()*95)+1
        }
    }
    document.getElementById('center').src="./assets/FG/"+rand1+".gif"
    document.body.style.backgroundImage="url(./assets/BG/"+rand2+".gif)"
}