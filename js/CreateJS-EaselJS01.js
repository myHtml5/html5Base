/**
 * Created by wqs on 2016/3/10.
 */

//   创建舞台
var stage = new createjs.Stage("gameView");

var text = new createjs.Text("Hello EaselJS ","36px Arial","#777");

stage.addChild(text);

//更新舞台
stage.update();
