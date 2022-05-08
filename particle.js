class Paticle {
    /**
     *
     * @param {*} ejeY altura donde inciara la trayectoria
     * @param {*} concavo altura maxima de la corvatura
     * @param {*} potencialCurva forma de la curva
     * @param {*} paso porcentaje creciente < 0.05
     * @param {*} posicion en el que iniciara la animacion (0.0 ~ 2.0)
     */
    constructor(
        ejeY = random(5, window.innerHeight + 170),
        concavo = 195,
        potencialCurva = 2,
        paso = random(0.00008, 0.0003),
        posicion = random(0.0, 2.0)
    ) {
        this.cw_width = window.innerWidth;
        this.cw_height = window.innerHeight;
        this.X1 = 0;
        this.X2 = this.cw_width / 2;
        this.X3 = this.cw_width;
        this.Y1 = ejeY;
        this.Y2 = ejeY - concavo;
        this.Y3 = ejeY;
        this.wX1 = this.X2 - this.X1;
        this.wX2 = this.X3 - this.X2;
        this.wY1 = this.Y2 - this.Y1;
        this.wY2 = this.Y3 - this.Y2;
        this.curva = potencialCurva;
        this.paso = paso;
        this.cp = posicion; //evaluar
        this.cp2 = 0.0; //evaluar
        this.dest = posicion;
        this.dest2 = posicion;
        this.dstat = true;
        this.rmove = random(500, 5000);
        this.rmoves = random(0, 4000);
        this.rboo = true;
        this.moveParticle();
    }

    updateParticle() {
        this.Y1 = (this.Y1 * window.innerHeight) / this.cw_height;
        this.Y2 = this.Y1 - (this.Y3 - this.Y2);
        this.Y3 = this.Y1;
        this.cw_width = window.innerWidth;
        this.cw_height = window.innerHeight;
        this.X2 = this.cw_width / 2;
        this.X3 = this.cw_width;
        this.wX1 = this.X2 - this.X1;
        this.wX2 = this.X3 - this.X2;
        this.wY1 = this.Y2 - this.Y1;
        this.wY2 = this.Y3 - this.Y2;
    }

    createParticle() {
        if (this.rmoves < this.rmove) {
            this.rmoves++;
        } else {
            this.rmoves = 0;
            this.rboo = !this.rboo;
        }
        if (this.rboo) {
            fill(`rgba(255, 255, 255, 1)`);
            ellipse(this.x, this.y, 2, 2);
            noStroke()
        } else {
            fill(`rgba(255, 255, 255, 0.4)`);
            ellipse(this.x, this.y, 1, 1);
            noStroke()
        }
    }

    moveParticle() {
        this.cp += this.paso;
        if (this.cp <= 1.0) {
            this.x = this.X1 + this.cp * this.wX1;
            this.y = this.Y1 - pow(1 - this.cp, this.curva) * this.wY1;
            this.y = this.y - Math.abs(this.Y2 - this.Y1);
        } else if (this.cp <= 2.0) {
            this.cp2 = this.cp - 1;
            this.x = this.X2 + this.cp2 * this.wX2;
            this.y = this.Y2 + pow(this.cp2, this.curva) * this.wY2;
            if (this.cp + this.paso >= 2.0) {
                this.cp = 0.0;
            }
        }
    }
}

let particles = [];
let cw__width = window.innerWidth;
let cw__height = window.innerHeight;

function setup() {
    let cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.id("MyNewCanvas");
    // 447
    for (let i = 0; i < 447; i++) {
        particles.push(new Paticle());
    }
}

function draw() {
    const context = canvas.getContext("2d");

    if (cw__width != window.innerWidth || cw__height != window.innerHeight) {
        cw__width = window.innerWidth;
        cw__height = window.innerHeight;
        for (let i = 0; i < particles.length; i++) {
            particles[i].updateParticle();
        }
    }

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}