//global variables
//ball items
let ballVelocityX=2;
let ballVelocityY=2;
//health items

window.onload = function () {
    let start_game = document.getElementById("start-btn-icon");
    let pause_game = document.getElementById("pause-btn-icon");
    let quit_game = document.getElementById("quit-btn-icon");
    let game_menu = document.getElementById("game-main-menu");
    let menu_text = document.getElementById("game-menu-text");
    //history variables
    let ballHistoryX;
    let ballHistoryY;
    let pause = false;
    let iid;
    let moveResult;

    start_game.onclick = function () {
        initHearts();
        menu_text.innerHTML = "Play Game?";
        game_menu.style.display = "none";
        iid = move();    
    }
    quit_game.onclick = function () {
        clearInterval(iid)
        game_menu.style.display = "block";
    }
    pause_game.onclick = function(){
        
        if(!pause){
            //remember last state
            ballHistoryX = ballVelocityX;
            ballHistoryY = ballVelocityY;

            //clear velocities to stop ball
            ballVelocityX=0;
            ballVelocityY=0;
            pause = true;
        }else{
            ballVelocityX = ballHistoryX
            ballVelocityY = ballHistoryY
            pause = false;
        }
    }
}

function loseLife() {
    let health_double = document.getElementsByClassName("score-2").length;
    let health_single = document.getElementsByClassName("score-1").length;
    let game_menu = document.getElementById("game-main-menu");
    let menu_text = document.getElementById("game-menu-text");
    let health_container = document.getElementById("game-health-container");   
    health_container.innerHTML = "";   
    let current_health = (health_double * 2) + (health_single);
    current_health--;
    console.log("health_double: " + current_health)

    let health_remainder = current_health % 2;
    if(current_health===0){
        menu_text.innerHTML = "Sorry Game Over! Play Again?"
        game_menu.style.display = "block";
        return;
    }
    
    for (let i = 1; i < current_health; i += 2) {
        health_container.innerHTML += '<img class="icon-sm heart-icon score-2" src="image/blank.png" id="heart-sixth">';
    }
    if (health_remainder != 0) {
        health_container.innerHTML += '<img class="icon-sm heart-icon score-1" src="image/blank.png" id="heart-sixth">';
    }   
}

function initHearts() {
    let health_container = document.getElementById("game-health-container");   
    health_container.innerHTML = "";
    for (let i = 1; i < 13; i += 2) { //12 hearts
        health_container.innerHTML += '<img class="icon-sm heart-icon score-2" src="image/blank.png" id="heart-sixth">';
    }
}
function init() {
    let game_area = document.getElementById("game-area");

    game_area.innerHTML = '<div class="game-menu" id="game-main-menu"><div class="game-menu-content"><h3>Play Game?</h3><img class="standard-icon" src="image/blank.png" id="start-btn-icon">'
        + '</div></div><div class="col-xs-12 game-actions"><div class="game-action pause-btn game-btn col-xs-2"><img class="standard-icon icon-sm" src="image/blank.png" id="pause-btn-icon"></div>'
        + '<div class="game-action health-container game-health col-xs-8"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png">'
        + '<img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-1" src="image/blank.png"></div>'
        + '<div class="game-action quit-btn game-btn col-xs-2"><img class="standard-icon icon-sm" src="image/blank.png" id="quit-btn-icon"></div></div><div class="game-canvas"></div>'
}

function move(){
    let ball = document.getElementById("ball");
    //let ballVelocityX = 2;
    //let ballVelocityY = 2;
    let goingRight = false;
    let goingDown = false;

    var iid = setInterval( function() {
        let top = ball.offsetTop;
        let left = ball.offsetLeft;
        let canvasWidth = document.getElementsByClassName("game-wrapper")[0].style.width;
        
        
        var y = ballVelocityY+top;
        var x= ballVelocityX+left;
        if (top > 350-20) {ballVelocityY = -1*Math.abs(ballVelocityY); y = ballVelocityY+top;} //console.log(" gt 249 top: " + top + " vy: " + ballVelocityY + " sum: " + x)}
        if (left > 600-20) {ballVelocityX = -1 * Math.abs(ballVelocityX); x= ballVelocityX+left;} //console.log(" gt 300 left: " + left + " vx: " + ballVelocityX + " sum: " + x)}
        if (top < 0) {ballVelocityY =  Math.abs(ballVelocityY); y= ballVelocityY+top;} //console.log(" lt 0 top: " + top + " vy: " + ballVelocityY + " sum: " + x)}
        if (left < 0) { ballVelocityX = Math.abs(ballVelocityX);x = ballVelocityX+left;loseLife()} //loseLife(); console.log(" lt 0 left: " + left + " vx: " + ballVelocityX + " sum: " + x)}

        
        ball.style.left = x + "px";
        ball.style.top = y + "px";

    },10)
    //ballMovement();
    return iid;
}
