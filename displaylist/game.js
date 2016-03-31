var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var human = new render.DisplayObjectContainer();
human.x = -150;
human.y = -165;
var head = new render.Bitmap();
head.x = 20;
head.y = -60;
var trunk = new render.Bitmap();
trunk.x = 10;
trunk.y = 90;
var left_leg = new render.Bitmap();
var right_leg = new render.Bitmap();
var left_arm = new render.Bitmap();
var right_arm = new render.Bitmap();
left_leg.x = -10;
left_leg.y = 300;
right_leg.x = 93;
right_leg.y = 300;
left_arm.x = -38;
left_arm.y = 93;
right_arm.x = 153;
right_arm.y = 93;
head.source = "head.png"; //图片源
trunk.source = "trunk.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
humanContainer.addChild(human); //添加子节点
human.addChild(head);
human.addChild(left_leg);
human.addChild(right_leg);
human.addChild(left_arm);
human.addChild(right_arm);
human.addChild(trunk);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png"]);
renderCore.start(humanContainer, ["trunk.png"]);
renderCore.start(humanContainer, ["left_arm.png"]);
renderCore.start(humanContainer, ["right_arm.png"]);
renderCore.start(humanContainer, ["left_leg.png"]);
renderCore.start(humanContainer, ["right_leg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x = this.x + this.vx * duringTime; //向前移动
        this.rotation = this.rotation + Math.PI * duringTime; //滚动
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 400;
ticker.start([body]);
//# sourceMappingURL=game.js.map