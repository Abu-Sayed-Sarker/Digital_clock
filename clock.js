function currentTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var am_pm = document.getElementById("am_pm");

    if(hrs >= 12){
        am_pm.innerHTML = "PM";
    } 
    else{
        am_pm.innerHTML = "AM";
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    
    if(sec < 12){
        sec = "0" + sec;
    }
    if(min < 12){
        min = "0" + min;
    }
    if(hrs < 12){
        hrs = "0" + hrs;
    }


    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}
setInterval(currentTime, 1000);