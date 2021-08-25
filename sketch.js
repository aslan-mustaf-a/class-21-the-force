const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var ballOptions = {
    restitution: 0.95
  }

  btn1 = createImg("up.png");
  btn1.position(100,100);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  btn2 = createImg("right.png");
  btn2.position(200,100);
  btn2.size(50,50);
  btn2.mouseClicked(hForce);

  ball = Bodies.circle(200,100,20,ballOptions)
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20)

  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x: 0 , y: 0},{x:0.05 , y: 0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}