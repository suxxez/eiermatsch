window.myOwnNS = {};
myOwnNS.running = false;

function startTimer() {
    let minValue = parseInt(document.querySelector('#min').value);
    let maxValue = parseInt(document.querySelector('#max').value);
    let counter = 1;
    let randomNumber = getRndInteger(minValue, maxValue);
    
    if (isNaN(randomNumber)) {
        document.getElementById("errorMessage").innerHTML = "Please enter both minimum and maximum values.";
    } else {
        if(myOwnNS.running == false)
        {
        document.getElementById("errorMessage").innerHTML = "Ready...";
        let interval = setInterval(function () {
            myOwnNS.running = true;
            if (counter === randomNumber) {
                clearInterval(interval);
                document.getElementById("egg-audio").play();
                let cleanup = setTimeout(function () { document.getElementById("Timer").innerHTML = ""; },
                    2000);
                    myOwnNS.running = false;
            } else {
                document.getElementById("errorMessage").innerHTML = "";
                document.getElementById("Timer").innerHTML = counter;
                counter++;
            }

        }, 1000);
    }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}