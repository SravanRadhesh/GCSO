var wall, car;
function setup() {
  createCanvas(800,400);

  wall = createSprite(400, 200, 50, 50);
  wall.shapeColor = "green";
  car = createSprite(200, 200, 50, 80);
  car.shapeColor = "red";
}

function draw() {
  background(0);  
  car.x = World.mouseX;
  car.y = World.mouseY;
  if (car.x-wall.x<wall.width/2 + car.width/2 && 
    wall.x-car.x<wall.width/2 +car.width/2
    && car.y-wall.y<wall.height/2 + car.height/2 && 
    wall.y-car.y<wall.height/2 + car.height/2){
    car.shapeColor="purple";
    wall.shapeColor="purple";
  }
  else{
    car.shapeColor = "red";
    wall.shapeColor  = "green";
  }
  drawSprites();
}