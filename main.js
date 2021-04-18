function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 240);
    video = createCapture(VIDEO);
    video.hide();
    colour = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(colour);
}

function take_snapshot() {
    save('UrSelfie_CustomisedColour.png');
}

function filter_colour() {
    colour = document.getElementById("filter").value;
}