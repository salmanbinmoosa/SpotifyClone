// //footer js
const footer = document.getElementById("footer")
const xmark = document.getElementById("xmark")
const podcast = document.getElementsByClassName("podcast")[0]

xmark.addEventListener("click" , function() {
    footer.style.display = "none"
    podcast.style.marginBottom = 320 + "px"
})

// play button or pouse btn //

const circle = document.getElementsByClassName("circle")[0]
const pause = document.getElementsByClassName("pause")[0]
const play = document.getElementsByClassName("play")[0]
const pausetwo = document.getElementsByClassName("pause2")[0]
const playtwo = document.getElementsByClassName("play2")[0]

// song //
const Alone = new Audio ("Alan Walker _ Ava Max - Alone_ Pt. II(MP3_160K).mp3")

const playContainer = document.getElementsByClassName("play-container")[0]

circle.addEventListener("click" , function() {
    if( pause.style.display !== "none" ){
        pause.style.display = "none"
        pausetwo.style.display = "none"
        play.style.display = "block"
        playtwo.style.display = "block"
        circle.style.display = "flex"
        playContainer.style.display = "flex"
        footer.style.display = "none"
        Alone.play()   
    } else{
        pause.style.display = "block"
        play.style.display = "none"   
        playtwo.style.display = "none"   
        pausetwo.style.display = "block"

        Alone.pause()
    }
})



// responsive designs // 

var viewportWidth = window.innerWidth;

var breakpoint = 768;



// //

const home = document.getElementById("home")
const search = document.getElementById("search")

const right = document.getElementsByClassName("right")[0]
const left = document.getElementsByClassName("left")[0]

home.addEventListener("click", function(){
    right.style.display = "block"
    left.style.display = "none"
})
