let beginX = 20.0; // Initial x-coordinate
let beginY = 190.0; // Initial y-coordinate
let midX = 340;
let midY = 90;
let endX = 700.0; // Final x-coordinate
let endY = 190.0; // Final y-coordinate

let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let distX2;
let distY2;
let exponent = 2; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)
let pct2 = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(920, 400);
  distX = midX - beginX;
  distY = midY - beginY;
  distX2 = endX - midX;
  distY2 = endY - midY;
}

function draw() {
  fill(0);
  pct += step;
  if (pct <= 1.0) {
    x = beginX + pct * distX;
    y = beginY - pow(1-pct, exponent) * distY;
    y=y-100
  } else if (pct2 < 1.0) {
    pct2 += step;
    x = midX + pct2 * distX2;
    y = midY + pow(pct2, exponent) * distY2;
  }
  ellipse(x, y, 20, 20);
  fill(255,10,0)
  ellipse(20, 190, 20, 20)
}


// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   translate(200, 200);
//     pct += step;
//   if (pct <= 5.0) {
//     x = cos(pct) * 100;
//     y = sin(pct) * 100;
//   }

//   ellipse(x, y, 20, 20);
// }
