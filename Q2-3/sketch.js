// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(360, 180);
  noStroke();
  background(45, 41, 38);

 fill(0, 119, 73); 
 triangle(0, 0, 360, 0, 180, 90);
 triangle(0, 180, 360, 180, 180, 90);

strokeWeight(30); 
stroke(255, 184, 28);
line(0, 0, 360, 180);
line(360, 0, -360, 360);
  
}