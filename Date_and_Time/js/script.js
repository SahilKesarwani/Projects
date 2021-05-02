let dateAndTime;
let time;
let date;
setInterval(() => {
    dateAndTime = new Date();
    if(dateAndTime.getMinutes() <= 9) {
        if(dateAndTime.getSeconds() <= 9) {
            if(dateAndTime.getHours() == 12) {
                time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() > 12) {
                time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() == 0) {
                time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else {
                time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }
        }else {
            if(dateAndTime.getHours() == 12) {
                time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() > 12) {
                time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() == 0) {
                time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else {
                time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }
        }
    }else {
        if(dateAndTime.getSeconds() <= 9) {
            if(dateAndTime.getHours() == 12) {
                time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() > 12) {
                time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() == 0) {
                time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else {
                time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }
        }else {
            if(dateAndTime.getHours() == 12) {
                time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() > 12) {
                time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;PM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else if(dateAndTime.getHours() == 0) {
                time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }else {
                time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                date = dateAndTime.toLocaleDateString();
                document.getElementById('time').innerHTML = time + '&nbsp;AM';
                document.getElementById('date').innerHTML = 'on ' + date;
            }
        }
    }
}, 1000);