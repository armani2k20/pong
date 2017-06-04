window.onload=function(){
    let start_game = document.getElementById("start-btn-icon");
    let pause_game = document.getElementById("pause-btn-icon");
    let quit_game = document.getElementById("quit-btn-icon");
    let game_menu = document.getElementById("game-main-menu");
    start_game.onclick = function(){
        game_menu.style.display = "none";
    }
    quit_game.onclick = function(){
        game_menu.style.display = "block";
    }

}
function init(){
    let game_area = document.getElementById("game-area");
    
    game_area.innerHTML = '<div class="game-menu" id="game-main-menu"><div class="game-menu-content"><h3>Play Game?</h3><img class="standard-icon" src="image/blank.png" id="start-btn-icon">'
    + '</div></div><div class="col-xs-12 game-actions"><div class="game-action pause-btn game-btn col-xs-2"><img class="standard-icon icon-sm" src="image/blank.png" id="pause-btn-icon"></div>'
    + '<div class="game-action health-container game-health col-xs-8"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png">'
    + '<img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-2" src="image/blank.png"><img class="icon-sm heart-icon score-1" src="image/blank.png"></div>'
    + '<div class="game-action quit-btn game-btn col-xs-2"><img class="standard-icon icon-sm" src="image/blank.png" id="quit-btn-icon"></div></div><div class="game-canvas"></div>'
}