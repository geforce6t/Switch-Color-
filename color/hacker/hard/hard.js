
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ctx = canvas.getContext('2d');
var Ay = 0;
var Vy = 0;
var score = 0;
var start = false;
var end = false;
var y = canvas.height / 2;
var color = ['#F8333C', '#FCAB10', '#2B9EB3', '#DBD5B5'];
var huddle = [];
var x0;
var y0;
var screen = 900;
var post = 0;
var background = new Image();
background.src = "https://i.pinimg.com/originals/97/4d/b8/974db8b56e2e66273180a76dcaebfeca.jpg";
var test = true;
var loop = true;
var igloo;
var flag = false;
var clock;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ball = {
    x_coordinate: canvas.width / 2,
    y_coordinate: canvas.height * 5 / 6,
    r: 6,
    color: color[Math.floor(Math.random() * color.length)],
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var scroll = function(y) {
        return (y + screen);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.getArray = function(arrayName) {
        var thisArray = [];
        var fetchArrayObject = this.getItem(arrayName);
        if (typeof fetchArrayObject !== 'undefined') {
            if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
        }
        return thisArray;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.pushArrayItem = function(arrayName, arrayItem) {
    var existingArray = this.getArray(arrayName);
    existingArray.push(arrayItem);
    this.setItem(arrayName, JSON.stringify(existingArray));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fegu() {

    for (x = post; x < 5; x++) {
        if (x% 2 == 0){
            clock = 1;
        }else{
            clock = 0;
        }

        huddle.push(new circles(canvas.width / 2, y - 950 - x * 400, 0, 0.06 + x * 0.005 , true, true, clock));
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function run() {

    if (start == true) {
        window.requestAnimationFrame(run);
    }
    if (loop == true) {
        ctx.drawImage(background, 0, 0);
        createhuddle_();
        jump();
        let bangoo = localStorage.getArray('hardonama');
        bangoo.sort(function(a, b) { return Math.floor(a - b) });
        if (bangoo.length == 0) {
            bangoo.push(0);
            bangoo.push(0);
        }
        let assa = bangoo.slice(bangoo.length - 2, bangoo.length - 1);
        if (score > assa[assa.length - 1]) {
            igloo = score;
        } else {
            igloo = assa[assa.length - 1];
        }

        assa[assa.length - 1]
        ctx.font = "30px arial";
        ctx.fillStyle = "white";
        ctx.fillText(score, 30, 60);
        ctx.fillText('High Score: ' + igloo, 550, 60);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0);
        localStorage.pushArrayItem('hardonama', score);
        let isdesh = localStorage.getArray('hardonama');
        isdesh.sort(function(a, b) { return Math.floor(a - b) });
        let gijya = isdesh.slice(isdesh.length - 4, isdesh.length - 1);
        ctx.font = "30px arial";
        ctx.fillStyle = "white";
        if (score == 0) {
            score++;
        }
        ctx.fillText('Game Over', canvas.width / 2.3, 100);
        ctx.fillText('Score: ' + (score - 1) * 400, canvas.width / 2.3, 300);
        ctx.fillText('High Score: ' + ((gijya[gijya.length - 1]) - 1) * 400, canvas.width / 2.5, 400);
        ctx.fillText('Click uparrow to refresh high score', 100, 500);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function jump() {
    ctx.beginPath();
    ctx.arc(ball.x_coordinate, ball.y_coordinate, ball.r, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
    ctx.closePath();
    ctx.fillStyle = ball.color;
    ctx.fill();
    if (ball.y_coordinate < 300) {
        screen -= -1.5;
    }
    ball.y_coordinate += Vy - Ay;
    Ay -= 0.3;
    if (ball.y_coordinate + ball.r > 627 && end == false) {
        terminate();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function terminate() {
    start = false;
    end = true;
    loop = false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createhuddle_() {

    for (x = post; x < huddle.length; x++) {
        huddle[x].create(x);
        if (x / 2 != 0) {


        }
        if (ball.y_coordinate + 6 < scroll(huddle[x].yo) + 6 && ball.y_coordinate > scroll(huddle[x].yo) - 6 && huddle[x].test == true) {
            score++;
            huddle[x].test = false;
            ball.color = color[Math.floor(Math.random() * color.length)];
        }
    }
    for (x = 0; x < huddle.length; x++) {
        huddle[x].remove(x);

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class circles {
    constructor(x_ax, y_ax, rot, theta, test, appear,dir) {
        this.x_coordinate = x_ax;
        this.yo = y_ax;
        this.rot = rot;
        this.theta = theta;
        this.test = test;
        this.appear = appear;
        this.dir = dir;
    }
    create(i) {
        var rad = 360 / 40;
        var rot = 0;
        var color = "";

        drawStar(this.x_coordinate, scroll(this.yo), 7, 7, 15, -18, '#048A81', 'white', 3);

        for (var i = 0; i < 40; i++) {
            x0 = 100 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate;
            y0 = 100 * Math.sin(this.rot * (Math.PI / 180)) + scroll(this.yo);
            if (i < 10) {
                color = '#F8333C';
            } else if (i >= 10 && i < 20) {
                color = '#FCAB10';
            } else if (i >= 20 && i < 30) {
                color = '#2B9EB3';
            } else {
                color = '#DBD5B5';
            }
            ctx.beginPath();
            ctx.arc(x0, y0, 6, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            
            if (this.dir == 1){
                this.rot -= rad + this.theta;
            }else{
                this.rot += rad + this.theta;
            }
            

            
            if (x0 - 6 <= ball.x_coordinate + 6 && x0 + 6 >= ball.x_coordinate - 6 && y0 - 6 <= ball.y_coordinate + 6 && y0 + 6 >= ball.y_coordinate - 6) {
                if (ball.color != color) {
                    terminate();
                }
            }

        }
    }
    remove(i) {
        if (scroll(this.yo - 100) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new circles(canvas.width / 2, this.yo - 2000, 0, 0.02 + this.theta + 0.00025, true, true));
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keyup', function(event) {
    if (start == false) {
        start = true;
        run();
    }
    document.getElementById('instructions').style.display = 'none';
    Ay = 0;
    Vy = -4;
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawStar(centerX, centerY, arms, innerRadius, outerRadius, startAngle, fillStyle, strokeStyle, lineWidth) {
    startAngle = startAngle * Math.PI / 180 || 0;
    var step = Math.PI / arms,
        angle = startAngle,
        hyp, x, y;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    for (var i = 0, len = 2 * arms; i < len; i++) {
        hyp = i & 1 ? innerRadius : outerRadius;
        x = centerX + Math.cos(angle) * hyp;
        y = centerY + Math.sin(angle) * hyp;
        angle += step;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    fillStyle && ctx.fill();
    strokeStyle && ctx.stroke();
}


function pause(){
    start = false;
    flag  = true;
}

function resume(){
    if (flag == true){
        run();
        start = true;
        run();
    }
    
}