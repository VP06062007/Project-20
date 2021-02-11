// Create variables for car,wall,speed,weight
var car,wall;
var speed,weight;

//val hight = 400;

function setup() 
{
  // Create canvas
  createCanvas(1600,400);

  // create sprite for wall and car
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, 200);
 
  // Random speed and weight for car
  speed = random(55,90);
  weight = random(400,1500);
}

function draw()
{
  // Background color
  background(0);  

  // Car velocity
  car.velocityX = speed;

  // Car value when it hits the wall
  if (car.isTouching(wall)) 
  {
    car.velocityX=0;
   
  // Car color according to the deformation values
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    // Green
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    // Yellow
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    // Red
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  }

  drawSprites();
}