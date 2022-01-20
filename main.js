butter_song = " ";
dynamite_song = " ";

function setup(){
    canvas = createCanvas(300, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 280);
}

function preload(){
    butter_song = loadSound("Butter song.mp3");
    dynamite_song = loadSound("Dynamite song.mp3");
}