//main code for the snowflake assignment

//initialize canvas and graohics context
let cnv = document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600

//create an associative array to store an object of snowflakes
let snowflakes = []
console.log(snowflakes)

//function that draws a snowflake
function drawSnowflake(snowflakeInfo) {
    fill("white")
    circle(snowflakeInfo.x, snowflakeInfo.y, snowflakeInfo.r, "fill")
}

//function that returns an object with random snowlfake properties
function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5,10),
        yVel: randomInt(1,4)
    }
}

//function to move the snowlfake
function moveSnowflake(aSnowflake) {
    aSnowflake.x += randomInt(-2,3)
    aSnowflake.y += aSnowflake.yVel
    
    //border detection
    if (aSnowflake.y - aSnowflake.r * 2 > cnv.height) {
        aSnowflake.y = randomInt(-3, 0)
        aSnowflake.x = randomInt(0, cnv.width)
    }
}


requestAnimationFrame(draw)

function draw() {
    //clear canvas each time a snowflake is drawn 
    background("black")

    //draw and move snowflake
    for (i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i])
        drawSnowflake(snowflakes[i])
    }
    

    requestAnimationFrame(draw)
}


//event listeners
document.addEventListener("keydown", keydownhandler)

function keydownhandler(event) {
    if(event.keyCode == 39) { 
        //right arrow pressed adds a new snowflake
        snowflakes.push(newRandomSnowflake())

    }
    else if (event.keyCode == 37) {
        //left arrow remove the last bubble
        snowflakes.pop()
    }    
}


