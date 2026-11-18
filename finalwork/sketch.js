// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

let r = 0;
let g = 0;
let b = 0;
let scene = 0;//シーンの番号を管理する変数
let buttonText = "START"; // 文字の内容を入れる変数
let RbuttonText = "赤";
let BbuttonText = "青";
let GbuttonText = "緑";
let YbuttonText = "黄";
// 1. 4つの文字候補を配列にまとめる
let i = 0; // 配列のインデックスを管理する変数(文字)
let j = 0; // 配列のインデックスを管理する変数(色)
let mojirannsuu = [0, 1, 2, 3]; // 出ている文字をランダムに指定するための配列
let irorannsuu = [0, 1, 2, 3]; // 出ている文字の色をランダムに指定するための配列
let mojiimi = ["赤", "青", "緑", "黄"];
let mojicolor = ["red", "blue", "green", "yellow"]; // 文字の色を格納する配列
let currentWord = ""; // 選ばれた1つの文字を入れる変数
let currentColor = ""; // 選ばれた1つの色を入れる変数

let isLocked = false; // 操作をロック中かどうか

let score = 0; // スコアを管理する変数
let missCount = 0; // ミスの回数を管理する変数

let timeLimit = 20000; // 制限時間（秒）
let startTime;

let hard = false; // 難易度を管理する変数
let k = 0; // 難易度をランダムに指定するための変数
let syuruiransuu = [0, 1]; // 難易度をランダムに指定するための配列



