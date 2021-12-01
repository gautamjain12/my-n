
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeimg,boy,boyimg;
var ground,mango1,mango2,mango3,mango4,mango5,stones;
function preload()
{
	boyimg=loadImage("boy.png");
	treeimg=loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();
	stones=new Stone(100,460,11);
	mango1=new Mango(600,290,17);
	mango2=new Mango(855,325,17);
	mango3=new Mango(670,260,17);
	mango4=new Mango(730,200,17);
	mango5=new Mango(710,320,18);

	attach=new Throw(stones.body,{x:100,y:465});
	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scae=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
detectCollision(stones,mango5);
detectCollision(stones,mango4);
detectCollision(stones,mango3);
detectCollision(stones,mango2);
detectCollision(stones,mango1);

  drawSprites();
 
  ground.display();
  stones.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}



