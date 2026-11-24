function showFact() {
    document.getElementById("fact").textContent = "I am a big Formula 1 fan!";
}

function changeColour() {
    document.body.style.backgroundColor = "lightblue";
}

function sayNoBadWord() {
    let name = document.getElementById("name").value.trim();
    
    if (name === "") {
        document.getElementById("Text").textContent = "Please enter your name first!";
    } else {
        document.getElementById("Text").textContent = "Hello " + name + "! No bad words!";
    }
}

let clicks = 0;

function countClick() {
    clicks++;
    document.getElementById("counter").textContent = clicks;
}