function draw(){
  background(r, g, b);

  if (scene === 0) {//スタート画面シーン0
    fill(128, 128, 128);
    rect(windowWidth/3, windowHeight/4, windowWidth/3, windowHeight/10);//スタートボタンの四角形を描画
    r = 255;
    g = 255;
    b = 255;//背景の色を設定。スタート画面は白色
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(buttonText, windowWidth/3 + windowWidth/6, windowHeight/4 + windowHeight/20);
    rect(windowWidth/4 + windowWidth*6/30,  windowHeight/2 + windowHeight/4 - windowHeight*1.5/64, windowWidth*10.5/80 * 0.6, windowHeight*1.5/32);

    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("文字が何色で書かれているか", windowWidth/2, windowHeight/2);
    text("を答えてください", windowWidth/2, windowHeight/2 + windowHeight/20);
    text("制限時間は20秒", windowWidth/2, windowHeight/2 + windowHeight/10);

    fill(0);
    textSize(23);
    textAlign(CENTER, CENTER);
    text("赤", windowWidth/4 + windowWidth*6/30 + windowWidth*10.5/80 * 0.3, windowHeight/2 + windowHeight/4);
    

    fill(252, 15, 192);
    textSize(60);
    textAlign(CENTER, CENTER);
    text("ストループ・ゲーム", windowWidth/2, windowHeight/6);

    fill(0);
    textSize(20);
    textAlign(LEFT, CENTER);
    text("なら", windowWidth/4 + windowWidth*2/15, windowHeight/2 + windowHeight/4);
    text("のボタンをクリック", windowWidth/4 + windowWidth*2/15 + windowWidth*10.5/80 + 30, windowHeight/2 + windowHeight/4);
    
    fill(0);
    textSize(20);
    textAlign(RIGHT, CENTER);
     text("例えば",  windowWidth/4 + windowWidth*2/15 - textWidth("緑緑"), windowHeight/2 + windowHeight/4);


    fill("red");
    textSize(35);
    textAlign(RIGHT, CENTER);
    text("緑", windowWidth/4 + windowWidth*2/15, windowHeight/2 + windowHeight/4);

  }

  if (scene === 1) {//ゲーム画面シーン1
  r = 140;
  g = 140;
  b = 140;//背景の色を設定。ゲーム画面は灰色
  // ここにシーン1の内容を記述
  fill(255);//ボタンの四角形を描画する
    rect(windowWidth*20/100, windowHeight*2/3, windowWidth*28/100, windowHeight/10);
    rect(windowWidth*20/100 + windowWidth*32/100, windowHeight*2/3, windowWidth*28/100, windowHeight/10);
    rect(windowWidth*20/100, windowHeight*24/30, windowWidth*28/100, windowHeight/10);
    rect(windowWidth*20/100 + windowWidth*32/100, windowHeight*24/30, windowWidth*28/100, windowHeight/10);
  
  fill(currentColor);//問題の文字を描画する
    
    textSize(255);
    textAlign(CENTER, CENTER);
    text(currentWord, windowWidth / 2, windowHeight / 3);  

  fill(0);//ボタンの文字を描画する
    textSize(40);
    textAlign(CENTER, CENTER);
    text(RbuttonText, windowWidth*20/100 + windowWidth*14/100, windowHeight*2/3 + windowHeight/20);
    text(BbuttonText, windowWidth*20/100 + windowWidth*32/100 + windowWidth*14/100, windowHeight*2/3 + windowHeight/20);
    text(GbuttonText, windowWidth*20/100 + windowWidth*14/100, windowHeight*24/30 + windowHeight/20);
    text(YbuttonText, windowWidth*20/100 + windowWidth*32/100 + windowWidth*14/100, windowHeight*24/30 + windowHeight/20); 
    
  if (isLocked) {
    fill(255, 0, 0, 150); // 半透明の赤でオーバーレイ
    textSize(200);
    textAlign(CENTER, CENTER);
    text("MISS!", windowWidth / 2, windowHeight * 23.5/30);}
  
  fill(0);//スコアを描画する
    textSize(30);
    textAlign(LEFT, TOP);
    text("SCORE: " + score, 10, 10);
    text("MISSES: " + missCount, 10, 50);
  
    if (k === 0) {
     fill(0)//問題の種類を表示する
     textSize(40);
     textAlign(CENTER, CENTER);
     text("色" , windowWidth/2, windowHeight*4/7);
     fill(0);//問題の説明
     textSize(20);
     textAlign(RIGHT, CENTER);
     text("文字の", windowWidth/2 - textWidth("色")*3/2, windowHeight*4/7 );
     textAlign(LEFT, CENTER);
     text("を答えろ", windowWidth/2 + textWidth("色")*3/2, windowHeight*4/7 );}
    else {
     fill(0)//問題の種類を表示する
     textSize(40);
     textAlign(CENTER, CENTER);
     text("意味" , windowWidth/2, windowHeight*4/7);
     fill(0);//問題の説明
     textSize(20);
     textAlign(RIGHT, CENTER);
     text("文字の", windowWidth/2 - textWidth("意味")*3/2, windowHeight*4/7 );
     textAlign(LEFT, CENTER);
     text("を答えろ", windowWidth/2 + textWidth("意味")*3/2, windowHeight*4/7 );}
    }

  

    


if (scene === 2) {//ゲーム終了画面シーン2
  r = 255;
  g = 255;
  b = 255;

  fill(0);//スコアを描画する
    textSize(100);
    textAlign(CENTER, CENTER);
    text("SCORE: " + score,  windowWidth / 2, windowHeight * 20/30);
    text("MISSES: " + missCount,  windowWidth / 2, windowHeight * 20/30 + windowHeight/10);
  
  fill(252, 15, 192);
   textSize(100);
   textAlign(CENTER, CENTER);
   text("FINISH!", windowWidth / 2, windowHeight / 3);

  fill(128, 128, 128);
  rect(windowWidth*2/3, windowHeight*25/30, windowWidth*9/30, windowHeight/10);

  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("RETRY", windowWidth*2/3 + windowWidth*9/60, windowHeight*25/30 + windowHeight/20);

  if (score >= 30) {//スコアが30以上の場合に「Congratulations!」を表示
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Congratulations!", windowWidth*1/2 , windowHeight*25/60 + windowHeight/20);
  }

  fill(255)
  rect(windowWidth*1/2 - windowWidth*1/60, windowHeight*51/60 + windowHeight/20, windowWidth*1/30, windowWidth*1/30);
  
  fill(0, 255, 0);
  textSize(windowWidth*1/30);
  textAlign(CENTER, BOTTOM);
  text("HARD MODE", windowWidth*1/2 , windowHeight*53/60 );
  if (hard) {
    fill(0, 255, 0);
    textSize(windowWidth*1/30);
    textAlign(CENTER, BOTTOM);
    text("✔", windowWidth*1/2 , windowHeight*51/60 + windowHeight/20 + windowWidth*1/30);
  }
  

  
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // シーン0のときだけボタンのクリック判定を行う
  if (scene === 0) {
    let btnX = windowWidth / 3;
    let btnY = windowHeight / 4;
    let btnW = windowWidth / 3;
    let btnH = windowHeight / 10;

    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      scene = 1; // シーン1へ移動
      startTime = millis(); // ゲーム開始時刻を記録
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
    }
  }
 
  
  if (scene === 1) {
   if (k === 0) {
    if (isLocked) {
      return;
    }
    
    //赤と解答するボタン 左上
    let RbtnX = windowWidth*20/100;
    let RbtnY = windowHeight*2/3;
    let RbtnW = windowWidth*28/100;
    let RbtnH = windowHeight/10;

    
    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > RbtnX &&
      mouseX < RbtnX + RbtnW &&
      mouseY > RbtnY &&
      mouseY < RbtnY + RbtnH
    ) {
      if (j === 0) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }

    //青と解答するボタン　右上
    let BbtnX = windowWidth*20/100 + windowWidth*32/100;
    let BbtnY = windowHeight*2/3;
    let BbtnW = windowWidth*28/100;
    let BbtnH = windowHeight/10;

    

    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > BbtnX &&
      mouseX < BbtnX + BbtnW &&
      mouseY > BbtnY &&
      mouseY < BbtnY + BbtnH 
    )
     if (j === 1) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }

    //緑と解答するボタン　左下
    let GbtnX = windowWidth*20/100;
    let GbtnY = windowHeight*24/30;
    let GbtnW = windowWidth*28/100;
    let GbtnH = windowHeight/10;

    

    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > GbtnX &&
      mouseX < GbtnX + GbtnW &&
      mouseY > GbtnY &&
      mouseY < GbtnY + GbtnH
    ) {
      if (j === 2) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }

    //黄と解答するボタン　右下
    let YbtnX = windowWidth*20/100 + windowWidth*32/100;
    let YbtnY = windowHeight*24/30;
    let YbtnW = windowWidth*28/100;
    let YbtnH = windowHeight/10;    


    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > YbtnX &&
      mouseX < YbtnX + YbtnW &&
      mouseY > YbtnY &&
      mouseY < YbtnY + YbtnH
    ) {
      if (j === 3) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }
  
   }
    else{
      if (isLocked) {
      return;
    }
    
    //赤と解答するボタン 左上
    let RbtnX = windowWidth*20/100;
    let RbtnY = windowHeight*2/3;
    let RbtnW = windowWidth*28/100;
    let RbtnH = windowHeight/10;

    
    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > RbtnX &&
      mouseX < RbtnX + RbtnW &&
      mouseY > RbtnY &&
      mouseY < RbtnY + RbtnH
    ) {
      if (i === 0) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }

    //青と解答するボタン　右上
    let BbtnX = windowWidth*20/100 + windowWidth*32/100;
    let BbtnY = windowHeight*2/3;
    let BbtnW = windowWidth*28/100;
    let BbtnH = windowHeight/10;

    

    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > BbtnX &&
      mouseX < BbtnX + BbtnW &&
      mouseY > BbtnY &&
      mouseY < BbtnY + BbtnH 
    )
     if (i === 1) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }

    //緑と解答するボタン　左下
    let GbtnX = windowWidth*20/100;
    let GbtnY = windowHeight*24/30;
    let GbtnW = windowWidth*28/100;
    let GbtnH = windowHeight/10;

    

    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > GbtnX &&
      mouseX < GbtnX + GbtnW &&
      mouseY > GbtnY &&
      mouseY < GbtnY + GbtnH
    ) {
      if (i === 2) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }

    //黄と解答するボタン　右下
    let YbtnX = windowWidth*20/100 + windowWidth*32/100;
    let YbtnY = windowHeight*24/30;
    let YbtnW = windowWidth*28/100;
    let YbtnH = windowHeight/10;    


    // マウスカーソルが四角形の「左右」と「上下」の範囲内にあるかチェック
    if (
      mouseX > YbtnX &&
      mouseX < YbtnX + YbtnW &&
      mouseY > YbtnY &&
      mouseY < YbtnY + YbtnH
    ) {
      if (i === 3) {
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      score++; // スコアを1増やす
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
     } else {
      missCount++; // ミスの回数を1増やす
      isLocked = true;
     setTimeout(() => {
     isLocked = false;
     }, 1000);
     

    }
    }
      
    }
  
  

   if (millis() - startTime > timeLimit) {
   scene = 2;} // シーン2に移動

  }

  

  if (scene === 2) {
    let btnX = windowWidth*2/3;
    let btnY = windowHeight*25/30;
    let btnW = windowWidth*9/30;
    let btnH = windowHeight/10;

    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      scene = 1;
      score = 0; // スコアをリセット
      missCount = 0; // ミスの回数をリセット
      startTime = millis(); // ゲーム開始時刻を記録
      i = random(mojirannsuu); // ランダムなインデックスを生成
      currentWord = mojiimi[i]; // ランダムに文字を選ぶ
      j = random(irorannsuu); // ランダムなインデックスを生成
      currentColor = mojicolor[j]; // ランダムに色を選ぶ
      if (hard) {
        k = random(syuruiransuu); // 難易度をランダムに指定
      }
      else {
        k = 0; // 難易度をリセット
      }
    }


    let hardBtnX = windowWidth*1/2 - windowWidth*1/60;
    let hardBtnY = windowHeight*51/60 + windowHeight/20;
    let hardBtnW = windowWidth*1/30;
    let hardBtnH = windowWidth*1/30;

    if (
      mouseX > hardBtnX &&
      mouseX < hardBtnX + hardBtnW &&
      mouseY > hardBtnY &&
      mouseY < hardBtnY + hardBtnH
    ) {
      hard = !hard; // 難易度を切り替える
  
  }

}
}









