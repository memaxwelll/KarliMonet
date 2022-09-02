sndv=0;var Reloaded=0;var Monet=0;time=4000
document.getElementById('slide').value=cookget('gif')
document.getElementById('text').value=cookget('time')
time=cookget('time')
timer=setInterval(reloadGifs, time)
chTimer(cookget('gif'))

if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js')} //PWA setup

function githubPage(){window.location.href="https://github.com/ThaBluNate/ClassicMonet"}
function reqPage(){window.location.href="https://github.com/ThaBluNate/ClassicMonet/issues/new"}

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

// Settings
function settings(oc){if(oc=='open'){document.getElementById('setpanel').className=""}else{document.getElementById('setpanel').className="invis"}}
document.getElementById('slide').oninput=function(){reloadGifs(this.value)}

// settings buttons
function md(v){if(v==1){document.getElementById('del').src='./assets/pdel.png'}else{document.getElementById('sav').src='./assets/psave.png'}}
function mu(v){if(v==1){document.getElementById('del').src='./assets/del.png'}else{document.getElementById('sav').src='./assets/save.png'}}

function chTimer(v){
    time=document.getElementById('text').value
    document.getElementById('MS').innerHTML=time+" MS"
    sec=Math.round(time/1000)
    document.getElementById('Sec').innerHTML=sec+" Sec"
    reTimer(v)
}
function reTimer(v){
    reloadGifs(v)
    clearInterval(timer);
    timer=setInterval(reloadGifs, time);
}

function reloadGifs(gifset){
    switch(gifset){
        case '1': window.Monet=1;break //Cachemonet gifs only
        case '2': window.Monet=0;window.Reloaded=1;break //Cachemonet+CMReloaded
        case '3': window.Monet=0;window.Reloaded=0 //CacheMonet+CMReloaded+ClassicMonet
        default:
    }
    if(window.Monet==1){
        document.getElementById('GIFs').innerHTML="CacheMonet"
        rand1=Math.floor(Math.random()*53)+1
        rand2=Math.floor(Math.random()*38)+1
    }else if(window.Reloaded==1){
        document.getElementById('GIFs').innerHTML="CM-Reloaded"
        rand1=Math.floor(Math.random()*85)+1
        rand2=Math.floor(Math.random()*59)+1
    }else{
        document.getElementById('GIFs').innerHTML="ClassicMonet"
        rand1=Math.floor(Math.random()*105)+1
        rand2=Math.floor(Math.random()*96)+1
    }
    document.getElementById('center').src="./assets/FG/"+rand1+".gif"
    document.body.style.backgroundImage="url(./assets/BG/"+rand2+".gif)"
}