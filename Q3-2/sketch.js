// 2D アニメーションゲームのようなインタラクション

let x, y;
let vx, vy;
let b;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 1.4;
  vx = 0;
  vy = 0;
  b = 5;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  const size = height * 0.1;
  const groundY = height * 0.8;

  
  if(key == ' ' && y >= groundY - size / 2){
    vy = -20;   
   }
}

function draw(){
  background(160, 192, 255);

  const size = height * 0.1;
  const groundY = height * 0.8;

  // 地面を描く
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

 

  if(keyIsDown && key === 'b' )
    { b = 10; }
  else 
    { b = 5; }
  
 // 左右移動
  if(keyIsDown(LEFT_ARROW))
    { x -= b; }
  if(keyIsDown(RIGHT_ARROW))
    { x += b; }
 
  vy += g;


  x += vx;
  y += vy;

 
  if(y > groundY - size / 2){
    y = groundY - size / 2;
    vy = 0; 
  }

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -40, 20);

  // キャラクター
  fill(0);
  ellipse(x, y, size, size);
}
