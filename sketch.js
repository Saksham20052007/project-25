
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, container1, container2, container3, Ground;

function preload()
{


}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
		Ground = new ground(700, 620 , 1800, 10);


		paper1 = new paper(100, 590, 45);


	container1 = new container(1200,600,200, 20);

	container2 = new container(1100,550,20, 100);

	container3 = new container(1300,550,20, 100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");



  paper1.display();
  container1.display();
  container2.display();
  container3.display();
  Ground.display();

  keyPressed();

  drawSprites();
 
}
 function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:1, y:-2});
	}
 }


