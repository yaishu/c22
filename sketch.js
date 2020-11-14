const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world, ground)

  var ball_options = {
    restitution:1.5
  }

  ball = Bodies.circle(400,200,25,ball_options);
  World.add(world,ball)
}


function draw() {
  background("yellow");  
  Engine.update(engine)
  rectMode(CENTER)
  fill("brown");
  rect(ground.position.x, ground.position.y, 800, 20);
  
  ellipseMode(RADIUS)
  fill("skyblue")
  ellipse(ball.position.x, ball.position.y, 25,25);
  
}