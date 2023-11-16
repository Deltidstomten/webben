let button = document.getElementById("button");
let musicPlayer = document.getElementById("musicPlayer");
let isParty = false;

function partyMode(){
    if (isParty){
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else {
        document.body.style.backgroundColor = "#8f8073";
    };
};

function partyModeToggle() {
    if(isParty){
        isParty = false
        button.innerHTML = "Off"
        musicPlayer.pause()
    } else {
        isParty = true
        button.innerHTML = "On"
        musicPlayer.play()
    };
};


var intervalParty = window.setInterval(function(){
    partyMode()
  }, 500);