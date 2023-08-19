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

// song //
const Alone = new Audio ("Alan Walker _ Ava Max - Alone_ Pt. II(MP3_160K).mp3")



circle.addEventListener("click" , function() {
    if( pause.style.display !== "none" ){
        pause.style.display = "none"
        play.style.display = "block"
        Alone.play()   
    } else{
        pause.style.display = "block"
        play.style.display = "none"   
        Alone.pause()
    }
})
