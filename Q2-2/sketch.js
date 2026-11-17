// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ


  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
     if((i + j) % 2 === 0){
        fill(255); // 白
        noStroke();
      } else {
        fill(128, 128, 128); // 灰色
        noStroke();
      }
      rect(size * i, size * j, size, size);
    }
   for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
     if((i + j) % 2 === 0){  
    } else {
        
         if(j < 3){
          fill(255, 0, 0); // 赤
          noStroke();
          ellipse(size * i + 13, size * j + 13, size - 3, size - 3);
        } 
         if(j > 4){
          fill(0, 0, 0); // 黒
          noStroke();
          ellipse(size * i + 13, size * j + 13, size - 3, size - 3);
        }
      }
      
    } 
  }
}

