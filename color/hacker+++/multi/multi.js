
var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
canvas = document.getElementById('canvas');
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
var xx0;
var y0;
var yy0;
var screen = 900;
var post = 0;
var background = new Image();
background.src = "https://i.pinimg.com/originals/97/4d/b8/974db8b56e2e66273180a76dcaebfeca.jpg";
var test = true;
var loop = true;
var igloo;
var flag = false;
var clock;
var base_image = new Image();
base_image.src = '../hacker+/Dream_Fast_Ball_Sprite.png';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ball = {
    x_coordinate: canvas.width / 2,
    y_coordinate: canvas.height * 5 / 6,
    r: 6,
    color: color[Math.floor(Math.random() * color.length)],
    villa : true
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
        if (x % 2 == 0) {
            clock = 1;
        } else {
            clock = 0;
        }
    }
    huddle.push(new circles(canvas.width / 2, y - 950 - 0 * 400, 0, 0.02 + 0 * 0.005, true, true, clock));
    huddle.push(new pipes(canvas.width / 2, y - 950 - 1 * 400, 1, true, true, clock, color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)]));
    huddle.push(new hpipes(canvas.width / 2, y - 950 - 2 * 400, 5, true, true, clock, color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)]));
    huddle.push(new dcircles(canvas.width / 2, y - 950 - 3 * 400, 0, 0.02 + 0 * 0.005, true, true, clock));

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawStar( centerX,centerY,arms,innerRadius,outerRadius,startAngle,fillStyle,strokeStyle,lineWidth) {
  startAngle = startAngle * Math.PI / 180  || 0;
  var step = Math.PI / arms,
      angle = startAngle
      ,hyp,x,y;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  
  for (var i =0,len= 2 * arms; i <len; i++) {
    hyp = i & 1 ? innerRadius : outerRadius;
    x = centerX + Math.cos(angle) * hyp;
    y = centerY +Math.sin(angle) * hyp;
    angle+=step;
    ctx.lineTo(x, y);
    
  }
  ctx.closePath();
  
  fillStyle && ctx.fill() ;
  strokeStyle && ctx.stroke();
  
}


