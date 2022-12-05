function time() {
    var now = new Date();
    
    var hours = now.getHours()
    var amORpm;
    if(hours < 12) {
        amORpm = '&nbsp;&nbsp;am'
    }
    else {
        amORpm = '&nbsp;&nbsp;pm'
    }

    var minutes = now.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    var seconds = now.getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    

    var time =  (hours-12) + ':' + minutes + ':' + seconds;
    document.getElementById("time").innerHTML = time;
    document.getElementById("amORpm").innerHTML = amORpm;
}

setInterval(time, 1000);


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var refresh = function() {
    ctx.clearRect(0, 0, 1000, 1000);

    for(let i = 0; i < 100; i++) {
        var x = Math.floor(Math.random()*1900);
        var y = Math.floor(Math.random()*900);
        var radius = Math.floor(Math.random()*20);
        
        ctx.beginPath();
        ctx.arc(x,y,radius,Math.PI*2,0,false);
        ctx.fillStyle = "rgba(" + 232 + "," + 252 + "," + 236 + ",1)";
        ctx.fill();
        ctx.closePath();
    }
}

refresh();