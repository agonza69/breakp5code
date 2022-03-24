/*
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);
  
}
*/

let x = 30;
let y = 24;
let easing = 0.25;

function setup() {
  createCanvas(400, 400);
  noStroke();
  strokeWeight(2);
}

function draw() {
  background(100, 34, 203);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x + 100, y + 50, 30, 50);

  if (mouseIsPressed) {
    stroke(95);
  } else {
    stroke(137, 284, 200);
  }
  rect(mouseX - 66, mouseY, mouseX + 46, mouseY);
  triangle(mouseX, mouseY - 100, mouseX, mouseY + 66);


}


