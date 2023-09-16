// script.js
function setClock() {
    const clock = document.querySelector(".clock");
    const numbers = document.querySelectorAll(".number");
    const centerDot = document.querySelector(".center-dot");

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds() / 60;
        const minutes = (seconds + now.getMinutes()) / 60;
        const hours = (minutes + now.getHours()) / 12;

        rotateClockHand(document.querySelector("#sec-hand"), seconds);
        rotateClockHand(document.querySelector("#minute-hand"), minutes);
        rotateClockHand(document.querySelector("#hour-hand"), hours);
    }

    function rotateClockHand(element, rotation) {
        element.style.setProperty("--rotate", rotation * 360);
    }

    // Update the clock immediately
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
}

setClock();
