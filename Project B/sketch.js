let C; //1
let D; //2
let E; //3
let F; //4
let G; //5
let A; //6 
let B; //7

function preload() {
  C = loadSound("C Note Part 2.mp3");
  D = loadSound ("D Note - Made with Clipchamp.mp4")
  E = loadSound ("E note.wav")
  F = loadSound ("F Note.wav")
  G = loadSound ("G Note.wav")
  A = loadSound ("A Note.wav")
  B = loadSound ("B Note.wav") 
}

function keyPressed() {
  if (key === 'C' || key === '1') {
    C.play();
  } else if (key === 'S' || key === '2') {
    D.play();
  } else if (key === 'D' || key === '3') {
    E.play();
  } else if (key === 'F' || key === '4') {
    F.play();
  } else if (key === 'G' || key === '5') {
    G.play();
  } else if (key === 'A' || key === '6') {
    A.play();
  } else if (key === 'B' || key === '7') {
    B.play();
  }
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0);
  textSize(16);
  text("Marry had a little Lamb: 3 2 1 2 3 3 3 2 2 2 3 5 5 3 2 1 2 3 3 3 2 2 3 2 1", 50, 200);
}