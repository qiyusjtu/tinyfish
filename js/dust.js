var dustObj = function(){
      this.x = [];
      this.y = [];
      this.img = [];
      this.ampitude = [];
      this.alpha;
}
dustObj.prototype.num=40;
dustObj.prototype.init = function(){
      for(var i = 0 ; i <this.num ; i++){
            this.x[i]=Math.random()*canWidth;
            this.y[i]=Math.random()*canHeight;
            this.alpha = 0 ;
            this.img[i]=new Image();
            this.img[i].src = "src/dust"+Math.floor(Math.random()*7)+".png";
            this.ampitude[i]=10+Math.random()*20;
      }
}
dustObj.prototype.draw = function(){
      this.alpha+=deltaTime*0.001;
      for(var i = 0 ; i <this.num ; i++){
            ctx1.drawImage(this.img[i],this.x[i]+Math.sin(this.alpha)*this.ampitude[i],this.y[i]);
      }
}
