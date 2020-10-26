var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect, movingRect);
  if (isTouching(fixedRect, movingRect)) {
    object1.shapeColor = "red";
    object2.shapeColor = "red";}
    else {
    object1.shapeColor = "green";
    object2.shapeColor = "green";
    }

  drawSprites();
}
