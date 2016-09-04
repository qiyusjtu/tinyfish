var babyObj = function(){
      this.x;
      this.y;
      this.body = [];
      this.babyBodyCount=0;
      this.babyBodyPos = 0;
      this.eye=[];
      this.babyEyeCount=0;
      this.babyEyeInterval = 1000;
      this.babyEyePos = 0;
      this.tail;
      this.angle;
}
babyObj.prototype.init = function(){
      this.x = canWidth/2+50;
      this.y = canHeight/2-50;
      this.angle=0;

      for(var i =0 ; i < 20 ; i++){
            this.body[i] = new Image();
            this.body[i].src = "./src/babyFade"+i+".png";
      }
      for(var i = 0 ; i<2 ; i++){
            this.eye[i]=new Image();
            this.eye[i].src = "./src/babyEye"+i+".png";
      }

      this.tail = new Image();
      this.tail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function(){
      this.x = lerpDistance(mom.x,this.x,0.99);
      this.y = lerpDistance(mom.y,this.y,0.99);
      this.collisionMom();
      var deltaX = mom.x - this.x;
      var deltaY = mom.y-this.y;
      var beta = Math.atan2(deltaY,deltaX)+Math.PI;
      this.angle = lerpAngle(beta,this.angle,0.96);

      this.babyBodyCount+=deltaTime;
      this.babyEyeCount+=deltaTime;
      if(this.babyBodyCount>400){
            this.babyBodyCount%=400;
            this.babyBodyPos++;
            if(this.babyBodyPos>=19){
                  this.babyBodyPos=19;
                  data.gameover=true;
            }
      }
      if(this.babyEyeCount>this.babyEyeInterval){
            this.babyEyeCount%=this.babyEyeInterval;
            this.babyEyePos=1-this.babyEyePos;
            if(this.babyEyePos==1)this.babyEyeInterval=200;
            else this.babyEyeInterval=1000+Math.random()*2000;
      }
      ctx1.save();
      ctx1.translate(this.x,this.y);
      ctx1.rotate(this.angle);
      var babyEyePos = this.babyEyePos;
      var babyBodyPos = this.babyBodyPos;
      ctx1.drawImage(this.tail,this.tail.width*0.5-5,-this.tail.height*0.5);
      ctx1.drawImage(this.body[babyBodyPos],-this.body[babyBodyPos].width*0.5,-this.body[babyBodyPos].height*0.5);
      ctx1.drawImage(this.eye[babyEyePos],-this.eye[babyEyePos].width*0.5,-this.eye[babyEyePos].height*0.5);
      ctx1.restore();
}
babyObj.prototype.collisionMom = function(){
      if(data.gameover)return;
      var dis = calLength2(this.x,this.y,mom.x,mom.y);
      if(dis<900&&(data.fruitNum!=0)){
            bubble.born(this.x,this.y,2);
            data.score+= data.fruitNum * 100;
            mom.bigBodyPos=0;
            this.babyBodyPos-=Math.round(data.fruitNum/2);
            if(this.babyBodyPos<0)this.babyBodyPos=0;
            data.fruitNum=0;
      }
}
babyObj.prototype.reset =function(){
      this.babyBodyPos=0;
      this.babyBodyCount=0;

}
