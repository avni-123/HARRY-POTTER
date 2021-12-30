var SERVE = 1;

var PLAY = 6;

var SKID = 2;

var H = 3;

var AJ = 4;

var AJLF = 5;

var AJKF = 6;

var END = 0;

var gameState = SERVE;

var harryPotterImg;

var rightArrowKey, rightArrowkeyImg;

var nextPg;

var snitch, snitchImg;

var harrypotter, harrypotterImg;

var gift, giftImg;

var bg, bgImg;

var ground;

var malfoy, malfoyImg;

var Snitchgroup;

var Malfoygroup;

var Giftgroup;

var score;

var pg;

var level;

var gift;

var bg2, bgImg2;

var bg3, bgImg3;

var gift2, gift2Img;

var wand, wandImg;

var snake, snakeImg;

var bg4, bgImg4;

var bg5, bgImg5;

var Snakegroup;

var Wandgroup;

var Giftboxgroup

var book, bookImg;

var ss, ssImg;

var gift3, gift3Img;

var Bookgroup;

var SSgroup;

var Gift3group;

var Next;

var bg6, bg6Img;

var bl, blImg;

var owl, owlImg;

var gift4, gift4Img;

var BLgroup;

var Owlgroup;

var Gift4group;

var NextLevel;

var bg7, bg7Img;

var voldemort, vImg;

var power, powerImg;

var heart, heartImg;

var Vgroup;

var Pgroup;

var Hgroup;

var Savage;

var bg8, bgImg8;

function preload(){
  
  harryPotterImg = loadImage("hp.png");
  
  rightArrowkeyImg = loadImage("right arrow key.png");
  
  snitchImg = loadImage("snitch.png");
  
  harrypotterImg = loadAnimation("harrypotter.png", "harrypotter_2.png");
  
  giftImg = loadImage("gift.png");
  
  bgImg = loadImage("bg.png");
  
  malfoyImg = loadImage("Malfoy.png", "Malfoy_2.png");
  
  bgImg2 = loadImage("bg2.png");
  
  bgImg3 = loadImage("bg3.png");
  
  gift2Img = loadImage("giftbox.png");
   
  snakeImg = loadImage("snake.png");
  
  bgImg4 = loadImage("bg4.png");
  
  wandImg = loadImage("wand1.png");
  
  bgImg5 = loadImage("bg5.png");
  
  bookImg = loadImage("book.png");
  
  ssImg = loadImage("severusSnape.png");
  
  gift3Img = loadImage("gift3.png");
  
  bg6Img = loadImage("bg6.png");
  
  blImg = loadImage("BellatrixLestrange.png");
  
  gift4Img = loadImage("gift4.png");
  
  owlImg = loadImage("owl.png");
  
  bg7Img = loadImage("bg7.png");
  
  vImg = loadImage("voldemort.png");
  
  powerImg = loadImage("power.png");
  
  heartImg = loadImage("heart.png");
  
  bgImg8 = loadImage("bg8.png");
  
}

function setup(){
  
  createCanvas(680, 610);
  
  rightArrowKey = createSprite(270, 340);
  rightArrowKey.addImage("rightArrowkeyImg", rightArrowkeyImg);
  rightArrowKey.scale = 0.2;
  
  bg = createSprite(340, 305, 680, 100);
  bg.addImage("bgImg3", bgImg3);
  bg.scale = 5.5;
  
  bg4 = createSprite(340, 305, 680, 100);
  bg4.addImage("bgImg4", bgImg4);
  bg4.scale = 5.5;
  
  bg5 = createSprite(340, 305, 680, 100);
  bg5.addImage("bgImg5", bgImg5);
  bg5.scale = 5;
  
  bg6 = createSprite(340, 305, 680, 100);
  bg6.addImage("bg6Img", bg6Img);
  bg6.scale = 5;
  
  bg7 = createSprite(340, 305, 680, 100);
  bg7.addImage("bg7Img", bg7Img);
  bg7.scale = 5.5;
  
  bg8 = createSprite(340, 305, 680, 100);
  bg8.addImage("bgImg8", bgImg8);
  bg8.scale = 5.5;
  
  harrypotter = createSprite(60, 450);
  harrypotter.addAnimation("harrypotterImg", harrypotterImg);
  
  ground = createSprite(100, 450, 1800, 10);
  
  snitchGroup = new Group();
  
  malfoyGroup = new Group();
  
  giftGroup = new Group();
  
  snakeGroup = new Group();
  
  wandGroup = new Group();
  
  giftboxGroup = new Group();
  
  bookGroup = new Group();
  
  ssGroup = new Group();
  
  gift3Group = new Group();
  
  blGroup = new Group();
  
  gift4Group = new Group();
  
  owlGroup = new Group();
  
  vGroup = new Group();
  
  pGroup = new Group();
  
  hGroup = new Group();
  
  score = 0;
  
}

