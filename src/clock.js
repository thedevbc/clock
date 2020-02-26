function clock() {
    var clock = document.getElementById('clock');
    var time = new Date();
    var utcTime = time.toUTCString();
    var hours = time.getHours();
    var ampm = hours < 12 ? 'AM':'PM';
    // var hasLeadingZero = hours < 10;
    if (ampm === 'PM'|| hours == 0) {
        switch(hours){
            case 0:
                hours = 12;
                break;
            case 13:
                hours = 1;
                break;
            case 14:
                hours = 2;
                break;
            case 15:
                hours = 3;
                break;
            case 16:
                hours = 4;
                break;
            case 17:
                hours = 5;
                break;
            case 18:
                hours = 6;
                break;
            case 19:
                hours = 7;
                break;
            case 20:
                hours = 8;
                break;
            case 21:
                hours = 9;
                break;
            case 22:
                hours = 10;
                break;
            case 23:
                hours = 11;
                break;
        }
    }
    // clock.innerText = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' ' + ampm;
    clock.innerHTML = "<label>Loc: " + hours + time.toTimeString().substring(2,8) + ' ' + ampm + "</label><label>" + 'UTC: ' + utcTime.substring(utcTime.length - 12) + "</label>";
}

