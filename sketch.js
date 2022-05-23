
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg1

var btn2;

var spin1, spin2, spin3, spin4

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  
  var bg_options ={
    isStatic: true
  };

   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  spin1 = new Ground(50,370,50,30)
  spin2 = new Ground(150,370,50,30)
  spin3 = new Ground(250,370,50,30)
  spin4 = new Ground(350,370,50,30)

  bg1 = createImg("background1.jpg")
  bg1.size(400,400)
  bg1.position(1,1)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(bg1);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
  
  spin1.show()
  spin2.show()
  spin3.show()
  spin4.show()
   Engine.update(engine)

//console.log(Ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  