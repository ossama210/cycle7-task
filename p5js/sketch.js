const WIDTH = 1000;
const HEIGHT = 600;
const RADIUS = 20;

class Circle {
  x;
  y;
  radius;
  speed;
  angle;

  constructor(x_position, y_position, radius) {
    this.x = x_position;
    this.y = y_position;
    this.radius = radius;
    this.speed = random(1, 5);
    this.angle = random(0, 360);
  }

  animate() {
    // choose new angle
    this.angle = random(0, 360);
    // get new x and y positions
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    // check for collision with walls
    if (this.x < 0) {
      this.x = WIDTH;
    } else if (this.x > WIDTH) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = HEIGHT;
    } else if (this.y > HEIGHT) {
      this.y = 0;
    }
  }

  display() {
    circle(this.x, this.y, this.radius);
  }
}

let circles = [];

function setup() {
  angleMode(DEGREES);
  frameRate(2);
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < 20; i++) {
    let x = random(0, WIDTH);
    let y = random(0, HEIGHT);
    circles.push(new Circle(x, y, RADIUS));
  }
}

function draw() {
  background(220, 220, 220);
  for (let circle of circles) {
    circle.animate();
    circle.display();
  }
}
