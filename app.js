const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');

setInterval(updateClock, 1000)

function updateClock(){
    const date =  new Date();
    const second = date.getSeconds() / 60;
    const minute = (date.getMinutes() + second) / 60;
    const hour = (date.getHours() + minute) / 12;
    secondHand.style.transform = "rotate(" + (second * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + (minute * 360) + "deg)";
    hourHand.style.transform = "rotate(" + (hour * 360) + "deg)";
}
updateClock();