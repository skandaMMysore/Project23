var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle1Body,rectangle2Body,rectangle3Body
var rectangle1Sprite,rectangle2Sprite,rectangle3Sprite


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700,500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");


	rectangle1Sprite=createSprite(200,200,200,20);
	rectangle1Sprite.shapeColor=color("red");

	rectangle2Sprite=createSprite(200,100,20,80);
	rectangle2Sprite.shapeColor=color("red");
	
	rectangle3Sprite=createSprite(280,150,20,80);
	rectangle3Sprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 65 , {restitution:0, isStatic:true});
	World.add(world,packageBody);

	rectangle1Body = Bodies.rectangle(300,430,200,20,{restitution:0,isStatic:true});
	World.add(world,rectangle1Body);

	rectangle2Body = Bodies.rectangle(210,400,100,20,{restitution:0,isStatic:true});
	World.add(world,rectangle2Body);

	rectangle3Body = Bodies.rectangle(400,400,100,20,{restitution:0,isStatic:true});
	World.add(world,rectangle3Body);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 150, width, 10 , {isStatic:true});
	 World.add(world,ground);
	 
	 bottomBox = Bodies.rectangle(width/2,145,20,200,{isStatic:true});
	 bottomBox.shapeColor = "red";
	 World.add(world,bottomBox);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectangle1Sprite.x= rectangle1Body.position.x
  rectangle1Sprite.y= rectangle1Body.position.y

  rectangle2Sprite.x= rectangle2Body.position.x
  rectangle2Sprite.y= rectangle2Body.position.y

  rectangle3Sprite.x= rectangle3Body.position.x
  rectangle3Sprite.y= rectangle3Body.position.y
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	  
	
	Matter.Body.setStatic(packageBody,false);	 
   
       
  }
}



