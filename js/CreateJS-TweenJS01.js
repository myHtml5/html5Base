/**
 * Created by wqs on 2016/3/10.
 */

//   创建舞台
var stage = new createjs.Stage("gameView");

stage.x = 100;
stage.y = 100;

var circle  = new createjs.Shape();
circle.graphics.beginFill("#FF0000").drawCircle(0,0,50);

stage.addChild(circle);


//以下为TwennJS部分
createjs.Tween.get(circle,{loop:true})
    .wait(1000)
    .to({scaleX:0.2,sacleY:0.2})
    .wait(1000)
    .to({scaleX:1,scaleY:1},1000,createjs.Ease.bounceInOut);

createjs.Ticker.setFPS(20);
createjs.Ticker.addEventListener("tick",stage);

