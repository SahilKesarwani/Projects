let dateAndTime;
let time;
let date;
let dateForSmallScreen;
let dateForLargeScreen = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function screenWidth(dateForSmallScreen) {
    setInterval(() => {
        dateAndTime = new Date();
        if(dateForSmallScreen.matches) {
            date = dateAndTime.toLocaleDateString('en-GB');
            if(dateAndTime.getMinutes() <= 9) {
                if(dateAndTime.getSeconds() <= 9) {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }else {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }
            }else {
                if(dateAndTime.getSeconds() <= 9) {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }else {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }
            }
        }else {
            date = dateAndTime.toLocaleDateString(undefined, dateForLargeScreen);
            if(dateAndTime.getMinutes() <= 9) {
                if(dateAndTime.getSeconds() <= 9) {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }else {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':0' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }
            }else {
                if(dateAndTime.getSeconds() <= 9) {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':0' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }else {
                    if(dateAndTime.getHours() == 12) {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() > 12) {
                        time = (dateAndTime.getHours() - 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;PM';
                    }else if(dateAndTime.getHours() == 0) {
                        time = (dateAndTime.getHours() + 12) + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }else {
                        time = dateAndTime.getHours() + ':' + dateAndTime.getMinutes() + ':' + dateAndTime.getSeconds(); 
                        document.getElementById('time').innerHTML = time + '&nbsp;AM';
                    }
                }
            }
        }
        document.getElementById('date').innerHTML = 'on ' + date;
    }, 1000);
}

dateForSmallScreen = window.matchMedia("(max-width: 491px)");
screenWidth(dateForSmallScreen);
dateForSmallScreen.addListener(screenWidth);