var start = 1;
var intervalTimer;
var running = false;

function display() {
    if (!running) {
        intervalTimer = setInterval(() => {
            countUp()
        }, 100);
        running = true;
    }
}

function countUp() {
    if (start == 100) {
        clearInterval(intervalTimer);
        document.getElementById("gameDesc").innerHTML = "We made it to 100!";
        start = 0;
        running = false;
        return;
    }
    document.getElementById("gameDesc").innerHTML = start;
    start++;
    console.log("Number:", start);

}
  