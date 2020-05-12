
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
canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
var upward = 0;
var downward = 0;
var goal = 0;
var begin = false;
var land = false;
var y = canvas.height / 2;
var rang = ['#F8333C', '#FCAB10', '#2B9EB3', '#DBD5B5'];
var obstacle = [];
var xx;
var yy;
var monitor = 900;
var block = 0;
var tasveer = new Image();
tasveer.src = "https://i.pinimg.com/originals/97/4d/b8/974db8b56e2e66273180a76dcaebfeca.jpg";
var exam = true;
var doop = true;
var polar;
var staff = false;
var ghari;
var poke = new Image();
poke.src = '../mobile/mobile.png';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var gend = {
    x_coordinate: canvas.width / 2,
    y_coordinate: canvas.height * 5 / 6,
    r: 12,
    rang: rang[Math.floor(Math.random() * rang.length)],
    villa : true
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var niche = function(y) {
        return (y + monitor);
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
function fegu2() {

    for (x = block; x < 5; x++) {
        if (x % 2 == 0) {
            ghari = 1;
        } else {
            ghari = 0;
        }
    }
    obstacle.push(new circles2(canvas.width / 2, y - 950 - 0 * 400, 0, 0.02 + 0 * 0.005, true, true, ghari));
    obstacle.push(new pipes2(canvas.width / 2, y - 950 - 1 * 400, 1, true, true, ghari, rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)]));
    obstacle.push(new hpipes2(canvas.width / 2, y - 950 - 2 * 400, 5, true, true, ghari, rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)]));
    obstacle.push(new dcircles2(canvas.width / 2, y - 950 - 3 * 400, 0, 0.02 + 0 * 0.005, true, true, ghari));

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tara( centerX,centerY,arms,innerRadius,outerRadius,beginAngle,fillStyle,strokeStyle,lineWidth) {
  beginAngle = beginAngle * Math.PI / 180  || 0;
  var step = Math.PI / arms,
      angle = beginAngle
      ,hyp,x,y;
  ctx2.strokeStyle = strokeStyle;
  ctx2.fillStyle = fillStyle;
  ctx2.lineWidth = lineWidth;
  ctx2.beginPath();
  
  for (var i =0,len= 2 * arms; i <len; i++) {
    hyp = i & 1 ? innerRadius : outerRadius;
    x = centerX + Math.cos(angle) * hyp;
    y = centerY +Math.sin(angle) * hyp;
    angle+=step;
    ctx2.lineTo(x, y);
    
  }
  ctx2.closePath();
  
  fillStyle && ctx2.fill() ;
  strokeStyle && ctx2.stroke();
  
}


