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
      //Right Hand
      C: new Note("C Note Part 2.mp3"),
      D: new Note("D Note - Made with Clipchamp.mp4"),
      E: new Note("E note.wav"),
      F: new Note("F Note.wav"),
      G: new Note("G Note.wav"),
      A: new Note("A Note.wav"),
      B: new Note("B Note.wav"),
      OC: new Note ("Oct 5 C.m4a"),
      OD: new Note ("Oct D - Made with Clipchamp - Copy.mp4"),
      OE: new Note ("OE - Made with Clipchamp.mp4")
      
      //Left Hand1
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
    else if (key === 'OC' || key === '8') {
      this.notes.OC.play();
    }
    else if (key === 'OD' || key === '9') {
      this.notes.OD.play();
    }
     else if (key === 'OE' || key === '0') {
      this.notes.OE.play();
    }
    
  }
}

let piano;

function preload() {
  piano = new Piano();
}

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(220);
  fill(0);
  textSize(16);
  text("Marry had a little Lamb: 3 2 1 2 3 3 3 2 2 2 3 5 5 3 2 1 2 3 3 3 2 2 3 2 1", 20, 50);
  text("Old Mcdonald Had A Farm: 8 8 8 5 6 6 5 0 0 9 9 8 5 8 8 8 5 6 6 5 0 0 9 9 8", 20, 150);
  text("Jingle Bell: 5 5 6 5 8 7 5 5 6 5 9 8", 20, 250);
  text("London Bridge: 5 6 5 4 3 4 5 2 3 4 3 4 5 5 6 5 4 3 4 5 2 5 3 1", 20, 350);
  text("Rudoplh: 5 6 5 3 8 6 5 5 6 5 6 5 8 7 4 5 4 2 7 6 5 5 6 5 6 5 6 3 5 6 5 3 8 6 5 5 6 5 6 5 8 7 4 5 4 2 7 6 5 5 6 5 6 5 7 8", 20, 450);
  text("Frosty the Snowman: 5 3 4 5 8 7 8 9 8 7 6 5 7 8 9 8 7 6 5 8 3 5 6 5 4 3 4 5 5 3 4 5 8 7 8 9 8 7 6 5 7 8 7 6 5 8 3 5 6 5 4 3 2 1", 20, 550);
  

}

function keyPressed() {
  piano.keyPressed(key);
}