
var momObj = function(){
      this.x;
      this.y;
      this.angle;
      this.bigEye = [];
      this.bigEyePos=0;
      this.bigEyeCount=0;
      this.bigEyeIntercal = 1000;//初始设定1s后眨眼睛
      this.bigBody = [];
      this.bigBodyPos = 0 ;
      this.bigTail = [];
      this.tailPos=0;
      this.tailCount = 0 ;
}
momObj.prototype.reset = function(){
      this.x=canWidth/2;
      this.y= canHeight/2;
      this.angle=0;
}
momObj.prototype.init=function(){
      this.x=canWidth/2;
      this.y= canHeight/2;
      this.angle=0;
      for(var i = 0 ; i<2 ; i++){
            this.bigEye[i]= new Image();
            this.bigEye[i].src = "./src/bigEye"+i+".png";
      }
      for(var i = 0 ; i< 8 ; i++){
            this.bigTail[i] = new Image();
            this.bigTail[i].src = "./src/bigTail"+i+".png";
      }
      for(var i = 0 ; i <8 ; i++){
            this.bigBody[i] = new Image();
            this.bigBody[i].src = "./src/bigSwim"+i+".png";
      }
}
momObj.prototype.draw= function(){
      //lerp x,y
      this.x = lerpDistance(mx,this.x,0.9);
      this.y = lerpDistance(my,this.y,0.9);
      //delta angle
      //Math.atan2(y,x)
      this.collisionFruit();
      var deltaY = my - this.y;
      var deltaX = mx - this.x;
      var beta = Math.atan2(deltaY,deltaX)+Math.PI;

      //lerp angle
      this.angle = lerpAngle(beta,this.angle,0.9);
      this.tailCount+=deltaTime;
      if(this.tailCount>30){
            this.tailPos=(this.tailPos+1)%8;
            this.tailCount%=30;
      }
      this.bigEyeCount+=deltaTime;
      if(this.bigEyeCount>this.bigEyeIntercal){
            this.bigEyeCount%=this.bigEyeIntercal;
            this.bigEyePos=1-this.bigEyePos;
            if(this.bigEyePos==1){
                  this.bigEyeIntercal=200;
            }else{
                  this.bigEyeIntercal = 1000+Math.random()*1000;
            }
      }
      ctx1.save();
      ctx1.translate(this.x,this.y);
      ctx1.rotate(this.angle);
      var tailPos = this.tailPos;
      ctx1.drawImage(this.bigTail[tailPos],-this.bigTail[tailPos].width*0.5+30,-this.bigTail[tailPos].height*0.5);
      var bigBodyPos = this.bigBodyPos;
      ctx1.drawImage(this.bigBody[bigBodyPos],-this.bigBody[bigBodyPos].width*0.5,-this.bigBody[bigBodyPos].height*0.5);
      var bigEyePos = this.bigEyePos;
      ctx1.drawImage(this.bigEye[bigEyePos],-this.bigEye[bigEyePos].width*0.5,-this.bigEye[bigEyePos].height*0.5);

      ctx1.restore();
}
momObj.prototype.collisionFruit = function(){
      for(var i = 0 ; i < fruit.num ; i ++){
            if(fruit.alive[i]){
                  var dis = calLength2(this.x,this.y,fruit.x[i],fruit.y[i]);
                  if(dis<900){
                        bubble.born(this.x,this.y,1);
                        fruit.dead(i);
                        if(fruit.fruitType[i]=="blue")data.fruitNum+=2;
                        else  data.fruitNum++;
                        this.bigBodyPos=(this.bigBodyPos+1);
                        if(this.bigBodyPos>=7)this.bigBodyPos=7;
                        break;
                  }
            }
      }
}

