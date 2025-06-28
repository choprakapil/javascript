let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

window.onload = function(){
    function currentTime(){
        let time = new Date();

        hours = String(time.getHours()).padStart(2, "0");
        minutes = String(time.getMinutes()).padStart(2, "0");
        seconds = String(time.getSeconds()).padStart(2, "0");

        hr.innerHTML = hours;
        min.innerHTML = minutes;
        sec.innerHTML = seconds; 

        
        console.log(hours, minutes, seconds);

        setTimeout(currentTime, 1000);
    }
    currentTime()
};