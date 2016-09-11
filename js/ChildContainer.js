/**
 * Created by wqs on 2016/3/11.
 */

function ChildContainer(x,y){
    var Rect = new createjs.Shape();
    Rect.graphics.beginFill("#FF0000");
    Rect.graphics.drawRect(x,y,50,50);
    Rect.graphics.endFill();

    var Text = new createjs.Text("1","30px Arial","#FFFFFF");

    this.addChild(Rect);
    this.addChild(Text);
}

ChildContainer.prototype = new createjs.Container();