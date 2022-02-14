function init() {
    const start = "2022-02-24 17:30:00";
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function countdown () {
        const startDate = new Date(start);
        const currentDate = new Date();
        let diff = startDate - currentDate
        
        let inToSeconds = diff / 1000;

        let days = Math.floor(inToSeconds /3600/ 24);
        let hours = Math.floor(inToSeconds /3600) % 24;
        let minutes = Math.floor(inToSeconds / 60) % 60;
        let seconds = Math.floor(inToSeconds) % 60;

        daysElement.innerHTML = days;
        hoursElement.innerHTML = format(hours);
        minutesElement.innerHTML = format(minutes);
        secondsElement.innerHTML = format(seconds);
    }
    function format(time){
        if(time < 10){
            return `0${time}`
        } else{ 
            return time
        }

    }
    setInterval(countdown, 1000);
    
}

window.addEventListener("load", init)