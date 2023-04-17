// song list 
let songs = [
    {
        name: "300",
        singer: "BINTU PABRA",
    },
    {
        name: "ACE",
        singer: "MIKKI MALANG",
    },
    {
        name: "BADNAM",
        singer: "MANKRIT AULAKH",
    },
    {
        name: "BROTHERHOOD",
        singer: "AULAKH",
    },
    {
        name: "CARELESS",
        singer: "MANI SEKHON",
    },
    {
        name: "DEVIL",
        singer: "SIDHU MOOSEWALA",
    },
    {
        name: "RAM RAM",
        singer: "MC - SQUARE",
    },
    {
        name: "ROOTS",
        singer: "KP KUNDU",
    },
    {
        name: "DAMRU ALA",
        singer: "Billa Sonipat Ala",
    },
    {
        name: "LEHANGA",
        singer: " Jass Manak",
    },
    {
        name: "MERA DIL YE",
        singer: "Lata ji",
    },
    {
        name: "JUTTI",
        singer: "Satbir Aujla",
    },
    {
        name: "THAND RAKH",
        singer: "Himmat Sandhu",
    },
    {
        name: "SPLENDOR",
        singer: " Satbir Aujla",
    },
    {
        name: "TODH",
        singer: "Prince Narula",
    },
    {
        name: "BAMB AAGYA",
        singer: "Jasmine Sandlas",
    },
    {
        name: "PINJRAA",
        singer: " Gurnazar",
    },
    {
        name: "MAAN MERI JAAN",
        singer: "King",
    },
    {
        name: "PATA NAHI",
        singer: "Narci",
    },
    {
        name: "MANIKE",
        singer: "yohani",
    },
    {
        name: "MEHABOOBA",
        singer: "Ananya Bhatt",
    },
    {
        name: "MAIN CHAND SITARE",
        singer: "Ammy virk",
    },
    {
        name: "RAATAAN LAMBIYAN",
        singer: "Jubin Nautiyal",
    },
    {
        name: "HAR HAR SHAMBHU",
        singer: "Jeetu Sharma",
    },
    {
        name: "PARIS KA TRIP",
        singer: "Yo Yo Honey Singh",
    },
    {
        name: "ITNI SHAKTI HAME",
        singer: "Bachee",
    },
    {
        name: "SUBAH SAVERE",
        singer: "Bachee",
    },
    {
        name: "BHAKTI SONGS",
        singer: "JUBIN NAUTIYAL",
    },
]

const music = document.querySelector("audio")
const playbtn = document.getElementById("playpause");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const tittle = document.getElementById("tittle");
const singer = document.getElementById("singer");
const playimg = document.getElementById("playimg");
const next = document.getElementById("next");
const back = document.getElementById("back");
const slider = document.getElementById("slider");
const itemimg = document.getElementById("itemimg");
const itemtittle = document.getElementById("itemtittle");
const itemsinger = document.getElementById("itemsinger");

// function to play music 
const playmusic = () => {
    music.play()
    playing = true;
    play.style.display = "none";
    pause.style.display = "block";
    document.getElementById("playimg").style.boxShadow = "0px 0px 20px 0px";
    document.getElementById("playimg").style.transform = "scale(1.02)"
    document.getElementById("tittle").style.marginTop = "10px"
    document.getElementById("tittle").style.fontSize = "2.5rem"
    document.getElementById("tittle").style.fontWeight = "800";

}
// function to pause music 
const pausemusic = () => {
    music.pause()
    playing = false;
    pause.style.display = "none";
    play.style.display = "block";
    document.getElementById("playimg").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("playimg").style.transform = "scale(1)"
    document.getElementById("tittle").style.marginTop = "0px"
    document.getElementById("tittle").style.fontSize = "2rem"
}

// function to check when to play when to pause 
playing = false;
const playpause = () => {
    if (playing) {
        pausemusic()
        playing = false;
        document.getElementById("gif").style.opacity = "0";
    }
    else {
        playmusic()
        playing = true;
        document.getElementById("gif").style.opacity = "1";
    }
}

const itemplay = () => {
    playing = false;
    playpause()

}

playbtn.addEventListener("click", () => {
    playpause()
});

const loadsong = (songs) => {
    tittle.textContent = songs.name;
    music.src = `../music/${songs.name}.mp3`;
    playimg.src = `../images/${songs.name}.jpg`;
}
var str = " "
i = 0
for (const element of songs) {
    a = element["name"];
    s = element["singer"];
    content = `<div class="details" id="${element["name"]}">
    <img id="${element["name"]}" class="songdetails itemimg" src="../images/${a}.jpg" alt="">
    <h2 id="${element["name"]}" class="songdetails itemtittle">${a}</h2> 
    <h4 id="${element["name"]}" class="songdetails itemsinger">${s}</h4> 
    <audio src="../music/${a}.mp3"></audio>
    </div>`;
    var str = str + content
    i++
};
songitem.innerHTML = str

songindex = 0
// previous and next 
const nextsong = () => {
    playing = false;
    if (songindex == ((songs.length) - 1)) {
        songindex = 0;
        loadsong(songs[songindex]);
        playpause()
    }
    else {
        songindex++
        loadsong(songs[songindex]);
        playpause()
    }

}
const prevsong = () => {
    playing = false;
    if (songindex == 0) {
        songindex = ((songs.length) - 1);
        loadsong(songs[songindex])
        playpause()
    }
    else {
        songindex--
        loadsong(songs[songindex])
        playpause()
    }

}

next.addEventListener('click', nextsong);
back.addEventListener('click', prevsong);
progress = 0
music.addEventListener("timeupdate", () => {
    progress = parseInt((music.currentTime / music.duration) * 100)
    if (progress==100){
        nextsong()
    }
    slider.value = progress;
})

slider.addEventListener("change", () => {
    music.currentTime = slider.value * music.duration / 100;
})

details = document.getElementsByClassName("details")
Array.from(details).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = (e.target.id)
        music.src = `../music/${index}.mp3`
        playimg.src = `../images/${index}.jpg`
        tittle.innerHTML=index;
        playing = false;
        playpause()
        songs.forEach(element => {
            if (element["name"] == index) {
                newindex = songs.indexOf(element);
                songindex = newindex;
            };
        });
    });
});



function search() {
    let input = document.getElementById("searchbar").value.toUpperCase();
    Array.from(details).forEach(element => {
        if (element.id.includes(input)) {
            element.style.display = "flex"
        }
        else if (input == "") {
            element.style.display = "flex"

        }
        else {
            element.style.display = "none"
        }

    });
};

document.addEventListener('keyup', (e)=>{
    inp=e.key
    if (inp==" "){
        playpause()
    }
})

document.addEventListener('keyup', (e)=>{
    inp=e.key
    if (inp=="MediaPlayPause"){
        playpause()
        
    }
})

document.addEventListener('keyup', (e)=>{
    inp=e.key
    if (inp=="MediaTrackPrevious"){
        prevsong()
    }
})

document.addEventListener('keyup', (e)=>{
    inp=e.key
    console.log(inp);
    if (inp=="MediaTrackNext"){
        nextsong()
    }
})
