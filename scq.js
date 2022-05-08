// let x = 20;
// let y = 20;
// // let x2 = 0;
// // let limitCW = false;
// let h = 0
// let k = 420
// let r = 100

// function setup() {
//   createCanvas(800, 900);
// }

// // function draw() {
// //   background(220);
// //   ellipse(x, y, 80, 80);

// //   if (limitCW === false) {
// //     y = x / 5;
// //     if (x > 400) {
// //       limitCW = true;
// //       x2 = x;
// //     }
// //   } else {
// //     y = x2 / 5;
// //     x2--;
// //   }
// //   x++
// //   console.log(`${x}, ${y}`);
// // }

// function draw() {
//   background(220);
//   ellipse(x, y, 80, 80);

// //   y = Math.sqrt ( Math.abs(Math.pow(350, 2) - (x * x)));
// //   y = Math.sqrt(Math.abs((r*r)-Math.pow(x-h, 2))) + k
// y = Math.pow(x,2)

//   x++;
//   console.log(`${x}, ${y}`);
// }

let beginX = 20.0; // Initial x-coordinate
let beginY = 190.0; // Initial y-coordinate
let endX = 700.0; // Final x-coordinate
let endY = 290.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 4; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(720, 400);
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  // background(220);
  fill(0);
  pct += step;
  if (pct < 1.0) {
      x = beginX + pct * distX;
      y = beginY +  pow(pct, exponent) * distY;
  }

  // translate(100, 100);
  // if (pct < 7.0) {
  //    x = acos(pct) * -100;
  //    y = sin(pct) * -100;
  // }

  ellipse(x, y, 20, 20);
}
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   translate(200, 200);
// background(220);
//   let x = cos(frameCount) * 100;
//   let y = sin(frameCount) * 100;

//   ellipse(x, y, 20, 20);
// }
