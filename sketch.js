
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 580);

	engine = Engine.create();
	world = engine.world;

  	//Create the Bodies Here.

	roof = new Roof(400,90)
  bob1 = new Bob(400,450)
	bob2 = new Bob(339,450)
	bob3 = new Bob(460,450)
	bob4 = new Bob(279,450)
	bob5 = new Bob(520,450)
	
  rope1= new Rope(bob1.body,roof.body,0,0);
  rope2 = new Rope(bob2.body,roof.body,-60,0);
  rope3 = new Rope(bob3.body,roof.body,60,0);
  rope4 = new Rope(bob4.body,roof.body,-120,0);
  rope5 = new Rope(bob5.body,roof.body,120,0);

  
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  Engine.update(engine);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob4.display();   bob5.display();
  bob2.display();  bob1.display(); bob3.display();
  
 
 
  
  
 
  
  drawSprites();
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-20,y:0});
  };

}



