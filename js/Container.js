/**
 * Created by wqs on 2016/3/11.
 */
var stage = new createjs.Stage("gameView");

var gameContainer = new createjs.Container();

stage.addChild(gameContainer);

//
//var Rect = new createjs.Shape();
//Rect.graphics.beginFill("#FF0000");
//Rect.graphics.drawRect(5,5,100,100);
//
//gameContainer.addChild(Rect);
var c;
for(var i=0;i<10;i++){

    c = new ChildContainer(i*10,i*10);
    gameContainer.addChild(c);
}
//var c = new ChildContainer();
//gameContainer.addChild(c);

stage.update();
