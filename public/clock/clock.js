function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
        console.log(Date.now());
        console.log(start);
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

firstNum = .10;
secondNum = .25;

function timeHer() {
    var fortyFive = 60 * firstNum,
        display = document.querySelector('#time');
    startTimer(fortyFive, display);
};
