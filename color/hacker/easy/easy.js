

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ctx = canvas.getContext('2d');
if (screen.width > 900){
    canvas.height = screen.height;
    canvas.width = screen.width/1.7;
    var pc = true;
}else{
    canvas.height = screen.height*2.5;
    canvas.width = screen.width*2.1;
    pc = false;
}


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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ball = {
    x_coordinate: canvas.width / 2,
    y_coordinate: canvas.height * 2/3,
    r: canvas.height/100,
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
        huddle.push(new circles(canvas.width / 2, y - 1180 - x * (canvas.height/1.5), 0, 0.02 + x * 0.0005, true, true));
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
        let bangoo = localStorage.getArray('hackona');
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
        ctx.font = canvas.height/20 +"px arial";
        ctx.fillStyle = "white";
        ctx.fillText(score, 20, 100);
        ctx.fillText(igloo, canvas.width - 140, 100);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0);
        localStorage.pushArrayItem('hackona', score);
        let isdesh = localStorage.getArray('hackona');
        isdesh.sort(function(a, b) { return Math.floor(a - b) });
        let gijya = isdesh.slice(isdesh.length - 4, isdesh.length - 1);
        ctx.font = "30px arial";
        ctx.fillStyle = "white";
        if (score == 0) {
            score++;
        }
        document.getElementById('restart').style.display = 'block';
        ctx.fillText('Score: ' + score , canvas.width / 3, canvas.height/3);
        ctx.fillText('High Score: ' + gijya[gijya.length - 1], canvas.width / 4, canvas.height/2);
        ctx.font = canvas.height/35 +"px arial";
        ctx.fillStyle = "white";
        ctx.fillText('Click to update high score', 10 , canvas.height/1.8);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function jump() {
    ctx.beginPath();
    ctx.arc(ball.x_coordinate, ball.y_coordinate, ball.r, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
    ctx.closePath();
    ctx.fillStyle = ball.color;
    ctx.fill();
    if (ball.y_coordinate < canvas.height/2) {
        screen -= -canvas.height/400;
    }
    ball.y_coordinate += Vy - Ay;
    Ay -= canvas.height/2500;
    if (ball.y_coordinate + ball.r > canvas.height && end == false) {
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
        if (ball.y_coordinate + ball.r < scroll(huddle[x].yo) + ball.r && ball.y_coordinate > scroll(huddle[x].yo) - ball.r && huddle[x].test == true) {
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
    constructor(x_ax, y_ax, rot, theta, test, appear) {
        this.x_coordinate = x_ax;
        this.yo = y_ax;
        this.rot = rot;
        this.theta = theta;
        this.test = test;
        this.appear = appear;
    }
    create(i) {
        var rad = 360 / 40;
        var rot = 0;
        var color = "";

        for (var i = 0; i < 40; i++) {
            x0 = canvas.height/7 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate;
            y0 = canvas.height/7 * Math.sin(this.rot * (Math.PI / 180)) + scroll(this.yo);
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
            ctx.arc(x0, y0, ball.r, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            drawStar(this.x_coordinate,scroll(this.yo) , 5, 10, 20, 20, 'black', 'white', 5);
            this.rot += rad + this.theta;
            if (x0 -  ball.r <= ball.x_coordinate +  ball.r && x0 +  ball.r >= ball.x_coordinate -  ball.r && y0 -  ball.r <= ball.y_coordinate +  ball.r && y0 +  ball.r >= ball.y_coordinate - 6) {
                if (ball.color != color) {
                    terminate();
                }
            }

        }
    }
    remove(i) {
        if (scroll(this.yo - canvas.height/6) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new circles(canvas.width / 2, this.yo - (canvas.height/1.5)*5, 0, this.theta + 0.0025, true, true));
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function saaa() {
    if (start == false) {
        start = true;
        run();
    }
    document.getElementById('instructions').style.display = 'none';
    Ay = 0;
    Vy = -canvas.height/150;
  };


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
function restart(){
    location.reload();
}
