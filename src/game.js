const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')


var bird = new Image();
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

bird.src = "../img/bird.png"; // Указание нужного изображения
bg.src = "../img/bg.png"; // Аналогично
fg.src = "../img/fg.png"; // Аналогично
pipeUp.src = "../img/pipeUp.png"; // Аналогично
pipeBottom.src = "../img/pipeBottom.png"; // Аналогично

// Звуковые файлы
var fly = new Audio(); // Создание аудио объекта
var score_audio = new Audio(); // Создание аудио объекта

fly.src = "../audio/fly.mp3"; // Указание нужной записи
score_audio.src = "../audio/score.mp3"; // Аналогично

let gap = 90



//block
let pipe = []

pipe[0] = {
    x: cvs.width,
    y: 0
}

document.addEventListener('keydown', moveUp)

function moveUp() {
    yPos -= 35
    fly.play()
    console.log(xPos, yPos)
}

//Bird position
let xPos = 10
let yPos = 150
let grav = 1

function draw() {
    ctx.drawImage(bg, 0, 0)

    ctx.drawImage(fg, 0, cvs.height - fg.height)

    ctx.drawImage(bird, xPos, yPos)

    yPos += grav


    for(let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)

        pipe[i].x--

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }
    }
    

    
    requestAnimationFrame(draw)
}

pipeBottom.onload = draw 