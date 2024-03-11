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
	new Canvas(1270, 500);
  gameFloor1 =new Sprite(5, 245, 10, 500, 'static');
  gameFloor2 =new Sprite(1265, 245, 10, 500, 'static');
  gameFloor3 =new Sprite(0, 5, 2550, 10, 'static');
  gameFloor4 =new Sprite(0, 495, 2550, 10, 'static');
  s = createP(score); // Create a paragraph element for displaying the score
  s.position(600, 200);
  s.style('color', 'white');
  box1 = new Sprite(25, 60, 20, 90, 'static');
  box2 = new Sprite(1240,160,20,90,'static');
  ball = new Sprite(800,300,30)
  ball.vel.x = -6;
  ball.vel.y = 0.1;
}

function draw() {
	background('black');
  frameRate(60);

  box1.y = mouse.y
  box2.y = mouse.y
  
  if (box1.collides(ball)) {
		ball.vel.x = 6;
    ball.vel.y =random(-3,1);
    score += 1;
    s.html(score);
	}
  if (box2.collides(ball)) {
    ball.vel.x = -6;
    ball.vel.y =random(-3,1);
    score +=1;
    s.html(score);
	}
  if (gameFloor3.collides(ball)) {
    ball.speed = 8;
	}
  if (gameFloor4.collides(ball)) {
    ball.speed = 8;
	}
  if (gameFloor1.collides(ball) || gameFloor2.collides(ball)) {
    noLoop();
    go = createP("Game Over!!"); // Create a paragraph element for displaying the score
    go.position(505, 310);
    go.style('color', 'white');
    go.style('font-size', '44px');
	}

}