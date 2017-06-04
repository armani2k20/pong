window.onload = function () {
    let ball = document.getElementById("ball");
    let ballVelocityX = 10;
    let ballVelocityY = 10;

    function ballMovement() {
        ball.style.top += ballVelocityX;
        ball.style.left += ballVelocityY;
        console.log(ball.style.top);
    }
    ballMovement();

    setInterval(ballMovement(), 100);
}