function preload() {
    ball_touch_paddel = loadSound("ball_touch_paddel.wav");
    missed = loadSound("missed.wav");
}

function setup() {
    var canvas = createCanvas(700, 600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");

}