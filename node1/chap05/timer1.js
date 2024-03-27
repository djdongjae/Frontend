let count = 0;
let intervalId;

function printTime() {
    count++;
    console.log("1초 간격", new Date(), count);
    if (count >= 10) {
        clearInterval(intervalId);
    }
}

function startTimer() {
    intervalId = setInterval(printTime, 1000);
}

startTimer();