class Bob{

  constructor(x,y){

    var options = {
    
    'restitution':0.8,
    'density' :0.1
   
   
   }

   this.body = Bodies.circle(x,y,30,options);
   this.r = 30;
   World.add(world,this.body);

  
  }
   

  display(){
      var pos = this.body.position
      var angle = this.body.angle
     
      push();
      ellipseMode(RADIUS)
      fill("purple");
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
      pop();

  }

}