function draw(){
  
  drawSprites();
  
//why will you call them all the time???? Even for your cover page?
  
  //spawnSnitch & malofy
  
  if(gameState === SERVE){
    
     background(harryPotterImg);
    
    strokeWeight(4);
    stroke("rgb(50, 50, 100)");
    fill("grey");
    textFont("Algerian");
    textSize(22);
    text("HARRY POTTER : ", 250, 30);
  
    strokeWeight(4);
    stroke("orange");
    fill("yellow");
    textFont("Times New Roman");
    textSize(22);
    text("Main Story - In this Game, Harry Potter will start his journey from level 1",10,90);
  
    strokeWeight(4);
    stroke("orange");
    fill("yellow");
    textFont("Times New Roman");
    textSize(22);
    text(" to defeat Voldemort. There are total 5 levels in the game with harry ",10, 130);
  
  strokeWeight(4);
  stroke("orange");
  fill("yellow");
  textFont("Times New Roman");
  text(" having different powers in each level. Each time harry touches the gift box,", 10, 170);
    
  strokeWeight(4);
  stroke("orange");
  fill("yellow");   
  textFont("Times New Roman");
  text("you will go to the next level. At the last level, when he touches the dragon,", 10, 210);
    
  strokeWeight(4);
  stroke("orange");
  fill("yellow");   
  textFont("Times New Roman");
  text("Voldemort will be defeated forever. BEST OF LUCK!!", 10, 250);
  
  strokeWeight(4);
  stroke("rgb(250, 100, 100)");
  fill("rgb(50, 200, 100)");
  textFont("Chiller");
  textSize(55);
  text("Click     to go to next Page", 150, 350);
    
    bg.visible = false;
    harrypotter.visible = false;
    ground.visible = false;
    bg4.visible = false;
    bg5.visible = false;
    bg6.visible = false;
    bg8.visible = false;
    
    if(mousePressedOver(rightArrowKey)){
      
      gameState = PLAY;
      
    }
    
  }
  
    if (gameState === PLAY){
      
      rightArrowKey.visible = false;
      nextPg();
      
    
  
  if(harrypotter.isTouching(giftGroup)){
    
    gameState = H;
    
    giftGroup.destroyEach();
    
    score = 0;
  }  
  }
  
  if(gameState === H){ 
    
    pg();
    
  
  
  if(harrypotter.isTouching(giftboxGroup)){
    
    gameState = SKID;
    
    giftboxGroup.destroyEach();
    
    score = 0;
  } 
  }
  
  if(gameState === SKID){ 
    
    level();
    
  
  
  if(harrypotter.isTouching(gift3Group)){
    
    gameState =  AJ;
    
    gift3Group.destroyEach();
    
    score = 0;
  } 
  }
  
  if(gameState === AJ){ 
    
    Next();
    
  
  
  if(harrypotter.isTouching(gift4Group)){
    
    gameState =  AJLF;
    
    gift4Group.destroyEach();
    
    score = 0;
  }  
  }
  
  if(gameState === AJLF){ 
    
    NextLevel();
    
  
  
  if(harrypotter.isTouching(pGroup)){
    
    gameState =  AJKF;
    bg8.visible = true;
  
  harrypotter.visible = false;
      
  }
  }
  
  if(gameState === AJKF){ 
    

      pGroup.destroyEach();
    
  }
  
  }
  
