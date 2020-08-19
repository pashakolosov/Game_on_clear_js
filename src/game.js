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