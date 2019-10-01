function setup () {
  createCanvas(700, 700);
  background (0);
  noStroke();
}

// multicolor circles function
function multicolorbrush() {
  var red = random (255);
  var blue = random (255);
  var green = random (255);
  translate(p5.Vector.fromAngle(millis() / 1000, 100));
  for (var s=25; s<=350; s+=50) {
    for (var m=25; m<=350; m+=50) {
      fill(red, blue, green);
      noStroke();
      ellipse(200+s, 200+m, 30);
    }
  }
}

// different color circle function
function keyTyped() {
  // red color cirlces
  if (key === 'r') {
    translate(p5.Vector.fromAngle(millis() / 1000, 100));
    for (var s=25; s<=350; s+=50) {
      for (var m=25; m<=350; m+=50) {
        fill('#A31C00');
        noStroke();
        ellipse(200+s, 200+m, 30);
      }
    }
  }
  // green color circles
  else if (key === 'g') {
    translate(p5.Vector.fromAngle(millis() / 1000, 100));
    for (var s=25; s<=350; s+=50) {
      for (var m=25; m<=350; m+=50) {
        fill('#006711');
        noStroke();
        ellipse(200+s, 200+m, 30);
      }
    }
  }
  // blue color circles
  else if (key === 'b') {
    translate(p5.Vector.fromAngle(millis() / 1000, 100));
    for (var s=25; s<=350; s+=50) {
      for (var m=25; m<=350; m+=50) {
        fill('#2C1C8A');
        noStroke();
        ellipse(200+s, 200+m, 30);
      }
    }
  }
}

// calling multicolor brush with mousePress
function draw () {
  if (mouseIsPressed) {
    multicolorbrush ();
 }
}