function nextPg(){
  
  fill("red");
  textSize(22);
  text("SCORE : " + score, 470, 25);
  
  spawnSnitch();
  
  spawnMalfoy();
  
  spawnGift();
  
  bg.visible = true;
  harrypotter.visible = true;
  ground.visible = false;
  bg4.visible = false;
  bg5.visible = false;
  bg6.visible = false;
  bg7.visible = false;
  bg8.visible = false;
  
  if(keyDown("space")  && harrypotter.y >= 100){
     
        harrypotter.velocityY = -17;
       
    }

  bg.velocityX = -6;
  
  if (bg.x < 0){
    
      bg.x = 340;
    
    }
  
  harrypotter.velocityY += 1; 
  
  harrypotter.collide(ground);
  
  ground.visible = false;
  
    if(snitchGroup.isTouching(harrypotter)){
      
      score = score + 2;
      
      snitchGroup.destroyEach();
      
    }
    
    if(malfoyGroup.isTouching(harrypotter)){
      
      score = score - 1;
      
      malfoyGroup.destroyEach();
      
    }
  
 }

function pg(){
  
  spawnSnake();
  
  spawnWand();
  
  spawnGift2();
  
  fill("red");
  textSize(22);
  text("SCORE : " + score, 470, 25);
  
  harrypotter.visible = true;
  bg4.visible = true;
  
  if(keyDown("space")  && harrypotter.y >= 100){
     
        harrypotter.velocityY = -17;
       
    }
  
  bg4.velocityX = -6;
  
  if (bg4.x < 0){
    
      bg4.x = 340;
    
    }
  
  harrypotter.velocityY += 1; 
  
  harrypotter.collide(ground);
  
  ground.visible = false;
  
  if(wandGroup.isTouching(harrypotter)){
      
      score = score + 4;
      
      wandGroup.destroyEach();
      
    }
    
    if(snakeGroup.isTouching(harrypotter)){
      
      score = score - 2;
      
      snakeGroup.destroyEach();
      
    }
  
}

function level(){
  
  spawnSS();
  
  spawnBook();
  
  spawnGift3();
  
  fill("red");
  textSize(22);
  text("SCORE : " + score, 470, 25);
  
  bg5.visible = true;
  harrypotter.visible = true;
  bg6.visible = false;
  bg7.visible = false; 
  
  if(keyDown("space")  && harrypotter.y >= 100){
     
        harrypotter.velocityY = -17;
       
    }

  bg5.velocityX = -6;
  
  if (bg5.x < 0){
    
      bg5.x = 340;
    
    }
  
  harrypotter.velocityY += 1; 
  
  harrypotter.collide(ground);
  
  if(bookGroup.isTouching(harrypotter)){
      
      score = score + 6;
      
      bookGroup.destroyEach();
      
    }
    
    if(ssGroup.isTouching(harrypotter)){
      
      score = score - 3;
      
      ssGroup.destroyEach();
      
    }
  
}

function Next(){
  
  spawnBL();
  
  spawnOwl();
  
  spawnGift4();
  
  fill("red");
  textSize(22);
  text("SCORE : " + score, 470, 25);
  
  harrypotter.visible = true;
  bg6.visible = true;
  bg8.visible = false; 
  
  if(keyDown("space")  && harrypotter.y >= 100){
     
        harrypotter.velocityY = -17;
       
    }

  bg6.velocityX = -6;
  
  if (bg6.x < 0){
    
      bg6.x = 340;
    
    }
  
  harrypotter.velocityY += 1; 
  
  harrypotter.collide(ground);
  
  if(owlGroup.isTouching(harrypotter)){
      
      score = score + 8;
      
      owlGroup.destroyEach();
      
    }
    
    if(blGroup.isTouching(harrypotter)){
      
      score = score - 4;
      
      blGroup.destroyEach();
      
    }
  
}