function run() {

    if (start == true) {
        window.requestAnimationFrame(run);
    }
    if (loop == true) {
        ctx.drawImage(background, 0, 0);
        
        drawStar(canvas.width/2, scroll(-1000), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(-1600), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 8 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 10 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 18 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 15 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 26 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        drawStar(canvas.width/2, scroll(y - 950 - 29 * 400), 7, 10, 15, -18, '#0353A4', 'white', 3);
        createhuddle_();
        jump();   
        let bangoo = localStorage.getArray('hacknama');
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
        ctx.fillText(score, canvas.width/26.6, 60 );
        ctx.fillText('High Score: ' + igloo, 400, 60);
        
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0);
        
        localStorage.pushArrayItem('hacknama', score);
        let isdesh = localStorage.getArray('hacknama');
        isdesh.sort(function(a, b) { return Math.floor(a - b) });
        let gijya = isdesh.slice(isdesh.length - 4, isdesh.length - 1);
        ctx.font = "30px arial";
        ctx.fillStyle = "white";
        
        if (score == 0) {
            score++;
        }
        ctx.fillText('Game Over', canvas.width / 2.3, 100);
        ctx.fillText('Score: ' + (score), canvas.width / 2.3, 300);
        ctx.fillText('High Score: ' + (gijya[gijya.length - 1]) , canvas.width / 2.5, 400);
        ctx.fillText('Click w to update high score ', 60, 500);
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function jump() {

    if (ball.y_coordinate < 300) {
        screen -= -1.5;
    }
    ball.y_coordinate += Vy - Ay;
    Ay -= 0.3;
    if (ball.y_coordinate + ball.r > 627 && end == false) {
        terminate();
    }

    if ((ball.y_coordinate  < scroll(-1000)  && ball.y_coordinate > scroll(-1600))|| (score < 11 && score > 8 )|| (score < 19 && score > 15 ) || (score < 30 && score > 26 ) )  {
        ball.villa = false;
        ctx.drawImage(base_image, ball.x_coordinate-15, ball.y_coordinate-15);
        ctx.fillStyle = "white";
        ctx.fillText('PowerUP!!', 10, 500);
        
    }else{
        ball.villa = true;
        ctx.beginPath();
        ctx.arc(ball.x_coordinate, ball.y_coordinate, ball.r, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
        ctx.closePath();
        ctx.fillStyle = ball.color;
        ctx.fill();
        
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

        if (ball.y_coordinate + 6 < scroll(huddle[x].yo) + 6 && ball.y_coordinate > scroll(huddle[x].yo) - 6 && huddle[x].test == true) {
            score++;
            huddle[x].test = false;
        }
    }
    for (x = 0; x < huddle.length; x++) {
      huddle[x].remove(x);

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class circles {
    constructor(xolo, yolo, rot, theta, test, appear, dir) {
        this.x_coordinate = xolo;
        this.yo = yolo;
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


            if (this.dir == 1) {
                this.rot -= rad + this.theta;
            } else {
                this.rot += rad + this.theta;
            }



            if (x0 - 6 <= ball.x_coordinate + 6 && x0 + 6 >= ball.x_coordinate - 6 && y0 - 6 <= ball.y_coordinate + 6 && y0 + 6 >= ball.y_coordinate - 6 && ball.villa == true) {
                if (ball.color != color) {
                    terminate();
                }
            }

        }
    }
    remove(i) {
        if (scroll(this.yo - 100) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new circles(canvas.width / 2, this.yo - 1600, 0, 0.02 + this.theta + 0.00025, true, true));
        }
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class pipes {
    constructor(xolo, yolo, oblique, test, appear, dir, color1, color2, color3, color4) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.test = test;
        this.appear = appear;
        this.dir = dir;
        this.oblique = oblique;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
    create(i) {
        ctx.fillStyle = this.color1;
        ctx.fillRect(this.x_coordinate - canvas.width/133.3, scroll(this.yo) + 70, 12, -140);

        ctx.fillStyle = this.color2;
        ctx.fillRect(this.x_coordinate + canvas.width/8, scroll(this.yo) + 50, 12, -100);

        ctx.fillStyle = this.color3;
        ctx.fillRect(this.x_coordinate + canvas.width/4, scroll(this.yo) + 70, 12, -140);
  
        ctx.fillStyle = this.color1;
        ctx.fillRect(this.x_coordinate - canvas.width/8, scroll(this.yo) + 40, 12, -80);

        ctx.fillStyle = this.color3;
        ctx.fillRect(this.x_coordinate - canvas.width/4, scroll(this.yo) + 50, 12, -100);


        this.x_coordinate += this.oblique;

        if (this.x_coordinate + 200 + 6 > canvas.width) {
            this.oblique = this.oblique * -1;
        }
        if (this.x_coordinate - 200 < 0) {
            this.oblique = this.oblique * -1;
        }

        if (((ball.x_coordinate - 6 <= this.x_coordinate - canvas.width/4.25 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/4 && ball.y_coordinate - 6 <= scroll(this.yo) + 50 && ball.y_coordinate >= scroll(this.yo) - 50 && ball.color != this.color3) ||
            (ball.x_coordinate - 6 <= this.x_coordinate - canvas.width/9.09 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/8 && ball.y_coordinate - 6 <= scroll(this.yo) + 40 && ball.y_coordinate >= scroll(this.yo) - 40 && ball.color != this.color1) ||
            (ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/3.77 && ball.x_coordinate + 6 >= this.x_coordinate + canvas.width/4 && ball.y_coordinate - 6 <= scroll(this.yo) + 70 && ball.y_coordinate >= scroll(this.yo) - 70 && ball.color != this.color3) ||
            (ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/7.14 && ball.x_coordinate + 6 >= this.x_coordinate + canvas.width/8 && ball.y_coordinate - 6 <= scroll(this.yo) + 50 && ball.y_coordinate >= scroll(this.yo) - 50 && ball.color != this.color2) ||
            (ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/133.3 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/133.3 && ball.y_coordinate - 6 <= scroll(this.yo) + 70 && ball.y_coordinate >= scroll(this.yo) - 70 && ball.color != this.color1))&& ball.villa == true) {
            terminate();
        }
    }
    remove(i) {
        if (scroll(this.yo - 100) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new pipes(canvas.width / 2, this.yo - 1600, this.oblique + 0.05, true, true, clock, color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)]));

        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class hpipes {
    constructor(xolo, yolo, oblique, test, appear, dir, color1, color2, color3, color4) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.test = test;
        this.appear = appear;
        this.dir = dir;
        this.oblique = oblique;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
    create(i) {
        ctx.fillStyle = this.color1;
        ctx.fillRect(this.x_coordinate - canvas.width/8, scroll(this.yo) + 10, 200, -20);

        ctx.fillStyle = this.color2;
        ctx.fillRect(this.x_coordinate - canvas.width/8, scroll(this.yo) + 80, 200, -20);

        ctx.fillStyle = this.color4;
        ctx.fillRect(this.x_coordinate - canvas.width/8, scroll(this.yo) - 80, 200, +20);


        this.x_coordinate += this.oblique

        if (this.x_coordinate + canvas.width/8 + 10 > canvas.width) {
            this.oblique = this.oblique * -1;
        }
        if (this.x_coordinate - canvas.width/8 < 0) {
            this.oblique = this.oblique * -1;
        }
        if (((ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/8 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/8 && ball.y_coordinate - 6 <= scroll(this.yo) + 10 && ball.y_coordinate + 6 >= scroll(this.yo) - 10 && ball.color != this.color1) ||
            (ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/8 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/8 && ball.y_coordinate - 6 <= scroll(this.yo) + 80 && ball.y_coordinate + 6 >= scroll(this.yo) + 60 && ball.color != this.color2) ||
            (ball.x_coordinate - 6 <= this.x_coordinate + canvas.width/8 && ball.x_coordinate + 6 >= this.x_coordinate - canvas.width/8 && ball.y_coordinate - 6 <= scroll(this.yo) - 60 && ball.y_coordinate + 6 >= scroll(this.yo) - 80 && ball.color != this.color4))&& ball.villa == true) {
            terminate();
        }
    }
    remove(i) {
        if (scroll(this.yo - 100) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new hpipes(canvas.width / 2,this.yo - 1600 ,this.oblique += 0.05, true, true, clock, color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)], color[Math.floor(Math.random() * color.length)]));
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class dcircles {
    constructor(xolo, yolo, rot, theta, test, appear, dir) {
        this.x_coordinate = xolo;
        this.yo = yolo;
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



        for (var i = 0; i < 40; i++) {
            x0 = 70 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate - 73;
            y0 = 70 * Math.sin(this.rot * (Math.PI / 180)) + scroll(this.yo);
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
            

            x0 = 70 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate + 73;
            y0 = 70 * Math.sin(this.rot * (Math.PI / 180)) + scroll(this.yo);
            if (i < 10) {
                color = '#2B9EB3';
            } else if (i >= 10 && i < 20) {
                color = '#DBD5B5';
            } else if (i >= 20 && i < 30) {
                color = '#F8333C';
            } else {
                color = '#FCAB10';
            }
            ctx.beginPath();
            ctx.arc(x0, y0, 6, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            

            if (this.dir == 1) {
                this.rot -= rad + this.theta;
            } else {
                this.rot += rad + this.theta;
            }

            if (x0 - 6 <= ball.x_coordinate + 6 && x0 + 6 >= ball.x_coordinate - 6 && y0 - 6 <= ball.y_coordinate + 6 && y0 + 6 >= ball.y_coordinate - 6 && ball.color != color && ball.villa == true){
                terminate();
            }
        }
    }
    remove(i) {
        if (scroll(this.yo - 100) > canvas.height) {
            huddle.splice(i, 1);
            huddle.push(new dcircles(canvas.width / 2, this.yo - 1600, 0, 0.02 + this.theta + 0.00025, true, true));
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===87){
        if (start == false) {
        start = true;
        run();
        }
        document.getElementById('instructions').style.display = 'none';
        Ay = 0;
        Vy = -4.5; 
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function pause() {
    start = false;
    flag = true;
}

function resume() {
    if (flag == true) {
        run();
        start = true;
        run();
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

