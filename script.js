let minuteHand = document.querySelector("#minutes")
let hourHand = document.querySelector("#hour")
let secondHand = document.querySelector("#seconds")

setInterval( function() {
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`)

    secondHand.style.transform=`rotate(${seconds * 6 + 180}deg)`;
    minuteHand.style.transform=`rotate(${minutes * 6 + 180}deg)`;
    hourHand.style.transform=`rotate(${hours * 15}deg)`;
}, 1000);
