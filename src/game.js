const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')


const bird = new Image();
const bg = new Image(); // Создание объекта
const fg = new Image(); // Создание объекта
const pipeUp = new Image(); // Создание объекта
const pipeBottom = new Image(); // Создание объекта

bird.src = "../img/bird.png"; // Указание нужного изображения
bg.src = "../img/bg.png"; // Аналогично
fg.src = "../img/fg.png"; // Аналогично
pipeUp.src = "../img/pipeUp.png"; // Аналогично
pipeBottom.src = "../img/pipeBottom.png"; // Аналогично

// Звуковые файлы
const fly = new Audio(); // Создание аудио объекта
const score_audio = new Audio(); // Создание аудио объекта
const fail = new Audio(); 

fly.src = "../audio/fly.mp3"; // Указание нужной записи
score_audio.src = "../audio/score.mp3"; // Аналогично
fail.src = '../audio/DFrAg_-_GONCSHIK_NELEGALNYJ_REMIX_(mp3.mn).mp3'





//block
let pipe = []

pipe[0] = {
    x: cvs.width,
    y: 0
}

document.addEventListener('keydown', moveUp)

function moveUp() {
    yPos -= jump
    fly.play()
    console.log(xPos, yPos, score)
}

//Bird position
let xPos = 10
let yPos = 150
let grav = 1.7
let jump = 70
let gap = 190
let score = 0
let record = 0

function draw() {
    ctx.drawImage(bg, 0, 0)

    ctx.drawImage(fg, 0, cvs.height - fg.height)

    ctx.drawImage(bird, xPos, yPos)

    fail.play()
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

        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
            || yPos + bird.height >= pipe[i].y + pipeUp.height + 
            gap || yPos + bird.height >= cvs.height - fg.height)) {

                location.reload()
                
                console.log('hello')
        }

        if (pipe[i].x == 5) {
            score++
            
            score_audio.play()  
        }
         
        
    }
    
    ctx.fillStyle = "#000"
    ctx.font = "24px Verdana"
    ctx.fillText("Score: " + score, 10, cvs.height - 20)
    
    
    requestAnimationFrame(draw)
}

pipeBottom.onload = draw 