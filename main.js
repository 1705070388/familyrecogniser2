function setup() {
    canvas = createCanvas(250,250);
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RlCPeeDIY/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model loaded");
}
function draw() {
    image(video, 0,0,300,300);
}