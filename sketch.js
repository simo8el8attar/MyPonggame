let box1;
let box2;
let ball;
let gameFloor1;
let gameFloor2;
let gameFloor3;
let gameFloor4;
function setup() {
	new Canvas(1270, 500);
  gameFloor1 =new Sprite(5, 245, 10, 500, 'static');
  gameFloor2 =new Sprite(1265, 245, 10, 500, 'static');
  gameFloor3 =new Sprite(0, 5, 2550, 10, 'static');
  gameFloor4 =new Sprite(0, 495, 2550, 10, 'static');
  
  box1 = new Sprite(25, 60, 20, 90, 'static');
  box2 = new Sprite(1240,160,20,90,'static');
  ball = new Sprite(800,300,30)
  ball.direction = 187;
  ball.speed = 6;
}

function draw() {
	background('black');
  box1.y = mouse.y
  box2.y = mouse.y
  
  if (box1.collides(ball)) {
		ball.direction = -400;
    ball.speed = 8;
	}
  if (box2.collides(ball)) {
		ball.direction = 187;
    ball.speed = 8;
	}
  if (gameFloor3.collides(ball)) {
    ball.speed = 8;
	}
  if (gameFloor4.collides(ball)) {
    ball.speed = 8;
	}
}