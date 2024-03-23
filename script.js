let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById('display');

function startTimer() {
    timer = setInterval(updateDisplay, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById('start-btn').addEventListener('click', startTimer);

document.getElementById('stop-btn').addEventListener('click', stopTimer);

document.getElementById('reset-btn').addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = '00:00:00';
});

