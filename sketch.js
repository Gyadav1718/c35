var ball,database,position,ballposition;

function setup(){
database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition,showerror)
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
}
    drawSprites();
}
function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}
function changePosition(a,b){
    database.ref('ball/position').set({
        x:position.x+a,  y:position.y+b
    })
}
function showerror(){
cansole.log("error in writing to the database");
}
