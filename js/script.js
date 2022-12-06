function time() {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString("en-NZ", {timeZone: "America/Denver"})
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