let cw_width = window.innerWidth;
let cw_height = window.innerHeight;
let altura = 160;
const X1 = 0;
const Y1 = altura;
const X2 = cw_width / 2;
const Y2 = 80;
const X3 = cw_width;
const Y3 = altura;
let wX1;
let wY1;
let wX2;
let wY2;
let curva = 2;
let x = 0.0;
let y = 0.0;
let paso = 0.005;
let cp = 0.0;
let cp2 = 0.0;

function setup() {
  createCanvas(cw_width, 900);
  wX1 = X2 - X1;
  wX2 = X3 - X2;
  wY1 = Y2 - Y1;
  wY2 = Y3 - Y2;
}
function draw() {
  cp += paso;
  if (cp <= 1.0) {
    x = X1 + cp * wX1;
    y = Y1 - pow(1 - cp, curva) * wY1;
    y = y - Math.abs(Y2 - Y1);
  } else if (cp <= 2.0) {
    cp2 = cp - 1;
    x = X2 + cp2 * wX2;
    y = Y2 + pow(cp2, curva) * wY2;
    if (cp + paso >= 2.0) {
      cp = 0.0;
    }
  }
  console.log(cp,cp2);
  ellipse(x, y, 20, 20);
  fill(255, 10, 0);
  ellipse(X1, Y1, 20, 20);
}