function NextLevel(){
  
  spawnV();
  
  spawnP();
  
  spawnH();
  
  fill("red");
  textSize(22);
  text("SCORE : " + score, 470, 25);
  
  harrypotter.visible = true;
  bg7.visible = true;
  
  if(keyDown("space")  && harrypotter.y >= 100){
     
        harrypotter.velocityY = -17;
       
    }

  bg7.velocityX = -6;
  
  if (bg7.x < 0){
    
      bg7.x = 340;
    
    }
  
  harrypotter.velocityY += 1; 
  
  harrypotter.collide(ground);
  
  if(hGroup.isTouching(harrypotter)){
      
      score = score + 10;
      
      hGroup.destroyEach();
    
    text("CONGO!! U HAVE DEFEATED VOLDEMORT....", 210, 200);
      
    }
    
    if(vGroup.isTouching(harrypotter)){
      
      score = score - 5;
      
      vGroup.destroyEach();
      
    }
  
  if(pGroup.isTouching(harrypotter)){

    gameState = END;
    
    pGroup.destroyEach();
    
    vGroup.destroyEach();
    
    hGroup.destroyEach();
    
    harrypotter.visible = false;
    
    bg7.velocityX = 0;
    
  }
  
}

function Savage(){
  
  
  
}

function spawnMalfoy(){
  
  if(frameCount % 100 === 0){
    
 //adjust ur sprite position as per size of canvas
    
    var malfoy = createSprite(300, 500, 10, 10);
    
//what is the point of having a random function when you have to chose between 200 & 200
    
    malfoy.y = Math.round(random(500, 400));
    
    malfoy.addAnimation("malfoyImg", malfoyImg);
    
    malfoy.scale = 1;
    
    malfoy.velocityX = -8;
    
    malfoy.lifetime = 800;
    
    //add enemy to the group
    malfoyGroup.add(malfoy);
    
  }
  
}

function spawnSnitch(){
  
  if (frameCount % 200 === 0){
    
    var snitch = createSprite(600, 200, 40, 10);
    
    snitch.y = Math.round(random(200, 100));
    
    snitch.addImage(snitchImg);
    
    snitch.scale = 0.2;
    
    snitch.velocityX = -5;
    
     //assign lifetime to the variable
    snitch.lifetime = 200;
    
    //adjust the depth
    snitch.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    snitchGroup.add(snitch);
    
  }
  
}

function spawnGift(){
  
  if (frameCount % 300 === 0){
    
    var gift = createSprite(600, 200, 40, 10);
    
    gift.y = Math.round(random(200, 100));
    
    gift.addImage(giftImg);
    
    gift.scale = 0.5;
    
    gift.velocityX = -5;
    
     //assign lifetime to the variable
    gift.lifetime = 200;
    
    //adjust the depth
    gift.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    giftGroup.add(gift);
    
  }
  
}

function spawnSnake(){
  
  if(frameCount % 100 === 0){
    
    var snake = createSprite(400, 500, 10, 10);
    
    snake.y = Math.round(random(500, 400));
    
    snake.addAnimation("snakeImg", snakeImg);
    
    snake.scale = 0.8;
    
    snake.velocityX = -8;
    
    snake.lifetime = 800;
    
    //add enemy to the group
    snakeGroup.add(snake);
    
  }
  
}

function spawnWand(){
  
  if (frameCount % 200 === 0){
    
    var wand = createSprite(600, 200, 40, 10);
    
    wand.y = Math.round(random(200, 100));
    
    wand.addImage(wandImg);
    
    wand.scale = 1;
    
    wand.velocityX = -5;
    
     //assign lifetime to the variable
    wand.lifetime = 200;
    
    //adjust the depth
    wand.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    wandGroup.add(wand);
    
  }
  
}

function spawnGift2(){
  
  if (frameCount % 300 === 0){
    
    var gift2 = createSprite(600, 200, 40, 10);
    
    gift2.y = Math.round(random(200, 100));
    
    gift2.addImage(gift2Img);
    
    gift2.scale = 0.7;
    
    gift2.velocityX = -5;
    
     //assign lifetime to the variable
    gift2.lifetime = 200;
    
    //adjust the depth
    gift2.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    giftboxGroup.add(gift2);
    
  }
  
}

