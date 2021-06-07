var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(0,0,10,10);
    database = firebase.database();
    var locofnode = database.ref("ball/position");
    //on for read
    locofnode.on("value",readop,showerr);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeop(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeop(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeop(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeop(0,+1);
    }
    drawSprites();
}

function writeop(x,y){
    //set for write
    database.ref("ball/position").set({
      x: ball.x + x ,
      y: ball.y + y  
    })
}

function readop(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

 function showerr(){
     console.log("error");
 }