function run2() {

    if (begin == true) {
        window.requestAnimationFrame(run2);
    }
    if (doop == true) {
        ctx2.drawImage(tasveer, 0, 0);
        
        tara(canvas.width/2, niche(-1000), 10, 25, -18, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(-1800), 10, 25, -18, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 8 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 10 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 18 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 15 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 26 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        tara(canvas.width/2, niche(y - 950 - 29 * 400), 10, 25, 15, -18, '#0353A4', 'white', 3);
        createobstacle_();
        kudo();   
        let bangoo1 = localStorage.getArray('hacknama1');
        bangoo1.sort(function(a, b) { return Math.floor(a - b) });
        if (bangoo1.length == 0) {
            bangoo1.push(0);
            bangoo1.push(0);
        }
        let assa1 = bangoo1.slice(bangoo1.length - 2, bangoo1.length - 1);
        if (goal > assa1[assa1.length - 1]) {
            polar = goal;
        } else {
            polar = assa1[assa1.length - 1];
        }
        assa1[assa1.length - 1]
        ctx2.font = "30px arial";
        ctx2.fillStyle = "white";
        ctx2.fillText(goal, canvas.width/26.6, 60 );
        ctx2.fillText('High Score: ' + polar, 700, 60);
        
    } else {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.drawImage(tasveer, 0, 0);
        
        localStorage.pushArrayItem('hacknama1', goal);
        let isdesh1 = localStorage.getArray('hacknama1');
        isdesh1.sort(function(a, b) { return Math.floor(a - b) });
        let gijya1 = isdesh1.slice(isdesh1.length - 4, isdesh1.length - 1);
        ctx2.font = "30px arial";
        ctx2.fillStyle = "white";
        
        if (goal == 0) {
            goal++;
        }
        ctx2.fillText('Game Over', canvas.width / 2.3, 100);
        ctx2.fillText('Score: ' + (goal), canvas.width / 2.3, 300);
        ctx2.fillText('High Score: ' + (gijya1[gijya1.length - 1]), canvas.width / 2.5, 400);
        ctx2.fillText('Tap to refresh high score', 60, 500);
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function kudo() {

    if (gend.y_coordinate < 500) {
        monitor -= -2.0;
    }
    gend.y_coordinate += downward - upward;
    upward -= 0.32;
    if (gend.y_coordinate + gend.r > 770 && land == false) {
        lockdown();
    }

    if ((gend.y_coordinate  < niche(-1000)  && gend.y_coordinate > niche(-1800))|| (goal < 11 && goal > 8 )|| (goal < 19 && goal > 15 ) || (goal < 30 && goal > 26 ) )  {
        gend.villa = false;
        ctx2.drawImage(poke, gend.x_coordinate-40, gend.y_coordinate-40);
        ctx2.fillStyle = "white";
        ctx2.fillText('PowerUP!!', 10, 500);
        
    }else{
        gend.villa = true;
        ctx2.beginPath();
        ctx2.arc(gend.x_coordinate, gend.y_coordinate, gend.r, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
        ctx2.closePath();
        ctx2.fillStyle = gend.rang;
        ctx2.fill();
        
    }
    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function lockdown() {
    begin = false;
    land = true;
    doop = false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createobstacle_() {

    for (x = block; x < obstacle.length; x++) {
        obstacle[x].create(x);

        if (gend.y_coordinate + 12 < niche(obstacle[x].yo) + 12 && gend.y_coordinate > niche(obstacle[x].yo) - 12 && obstacle[x].exam == true) {
            goal++;
            obstacle[x].exam = false;
        }
    }
    for (x = 0; x < obstacle.length; x++) {
      obstacle[x].remove(x);

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class circles2 {
    constructor(xolo, yolo, rot, theta, exam, appear, dir) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.rot = rot;
        this.theta = theta;
        this.exam = exam;
        this.appear = appear;
        this.dir = dir;
    }
    create(i) {
        var rad = 360 / 40;
        var rot = 0;
        var rang = "";



        for (var i = 0; i < 40; i++) {
            xx = 150 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate;
            yy = 150 * Math.sin(this.rot * (Math.PI / 180)) + niche(this.yo);
            if (i < 10) {
                rang = '#F8333C';
            } else if (i >= 10 && i < 20) {
                rang = '#FCAB10';
            } else if (i >= 20 && i < 30) {
                rang = '#2B9EB3';
            } else {
                rang = '#DBD5B5';
            }
            ctx2.beginPath();
            ctx2.arc(xx, yy, 12, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx2.closePath();
            ctx2.fillStyle = rang;
            ctx2.fill();


            if (this.dir == 1) {
                this.rot -= rad + this.theta;
            } else {
                this.rot += rad + this.theta;
            }



            if (xx - 12 <= gend.x_coordinate + 12 && xx + 12 >= gend.x_coordinate - 12 && yy - 12 <= gend.y_coordinate + 12 && yy + 12 >= gend.y_coordinate - 12 && gend.villa == true) {
                if (gend.rang != rang) {
                    lockdown();
                }
            }

        }
    }
    remove(i) {
        if (niche(this.yo - 150) > canvas.height) {
            obstacle.splice(i, 1);
            obstacle.push(new circles2(canvas.width / 2, this.yo - 1600, 0, this.theta + 0.025, true, true));
        }
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class pipes2 {
    constructor(xolo, yolo, oblique, exam, appear, dir, rang1, rang2, rang3, rang4) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.exam = exam;
        this.appear = appear;
        this.dir = dir;
        this.oblique = oblique;
        this.rang1 = rang1;
        this.rang2 = rang2;
        this.rang3 = rang3;
        this.rang4 = rang4;
    }
    create(i) {
        ctx2.fillStyle = this.rang1;
        ctx2.fillRect(this.x_coordinate - canvas.width/133.3, niche(this.yo) + 70, 12, -140);

        ctx2.fillStyle = this.rang2;
        ctx2.fillRect(this.x_coordinate + canvas.width/8, niche(this.yo) + 50, 12, -100);

        ctx2.fillStyle = this.rang3;
        ctx2.fillRect(this.x_coordinate + canvas.width/4, niche(this.yo) + 70, 12, -140);
  
        ctx2.fillStyle = this.rang1;
        ctx2.fillRect(this.x_coordinate - canvas.width/8, niche(this.yo) + 40, 12, -80);

        ctx2.fillStyle = this.rang3;
        ctx2.fillRect(this.x_coordinate - canvas.width/4, niche(this.yo) + 50, 12, -100);


        this.x_coordinate += this.oblique;

        if (this.x_coordinate + 200 + 6 > canvas.width) {
            this.oblique = this.oblique * -1;
        }
        if (this.x_coordinate - 200 < 0) {
            this.oblique = this.oblique * -1;
        }

        if (((gend.x_coordinate - 12 <= this.x_coordinate - canvas.width/4.25 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/4 && gend.y_coordinate - 12 <= niche(this.yo) + 50 && gend.y_coordinate >= niche(this.yo) - 50 && gend.rang != this.rang3) ||
            (gend.x_coordinate - 12 <= this.x_coordinate - canvas.width/9.09 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/8 && gend.y_coordinate - 12 <= niche(this.yo) + 40 && gend.y_coordinate >= niche(this.yo) - 40 && gend.rang != this.rang1) ||
            (gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/3.77 && gend.x_coordinate + 12 >= this.x_coordinate + canvas.width/4 && gend.y_coordinate - 12 <= niche(this.yo) + 70 && gend.y_coordinate >= niche(this.yo) - 70 && gend.rang != this.rang3) ||
            (gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/7.14 && gend.x_coordinate + 12 >= this.x_coordinate + canvas.width/8 && gend.y_coordinate - 12 <= niche(this.yo) + 50 && gend.y_coordinate >= niche(this.yo) - 50 && gend.rang != this.rang2) ||
            (gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/133.3 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/133.3 && gend.y_coordinate - 12 <= niche(this.yo) + 70 && gend.y_coordinate >= niche(this.yo) - 70 && gend.rang != this.rang1))&& gend.villa == true) {
            lockdown();
        }
    }
    remove(i) {
        if (niche(this.yo - 150) > canvas.height) {
            obstacle.splice(i, 1);
            obstacle.push(new pipes2(canvas.width / 2, this.yo - 1600, this.oblique + 0.05, true, true, ghari, rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)]));

        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class hpipes2 {
    constructor(xolo, yolo, oblique, exam, appear, dir, rang1, rang2, rang3, rang4) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.exam = exam;
        this.appear = appear;
        this.dir = dir;
        this.oblique = oblique;
        this.rang1 = rang1;
        this.rang2 = rang2;
        this.rang3 = rang3;
        this.rang4 = rang4;
    }
    create(i) {
        ctx2.fillStyle = this.rang1;
        ctx2.fillRect(this.x_coordinate - canvas.width/8, niche(this.yo) + 10, 200, -20);

        ctx2.fillStyle = this.rang2;
        ctx2.fillRect(this.x_coordinate - canvas.width/8, niche(this.yo) + 80, 200, -20);

        ctx2.fillStyle = this.rang4;
        ctx2.fillRect(this.x_coordinate - canvas.width/8, niche(this.yo) - 80, 200, +20);


        this.x_coordinate += this.oblique

        if (this.x_coordinate + canvas.width/8 + 10 > canvas.width) {
            this.oblique = this.oblique * -1;
        }
        if (this.x_coordinate - canvas.width/8 < 0) {
            this.oblique = this.oblique * -1;
        }
        if (((gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/8 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/8 && gend.y_coordinate - 12 <= niche(this.yo) + 10 && gend.y_coordinate + 12 >= niche(this.yo) - 10 && gend.rang != this.rang1) ||
            (gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/8 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/8 && gend.y_coordinate - 12 <= niche(this.yo) + 80 && gend.y_coordinate + 12 >= niche(this.yo) + 60 && gend.rang != this.rang2) ||
            (gend.x_coordinate - 12 <= this.x_coordinate + canvas.width/8 && gend.x_coordinate + 12 >= this.x_coordinate - canvas.width/8 && gend.y_coordinate - 12 <= niche(this.yo) - 60 && gend.y_coordinate + 12 >= niche(this.yo) - 80 && gend.rang != this.rang4))&& gend.villa == true) {
            lockdown();
        }
    }
    remove(i) {
        if (niche(this.yo - 150) > canvas.height) {
            obstacle.splice(i, 1);
            obstacle.push(new hpipes2(canvas.width / 2,this.yo - 1600 ,this.oblique += 0.05, true, true, ghari, rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)], rang[Math.floor(Math.random() * rang.length)]));
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class dcircles2 {
    constructor(xolo, yolo, rot, theta, exam, appear, dir) {
        this.x_coordinate = xolo;
        this.yo = yolo;
        this.rot = rot;
        this.theta = theta;
        this.exam = exam;
        this.appear = appear;
        this.dir = dir;
    }
    create(i) {
        var rad = 360 / 40;
        var rot = 0;
        var rang = "";



        for (var i = 0; i < 40; i++) {
            xx = 100 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate - 106;
            yy = 100 * Math.sin(this.rot * (Math.PI / 180)) + niche(this.yo);
            if (i < 10) {
                rang = '#F8333C';
            } else if (i >= 10 && i < 20) {
                rang = '#FCAB10';
            } else if (i >= 20 && i < 30) {
                rang = '#2B9EB3';
            } else {
                rang = '#DBD5B5';
            }
            ctx2.beginPath();
            ctx2.arc(xx, yy, 12, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx2.closePath();
            ctx2.fillStyle = rang;
            ctx2.fill();
            

            xx = 100 * Math.cos(this.rot * (Math.PI / 180)) + this.x_coordinate + 106;
            yy = 100 * Math.sin(this.rot * (Math.PI / 180)) + niche(this.yo);
            if (i < 10) {
                rang = '#2B9EB3';
            } else if (i >= 10 && i < 20) {
                rang = '#DBD5B5';
            } else if (i >= 20 && i < 30) {
                rang = '#F8333C';
            } else {
                rang = '#FCAB10';
            }
            ctx2.beginPath();
            ctx2.arc(xx, yy, 12, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
            ctx2.closePath();
            ctx2.fillStyle = rang;
            ctx2.fill();
            

            if (this.dir == 1) {
                this.rot -= rad + this.theta;
            } else {
                this.rot += rad + this.theta;
            }

            if (xx - 12 <= gend.x_coordinate + 12 && xx + 12 >= gend.x_coordinate - 12 && yy - 12 <= gend.y_coordinate + 12 && yy + 12 >= gend.y_coordinate - 12 && gend.rang != rang && gend.villa == true){
                lockdown();
            }
        }
    }
    remove(i) {
        if (niche(this.yo - 150) > canvas.height) {
            obstacle.splice(i, 1);
            obstacle.push(new dcircles2(canvas.width / 2, this.yo - 1600, 0,  this.theta + 0.0025, true, true));
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function saaas() {
    if (begin == false) {
        begin = true;
        run2();
        }
        document.getElementById('instructions').style.display = 'none';
        upward = 0;
        downward = -5; 
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function restart(){
    location.reload();
}