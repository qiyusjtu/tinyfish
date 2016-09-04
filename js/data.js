var dataObj = function(){
      this.fruitNum=0;
      this.score = 0;
      this.gameover = false;
      this.alpha=0;
}
dataObj.prototype.draw =function(){
      ctx2.save();
      ctx2.shadowBlur = 14; // 模糊尺寸
      ctx2.shadowColor = 'rgb(255, 255, 255)'; // 颜色
      ctx2.fillStyle="white";
      ctx2.font = "20px 微软雅黑";
      ctx2.textAlign = "center";
      ctx2.fillText("Score:"+this.score,canWidth/2,canHeight-30);
      if(this.gameover){
            ctx2.fillStyle = "rgba(255,255,255,"+this.alpha+")";
            this.alpha+=deltaTime*0.001;
            if(this.alpha>=1)this.alpha=1;
            ctx2.font="40px 微软雅黑";
            ctx2.fillText("GAME OVER",canWidth/2,canHeight/2);
      }
      ctx2.restore();
}
dataObj.prototype.init=function(){
      this.fruitNum=0;
      this.score=0;
      this.gameover=false;
      this.alpha=0;
}
