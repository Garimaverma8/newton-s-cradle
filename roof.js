class Roof{
  
   constructor(x,y){
   var options = {
          isStatic: true, 
       };
 
         this.body = Bodies.rectangle(x,y,1000,10,options)
         this.width = 400
         this.height = 40
 
      World.add(world,this.body)

      
 
     }
   display(){
   
       var pos = this.body.position
       rectMode(CENTER)
       push();
       fill(107)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
       pop();
    }
 
 
 
 }