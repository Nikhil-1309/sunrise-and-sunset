const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var backgroundimage
function preload() {
    // create
     getBackgroundImg( ) 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundimage)
background(backgroundimage)

    // add condition to check if any background image is there to add
    

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format

    // write
     var responseJSON = await response.json();
        console.log(responseJSON);
        console.log(responseJSON.datetime)
         var datetime = responseJSON.datetime;
          var hour = datetime.slice(11,13)
          if(hour > 6 && hour < 18){
          bg = "sunrise2.png"    
          }
          else{
              bg = "sunset9.png"
          }
          backgroundimage =loadImage(bg)
           console.log(hour) }
 




