function time() {
    var hrs = new Date().getHours();

    if(hrs < 7 || hrs >= 21) {
        document.body.style = 'background: #000000;filter: brightness(50%);';
    }

    document.getElementById("time").innerHTML = new Date().toLocaleTimeString("en-NZ", {timeZone: "America/Denver"});
}

setInterval(time, 1000);



function refresh() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    window.addEventListener('resize', resizeCanvas, false);
        
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
                    
        drawStuff(); 
    }
  
    resizeCanvas();
        
    function drawStuff() {
        context.clearRect(0, 0, 1000, 1000);

        for(let i = 0; i < 25; i++) {
            var x = Math.floor(Math.random() * 2000);
            var y = Math.floor(Math.random() * 1000);
            var radius = Math.floor(Math.random() * 20);
            
            context.beginPath();
            context.arc(x, y, radius, Math.PI * 2, 0, false);
            context.fillStyle = "rgba(" + 232 + "," + 252 + "," + 236 + ", 1)";
            context.fill();
            context.closePath();
        }
    }
}

refresh();
