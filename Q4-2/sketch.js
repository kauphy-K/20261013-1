// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
const dx = width / scores.length;
let px, py; // 一つ前の点を覚えておく変数

for (let i = 0; i < scores.length; i++) {
 
  const x = i * dx + dx / 2;
  const y = height - (height * scores[i]) / 100;

 
  if (i > 0) {
    stroke(0);
    line(px, py, x, y);
  }

  
  fill(0);
  ellipse(x, y, 10, 10);

  
  px = x;
  py = y;
}
  
}