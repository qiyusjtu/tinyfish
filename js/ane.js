var aneObj = function(){
      this.x=[];
      this.len=[];
      this.anchor = [];
      this.ampitude = [];
      this.alpha = 0;
      this.top = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
      for(var i = 0 ; i<this.num ; i++){
            this.x[i]=i*16+Math.random() * 20 ;
            this.len[i] = 170 + Math.random() * 50;
            this.anchor[i]=canHeight-100-Math.random()*100;
            this.ampitude[i]=50+Math.random()*50;
            this.top[i]=this.x[i];
      }
}
aneObj.prototype.draw = function(){
      ctx2.strokeStyle ='rgba(175,25,180,0.5)';
      ctx2.lineWidth =20;
      ctx2.lineCap = 'round';
      this.alpha+=deltaTime*0.001;
      for(var i = 0 ; i < this.num ; i++){
            //beginPath,moveTo, lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
            this.top[i]=this.x[i]+Math.sin(this.alpha)*this.ampitude[i];
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],canHeight);
            ctx2.quadraticCurveTo(this.x[i],this.anchor[i],this.top[i],canHeight-this.len[i]);
            ctx2.stroke();
      }
}