function spawnSS(){
  
  if(frameCount % 100 === 0){
    
    var ss = createSprite(400, 500, 10, 10);
    
    ss.y = Math.round(random(500, 400));
    
    ss.addAnimation("ssImg", ssImg);
    
    ss.scale = 0.8;
    
    ss.velocityX = -8;
    
    ss.lifetime = 800;
    
    //add enemy to the group
    ssGroup.add(ss);
    
  }
  
}

function spawnBook(){
  
  if (frameCount % 200 === 0){
    
    var book = createSprite(600, 200, 40, 10);
    
    book.y = Math.round(random(200, 100));
    
    book.addImage(bookImg);
    
    book.scale = 0.7;
    
    book.velocityX = -5;
    
     //assign lifetime to the variable
    book.lifetime = 200;
    
    //adjust the depth
    book.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    bookGroup.add(book);
    
  }
  
}

function spawnGift3(){
  
  if (frameCount % 300 === 0){
    
    var gift3 = createSprite(600, 200, 40, 10);
    
    gift3.y = Math.round(random(200, 100));
    
    gift3.addImage(gift3Img);
    
    gift3.scale = 0.7;
    
    gift3.velocityX = -5;
    
     //assign lifetime to the variable
    gift3.lifetime = 200;
    
    //adjust the depth
    gift3.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    gift3Group.add(gift3);
    
  }
  
}

function spawnBL(){
  
  if(frameCount % 100 === 0){
    
    var bl = createSprite(400, 500, 10, 10);
    
    bl.y = Math.round(random(500, 400));
    
    bl.addAnimation("blImg", blImg);
    
    bl.scale = 1.1;
    
    bl.velocityX = -8;
    
    bl.lifetime = 800;
    
    //add enemy to the group
    blGroup.add(bl);
    
  }
  
}

function spawnOwl(){
  
  if (frameCount % 200 === 0){
    
    var owl = createSprite(600, 200, 40, 10);
    
    owl.y = Math.round(random(200, 100));
    
    owl.addImage(owlImg);
    
    owl.scale = 0.8;
    
    owl.velocityX = -5;
    
     //assign lifetime to the variable
    owl.lifetime = 200;
    
    //adjust the depth
    owl.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    owlGroup.add(owl);
    
  }
  
}

function spawnGift4(){
  
  if (frameCount % 300 === 0){
    
    var gift4 = createSprite(600, 200, 40, 10);
    
    gift4.y = Math.round(random(200, 100));
    
    gift4.addImage(gift4Img);
    
    gift4.scale = 0.8;
    
    gift4.velocityX = -5;
    
     //assign lifetime to the variable
    gift4.lifetime = 200;
    
    //adjust the depth
    gift4.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    gift4Group.add(gift4);
    
  }
  
}

function spawnV(){
  
  if(frameCount % 100 === 0){
    
    var v = createSprite(400, 500, 10, 10);
    
    v.y = Math.round(random(500, 400));
    
    v.addAnimation("vImg", vImg);
    
    v.scale = 0.8;
    
    v.velocityX = -8;
    
    v.lifetime = 800;
    
    //add enemy to the group
    vGroup.add(v);
    
  }
  
}

function spawnP(){
  
  if (frameCount % 300 === 0){
    
    var power = createSprite(600, 200, 40, 10);
    
    power.y = Math.round(random(200, 100));
    
    power.addImage(powerImg);
    
    power.scale = 1.5;
    
    power.velocityX = -5;
    
     //assign lifetime to the variable
    power.lifetime = 200;
    
    //adjust the depth
    power.depth = harrypotter.depth;
    
    harrypotter.depth = harrypotter.depth + 1;
    
    pGroup.add(power);
    
  }
  
}

function spawnH(){
  
  if (frameCount % 300 === 0){
    
    var heart = createSprite(600, 200, 40, 10);
    
    heart.y = Math.round(random(200, 100));
    
    heart.addImage(heartImg);
    
    heart.scale = 0.6;
    
    heart.velocityX = -5;
    
     //assign lifetime to the variable
    heart.lifetime = 200;
    
    //adjust the depth
    heart.depth = harrypotter.depth;
      
    harrypotter.depth = harrypotter.depth + 1;
    
    hGroup.add(heart);
    
  }
  
}
