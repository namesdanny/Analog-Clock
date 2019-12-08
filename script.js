const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hrPosition = (hours * 360 / 12) + (minutes * (360 / 60) / 12);
let miPosition = (minutes * 360 / 60) + (seconds * (360 / 60) / 60);
let secPosition = seconds * 360 / 60;

let interval = setInterval(running, 1000);

function running() {
    
    hrPosition = hrPosition + (3/360);
    miPosition = miPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + miPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}



