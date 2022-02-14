function init() {
    const start = "2022-02-24 17:30:00"

    function countdown () {
        const startDate = new Date(start);
        const currentDate = new Date();
        let diff = startDate - currentDate
        let inToSeconds = diff / 1000;
        let days = Math.floor(inToSeconds /3600/ 24);
        let hours = Math.floor(inToSeconds /3600) % 24;
        let minites = Math.floor(inToSeconds / 60) % 60;
        let seconds = Math.floor(inToSeconds) % 60;

        console.log(days, hours, minites, seconds);
    }
    countdown();
    setInterval(countdown, 1000);
    
}

window.addEventListener("load", init)