
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,height-35,width,20);
	
	box= new Dustbin(1000,height-180);

	ball= new PaperBall(200,450,70);

  
}


function draw() {

  background("grey");
  Engine.update(engine);
  ball.display();
  ground.display();
  box.display();
  

 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:140,y:-145});
	}	
}													
