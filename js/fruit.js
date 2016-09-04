var fruitObj = function(){
      this.alive = [];
      this.x = [];
      this.y = [];
      this.fruitType = [];
      this.orange = new Image();
      this.blue= new Image();
      this.l = [];
      this.speed = [];
      this.aneID = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
      for(var i = 0 ; i< this.num ; i++){
            this.alive[i]=false;
            this.fruitType[i]="";
      }
      this.aneID[i]=0;
      this.orange.src= "src/fruit.png";
      this.blue.src = "src/blue.png";
}
fruitObj.prototype.draw = function(){
      for(var i = 0 ; i<this.num;i++){
            if(this.alive[i]){
                  if(this.l[i]<=13){
                        this.l[i]+=this.speed[i]*deltaTime;
                        this.x[i] = ane.top[this.aneID[i]];
                  }
                  else{
                        this.y[i]-=this.speed[i]*deltaTime*7;
                  }
                  if(this.fruitType[i]=="orange"){
                        ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
                  }
                  else{
                        ctx2.drawImage(this.blue,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
                  }
                  if(this.y[i]<10){
                        this.alive[i]=false;
                  }
            }
      }
}
fruitObj.prototype.born = function(i){
      this.aneID[i] = Math.floor(Math.random() * ane.num);
      this.x[i] = ane.x[this.aneID[i]];
      this.y[i] = canHeight-ane.len[this.aneID[i]];//海葵的位置
      this.l[i]  = 0;
      this.speed[i]=0.004+Math.random()*0.02;
      this.alive[i]=true;
      var ran = Math.random();
      if(ran<0.2)this.fruitType[i]="blue";
      else{
            this.fruitType[i]="orange";
      }
}
fruitObj.prototype.dead =function(i){
      this.alive[i]=false;
}
function fruitMonitor(){
      var num = 0;
      for(var i = 0 ; i< fruit.num ; i++){
            if(fruit.alive[i])num++;
      }
      if(num < 15){
            sendFruit();
            return;
      }
}
function sendFruit(){
      for(var i = 0 ; i < fruit.num ; i++){
            if(!fruit.alive[i]){
                  fruit.born(i);
                  return;
            }
      }
}
