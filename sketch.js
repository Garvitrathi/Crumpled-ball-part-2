
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box1,box2,box3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,590,1200,20);
	box1 = new Box(1000,570,200,20);
	box2 = new Box(890,530,30,100);
	box3 = new Box(1110,530,30,100);
  ball = new Paper(50,200,40);

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");

  Engine.update(engine);

  ball.display();
  ground.display();  
  box1.display();
  box2.display();
  box3.display();
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-300})
  }
}

