setInterval(() => {
    let temp = new Date();
    let date = temp.toLocaleDateString();
    let hours = temp.getHours();
    let minutes = temp.getMinutes();
    let seconds = temp.getSeconds();
    
    // Adding leading zeros if seconds is less than 10
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    let time = hours + ":" + minutes + ":" + seconds;
    let a = document.getElementById("time");
    a.innerHTML = time + " IST";
    let b = document.getElementById("date");
    b.innerHTML = date;
}, 1000);
