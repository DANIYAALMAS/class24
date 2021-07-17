const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground,cannon;
var cannonBall

function preload(){
  bg=loadImage("./assets/background.gif")  
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(0,height-3,width*2,5)
tower=new Tower(150,350,160,310) 
var angle=-PI/4 
cannon=new Cannon(180,110,110,50,angle)  
cannonBall=new CannonBall(cannon.x,cannon.y)
    
}

function draw(){
    background(0);
 image(bg,0,0,width,height)   
    Engine.update(engine);
 tower.display()   
 ground.display() 
 cannon.display() 
 cannonBall.display()
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
   cannonBall.shoot() 
  }
}
