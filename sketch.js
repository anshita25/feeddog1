//Create variables here
var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
  backgroundImg = loadImage("images/ground.webp");
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
  foodImage = loadImage("images/dogfood.png");


}

function setup() {
  createCanvas(480, 480);

  //Sprites

  food = createSprite(150,300,50,50);
  food.addImage(foodImage);
  food.scale = 0.2;


  dog = createSprite(400,270);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  database = firebase.database();

  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(backgroundImg);
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("black");
  stroke("BLACK")
  strokeWeight(1)
  text("FoodCount: "+foodStock,145,100);
textSize(45)
fill("yellow")
  text("Shreya's pet! ",130,40);
  fill("pink")
  text("Press Up arrow to feed the dog ",10,440);

  eatFood();
  if(foodStock===0){
    foodStock = 20;
  }}


function read(data){
  foodStock = data.val();
}

function eatFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 300;
  food.y = 300;
  food.scale = 0.2;

  }
  
  if(keyWentUp(UP_ARROW)){
    
    foodStock = foodStock;
    dog.addImage(dogImage);
    food.x = 150;
    food.y = 300;
    food.scale = 0.2;
    
  }
}

