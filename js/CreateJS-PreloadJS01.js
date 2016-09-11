/**
 * Created by wqs on 2016/3/10.
 */

var preload;
preload = new createjs.LoadQueue(false,"img/");

var plugin = {
    getPreloadHandlers:function(){
        return {
            types:["image"],
            callback:function(src){
                var id = src.toLowerCase().split("/").pop().split(".")[0];
                var img = document.getElementById(id);
                return {tag:img};
            }
        }
    }
}



preload.installPlugin(plugin);
preload.loadManifest(
    ["spring.jpg","summer.jpg","autumn.jpg"]
);

