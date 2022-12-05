function time() {
    var now = new Date();
    
    var hours = now.getHours()
    var amORpm;

    if(hours < 7 || hours >= 21) {
        document.body.style = 'background: #000000;filter: brightness(50%);';
        
    }

    if(hours < 12) {
        amORpm = '&nbsp;&nbsp;am'
    }
    else {
        amORpm = '&nbsp;&nbsp;pm'
    }

    if(hours > 12) {
        hours -= 12;
    }
    else if(hours == 0) {
        hours = 12;
    }

    var minutes = now.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    var seconds = now.getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    

    var time =  hours + ':' + minutes + ':' + seconds;
    document.getElementById("time").innerHTML = time;
    document.getElementById("amORpm").innerHTML = amORpm;
}

setInterval(time, 1000);


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var refresh = function() {
    ctx.clearRect(0, 0, 1000, 1000);

    for(let i = 0; i < 25; i++) {
        var x = Math.floor(Math.random()*2000);
        var y = Math.floor(Math.random()*1000);
        var radius = Math.floor(Math.random()*20);
        
        ctx.beginPath();
        ctx.arc(x,y,radius,Math.PI*2,0,false);
        ctx.fillStyle = "rgba(" + 232 + "," + 252 + "," + 236 + ",1)";
        ctx.fill();
        ctx.closePath();
    }
}

refresh();