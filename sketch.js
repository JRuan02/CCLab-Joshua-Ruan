class Note {
  constructor(file) {
    this.sound = loadSound(file);
  }

  play() {
    this.sound.play();
  }
}

class Piano {
  constructor() {
    this.notes = {
      C: new Note("C Note Part 2.mp3"),
      D: new Note("D Note - Made with Clipchamp.mp4"),
      E: new Note("E note.wav"),
      F: new Note("F Note.wav"),
      G: new Note("G Note.wav"),
      A: new Note("A Note.wav"),
      B: new Note("B Note.wav"),
    };
  }

  keyPressed(key) {
    if (key === 'C' || key === '1') {
      this.notes.C.play();
    } else if (key === 'S' || key === '2') {
      this.notes.D.play();
    } else if (key === 'D' || key === '3') {
      this.notes.E.play();
    } else if (key === 'F' || key === '4') {
      this.notes.F.play();
    } else if (key === 'G' || key === '5') {
      this.notes.G.play();
    } else if (key === 'A' || key === '6') {
      this.notes.A.play();
    } else if (key === 'B' || key === '7') {
      this.notes.B.play();
    }
  }
}

let piano;

function preload() {
  piano = new Piano();
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

function keyPressed() {
  piano.keyPressed(key);
}