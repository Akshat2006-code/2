

var play

function preload(){
  photo=loadImage("download.png");
  
  }

  function setup() {
    canvas = createCanvas(1800,1000);
    play=createSprite(580,440,30,30);
    play.addImage(photo); 
    play.scale=2.1;
  }


function draw() {
  background(255,255,255);  

 
  fill("Grey");
  textSize(135);
  text("2021", 420, 100);

  fill("Red");
  textSize(45);
  text("Welcome to Bacchus Marsh College!", 250, 200);
  fill("Blue");
  textSize(45);
  text("This is to celebrate for passing 2020 successfully!", 150, 240);
  ///fill("Blue");
  //textSize(25);
  //text("The Visual Communication students have made a 2021 poster that represents our time in covid-19.", 170, 230);
  

  drawSprites();

}