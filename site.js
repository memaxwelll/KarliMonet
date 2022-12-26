if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js')} //PWA setup
sndv=0

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

function checkLocal(L,R){ //Check if localstorage has L, if not, set L to R
    if (localStorage.getItem(L)==null){
        localStorage.setItem(L,R)
    }
}

function settings(oc){ //Show and hide settings panel
    if(oc=='open'){
        document.getElementById('setpanel').className=""
    }else{
        document.getElementById('setpanel').className="invis"
    }
}

function save(){ //exexutes when you click the "save" button
    localStorage.setItem('gif',document.getElementById('slide').value)
    localStorage.setItem('time',document.getElementById('text').value)
    localStorage.setItem('img',document.getElementById('slide2').value)
}

function githubPage(){window.location.href="https://github.com/ThaBluNate/ClassicMonet"} //change page to github

function wipe(){localStorage.clear()} //exexutes when you click the "wipe" button, just clears all settings

function reTimer(v){ //reset the GIF timer and call reloadGifs() + gif()
    reloadGifs(v)
    gif()
    try{clearInterval(timer)}catch{}
    time=document.getElementById('text').value
    timer=setInterval(reloadGifs, time)
}

function gif(){ //set the center image type (Stretch, Original)
    if(document.getElementById('slide2').value==2){
        document.getElementById("center").style="width:100vw;height:76vh;object-fit:contain"
        document.getElementById("Cimg").innerHTML="Stretch"
    }else{
        document.getElementById("center").style=""
        document.getElementById("Cimg").innerHTML="Original"
    }
}

//check if settings are set in LocalStorage, if not, set them ()
checkLocal('gif','3')
checkLocal('time','4000')
checkLocal('img','2')

//Take settings from LocalStorage and apply them
document.getElementById('slide').value=localStorage.getItem('gif')
document.getElementById('text').value=localStorage.getItem('time')
document.getElementById('slide2').value=localStorage.getItem('img')

//Slider code
document.getElementById('slide').oninput=function(){reloadGifs(this.value)}
document.getElementById('text').oninput=function(){reTimer()}
document.getElementById('slide2').oninput=function(){gif()}

//Press "animation" on save/wipe buttons
document.getElementById('del').onmousedown=function(){document.getElementById('del').src="./assets/pdel.png"}
document.getElementById('del').onmouseup=function(){document.getElementById('del').src="./assets/del.png"}
document.getElementById('sav').onmousedown=function(){document.getElementById('sav').src="./assets/psave.png"}
document.getElementById('sav').onmouseup=function(){document.getElementById('sav').src="./assets/save.png"}

//Start the site
reTimer(localStorage.getItem('gif'))

//Displays the GIFs onscreen, If gifSet is defined, it will change how many gifs it uses
function reloadGifs(){
    switch(document.getElementById('slide').value){
        case '1':
            document.getElementById('GIFs').innerHTML="CacheMonet"
            rand1=Math.floor(Math.random()*53)+1
            rand2=Math.floor(Math.random()*38)+1
            break
        case '2':
            document.getElementById('GIFs').innerHTML="CM-Reloaded"
            rand1=Math.floor(Math.random()*85)+1
            rand2=Math.floor(Math.random()*59)+1
            break
        case '3':
            document.getElementById('GIFs').innerHTML="ClassicMonet"
            rand1=Math.floor(Math.random()*105)+1
            rand2=Math.floor(Math.random()*96)+1
    }
    document.getElementById('center').src="./assets/FG/"+rand1+".gif"
    document.body.style.backgroundImage="url(./assets/BG/"+rand2+".gif)"
}