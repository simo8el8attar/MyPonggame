let box1;
let box2;
let ball;
let gameFloor1;
let gameFloor2;
let gameFloor3;
let gameFloor4;
let score = 0;
let s;
let go;
function setup() {
	createCanvas(1270,500)
  gameFloor1 =new Sprite(5, 245, 10, 500, 'static');
  gameFloor1.color = 'magenta';
  gameFloor2 =new Sprite(1265, 245, 10, 500, 'static');
  gameFloor2.color = 'magenta';
  gameFloor3 =new Sprite(0, 5, 2550, 10, 'static');
  gameFloor3.color = 'magenta';
  gameFloor4 =new Sprite(0, 495, 2550, 10, 'static');
  gameFloor4.color = 'magenta';
  s = createP(score); // Create a paragraph element for displaying the score
  s.position(600, 200);
  s.style('color', 'white');
  box1 = new Sprite(25, 60, 20, 90, 'static');
  box2 = new Sprite(1240,160,20,90,'static');
  ball = new Sprite(800,300,30)
  ball.vel.x = -6;
  ball.vel.y = 0.1;
  ball.speed = 5;

}
let Speed = 5;
function draw() {
	background('black');

  frameRate(60);

  box1.y = mouseY;
  box2.y = mouseY;
  
  if (box1.collides(ball)) {
		ball.vel.x = 6;
    ball.vel.y =random([-3,3]);
    ball.speed = Speed;
    score += 1;
    s.html(score);
    Speed += 1;
	}
  if (box2.collides(ball)) {
    ball.vel.x = -6;
    ball.vel.y =random([-3,3]);
    ball.speed = Speed;
    score +=1;
    s.html(score);
    Speed += 1;
	}
  if (gameFloor3.collides(ball)) {
    ball.speed = Speed;
    ball.vel.y =random([-3,3]);
	}
  if (gameFloor4.collides(ball)) {
    ball.speed = Speed;
    ball.vel.y =random([-3,3]);
	}
  if (gameFloor1.collides(ball) || gameFloor2.collides(ball)) {
    noLoop();
    go = createP("Game Over!!"); // Create a paragraph element for displaying the score
    go.position(505, 310);
    go.style('color', 'white');
    go.style('font-size', '44px');
	}

}