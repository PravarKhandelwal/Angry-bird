var engine,world;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var body,ground;

function setup() {

  createCanvas(1000,400);
  
   engine = Engine.create()
   world = engine.world;
   log1 = new log(700,50,300,PI/2);
   box1 = new box(600,200,50,50);
   box2 = new box(800,200,50,50);
   pig1 = new pig(650,200);


   
var a = {
  isStatic: true

  
}

   
   ground  = Bodies.rectangle(500,380,1000,10,a);
   World.add(world,ground);

   

}

function draw() {
  background(0,0,0);  
  Engine.run(engine);
  //rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,10);

  log1.display();
  box1.display();
  box2.display();
pig1.display();
  
}
