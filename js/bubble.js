var bubbleObj = function(){
      this.x = [];
      this.y = [];
      this.r = [];
      this.alpha = [];
      this.alive = [] ;
      this.type = [];
}
bubbleObj.prototype.num=10;
bubbleObj.prototype.init = function(){
      for(var i = 0 ; i <this.num ; i++){
            this.alive[i]=false;
            this.x[i]=0;
            this.y[i]=0;
            this.r[i]=0;
            this.alpha[i]=1;
      }
}
bubbleObj.prototype.born = function(x,y,type){
      for(var i = 0 ; i < this.num ; i++){
            if(!this.alive[i]){
                  this.alive[i]=true;
                  this.type[i]=type;
                  this.x[i]=x;
                  this.y[i] = y ;
                  this.r[i] = 15;
                  return;
            }
      }
}
bubbleObj.prototype.update = function(){
      for(var i = 0 ; i <this.num ; i++){
            if(this.alive[i]){
                  //1是白色的小泡,2是黄色的大泡
                  if(this.type[i]==1){
                        this.r[i]+=deltaTime*0.03;
                        this.alpha[i]=1-this.r[i]/30;
                        if(this.r[i]>=30){
                              this.alive[i]=false;
                        }
                  }else{
                        this.r[i]+=deltaTime*0.03;
                        this.alpha[i]=1-this.r[i]/80;
                        if(this.r[i]>=80){
                              this.alive[i]=false;
                        }
                  }

            }
      }
}
bubbleObj.prototype.draw =function(){
      this.update();
      ctx2.save();
      ctx2.shadowBlur = 14; // 模糊尺寸
      ctx2.shadowColor = 'rgb(255, 93, 0)'; // 颜色
      for(var i = 0 ; i<this.num ; i++){
            if(this.alive[i]){
                  if(this.type[i]==1){
                        ctx2.lineWidth=2;
                        ctx2.strokeStyle = "rgba(255,255,255,"+this.alpha[i]+")";
                  }
                  else{
                        ctx2.lineWidth=3;
                        ctx2.strokeStyle = "rgba(255,93,0,"+this.alpha[i]+")";
                  }
                  ctx2.beginPath();
                  ctx2.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2,false);
                  ctx2.closePath();
                  ctx2.stroke();
            }
      }
      ctx2.restore();
}
