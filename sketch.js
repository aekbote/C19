
var PLAY = 1;
var gameState = PLAY;
var dragonImg, dragonGroup;
var forestImg, forest;
var knightImg, knight;
var invisibleGround;
var score;


function preload(){
// adding images to variable names
    forestImg = loadImage("forest.png");
    knightImg = loadImage("knight.png");
    dragonImg = loadImage("dragon.png");
}
  
function setup() {
 createCanvas(600,400);
    //displaying score
    text("Score: "+ score, 550,50);

    //creating knight
    knight = createSprite(80,320);
    knight.addImage(knightImg);
    knight.scale = 0.15;

    //creating invisible ground so knight won't fall
    invisibleGround = createSprite(300,390,600,20);
    invisibleGround.visible = true;

    score = 0;
}

function draw() {
    background(forestImg);

    if(gameState === PLAY){

        //jump when the space key is pressed
       if(keyDown("space") && knight.y >= 100 ) {
            knight.velocityY = -10;}

      if(dragonGroup.isTouching(knight)){
             gameState = END;
        
        }
       
        //add gravity
        knight.velocityY = knight.velocityY + .8;
    }

    else if (gameState === END) {
    
         ground.velocityX = 0;
         knight.velocityY = 0
        

       dragonGroup.setLifetimeEach(-1);
    
       dragonGroup.setVelocityXEach(0);
    
   
    }

    knight.collide(invisibleGround);

    SpawnDragons();

    drawSprites();
}

function SpawnDragons(){
    //creating dragon
    if(frameCount % 200 == 0){
        var dragon = createSprite(620,320);
        dragon.addImage(dragonImg);
        dragon.scale = 0.3;
        dragon.velocityX = -2;
    }
   dragon.lifetime = 300;

   //add each dragon to the group
   dragonGroup.add(dragon);
}
