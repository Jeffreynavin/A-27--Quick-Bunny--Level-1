function preload() {
  //load game assets
 
}

function setup() {
  createCanvas(600,600);
  player = createSprite(40,550,30,30);
  target = createSprite(560,40,30,30);
  obs1 = createSprite(300,120,100,20);
  obs1.velocityX = 5;
  obs2 = createSprite(300,320,100,20);
  obs2.velocityX = -5;
 
  edges = createEdgeSprites();
 target.shapeColor="pink"
 obs1.shapeColor="red"
 obs2.shapeColor="red"
 player.shapeColor="white"
}

function draw() {
  background("green");  
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  if(keyDown("up")){
    player.y=player.y-3
  }
  if(keyDown("left")){
    player.x=player.x-3
  }
  if(keyDown("right")){
    player.x=player.x+3
  }
  if(keyDown("down")){
    player.y=player.y+3
  }
  if (player.isTouching(target)){
    text("you win",200,200)
  }
  if (player.isTouching(obs1)) {
    player.x=40;
    player.y=550;
  }
  if (player.isTouching(obs2)) {
    player.x=40;
    player.y=550;
  }


  drawSprites();
  
}