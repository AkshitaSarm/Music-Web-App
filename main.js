butter_song = " ";
dynamite_song = " ";

leftWristx = 0;
leftWristy = 0;

rightWristx = 0;
rightWristy = 0;

score_leftWrist = 0;
status_leftWrist = " ";

score_rightWrist = 0;
status_rightWrist = " ";

var_song1 = " ";
var_song2 = " ";

function setup(){
    canvas = createCanvas(300, 280);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 280);
    fill("#00ffff");
    stroke("#FF0000");

    var_song1 = butter_song.isPlaying();
    console.log("Butter song : " + var_song1);

    var_song2 = dynamite_song.isPlaying();
    console.log("Dynamite song : " + var_song2);

    if(score_leftWrist > 0.2){
        circle(leftWristx, leftWristy, 15);
        dynamite_song.stop();
        if( var_song1 == false){
            butter_song.play();
        }
        else{
            document.getElementById("song_name").innerHTML = "Song played : Butter by BTS";
        }
    }

}

function preload(){
    butter_song = loadSound("Butter song.mp3");
    dynamite_song = loadSound("Dynamite song.mp3");
}

function gotPoses(result){
    if (result.length > 0){
        console.log(result);

        leftWristx = result[0].pose.leftWrist.x;
        leftWristy = result[0].pose.leftWrist.y;
        console.log("leftWristx" + leftWristx + "leftWristy" + leftWristy);

        rightWristx = result[0].pose.rightWrist.x;
        rightWristy = result[0].pose.rightWrist.y;
        console.log("rightWristx" + rightWristx + "rightWristy" + rightWristy);

        score_leftWrist = result[0].pose.keypoints[9].score;
        console.log(score_leftWrist);

        score_rightWrist = result[0].pose.keypoints[10].score;
        console.log(score_rightWrist);
    }
}


