let sounds = {
    A:"sounds/A4.wav",
    S:"sounds/As4.wav",
    D:"sounds/B4.wav",
    F:"sounds/C4.wav",
    G:"sounds/C5.wav",
    H:"sounds/Cs4.wav",
    J:"sounds/Cs5.wav",
    K:"sounds/D4.wav",
    L:"sounds/D5.wav",
    Z:"sounds/Ds4.wav",
    X:"sounds/Ds5.wav",
    C:"sounds/E4.wav",
    V:"sounds/F4.wav",
    B:"sounds/Fs4.wav",
    N:"sounds/G4.wav",
    M:"sounds/F4.wav",
}

let btn = document.querySelectorAll(".key")

let audio = {};

for (let key in sounds) {
    audio[key] = new Audio(sounds[key]);
}

btn.forEach(function(val) {

    val.addEventListener("click", function() {

        let key = val.innerText;

        audio[key].currentTime = 0;
        audio[key].play();

    });

});

document.addEventListener("keydown", function(event) {

    let key = event.key.toUpperCase();

    let button = [...btn].find(function(val) {
        return val.innerText === key;
    });


    if (audio[key]) {
        audio[key].currentTime = 0;
        audio[key].play();
    }


        if (button) {
        button.classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {

    let key = event.key.toUpperCase();

    let button = [...btn].find(function(val) {
        return val.innerText === key;
    });

    if (button) {
        button.classList.remove("active");
    }

});