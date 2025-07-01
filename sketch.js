// TITLE
// artist
// date
// for FOAH2030: COMPUTATIONAL ART

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#00BCD44C');
  o((width / 5) * 2, height / 2);
  t((width / 5) * 3, height / 2);
}

function o(x, y) {
  let count = 0;
  const rad = 50;
  const nPoints = 20;
  strokeWeight(2);
  for (let i = 0; i < TWO_PI; i += TWO_PI / nPoints) {
    let locX = x + rad * cos(i);
    let locY = y + rad * sin(i);
    push();
    fill(map(count, 0, nPoints, 100, 255));
    translate(locX, locY);
    rotate(i - 0.5);
    rect(0, 0, 20);
    pop();
    count++;
  }
}

function t(x, y) {
  strokeWeight(3);
  line(x, y - 50, x, y + 80);
  line(x - 5, y - 50, x - 15, y + 70);
  line(x + 5, y - 50, x + 5, y + 70);
  line(x + 5, y - 50, x + 25, y + 80);

  line(x - 60, y - 69, x + 50, y - 60);
  line(x - 54, y - 62, x + 59, y - 55);
  line(x - 50, y - 57, x + 54, y - 69);
  line(x - 50, y - 65, x + 45, y - 64);
}
