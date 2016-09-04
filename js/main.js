var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;


var canWidth;
var canHeight;
var bgPic = new Image();

var ane;
var bubble;

var fruit;

var mom;
var baby;

var mx;
var my;

var dust;

var data;
document.body.onload = game;

var button;

function game(){
      init();

      lastTime = Date.now();
      deltaTime = 0;

      gameloop();
}
function init(){
      can1 = document.getElementById('canvas1');
      can2 = document.getElementById('canvas2');

      button = document.getElementById("menu");

      ctx1 = can1.getContext('2d');
      ctx2 = can2.getContext('2d');
      bgPic.src="src/background.jpg";

      can1.addEventListener('mousemove',onMouseMove,false);
      button.addEventListener('click',onClick,false);
      canWidth = can1.width;
      canHeight = can1.height;

      ane = new aneObj();
      ane.init();

      fruit = new fruitObj();
      fruit.init();

      mom = new momObj();
      mom.init();

      baby = new babyObj();
      baby.init();

      bubble = new bubbleObj();
      bubble.init();

      dust = new dustObj();
      dust.init();

      data = new dataObj();

      mx=canWidth/2;
      my=canHeight/2;
}
function gameloop(){
      window.requestAnimFrame(gameloop);
      var now = Date.now();
      deltaTime = now-lastTime;
      if(deltaTime>50)deltaTime=50;
      lastTime = now;
      drawBackground();
      ane.draw();
      fruitMonitor();
      fruit.draw();


      ctx1.clearRect(0,0,canWidth,canHeight);
      mom.draw();
      baby.draw();
      data.draw();
      bubble.draw();
      dust.draw();
}
function onMouseMove(e){
      if(data.gameover)return;
      if(e.offsetX||e.layerX){
            mx = e.offsetX ==undefined? e.layerX:e.offsetX;
            my = e.offsetY ==undefined? e.layerY:e.offsetY;
      }
}
function onClick(){
      data.init();
      baby.reset();
}
