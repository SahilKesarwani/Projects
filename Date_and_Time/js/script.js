let dateAndTime;
let time;
let date;
setInterval(() => {
    dateAndTime = new Date();
    if(dateAndTime.getHours() == 12) {
        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
        date = dateAndTime.toLocaleDateString();
        document.getElementById('time').innerHTML = time + ' PM ' + ' on ' + date;
    }else if(dateAndTime.getHours() > 12) {
        time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
        date = dateAndTime.toLocaleDateString();
        document.getElementById('time').innerHTML = time + ' PM ' + ' on ' + date;
    }else if(dateAndTime.getHours() == 0) {
        time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
        date = dateAndTime.toLocaleDateString();
        document.getElementById('time').innerHTML = time + ' AM ' + ' on ' + date;
    }else {
        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
        date = dateAndTime.toLocaleDateString();
        document.getElementById('time').innerHTML = time + ' AM ' + ' on ' + date;
    }
}, 1000);