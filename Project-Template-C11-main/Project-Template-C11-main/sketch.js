var path,boy, leftBoundary,rightBoundary,goomba;
var pathImg,boyImg,goombaImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadImage("MARIOOO.gif")
  goombaImg = loadImage("GOOMBA.gif")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;



goomba=createSprite(80,6,40,10)
goomba.addImage(goombaImg)
goomba.scale = 0.1
goomba.velocityY = 5

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}



function draw() {
  background(0);
  background("black")
  
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);


   if(path.y > 400){
    path.y = height/2
   }

  
  
  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}



function spawnGoomba(){

  if (frameCount % 60 === 0){
    goomba = createSprite(80, 6, 40, 10)
    goomba.velocityY = 5;
    goomba.addImage(goombaImg);
    goomba.scale = 0.1;
    goomba.y = Math.round(random(10,100))
   }



}
