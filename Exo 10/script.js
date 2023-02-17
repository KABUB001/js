var div = document.getElementById("dv");


/*document.addEventListener("keyup", function(e){
    
    if (e.keyCode == 39) {
        div.style.transform += "translateX(50px)";
    }
    else if(e.keyCode == 37){
        div.style.transform += "translateX(-50px)";
    }
    else if(e.keyCode == 38){
        div.style.transform += "translateY(-50px)";
    }
    else if(e.keyCode == 40){
        div.style.transform += "translateY(50px)";
    }
    else console.log(e.keyCode);
})*/
var x = 10;
var y = 10;
var widthSquare = 20;
var heigthSquare = 20;
var canvas = document.getElementById("canva");
var context = canvas.getContext("2d");
context.fillStyle = "yellow";
context.fillRect(x * widthSquare, y * heigthSquare,widthSquare,heigthSquare);
var snake = [];
snake = [[2, 3], [3, 3], [4, 3], [5, 3], [6, 3]];

function changeDirection(direction){
    let last = null;
    let first = null;
    switch(direction) {
        case 39 : snake.shift();
        last = snake[snake.length - 1];
        snake.push([last[0]+1, last[1]]);
        break;

        case 37 : snake.shift();
        snake.pop();
        first = snake[0];
        snake.onShift([first[0]-1, first[1]]);
        break;

        case 37 : snake.shift();
        last = snake[snake.length - 1];
        snake.push([last[0]+1, last[1]]);
        break;

    }
}

function drow(snake){
    context.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < (snake.length); i++) {
        const [x,y] = snake[i];
        context.fillStyle = "green";
        context.fillRect(x * widthSquare, y * heigthSquare,widthSquare,heigthSquare);
    }   
}

setInterval(function(){
snake.shift();
let last = snake[snake.length - 1];
snake.push([last[0]+1, last[1]])
/*if (last[0]+1 == 25){
    alert("GAME OVER")
}*/
drow(snake);
}, 500)
drow(snake);



