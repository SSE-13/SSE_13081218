/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {

     fillText='13081218第二次作业';
    
    render(context: CanvasRenderingContext2D) {
        context.font = "20px Arial";
        context.fillStyle = '#000000';
        context.fillText('13081218翁健玮第二次作业', 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");




var text = new TextField();
text.x = 130;
text.y = 120;
context.fillText('13081218翁健玮第二次作业', 200, 200);


var bitmap1 = new Bitmap();
bitmap1.source = 'wengjianweizuishaui1.jpg';

var bitmap2 = new Bitmap();
bitmap2.source = 'wengjianweizuishaui1.png';

var bitmap3 = new Bitmap();
bitmap3.source = 'wengjianweizuishaui3.png';


//渲染队列
var renderQueue = [bitmap1,bitmap2,bitmap3,text];
//资源加载列表
var imageList = ['wengjianweizuishaui1.jpg','wengjianweizuishaui1.png','wengjianweizuishaui3.png'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


