/**
 * Created by wqs on 2016/3/11.
 */


var stage = new createjs.Stage("gameView");

stage.alpha = 0.2;
stage.x = 100;
stage.y = 100;

stage.scaleX = 2;
stage.scaleY = 0.5;

var Rect = new createjs.Shape();
Rect.graphics.beginFill("#FF0000");
Rect.graphics.drawRect(5,5,100,100);

stage.addChild(Rect);

stage.update();