let formResults = new URLSearchParams(window.location.search);
let zone = formResults.get("timeZone");
let display = formResults.get("1224");
let dst = formResults.has("dst");
let d = new Date();
let hour = d.getUTCHours();
let min = d.getUTCMinutes();
let sec = d.getUTCSeconds();
switch (zone)
{
    case "PT":
        hour = (hour-8+24)%24;
        break;
    case "MT":
        hour = (hour-7+24)%24;
        break;
    case "CT":
        hour = (hour-6+24)%24;
        break;
    case "ET":
        hour = (hour-5+24)%24;
        break;
}
if (display == "12") hour = hour%12;
if (dst) hour++;
let clock = document.getElementById("clockID");

function convert(n) 
{
    n = String(n)
    if (n.length == 1)
      n = '0' + n
    return n
}

let time = convert(hour) + ":" + convert(min) + ":" + convert(sec);
clock.innerHTML = time;

let displayNumber = parseInt(formResults.get("1224"));
function incrementSecond()
{
    let d = new Date();
    if (sec != d.getUTCSeconds()) sec++;
    min += Math.floor(sec/60);
    hour += Math.floor(min/60);
    sec = sec%60;
    min = min%60;
    hour = hour%displayNumber;
    if (displayNumber == 12 && hour == 0) hour = 12;
    time = convert(hour) + ":" + convert(min) + ":" + convert(sec);
    clock.innerHTML = time;
}
let loop = setInterval(incrementSecond, 100);
