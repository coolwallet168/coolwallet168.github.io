(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"SeaWaterDH_atlas_", frames: [[0,1087,1000,882],[1180,1336,209,82],[1180,1420,94,39],[0,0,1000,1085],[1002,1336,176,573],[1391,1336,38,357],[1002,0,750,1334]]}
];


// symbols:



(lib.船头 = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shuibo = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shuibo1 = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.海面 = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.鱼竿pngcopy = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.鱼竿2 = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.云彩pngcopy2 = function() {
	this.spriteSheet = ss["SeaWaterDH_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12559A").s().p("AgzCMQkngViFkCIO/AAQioD5kqAbIg/ADIgCAAg");
	this.shape.setTransform(48.9,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0.9,11,96,28), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#565B5F").ss(6,1,1).p("AMGCrQl0mrnzgsIhmgFQgCAAgBAAQnVAjhmGuQAcBBDKAlQDJAmDIAFQDHAFE8giQE8gjBVhGg");
	this.shape.setTransform(84.3,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8091AF").s().p("AiOExQjIgFjKgmQjJglgchBQBmmuHVgjIADAAIBmAFQHzAsF0GrQhVBGk8AjQkUAei7AAIg0gBg");
	this.shape_1.setTransform(84.3,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(4,-3,160.8,67.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.鱼竿2();
	this.instance.parent = this;
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(8,0,38,357), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.鱼竿pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(27.2,0,1,1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,203,580.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.船头();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,776.3,684.7), null);


(lib.sprite13副本3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAqIgFgKIgkgsQgIgMAAgNQAAgFAEgDQACgCADgBIADgBIACACIAYAMQAKADALAMQALALAFAPQAFAPgFAHIgSAWg");
	this.shape.setTransform(3.9,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite13副本3, new cjs.Rectangle(0,0,7.9,10), null);


(lib.sprite11副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAnQgGgEgHgCIgBAAQgGgUgTgVIgYgiIAAgEIAKAAQASABAiAVQAlAXAAANIgCAEQgBADAAAFIAAALQAAAMgOAAQgLAAgIgIg");
	this.shape.setTransform(5.9,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite11副本, new cjs.Rectangle(0.9,0.7,10,9.5), null);


(lib.sprite9副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAQIgMgGIgxgBQgJgBgCgEIAZgCQAIgBAGgFQAGgKAHgCIAPgDQAyAAAAAPQAAAGgNAJQgMAJgFgBQgHAAgIgDg");
	this.shape.setTransform(5.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite9副本, new cjs.Rectangle(0,0,11.8,3.9), null);


(lib.sprite7副本3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAHIgIgIQAMgFAlAAIAUgBQAIAAAAAFQAAAHgYADg");
	this.shape.setTransform(3.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite7副本3, new cjs.Rectangle(0,0,7.9,1.6), null);


(lib.sprite5副本4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAOIgWgEIgIgGIAJgGIAQgHIANgEIAnABQAPABAAAHQAAAEgJACIgnALIgNABg");
	this.shape.setTransform(4.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite5副本4, new cjs.Rectangle(0,0,9.3,2.8), null);


(lib.ee1156hotchocolatespray_school = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgJhKQgCAAgCABQgCAEgBAFQgCAJgDAJQgBAHgCAHQgDAJgDAIQgCgCgCgCQgIgMgIAPQgGAaASANQAUAQACAiQAHgBACgJQACgIAFgHQACgGAGAAQAGAAAAAGQAAAGAAAHQABAHAAAHQAFgCADgCQAGgEAEgFQAFgIADgJQAHgPADgPQAEgQgIgNQgBgBgBgBQgHgHgGAHQgDABgDABQgCAAgCAAQgGgCgBgIQgCgHAAgIQgBgIgBgIQgCgTgSAAg");
	this.shape.setTransform(-50.2,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8E3FF").s().p("AAOA9IAAgNQAAgGgGAAQgGAAgCAGQgFAHgCAIQgCAJgHABQgCgigUgQQgSgNAGgaQAIgPAIAMIAEAEIAGgRIADgOIAFgSIADgJIAEgBQASAAACATIACAQIACAPQABAIAGACIAEAAIAGgCQAGgHAHAHIACACQAIANgEAQQgDAPgHAPQgDAJgFAIQgEAFgGAEIgIAEIgBgOg");
	this.shape_1.setTransform(-50.2,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#696D5E").ss(1.5,1,1).p("AghgmQAEgTAXAGQAGABADAFQAGAHADAJQAFAMARgEQAGgBAEACQAOAMAAATQABAUgMANQgHAIgKABQgLAAgHgJQgEgGgHAHQgNAOgTgJQgSgKgDgTQgEgRgBgRQgCgTATgHQADgBAEACg");
	this.shape_2.setTransform(-49.8,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8E3FF").s().p("AgfAyQgSgKgDgTQgEgRgBgRQgCgTATgHQADgBAEACQAEgTAXAGQAGABADAFQAGAHADAJQAFAMARgEQAGgBAEACQAOAMAAATQABAUgMANQgHAIgKABQgLAAgHgJQgEgGgHAHQgHAJgKAAQgHAAgIgEg");
	this.shape_3.setTransform(-49.8,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAsgTQALAQgDAUQgDAUgOAJQgQAJgSgKQgLgIgTAEQgHACgEgFQgNgOABgWQACgSAGgOQACgEAFgGQAMgOAWAHQAQAHAHAJQAGAIAJgBQAFgBAEAGg");
	this.shape_4.setTransform(-49.7,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8E3FF").s().p("AABAtQgLgIgTAFQgHABgEgFQgNgOABgWQACgSAGgOIAHgKQAMgOAWAHQAQAHAHAJQAGAIAJgBQAFgBAEAGQALAQgDAUQgDAUgOAJQgIAEgIAAQgJAAgJgFg");
	this.shape_5.setTransform(-49.7,-12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#696D5E").ss(1.5,1,1).p("AA0gHQgCATgIAPQgIASgTADQgSAEgRgIQgSgJgIgRQgIgQAGgTQADgNAGgEQAGgEAEgEQAEgFALgCQAIABAHAFQALAGALADQAEABAEAAQAWADgBAXg");
	this.shape_6.setTransform(-49.7,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8E3FF").s().p("AgUAsQgSgJgIgRQgIgQAGgTQADgNAGgEQAGgEAEgEQAEgFALgCQAIABAHAFQALAGALADIAIABQAWADgBAXQgCATgIAPQgIASgTADIgMACQgLAAgMgGg");
	this.shape_7.setTransform(-49.7,-18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#696D5E").ss(1.5,1,1).p("AABgrQALAGALADQAEABAEAAQAWADgBAXQgBAGgBAEQgCANgGALQgIASgTADQgSAEgRgIQgSgJgIgRQgDgHgBgIQgBgJADgLQADgNAGgEQAGgEAEgEQAEgFALgCQAIABAHAFg");
	this.shape_8.setTransform(-49.7,-20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8E3FF").s().p("AgUAsQgSgJgIgRQgDgHgBgIQgBgJADgLQADgNAGgEQAGgEAEgEQAEgFALgCQAIABAHAFQALAGALADIAIABQAWADgBAXIgCAKQgCANgGALQgIASgTADIgMACQgLAAgMgGg");
	this.shape_9.setTransform(-49.7,-20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAcgjQAUADgBAZQgBAUgIARQgHATgRAEQgRAEgPgJQgQgKgIgSQgHgSAFgUQADgPAGgEQAFgEAEgFQADgFALgCQAGABAHAFQAKAHAKADQADABAEABg");
	this.shape_10.setTransform(-49.6,-15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8E3FF").s().p("AgSAwQgQgKgIgSQgHgSAFgUQADgPAGgEQAFgEAEgFQADgFALgCQAGABAHAFQAKAHAKADIAHACQAUADgBAZQgBAUgIARQgHATgRAEIgLABQgKAAgLgGg");
	this.shape_11.setTransform(-49.6,-15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#696D5E").ss(1.5,1,1).p("AATgrQAEABADABQATAEgBAdQgBAXgHAUQgHAVgQAFQgPAFgPgLQgQgLgGgVQgHgVAEgXQAEgRAFgFQAFgFADgFQAEgGAJgCQAHABAFAGQAKAIAJADg");
	this.shape_12.setTransform(-50.1,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C8E3FF").s().p("AgRA3QgQgLgGgVQgHgVAEgXQAEgRAFgFQAFgFADgFQAEgGAJgCQAHABAFAGQAKAIAJADIAHACQATAEgBAdQgBAXgHAUQgHAVgQAFQgFABgFAAQgKAAgKgHg");
	this.shape_13.setTransform(-50.1,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAVgzIgOAaQgJgTgFgWQgKgggIAaQgIAbgBAXQAAAYgBAXQAAAYAMATQAIANANAEQAYgHAJgbQAIgYgGgZQgEgRgFgUQgBgIgCgIg");
	this.shape_14.setTransform(-50.1,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C8E3FF").s().p("AgXBEQgMgTAAgYIABgvQABgXAIgbQAIgaAKAgQAFAWAJATIAOgaIADAQIAJAlQAGAZgIAYQgJAbgYAHQgNgEgIgNg");
	this.shape_15.setTransform(-50.1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAHgfQgJgZgEgbQgJgpgHAiQgHAhAAAeQgBAeAAAcQgBAfALAXQAHAQAMAFQAVgJAHghQAHgegFggQgEgVgEgZQgBgKgBgKg");
	this.shape_16.setTransform(-50.4,14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C8E3FF").s().p("AgUBVQgLgXABgfIABg6QAAgeAHghQAHgiAJApQAEAbAJAZIAMghIACAUIAIAuQAFAggHAeQgHAhgVAJQgMgFgHgQg");
	this.shape_17.setTransform(-50.4,14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#696D5E").ss(1.5,1,1).p("AATgwQgBgLgCgKIgKAjQgIgagDgdQgIgsgGAkQgGAkAAAfQAAAhgBAeQAAAhAJAZQAGARAKAGQASgJAGglQAGgfgEgjQgDgWgDgcg");
	this.shape_18.setTransform(-50.3,35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8E3FF").s().p("AgRBbQgJgZAAghIABg/QAAgfAGgkQAGgkAIAsQADAdAIAaIAKgjIADAVIAGAyQAEAjgGAfQgGAlgSAJQgKgFgGgSg");
	this.shape_19.setTransform(-50.3,35.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAFgnQgGgegEghQgGgzgGAqQgFApAAAkQAAAlgBAjQAAAmAIAdQAFAUAJAGQAQgLAGgpQAFglgEgnQgDgagDggQgBgMgBgNg");
	this.shape_20.setTransform(-50,60.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C8E3FF").s().p("AgPBpQgIgdAAgmIABhIQAAgkAFgpQAGgqAGAzQAEAhAGAeIAJgpIACAZIAGA6QAEAngFAlQgGApgQALQgJgGgFgUg");
	this.shape_21.setTransform(-50,60.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7,p:{y:-18.2}},{t:this.shape_6,p:{y:-18.2}}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7,p:{y:-19.4}},{t:this.shape_6,p:{y:-19.4}}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).to({state:[]},2).wait(11));

	// Layer 13
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAXBkQABgJABgIQABgNAAgNQAAgUAAgTQAAgMABgLQACgSACgSQABgOgBgOQgBgPgCgPQgKADgDAKQgEAQgEAQQgCALgCALQgDgIAAgLQAAgCAAgBQgDgFgEgDQgDgDgDgCQgFAYACAWQACASgBARQAAAcgIAdQgEAOgDAP");
	this.shape_22.setTransform(-53.3,50.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C8E3FF").s().p("AgeBkIAHgdQAIgdAAgcQABgRgCgSQgCgWAFgYIAGAFIAHAIIAAADQAAALADAIIAEgWIAIggQADgKAKgDIADAeQABAOgBAOIgEAkIgBAXIAAAnIgBAaIgCARg");
	this.shape_23.setTransform(-53.3,50.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgsByQACgJAHgKQAPgUAJgbQAJgXgBgZQAAAAAAgBQAAgBAAgBQAAgBAAgBQgBgNgJgKQgRgRgEgbQgGgmAbALQAKAEAAAMQACAfANAPQAHgfACgeQACgXAPAMQALAggGAbQgGAZgRAVQgDAEAAAHQgBAdABAdQAAAKAEAKQAFAQgDAN");
	this.shape_24.setTransform(-52.8,42.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C8E3FF").s().p("AgsByQACgJAHgKQAPgUAJgbQAJgXgBgZIAAgBIAAgCIAAgCQgBgNgJgKQgRgRgEgbQgGgmAbALQAKAEAAAMQACAfANAPQAHgfACgeQACgXAPAMQALAggGAbQgGAZgRAVQgDAEAAAHQgBAdABAdQAAAKAEAKQAFAQgDANg");
	this.shape_25.setTransform(-52.8,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},2).to({state:[]},2).wait(31));

	// Layer 15
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgYAUQgEgFABgIQAAgGADgEQADgIAHgEQADgCADgBQADgBADAAQAEgBAFACQAJAEAHAFQAIAHgEAIQgDAIgFAG");
	this.shape_26.setTransform(-53.4,49.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C8E3FF").s().p("AgYAUQgEgFABgIQAAgGADgEQADgIAHgEIAGgDIAGgBQAEgBAFACQAJAEAHAFQAIAHgEAIQgDAIgFAGg");
	this.shape_27.setTransform(-53.4,49.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgvA8QgCgHABgHQAEgQANgEQABgBABAAQALgEALgKQAAgBABgBQABgNgDgNQgFgZAQgQQAPgEAMAKQAOALgCASQgDARgPADQgCAAgCABQgbADAPASQAfgMAJAgQACAKgBAL");
	this.shape_28.setTransform(-53.8,51.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C8E3FF").s().p("AgvA8QgCgHABgHQAEgQANgEIACgBQALgEALgKIABgCQABgNgDgNQgFgZAQgQQAPgEAMAKQAOALgCASQgDARgPADIgEABQgbADAPASQAfgMAJAgQACAKgBALg");
	this.shape_29.setTransform(-53.8,51.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAbgmQgLACgIAGQgIAIgGAKQgGAKgJACQgNAFgJAIQgNAJgDARAAwAnQAAgCgBgCQgDgGgFgDQgDgDgFgFQAKgDAHgGQAHgHAFgIQABgKgGgIQgHgKgTgDAAfASQgGACgGAB");
	this.shape_30.setTransform(-52.7,52.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C8E3FF").s().p("Ag7AnQADgRANgJQAJgIANgFQAJgCAGgKQAGgKAIgIQAIgGALgCIAAADIACgCQATADAHAKQAGAIgBAKQgFAIgHAHQgHAGgKADIAIAIQAFADADAGIABAEgAATAVIAMgDIgMADg");
	this.shape_31.setTransform(-52.7,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26}]},4).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_31},{t:this.shape_30}]},2).to({state:[]},2).wait(25));

	// Layer 16
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgGAFQABAJgGAJAgGAFQAAgBgBgCQgFgHAFgIQAFgIAIgBQAEAAABAEQACAIgHAGQgGAEgGAFg");
	this.shape_32.setTransform(-50.1,42.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C8E3FF").s().p("AgIALQgEgIAEgHQAFgIAIgBQAFAAABAEQACAIgHAFIgNAKIgBgDg");
	this.shape_33.setTransform(-50,42);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgGAGQAAgCgBgBQgFgHAFgIQAFgJAIgBQAEAAABAEQACAJgHAFQgGAEgGAGQABAJgGAI");
	this.shape_34.setTransform(-47.7,35.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAHAJQAGgDAAgGQAAgEgBgDQgCgBgBAAQgGgEgFADQgHACgCAHQgDAHAIADQAGADAHgEg");
	this.shape_35.setTransform(-44.8,29.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C8E3FF").s().p("AgGAKQgIgDADgHQACgHAHgCQAFgDAGAEIADABQABADAAAEQAAAGgGADQgEACgDAAIgGgBg");
	this.shape_36.setTransform(-44.8,29.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#696D5E").ss(1.5,1,1).p("AACALQAHAAADgHQACgDAAgDQgBgBgBgBQgEgGgHAAQgBAAgBAAQgFAAgEAFQgGAFAGAGQAEAEAFABQABAAACAAg");
	this.shape_37.setTransform(-31.6,17.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C8E3FF").s().p("AgBALQgFgBgEgEQgGgGAGgFQAEgFAFAAIACAAQAHAAAEAGIACACQAAADgCADQgDAHgHAAIgBAAIgCAAg");
	this.shape_38.setTransform(-31.6,17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgCALQAFADAGgFQADgCABgEQAAgBAAgBQgBgGgGgDQgGgEgGACQgIADACAHQADAHAHAEg");
	this.shape_39.setTransform(-23,19.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C8E3FF").s().p("AgCALQgHgEgDgHQgCgHAIgDQAGgCAGAEQAGADABAGIAAACQgBAEgDACQgEADgDAAIgEgBg");
	this.shape_40.setTransform(-23,19.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgFAJQAFAFAFgCQADgBADgDQAAgBAAgBQABgGgFgGQgDgFgGgBQgIAAAAAIQAAAHAFAGg");
	this.shape_41.setTransform(-17.4,23.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C8E3FF").s().p("AgFAJQgFgGAAgHQAAgIAIAAQAGABADAFQAFAGgBAGIAAACQgDADgDABIgDABQgDAAgEgEg");
	this.shape_42.setTransform(-17.4,23.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgFAKQAFAGAFgCIAAAAQAEgBACgDQABgCAAgBQAAgHgEgGQgCgCgBgBQgEgEgEAAQgIgBAAAJQABAIAFAHg");
	this.shape_43.setTransform(-14.7,33.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C8E3FF").s().p("AgFAKQgFgHgBgIQAAgJAIABQAEAAAEAEIADADQAEAGAAAHIgBADQgCADgEABIAAAAIgDAAQgDAAgEgEg");
	this.shape_44.setTransform(-14.7,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33,p:{x:-50,y:42}},{t:this.shape_32}]},4).to({state:[{t:this.shape_33,p:{x:-47.7,y:35}},{t:this.shape_34}]},2).to({state:[{t:this.shape_36,p:{x:-44.8,y:29.8}},{t:this.shape_35,p:{x:-44.8,y:29.8}}]},2).to({state:[{t:this.shape_36,p:{x:-38.6,y:22.4}},{t:this.shape_35,p:{x:-38.6,y:22.4}}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_44},{t:this.shape_43}]},2).to({state:[]},2).wait(15));

	// Layer 17
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgFApQARgkgBgtQgeAUAOA9g");
	this.shape_45.setTransform(-49.5,33.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C8E3FF").s().p("AALgoQABAtgRAkQgOg9AegUg");
	this.shape_46.setTransform(-49.5,33.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgLAoQAUgiAFgtQggARAHA+g");
	this.shape_47.setTransform(-46.8,25.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C8E3FF").s().p("AAOgnQgFAtgUAiQgHg+AggRg");
	this.shape_48.setTransform(-46.8,25.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAUgiQAAgBAAAAQgBAAgCABQgfALgFA7QAagdANgpg");
	this.shape_49.setTransform(-44.1,19);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C8E3FF").s().p("AARgiIADgBIAAABQgNApgaAdQAFg7AfgLg");
	this.shape_50.setTransform(-44.1,19);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgbAfQAhgWAWgnQgkABgTA8g");
	this.shape_51.setTransform(-37.1,11.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C8E3FF").s().p("AAcgeQgWAnghAWQATg8AkgBg");
	this.shape_52.setTransform(-37.1,11.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgmARQAWgDAUgIQASgGARgMQgQgHgTAGQgTAHgXAXg");
	this.shape_53.setTransform(-32.2,9.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C8E3FF").s().p("AAFgNQASgGAQAHQgRAMgRAGQgVAIgWADQAXgXAUgHg");
	this.shape_54.setTransform(-32.2,9.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgoAJQAnAFAqgOQgcgXg1Agg");
	this.shape_55.setTransform(-29.5,8.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C8E3FF").s().p("AgoAJQA1ggAcAXQgfAKgcAAQgLAAgLgBg");
	this.shape_56.setTransform(-29.5,8.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#696D5E").ss(1.5,1,1).p("AApALQgTgeg9AMQAjASAtAAg");
	this.shape_57.setTransform(-27.3,14);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C8E3FF").s().p("AgogHQA+gMASAeQgsAAgkgSg");
	this.shape_58.setTransform(-27.3,14);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAZAhQAFgjg3geQAQAkAiAdg");
	this.shape_59.setTransform(-21.1,18.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C8E3FF").s().p("AgZggQA3AegFAjQgigdgQgkg");
	this.shape_60.setTransform(-21.1,18.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgJgoQgEAoAPApQAWgdghg0g");
	this.shape_61.setTransform(-16.9,27.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C8E3FF").s().p("AgJgoQAhA0gWAdQgPgpAEgog");
	this.shape_62.setTransform(-16.9,27.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgDgpQgKAoAKAqQAZgZgZg5g");
	this.shape_63.setTransform(-16,41.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C8E3FF").s().p("AgDgoQAZA4gZAZQgKgqAKgng");
	this.shape_64.setTransform(-16,41.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgDgoQgKAnAKAqQAZgZgZg4g");
	this.shape_65.setTransform(-15.8,57.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C8E3FF").s().p("AgDgoQAZA4gZAaQgKgrAKgng");
	this.shape_66.setTransform(-15.8,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46},{t:this.shape_45}]},4).to({state:[{t:this.shape_48},{t:this.shape_47}]},2).to({state:[{t:this.shape_50},{t:this.shape_49}]},2).to({state:[{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.shape_54},{t:this.shape_53}]},2).to({state:[{t:this.shape_56},{t:this.shape_55}]},2).to({state:[{t:this.shape_58},{t:this.shape_57}]},2).to({state:[{t:this.shape_60},{t:this.shape_59}]},2).to({state:[{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[]},2).wait(9));

	// Layer 18
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBgUQghAOAkAdQAYgXgNgUQgHgEgHAEg");
	this.shape_67.setTransform(-48.4,25.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C8E3FF").s().p("AgBgUQAHgEAHAEQANAUgYAXQgkgdAhgOg");
	this.shape_68.setTransform(-48.4,25.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAAgVQghALAhAhQAZgVgLgVQgGgFgIADg");
	this.shape_69.setTransform(-47.2,19.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C8E3FF").s().p("AAAgVQAIgDAGAFQALAVgZAVQghghAhgLg");
	this.shape_70.setTransform(-47.2,19.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAAgYQgfAQAfAjQAXgbgLgXQgGgFgGAEg");
	this.shape_71.setTransform(-44.6,11.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C8E3FF").s().p("AAAgYQAGgEAGAFQALAXgXAbQgfgjAfgQg");
	this.shape_72.setTransform(-44.6,11.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAMgVQgGgFgGAEQgfAOAfAhQAXgZgLgVg");
	this.shape_73.setTransform(-40,5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C8E3FF").s().p("AAAgWQAGgEAGAFQALAVgXAZQgfghAfgOg");
	this.shape_74.setTransform(-40,5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgEATQAGACAHgCQARgTgMgRQgIgEgHAEQggAMAcAY");
	this.shape_75.setTransform(-36.3,1.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C8E3FF").s().p("AgEATIgBAAQgcgYAggMQAHgEAIAEQAMARgRATIgHABIgGgBg");
	this.shape_76.setTransform(-36.3,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#696D5E").ss(1.5,1,1).p("AABAXQAHABAGgFQAKgZgQgPQgIgCgGAGQgZAVAgAT");
	this.shape_77.setTransform(-23.4,12.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C8E3FF").s().p("AABAXIAAAAQgggTAZgVQAGgGAIACQAQAPgKAZQgFAEgFAAIgDAAg");
	this.shape_78.setTransform(-23.4,12.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#696D5E").ss(1.5,1,1).p("AANAYQAHgegQgVQgGgEgFAHQgLAMAFAUQADAQAJAFQAIADAFgH");
	this.shape_79.setTransform(-20.2,23.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C8E3FF").s().p("AgNAIQgFgUALgMQAFgHAGAEQARAWgIAeIgBABIgNAAIAAADQgJgFgDgQg");
	this.shape_80.setTransform(-20.2,23.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAKAcQAGgjgNgZQgFgEgEAIQgHAOADAXQADASAGAGQAGAEAEgI");
	this.shape_81.setTransform(-17.9,34);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C8E3FF").s().p("AgKAJQgDgXAHgNQAEgIAFAEQANAZgGAiIgBABIgKAAIAAAEQgGgFgDgTg");
	this.shape_82.setTransform(-17.9,33.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAIAeQgDAIgGgEQgFgGgCgTQgDgYAGgOQAEgIAEAFQALAZgFAk");
	this.shape_83.setTransform(-17.3,44.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C8E3FF").s().p("AgIAKQgDgYAGgOQAEgIAEAEQALAagFAjIgBABIgJAAIAAAEQgFgFgCgTg");
	this.shape_84.setTransform(-17.3,44.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAHAeQgDAIgFgEQgGgGgCgTQgCgYAHgOQAEgIAEAFQAKAZgGAk");
	this.shape_85.setTransform(-15.1,56.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C8E3FF").s().p("AgJAJQgCgXAHgOQAEgIAEAEQAKAagGAjIgBABIgIAAIAAAEQgGgGgCgTg");
	this.shape_86.setTransform(-15.1,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68},{t:this.shape_67}]},4).to({state:[{t:this.shape_70},{t:this.shape_69}]},2).to({state:[{t:this.shape_72},{t:this.shape_71}]},2).to({state:[{t:this.shape_74},{t:this.shape_73}]},2).to({state:[{t:this.shape_76,p:{x:-36.3,y:1.6}},{t:this.shape_75,p:{x:-36.3,y:1.6}}]},2).to({state:[{t:this.shape_76,p:{x:-32.7,y:1.5}},{t:this.shape_75,p:{x:-32.7,y:1.5}}]},2).to({state:[{t:this.shape_76,p:{x:-30.7,y:3.3}},{t:this.shape_75,p:{x:-30.7,y:3.3}}]},2).to({state:[{t:this.shape_76,p:{x:-26.6,y:8.3}},{t:this.shape_75,p:{x:-26.6,y:8.3}}]},2).to({state:[{t:this.shape_78},{t:this.shape_77}]},2).to({state:[{t:this.shape_80},{t:this.shape_79}]},2).to({state:[{t:this.shape_82},{t:this.shape_81}]},2).to({state:[{t:this.shape_84},{t:this.shape_83}]},2).to({state:[{t:this.shape_86},{t:this.shape_85}]},2).to({state:[]},2).wait(5));

	// Layer 19
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAGArQAWhWglABQgLAlAUAiQADAHADAHg");
	this.shape_87.setTransform(-55.1,26.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C8E3FF").s().p("AAAAdQgUgiALglQAlgBgWBWIgGgOg");
	this.shape_88.setTransform(-55.1,26.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#696D5E").ss(1.5,1,1).p("AASAoQABhYgkAKQgCAmAaAdQAGAGAFAFg");
	this.shape_89.setTransform(-56.1,19);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C8E3FF").s().p("AAHAdQgagdACgmQAkgKgBBYIgLgLg");
	this.shape_90.setTransform(-56.1,19);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAIATQAHACAIABQAIACAHABQgDgDgCgDQgwg/gWAcQASAZAbAKg");
	this.shape_91.setTransform(-58.7,13.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C8E3FF").s().p("AAXAWIgPgDQgbgKgSgZQAWgcAwA/IAFAGIgPgDg");
	this.shape_92.setTransform(-58.7,13.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#696D5E").ss(1.5,1,1).p("AArAHQhNgogIAkQAhATAmgLQAHgCAHgCg");
	this.shape_93.setTransform(-62.4,11.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C8E3FF").s().p("AgqADQAIgkBNAoIgOAEQgOAEgNAAQgXAAgVgMg");
	this.shape_94.setTransform(-62.4,11.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAdgDQAGgFAGgEQhXgKAGAkQAmAGAfgXg");
	this.shape_95.setTransform(-66.5,11.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C8E3FF").s().p("AgoAOQgGgkBXAKIgMAJQgaASgdAAIgOgBg");
	this.shape_96.setTransform(-66.5,11.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAdgiQhNAqAbAbQAhgSAMglQADgHACgHg");
	this.shape_97.setTransform(-71.3,14.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C8E3FF").s().p("AAdgiIgFAPQgMAkghASQgbgbBNgqg");
	this.shape_98.setTransform(-71.3,14.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#696D5E").ss(1.5,1,1).p("AATgoQg7BAAiARQAZgbAAgnQAAgIAAgHg");
	this.shape_99.setTransform(-75.2,22);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C8E3FF").s().p("AATgoIAAAPQAAAngZAbQgigRA7hAg");
	this.shape_100.setTransform(-75.2,22);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAMgbQgCgIgBgHQgrBMAjAJQAUghgJglg");
	this.shape_101.setTransform(-77,34);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C8E3FF").s().p("AAJgqIADAPQAJAlgUAhQgjgJArhMg");
	this.shape_102.setTransform(-77,34);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBgqQgcBTAlACQANgkgQgjQgEgHgCgHg");
	this.shape_103.setTransform(-78.5,51.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C8E3FF").s().p("AgBgqIAGAOQAQAjgNAkQglgCAchTg");
	this.shape_104.setTransform(-78.5,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88},{t:this.shape_87}]},4).to({state:[{t:this.shape_90},{t:this.shape_89}]},2).to({state:[{t:this.shape_92},{t:this.shape_91}]},2).to({state:[{t:this.shape_94},{t:this.shape_93}]},2).to({state:[{t:this.shape_96},{t:this.shape_95}]},2).to({state:[{t:this.shape_98},{t:this.shape_97}]},2).to({state:[{t:this.shape_100},{t:this.shape_99}]},2).to({state:[{t:this.shape_102},{t:this.shape_101}]},2).to({state:[{t:this.shape_104,p:{x:-78.5,y:51.3}},{t:this.shape_103,p:{x:-78.5,y:51.3}}]},2).to({state:[{t:this.shape_104,p:{x:-78.2,y:66.7}},{t:this.shape_103,p:{x:-78.2,y:66.7}}]},2).to({state:[]},2).wait(11));

	// Layer 11
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgFARQgHgZgKgYQgPgkAkABQAaAEACAfQACAegFAZQgFAYgIAVQgIgYgIgbg");
	this.shape_105.setTransform(-56.5,33.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C8E3FF").s().p("AgFARQgHgZgKgYQgPgkAkABQAaAEACAfQACAegFAZQgFAYgIAVIgQgzg");
	this.shape_106.setTransform(-56.5,33.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAAASQgKgXgNgXQgTgiAkgDQAaAAAGAeQAGAegCAZQgBAZgFAVQgMgWgMgag");
	this.shape_107.setTransform(-59.3,22.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C8E3FF").s().p("AAAASQgKgXgNgXQgTgiAkgDQAaAAAGAeQAGAegCAZQgBAZgFAVIgYgwg");
	this.shape_108.setTransform(-59.3,22.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAmAAQADAGAAAHQAAAHgCAHQgDAKgKABQgJgBgIgDQgIgDgHgEQgIgFgHgFQgHgFgGgGQgFgFgBgHQAAgHAEgHQAFgIAIgFQAHgEAIAAQAEAAADAAQARAHASAZQACACACADg");
	this.shape_109.setTransform(-64.2,12.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C8E3FF").s().p("AAJAiQgIgDgHgEIgPgKQgHgFgGgGQgFgFgBgHQAAgHAEgHQAFgIAIgFQAHgEAIAAIAHAAQARAHASAZIAEAFQADAGAAAHQAAAHgCAHQgDAKgKABQgJgBgIgDg");
	this.shape_110.setTransform(-64.2,12.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgVgcQAHgBAGgBQAbgDAOAVQABAEABAEQADAkgngBIgSgGQgDgCgDgDQgKgKABgOQABgSAMgF");
	this.shape_111.setTransform(-68.6,11.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C8E3FF").s().p("AgBAfIgSgGIgGgFQgKgKABgOQABgSAMgFIAAgBIANgCQAbgDAOAVIACAIQADAjgmAAIgBAAg");
	this.shape_112.setTransform(-68.6,11.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAggPQgFgOgNgFQgOgFgNAGQgYAHADAcQACAbAaAHQAOAFAPgOQATgTgKgXg");
	this.shape_113.setTransform(-71.8,11.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C8E3FF").s().p("AgGAkQgagHgCgbQgDgcAYgHQANgGAOAFQANAFAFAOQAKAXgTATQgLALgLAAIgHgCg");
	this.shape_114.setTransform(-71.8,11.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAhAEQAGgOgGgMQgGgMgOgCQgVgHgSAbQgQAYANAVQAHANAUgFQAagFAJgcg");
	this.shape_115.setTransform(-76.8,14);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C8E3FF").s().p("AgdAdQgNgVAQgYQASgbAVAHQAOACAGAMQAGAMgGAOQgJAcgaAFIgJABQgNAAgFgJg");
	this.shape_116.setTransform(-76.8,14);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAPglQgJgHgKAFQgSAGgDAgQgCAeARALQAKAHAMgOQARgTgEgcQgBgQgJgHg");
	this.shape_117.setTransform(-80.8,21.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C8E3FF").s().p("AgKAoQgRgLACgeQADggASgGQAKgFAJAHQAJAHABAQQAEAcgRATQgJAJgGAAQgDAAgEgCg");
	this.shape_118.setTransform(-80.8,21.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAWAiQAHAjgfgHQgXgIADgcQAAgEABgDQADgXAIgUQAIgVAKgRQADAXAEAaQABAQADAQQACAIABAHg");
	this.shape_119.setTransform(-82,32.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C8E3FF").s().p("AgCA+QgXgIADgcIABgHQADgXAIgUQAIgVAKgRIAHAxIAEAgIADAPQAGAdgVAAIgJgBg");
	this.shape_120.setTransform(-82,32.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAGhFQAFAcADAcQADAaAFAaQAHAmgfgIQgXgBADghQADghAIgYQAJgZAIgWg");
	this.shape_121.setTransform(-82.5,44.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C8E3FF").s().p("AgCBFQgXgBADghQADghAIgYQAJgZAIgWQAFAcADAcQADAaAFAaQAGAfgVAAIgJgBg");
	this.shape_122.setTransform(-82.5,44.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgQAqQACgoAGgdQAGgeAGgaQAEAiADAiQACAeADAgQAGAtgXgJQgRgBACgog");
	this.shape_123.setTransform(-83.3,65.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C8E3FF").s().p("AgBBTQgRgBACgoQACgoAGgdQAGgeAGgaIAHBEQACAeADAgQAFAlgQAAIgGgBg");
	this.shape_124.setTransform(-83.3,65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105}]}).to({state:[{t:this.shape_108},{t:this.shape_107}]},2).to({state:[{t:this.shape_110},{t:this.shape_109}]},2).to({state:[{t:this.shape_112},{t:this.shape_111}]},2).to({state:[{t:this.shape_114},{t:this.shape_113}]},2).to({state:[{t:this.shape_116},{t:this.shape_115}]},2).to({state:[{t:this.shape_118},{t:this.shape_117}]},2).to({state:[{t:this.shape_120},{t:this.shape_119}]},2).to({state:[{t:this.shape_122},{t:this.shape_121}]},2).to({state:[{t:this.shape_124},{t:this.shape_123}]},2).to({state:[]},2).wait(15));

	// Layer 10
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAFgwQABAGABAGQABAJABAJQABAGAAAHQgBAIgBAJQgCAJgDAKQgCAGgDAGQgBADgCACQgBgEAAgFQgBgJgBgKQgBgPAAgNQABgJABgJQABgGACgFQACgGAHgFg");
	this.shape_125.setTransform(-49.4,26);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C8E3FF").s().p("AgGAnIgCgTQgBgPAAgMIACgTQABgFACgFQACgHAHgFIACANIACARIABANIgCARIgFATQgCAGgDAHIgDAEIgBgJg");
	this.shape_126.setTransform(-49.4,26);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAagoQgCAFgBAHQgDAIgDAIQgCAGgDAGQgEAHgFAHQgFAIgHAIQgEAFgHADQgCACgDABQABgEACgEQADgJAEgJQAFgPAGgKQAEgJAFgHQADgFAEgDQAFgGAJAAg");
	this.shape_127.setTransform(-44.3,15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C8E3FF").s().p("AgWAhIAHgSQAFgPAHgLIAJgPQACgFAEgDQAFgGAJAAIgDALIgGARIgFAMIgJAOIgMAQQgEAFgHADIgFADIADgIg");
	this.shape_128.setTransform(-44.3,15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAegVQAGgBAIAEQgEAEgFAEQgGAGgIAEQgFAEgGADQgHAFgIADQgJADgKADQgGABgHAAQgDAAgDAAQADgDAEgDQAHgGAIgFQANgIALgHQAIgEAIgDQAFgDAGgBg");
	this.shape_129.setTransform(-37.2,7.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C8E3FF").s().p("AglAWIgGAAIAHgGIAPgLQANgIALgHIAQgHQAFgDAGgBQAGgBAIAEIgJAIIgOAKIgLAHIgPAIIgTAGIgLABIgCAAg");
	this.shape_130.setTransform(-37.2,7.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAWgMQAFgBAGABQAGABAHAHQgFADgGABQgHAEgIADQgGACgFACQgJACgIAAQgIABgKgBQgGgBgHgDQgDgBgCgBQAEgCADgBQAJgEAIgCQAOgFALgDQAJgCAIAAg");
	this.shape_131.setTransform(-28.5,4.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C8E3FF").s().p("AgaANQgGgBgHgDIgFgCIAIgDIAQgGQAOgFALgDIARgCQAFgBAFABQAHABAHAHIgLAEIgPAHIgLAEIgQACIgIAAIgLAAg");
	this.shape_132.setTransform(-28.5,4.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAtADQgFACgGACQgHADgIADQgGABgGABQgHAAgJgBQgIgCgJgDQgGgDgHgFQgCgBgDgCQAEgCAEgBQAJgCAIgCQAOgEALAAQAJgBAIACQAFAAAFACQAGACAGALg");
	this.shape_133.setTransform(-20.5,3.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C8E3FF").s().p("AgIAOQgJgCgJgDQgGgDgGgFIgGgDIAIgDIARgEQAOgEALAAQAJgBAIACQAFAAAFACQAGACAGALIgLAEIgPAGIgMACIgCAAIgNgBg");
	this.shape_134.setTransform(-20.5,3.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAsAIQgFACgGABQgIACgIABQgGABgGAAQgHgBgIgDQgJgCgIgFQgGgDgFgFQgDgDgCgDQAEAAAFgBQAIgBAJgBQAOgBALABQAJABAIACQAFABAEADQAGADAEALg");
	this.shape_135.setTransform(-12.3,4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C8E3FF").s().p("AAFAPIgPgEQgJgCgIgFQgGgDgFgFIgFgGIAJgBIARgCQAOgBALABQAJABAIACQAFABAEADQAGADAEALIgLADIgQADIgIABIgEAAg");
	this.shape_136.setTransform(-12.3,4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgcgWQAIACAJADQAMADALAGQAIAEAHAEQAEADADAEQAEAFgBANQgFgBgGgBQgIgBgIgCQgGgBgEgDQgHgDgHgGQgHgFgGgHQgEgFgDgIQgBgCgBgEQAEABAEABg");
	this.shape_137.setTransform(-3.6,8.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C8E3FF").s().p("AAaAXIgQgDIgKgDIgOgKQgHgFgGgHQgEgFgDgHIgCgHIAIACIARAFQAMADALAGQAIAEAHAEQAEADADAEQAEAFgBANIgLgCg");
	this.shape_138.setTransform(-3.6,8.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAWAMQADAFACAFQACAGgEAKQgFgDgFgEQgHgEgGgFQgEgEgEgFQgGgGgEgHQgFgIgDgJQgCgGAAgHQgBgDABgEQADADADACQAHAGAHAGQAKAJAIAKQAGAGAEAHg");
	this.shape_139.setTransform(3.9,16.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C8E3FF").s().p("AAPAfIgNgJIgIgJIgKgNQgFgIgDgJQgCgGAAgHIAAgHIAGAFIAOAMQAKAJAIAKIAKANQADAFACAFQACAGgEAKIgKgHg");
	this.shape_140.setTransform(3.9,16.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#696D5E").ss(1.5,1,1).p("AALAzQgDgFgDgGQgFgIgEgJQgDgGgCgHQgDgJgCgJQgCgKAAgLQgBgHACgIQABgDABgDQACAEADAFQAEAJAEAJQAGAPAFANQADAKACAKQABAFAAAGQABAHgHAIg");
	this.shape_141.setTransform(10,31.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C8E3FF").s().p("AAFAoIgJgRIgFgNIgFgSQgCgKAAgLQgBgHACgIIACgGIAFAJIAIASQAGAPAFANIAFAUQABAFAAAGQABAHgHAIIgGgLg");
	this.shape_142.setTransform(10,31.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgJg2QAAgDABgEQACAGACAGQADALACAMQAFATADAQQACAMABAMQABAHgBAGQAAAJgGAHQgCgHgCgIQgDgKgDgLQgCgIgCgJQgCgKAAgLQgCgMABgNQAAgIACgJg");
	this.shape_143.setTransform(13,51.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C8E3FF").s().p("AACAvIgGgVIgEgRIgCgVIgBgZQAAgIACgJIABgHIAEAMIAFAXQAFATADAQIADAYIAAANQAAAJgGAHIgEgPg");
	this.shape_144.setTransform(13,51.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#696D5E").ss(1.5,1,1).p("AADgcQAEAVACASQABANAAANQABAIgBAHQgBAJgGAHQgCgHgBgJQgDgMgCgMQgCgJgBgJQgBgMAAgNQgBgNABgOQABgJACgJQABgEACgDQABAGABAGQACANACAOg");
	this.shape_145.setTransform(14.4,73.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C8E3FF").s().p("AAAA0IgFgYIgDgSIgBgZIAAgbQABgJACgJIADgHIACAMIAEAbQAEAVACASIABAaIAAAPQgBAJgGAHIgDgQg");
	this.shape_146.setTransform(14.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125}]}).to({state:[{t:this.shape_128},{t:this.shape_127}]},2).to({state:[{t:this.shape_130},{t:this.shape_129}]},2).to({state:[{t:this.shape_132},{t:this.shape_131}]},2).to({state:[{t:this.shape_134},{t:this.shape_133}]},2).to({state:[{t:this.shape_136},{t:this.shape_135}]},2).to({state:[{t:this.shape_138},{t:this.shape_137}]},2).to({state:[{t:this.shape_140},{t:this.shape_139}]},2).to({state:[{t:this.shape_142},{t:this.shape_141}]},2).to({state:[{t:this.shape_144},{t:this.shape_143}]},2).to({state:[{t:this.shape_146},{t:this.shape_145}]},2).to({state:[]},2).wait(13));

	// Layer 9
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAJAOQAAABAAABQgGgEgFgGQgDgDgCgEQgDgJAFgEQADgDADADQAHAEAAAJQAAAHABAIg");
	this.shape_147.setTransform(-55.1,19.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C8E3FF").s().p("AgCAGQgDgDgCgEQgDgJAFgEQADgDADADQAHAEAAAJIABAPIAAACQgGgEgFgGg");
	this.shape_148.setTransform(-55.1,19.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgDgNQAHADACAIQADAHACAIQABABAAABQgHgDgGgFQgEgCgDgFQgFgGAEgGQACgCAEABg");
	this.shape_149.setTransform(-58.2,13.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C8E3FF").s().p("AgBAHQgEgCgDgFQgFgGAEgGQACgCAEABQAHADACAIIAFAPIABACIgNgIg");
	this.shape_150.setTransform(-58.2,13.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#696D5E").ss(1.5,1,1).p("AANALQAAABABABQgIgCgGgDQgFgCgDgDQgHgFADgHQACgDAEAAQAHACAEAIQAEAGAEAHg");
	this.shape_151.setTransform(-61.8,9.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C8E3FF").s().p("AAAAIQgFgCgDgDQgHgFADgHQACgDAEAAQAHACAEAIIAIANIABACIgOgFg");
	this.shape_152.setTransform(-61.8,9.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAOAJQABABAAABQgHgBgIgBQgEgBgEgDQgIgFACgGQABgDAEgBQAJAAAEAIQAFAFAFAGg");
	this.shape_153.setTransform(-65,6.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C8E3FF").s().p("AAAAJQgEgBgEgDQgIgFACgGQABgDAEgBQAJAAAEAIIAKALIABACIgPgCg");
	this.shape_154.setTransform(-65,6.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAPAEQABAAABABQgHACgIABQgEABgFgCQgJgCAAgGQAAgDAEgCQAIgDAGAFQAHAEAGAEg");
	this.shape_155.setTransform(-68,4.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C8E3FF").s().p("AgHAHQgJgCAAgGQAAgDAEgCQAIgDAGAFIANAIIACABQgHACgIABIgCAAIgHgBg");
	this.shape_156.setTransform(-68,4.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAQAAQABAAAAAAQgGADgIADQgDACgFAAQgJAAgCgHQgBgDADgCQAHgFAHAEQAIACAIADg");
	this.shape_157.setTransform(-71.1,4.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C8E3FF").s().p("AgQABQgBgDADgCQAHgFAHAEIAQAFIABAAIgOAGQgDACgFAAQgJAAgCgHg");
	this.shape_158.setTransform(-71.1,4.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBgHQAHAAAIgBQABAAABAAQgEAGgGAEQgEAEgDACQgJADgEgFQgCgDACgDQAEgHAJAAg");
	this.shape_159.setTransform(-73.9,4.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C8E3FF").s().p("AgOAGQgCgDACgDQAEgHAJAAIAPgBIACAAIgKAKQgEAEgDACIgGABQgEAAgDgDg");
	this.shape_160.setTransform(-73.9,4.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAMgLQABAAABAAQgDAHgEAFQgCAFgEADQgGAGgGgEQgDgCABgEQADgHAIgDQAHgDAHgDg");
	this.shape_161.setTransform(-77.2,5.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C8E3FF").s().p("AgLALQgDgCABgEQADgHAIgDIAOgGIACAAIgHAMQgCAFgEADQgDADgEAAQgCAAgDgBg");
	this.shape_162.setTransform(-77.2,5.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAJAAQgBAEgCAFQgEAIgGgBQgEgBgBgEQAAgJAHgEQAEgGAGgFQABgBABgBQAAAIgBAHg");
	this.shape_163.setTransform(-80.4,9.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C8E3FF").s().p("AgEAQQgEgBgBgEQAAgJAHgEIAKgLIACgCIgBAPQgBAEgCAFQgEAHgFAAIgBAAg");
	this.shape_164.setTransform(-80.4,9.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgDgCQAEgGAFgGQABgBABAAQABAHAAAIQAAAEgCAFQgDAIgHgBQgDAAgBgEQgCgIAGgGg");
	this.shape_165.setTransform(-83.1,15.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C8E3FF").s().p("AgDAQQgDAAgBgEQgCgIAGgGIAJgMIACgBIABAPQAAAEgCAFQgDAHgGAAIgBAAg");
	this.shape_166.setTransform(-83.1,15.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAEgOQABgBAAgBQADAIAAAHQABAEgCAFQgCAJgGAAQgEAAgCgEQgCgIAFgGQAEgGAEgHg");
	this.shape_167.setTransform(-84.9,23);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C8E3FF").s().p("AgHANQgCgIAFgGIAIgNIABgCIADAPQABAEgCAFQgCAJgGAAIgBAAQgDAAgCgEg");
	this.shape_168.setTransform(-84.9,23);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#696D5E").ss(1.5,1,1).p("AABgPQAAgBABAAQADAHACAHQABAEAAAFQgBAJgHABQgDABgCgEQgEgHAEgHQAEgHACgIg");
	this.shape_169.setTransform(-86.5,34.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C8E3FF").s().p("AgFAOQgEgHAEgHIAGgPIABgBIAFAOQABAEAAAFQgBAJgHABIgBAAQgCAAgCgDg");
	this.shape_170.setTransform(-86.5,34.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAHgCQABAEAAAFQgBAJgHABQgDABgCgEQgEgHAEgHQAEgHACgIQAAgBABAAQADAHACAHg");
	this.shape_171.setTransform(-87.3,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147}]}).to({state:[{t:this.shape_150},{t:this.shape_149}]},2).to({state:[{t:this.shape_152},{t:this.shape_151}]},2).to({state:[{t:this.shape_154},{t:this.shape_153}]},2).to({state:[{t:this.shape_156},{t:this.shape_155}]},2).to({state:[{t:this.shape_158},{t:this.shape_157}]},2).to({state:[{t:this.shape_160},{t:this.shape_159}]},2).to({state:[{t:this.shape_162},{t:this.shape_161}]},2).to({state:[{t:this.shape_164},{t:this.shape_163}]},2).to({state:[{t:this.shape_166},{t:this.shape_165}]},2).to({state:[{t:this.shape_168},{t:this.shape_167}]},2).to({state:[{t:this.shape_170,p:{x:-86.5,y:34.4}},{t:this.shape_169,p:{x:-86.5,y:34.4}}]},2).to({state:[{t:this.shape_170,p:{x:-87.3,y:48.8}},{t:this.shape_171}]},2).to({state:[{t:this.shape_170,p:{x:-87.7,y:63.1}},{t:this.shape_169,p:{x:-87.7,y:63.1}}]},2).to({state:[]},2).wait(7));

	// Layer 14
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAbgkQgEAJgBAGQgCAIgDAIQgDAIgDAJQgDAIgHAGQgGAGgIAEQgGADgEgFQgGgIAGgKQAFgIAFgIQAFgGAFgHQAEgIAIgFQAGgEAKgF");
	this.shape_172.setTransform(-99.5,2.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C8E3FF").s().p("AgXAiQgGgIAGgKIAKgQIAKgNQAEgIAIgFQAGgEAKgFIACgBIgFAPIgFAQIgGARQgDAIgHAGQgGAGgIAEIgEABQgDAAgDgDg");
	this.shape_173.setTransform(-99.5,2.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAWgnQgCAKAAAGQgBAIgCAJQgCAIgCAJQgCAJgFAGQgGAHgHAFQgGAEgEgFQgHgHAFgKQADgIAFgJQADgHAEgIQAEgIAGgGQAFgFAKgH");
	this.shape_174.setTransform(-103.5,8.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C8E3FF").s().p("AgRAlQgHgHAFgKIAIgRIAHgPQAEgIAGgGQAFgFAKgHIABgBIgCAQIgDARIgEARQgCAJgFAGQgGAHgHAFQgDACgCAAQgDAAgCgDg");
	this.shape_175.setTransform(-103.5,8.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#696D5E").ss(1.5,1,1).p("AARgpQAAACgBABQAAAIAAAFQABAIgBAJQAAAIAAAKQAAAIgFAIQgFAIgGAFQgFAFgFgEQgIgFADgMQACgIADgJQACgHADgJQADgJAEgHQAEgFAHgHQABgBABgB");
	this.shape_176.setTransform(-107.5,19.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C8E3FF").s().p("AgKAoQgIgFADgMIAFgRIAFgQQADgJAEgHIALgMIACgCIACgBIgBADIAAANIAAARIAAASQAAAIgFAIQgFAIgGAFQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_177.setTransform(-107.5,19.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAHgzQABAMABAIQABALABALQABALABAMQABALgDAJQgDAJgFAHQgDAFgFgFQgJgJACgOQAAgKACgMQABgJABgKQABgLAEgIQADgIAGgJ");
	this.shape_178.setTransform(-109.4,35.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C8E3FF").s().p("AgFAyQgJgJACgOIACgWIACgTQABgLAEgIQADgIAGgJIABgBIACAUIACAWIACAXQABALgDAJQgDAJgFAHQgCACgCAAQgCAAgCgCg");
	this.shape_179.setTransform(-109.4,35.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAFhGQABASABAKQACAQABAPQABAQABAQQABAPgCAMQgDAMgFAIQgDAGgFgIQgIgOABgTQABgOABgPQABgNABgOQABgOAEgLQADgJAEgK");
	this.shape_180.setTransform(-110.3,57.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C8E3FF").s().p("AgFBCQgIgOABgTIACgdIACgbQABgOAEgLQADgJAEgKIABgDIACAcIADAfIACAgQABAPgCAMQgDAMgFAIQAAAAgBABQAAAAgBABQAAAAgBAAQAAABAAAAQgCAAgDgFg");
	this.shape_181.setTransform(-110.3,57.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBhdQABAYACAOQACAVACAUQACAVADAXQABAUgBAPQgCAQgDAJQgDAIgEgMQgIgSAAgaQgBgSAAgVQAAgRAAgTQAAgTACgNQACgMAEgN");
	this.shape_182.setTransform(-111.5,82.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C8E3FF").s().p("AgBBWQgIgSAAgaIgBgnIAAgkQAAgTACgNQACgMAEgNIABgDIADAmIAEApIAFAsQABAUgBAPQgCAQgDAJQgBABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgCAAgCgIg");
	this.shape_183.setTransform(-111.5,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_173},{t:this.shape_172}]},4).to({state:[{t:this.shape_175},{t:this.shape_174}]},2).to({state:[{t:this.shape_177},{t:this.shape_176}]},2).to({state:[{t:this.shape_179},{t:this.shape_178}]},2).to({state:[{t:this.shape_181},{t:this.shape_180}]},2).to({state:[{t:this.shape_183},{t:this.shape_182}]},2).to({state:[]},2).wait(19));

	// Layer 8
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#696D5E").ss(1.5,1,1).p("AADAFQgEADgGACQgFACgEAEQgCACgDACQgDACAAADQAAAFAEAAQAMAAAKgDQARgGAQgHQASgJARgJQADgCADgCQgLgHgIgFQgIgFgJgCQgJgCgIAAQgKgBgJABQgIABgJABQgKACgJAEQgJADgIAFQgHAFgIAGQgHAGgDAIQgEAMANAAQAJAAAIgCQAJgCAJgEQAIgFAJgDQAIgCAHgEQABAAAAAAQAJgDAKgCQACgBADAAQgDABgCABQgJACgJAEQAAAAAAABg");
	this.shape_184.setTransform(-78.8,-4.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C8E3FF").s().p("AgYAZQAAgDADgCIAFgEQAEgEAFgCQAGgCAEgDIABAAIAAgBQAJgEAJgCIAFgCIgFABQgKACgJADIgBAAIgPAGQgJADgIAFQgJAEgJACQgIACgJAAQgNAAAEgMQADgIAHgGIAPgLQAIgFAJgDQAJgEAKgCIARgCQAJgBAKABIARACQAJACAIAFIATAMIgGAEQgRAJgSAJQgQAHgRAGQgKADgMAAQgEAAAAgFg");
	this.shape_185.setTransform(-78.8,-4.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAagJQgPAFgIAEQgEADgGAEQgGADgDADQgDACgCADQgDACgBAIQgBAIAFgBQAGAAARgJQARgKAQgHQASgJARgJQADgCADgCQgLgHgIgFQgIgFgJgCQgJgCgIAAQgKgBgJABQgIABgJABQgKACgJAEQgJADgIAFQgHAFgIAGQgHAHgDAHQgEAMANAAQAJAAAIgCQAJgCAJgEQAIgFAJgDQAIgDAIgCQAJgEAKgCQABAAADgBIAIgCQAEgCAMgD");
	this.shape_186.setTransform(-88.2,-3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C8E3FF").s().p("AgZAcQABgIADgCIAFgFIAJgGIAKgHQAIgEAPgFIAIgCIAQgFIgQAFIgIACIgEABQgKACgJAEIgQAFQgJADgIAFQgJAEgJACQgIACgJAAQgNAAAEgMQADgHAHgHIAPgLQAIgFAJgDQAJgEAKgCIARgCQAJgBAKABIARACQAJACAIAFIATAMIgGAEQgRAJgSAJIghARQgRAJgGAAIAAAAQgFAAABgHg");
	this.shape_187.setTransform(-88.2,-3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgGgVQgVALgPARQgKAKgCAOQADAAAEAAQAWgBATgMQAKgHALgJQAWgOASgSQgWAAgXADQgJABgHAFg");
	this.shape_188.setTransform(-100.4,-0.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C8E3FF").s().p("Ag2AfQABgOALgLQAPgQAVgLQAHgFAJgBQAXgDAXAAQgTASgWAOIgVAQQgTAMgWABIgHAAg");
	this.shape_189.setTransform(-100.4,-0.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgoAoQAWgGAQgPQAIgJAKgKQASgTAPgVQgXAFgVAHQgHADgIAGQgSAPgMATQgIAMAAAOQAEgBAEAAg");
	this.shape_190.setTransform(-110.6,6.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C8E3FF").s().p("AgoAPQAMgTASgPQAIgGAHgDQAVgHAXgFQgPAVgSATIgSATQgQAPgWAGIgIABQAAgOAIgMg");
	this.shape_191.setTransform(-110.6,6.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBgcQgGAEgFAGQgBABgBACQgOASgGAWQgFAOAFANQADgBADgCQAUgLALgSQAHgMAGgMQAEgHADgHQAIgQAGgRQgUAKgSANg");
	this.shape_192.setTransform(-120.5,17.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C8E3FF").s().p("AgiAZQAGgWAOgSIACgDQAFgGAGgEQASgNAUgKQgGARgIAQIgHAOIgNAYQgLASgUALIgGADQgFgNAFgOg");
	this.shape_193.setTransform(-120.5,17.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgEA4QAOgRADgVQADgOABgNQAEgZgBgbQgPARgMASQgFAIgDAJQgGAWACAXQABAPAIALQADgDADgDg");
	this.shape_194.setTransform(-126.1,32.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C8E3FF").s().p("AgTAkQgCgXAGgWQADgJAFgIQAMgSAPgRQABAbgEAZIgEAbQgDAVgOARIgGAGQgIgLgBgPg");
	this.shape_195.setTransform(-126.1,32.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAABHQABgDACgEQAJgVABgZQAAgPAAgPQAAgdgDgdQgKAVgHAWQgDAJgBALQgDAZAEAaQACAQAIALg");
	this.shape_196.setTransform(-129.7,58.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C8E3FF").s().p("AgKAsQgEgaADgZQABgLADgJQAHgWAKgVQADAdAAAdIAAAeQgBAZgJAVIgDAHQgIgLgCgQg");
	this.shape_197.setTransform(-129.7,58.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#696D5E").ss(1.5,1,1).p("AACBPQAAABABABQAAgBAAgBQACgDABgDQAHgagBgcQgBgRgBgRQgCghgEggQgHAZgGAbQgCALAAAMQgBAdAFAcQADARAGAKg");
	this.shape_198.setTransform(-130.7,84.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C8E3FF").s().p("AACBPQgGgKgDgRQgFgcABgdQAAgMACgLQAGgbAHgZQAEAgACAhIACAiQABAcgHAaIgDAGIAAACIgBgCg");
	this.shape_199.setTransform(-130.7,84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184}]}).to({state:[{t:this.shape_187},{t:this.shape_186}]},2).to({state:[{t:this.shape_189},{t:this.shape_188}]},2).to({state:[{t:this.shape_191},{t:this.shape_190}]},2).to({state:[{t:this.shape_193},{t:this.shape_192}]},2).to({state:[{t:this.shape_195},{t:this.shape_194}]},2).to({state:[{t:this.shape_197},{t:this.shape_196}]},2).to({state:[{t:this.shape_199},{t:this.shape_198}]},2).to({state:[]},2).wait(19));

	// Layer 7
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAaAhQgBgKgEgJQgCgFgDgFQgEgHgEgIQgDgFgDgFQgEgHgIgEQgKgDgEAKQgBAEABAEQACAIAFAIQAFAGAHAHQAGAGAIAEQAIAEAHAGQABABABAA");
	this.shape_200.setTransform(-63.2,-4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C8E3FF").s().p("AAaAhIgCgBQgHgGgJgEQgHgEgGgGQgGgHgGgGQgFgIgDgIQgBgEABgEQAFgKAJADQAKAEACAHIAGAKIAJAPIAFAKQAEAJABAKg");
	this.shape_201.setTransform(-63.2,-4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAAASQAKAEALgDQAEgBADgEQAGgKgIgGQgEgEgHgEQgDgCgEgBQgHgDgGgBQgMgEgLAEQgCABAAADQABAFAEAGQADAGAHAFQAHAGAIADg");
	this.shape_202.setTransform(-73.3,-10.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C8E3FF").s().p("AAAASQgIgDgHgGQgHgFgDgGQgEgGgBgFQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQALgEAMAEIANAEIAHADQAHAEAEAEQAIAGgGAKQgDAEgEABIgJABQgGAAgGgCg");
	this.shape_203.setTransform(-73.3,-10.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgDATQAIACAIgCQAJgCAEgKQACgDgCgDQgDgHgHgFQgFgCgEgDQgKgEgIACQgCAAgCACQgJAEgCAJQgBAKAJAFQAHAFAIACg");
	this.shape_204.setTransform(-80.9,-12.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C8E3FF").s().p("AgDATQgIgCgHgFQgJgFABgKQACgJAJgEIAEgCQAIgCAKAEIAJAFQAHAFADAHQACADgCADQgEAKgJACIgIABIgIgBg");
	this.shape_205.setTransform(-80.9,-12.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#696D5E").ss(1.5,1,1).p("AADAWQAkgMgYgYQgEgEgFgDQgDgCgDgBQgDAAgDABQgOAEgDAWQgEAeAegLg");
	this.shape_206.setTransform(-87.5,-11.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C8E3FF").s().p("AgXADQADgWAOgEIAGgBIAGADIAJAHQAYAYgkAMQgHADgGAAQgQAAADgWg");
	this.shape_207.setTransform(-87.5,-11.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAWACQAFgHgEgJQgBgDgEgCQgIgDgIACQgEACgFABQgKAFgEAHQgBACgBACQgCAJAFAHQAGAJAKgDQAIgCAHgFQAHgFAEgHg");
	this.shape_208.setTransform(-94.6,-9.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C8E3FF").s().p("AgUAPQgFgHACgJIACgEQAEgHAKgFIAJgDQAIgCAIADQAEACABADQAEAJgFAHQgEAHgHAFQgHAFgIACIgFABQgGAAgFgHg");
	this.shape_209.setTransform(-94.6,-9.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAGANQAGgFAFgFQAJgHADgLQABgDgDgBQgFgCgHAAQgHgBgIADQgIACgHAGQgKAGgDALQgBAEACAEQAEALAKgDQAHgCAGgDQADgCADgCg");
	this.shape_210.setTransform(-102.7,-6.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C8E3FF").s().p("AgbAOQgCgEABgEQADgLAKgGQAHgGAIgCQAIgDAHABQAHAAAFACQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgDALgJAHIgLAKIgGAEQgGADgHACIgEAAQgHAAgDgIg");
	this.shape_211.setTransform(-102.7,-6.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAdgeQgKAEgIAFQgFADgEADQgGAGgHAFQgFAEgDADQgHAFgCAKQgCAKALACQAEABAEgCQAIgEAFgHQAHgGAFgHQAFgHADgJQACgIAFgJQAAAAAAgB");
	this.shape_212.setTransform(-111.9,-1.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C8E3FF").s().p("AgTAeQgLgCACgKQACgKAHgFIAIgHIANgLIAJgGQAIgFAKgEIAAABIAAABQgFAJgCAIQgDAJgFAHQgFAHgHAGQgFAHgIAEIgGACIgCgBg");
	this.shape_213.setTransform(-111.9,-1.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAZghQgJAFgHAHQgFADgDAEQgGAGgFAHQgFAEgDAEQgGAGAAAKQAAAKALABQAEAAADgDQAGgFAGgHQAFgIAEgIQAEgIACgIQABgJADgJQAAgBAAgB");
	this.shape_214.setTransform(-120.1,6.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C8E3FF").s().p("AgYAXQAAgKAGgGIAIgIIAKgNIAIgHQAIgHAJgFIAAAAIAAACQgDAJgBAJQgCAIgEAIQgEAIgFAIQgGAHgGAFQgDADgEAAQgLgBAAgKg");
	this.shape_215.setTransform(-120.1,6.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAQglQgIAHgFAIQgDAFgBAFQgFAIgDAHQgDAFgCAFQgEAIADAJQACAKALgCQADgCACgDQAGgHADgIQADgJACgJQABgIgBgJQgBgIAAgKQAAgBAAgB");
	this.shape_216.setTransform(-128,22.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C8E3FF").s().p("AgPAeQgDgJAEgIIAFgKIAIgPIAEgKQAFgIAIgHIAAAAIAAACQAAAKABAIQABAJgBAIQgCAJgDAJQgDAIgGAHQgCADgDACIgEAAQgHAAgCgIg");
	this.shape_217.setTransform(-128,22.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAFgnQgFAJgDAJQgCAFgBAGQgDAIgBAIQgCAGgBAFQgCAIAFAJQAEAJAKgFQADgCACgDQADgIABgKQACgIgBgJQgBgJgCgIQgEgIgBgKQAAgBgBgB");
	this.shape_218.setTransform(-132.1,44.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C8E3FF").s().p("AgKAiQgFgJACgIIADgLIAEgQIADgLQADgJAFgJIAAAAIABACQABAKAEAIQACAIABAJQABAJgCAIQgBAKgDAIQgCADgDACIgGACQgFAAgDgGg");
	this.shape_219.setTransform(-132.1,44.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgBgnQgFAJgCAKQgBAFgBAGQgBAJAAAHQgBAHAAAFQgBAIAFAIQAGAJAJgHQACgCACgEQADgIgBgJQAAgJgBgIQgCgKgEgHQgEgIgCgJQAAgBgBgB");
	this.shape_220.setTransform(-132.7,66.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C8E3FF").s().p("AgIAjQgFgIABgIIABgMIABgQIACgLQACgKAFgJIAAAAIABACQACAJAEAIQAEAHACAKQABAIAAAJQABAJgDAIQgCAEgCACQgFADgCAAQgEAAgEgFg");
	this.shape_221.setTransform(-132.7,66.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_201},{t:this.shape_200}]}).to({state:[{t:this.shape_203},{t:this.shape_202}]},2).to({state:[{t:this.shape_205},{t:this.shape_204}]},2).to({state:[{t:this.shape_207},{t:this.shape_206}]},2).to({state:[{t:this.shape_209},{t:this.shape_208}]},2).to({state:[{t:this.shape_211},{t:this.shape_210}]},2).to({state:[{t:this.shape_213},{t:this.shape_212}]},2).to({state:[{t:this.shape_215},{t:this.shape_214}]},2).to({state:[{t:this.shape_217},{t:this.shape_216}]},2).to({state:[{t:this.shape_219},{t:this.shape_218}]},2).to({state:[{t:this.shape_221,p:{x:-132.7,y:66.8}},{t:this.shape_220,p:{x:-132.7,y:66.8}}]},2).to({state:[{t:this.shape_221,p:{x:-132.4,y:92.5}},{t:this.shape_220,p:{x:-132.4,y:92.5}}]},2).to({state:[]},2).wait(11));

	// Layer 6
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAIgLQgHgDgIADQgIAIAAAJQABALAMgFQAHgDAGgDQAJgIgJgIQgBgBgCAAg");
	this.shape_222.setTransform(-41.2,-0.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C8E3FF").s().p("AgPAGQAAgJAIgIQAIgDAHADIADABQAJAIgJAIIgNAGIgGACQgGAAgBgIg");
	this.shape_223.setTransform(-41.2,-0.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#696D5E").ss(1.5,1,1).p("AALAGQAJgIgJgIQgBgBgCAAQgHgDgIADQgIAIAAAJQABALAMgFQAHgDAGgDg");
	this.shape_224.setTransform(-35.1,-4.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgCAMQAHgDAGgDQAJgIgJgIQgBgBgCAAQgHgDgIADQgIAIAAAJQABALAMgFg");
	this.shape_225.setTransform(-25.4,-7.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#565B5F").ss(1.5,1,1).p("AAKgQIAAAAQgJgEgJAEQgBAAgBABQgKAKAAAMQABAIAGADQAEACAJgDIAAAAQAHgEAGgCQABgBAAAAQAHgHAAgFQAAgGgHgGQAAAAgBgBQgBAAgCgBg");
	this.shape_226.setTransform(-11.1,-6.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C8E3FF").s().p("AgNASQgGgDgBgIQAAgMAKgKIACgBQAJgEAJAEIAAAAIADABIABABQAHAGAAAGQAAAFgHAHIgBABIgNAGIAAAAIgJACIgEgBg");
	this.shape_227.setTransform(-11.1,-6.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#565B5F").ss(1.5,1,1).p("AgUACQAAABABABQAIAMAPAFQAKACAEgEQAFgDgCgJIAAAAQgCgIgBgGQAAgBgBgBQgGgIgHgCQgGgDgJAEQgBABgBAAQAAABgCACQgHAGACAKg");
	this.shape_228.setTransform(-5.9,-4.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C8E3FF").s().p("AAEAVQgPgFgIgMIgBgCQgCgKAHgGIACgDIACgBQAJgEAGADQAHACAGAIIABACIADAOIAAAAQACAJgFADQgDACgFAAIgGAAg");
	this.shape_229.setTransform(-5.9,-4.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#565B5F").ss(1.5,1,1).p("AgEgcIAAgBQgLgCgDALQgBAAAAABQAAASAMASQAHAMAGABQAEABAFgIIgBAAQADgJACgGQAAgBABgBQgBgLgFgJQgFgJgJgFQgBAAAAgBQgCAAgBABg");
	this.shape_230.setTransform(-1.9,1.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C8E3FF").s().p("AAGAeQgGgBgHgMQgMgSAAgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQADgLALACIAAABIADgBIABABQAJAFAFAJQAFAJABALIgBACIgFAPIABAAQgEAHgEAAIgBAAg");
	this.shape_231.setTransform(-1.9,1.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#565B5F").ss(1.5,1,1).p("AgDgjIABAAQgKgGgEAKQgBABABACQgBAVAJAYQAGARAEADQAFAEAFgJIgBgBQADgIADgGQAAgCAAgBQAAgOgEgLQgEgMgIgKQgBgBAAAAQgBgBgCAAg");
	this.shape_232.setTransform(0.1,11.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C8E3FF").s().p("AACAlQgEgDgGgRQgJgYABgVIAAgDQAEgKAKAGIgBAAIADABIABABQAIAKAEAMQAEALAAAOIAAADIgGAOIABABQgDAGgDAAIgEgBg");
	this.shape_233.setTransform(0.1,11.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#565B5F").ss(1.5,1,1).p("AACgmIAAAAQgGgIgGAKQAAAAgBACQgEAWAFAcQACASAFAFQADAGAFgIIgBgBQAEgIAEgGQABgBgBgBQADgQgCgMQgBgOgGgLQgBgCAAgBQgBgBgCgBg");
	this.shape_234.setTransform(1.8,25);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C8E3FF").s().p("AgDAnQgFgFgCgSQgFgcAEgWIABgCQAGgKAGAIIAAAAIADACIABADQAGALABAOQACAMgDAQIAAACIgIAOIABABQgEAFgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_235.setTransform(1.8,25);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#565B5F").ss(1.5,1,1).p("AABgpIABAAQgGgJgEAKQgBAAgBADQgDAYAFAfQACAUAEAGQACAFAEgHIAAgCQAEgJADgGQAAgBAAgCQACgQgCgOQgBgPgFgNQgBgBgBgCQAAgBgCgBg");
	this.shape_236.setTransform(2.4,43.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C8E3FF").s().p("AgCAsQgEgGgCgUQgFgfADgYIACgDQAEgKAGAJIgBAAIACACIACADQAFANABAPQACAOgCAQIAAADIgHAPIAAACQgCAEgCAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_237.setTransform(2.4,43.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#565B5F").ss(1.5,1,1).p("AABgsQgFgKgEALQAAAAgBADQgCAZAEAhQADAXADAGQACAHADgJIAAgBQADgKADgHQAAgBAAgBQABgSgCgPQgBgRgFgOQAAgBgBgBQAAgCgBgBg");
	this.shape_238.setTransform(2.9,62.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C8E3FF").s().p("AgBAvQgDgGgDgXQgEghACgZIABgDQAEgLAFAKIABADIABACQAFAOABARQACAPgBASIAAACIgGARIAAABQgCAFgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_239.setTransform(2.9,62.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223,p:{x:-41.2,y:-0.5}},{t:this.shape_222}]}).to({state:[{t:this.shape_223,p:{x:-35.1,y:-4.2}},{t:this.shape_224,p:{x:-35.1,y:-4.2}}]},2).to({state:[{t:this.shape_223,p:{x:-29.7,y:-6.4}},{t:this.shape_224,p:{x:-29.7,y:-6.4}}]},2).to({state:[{t:this.shape_223,p:{x:-25.4,y:-7.5}},{t:this.shape_225}]},2).to({state:[{t:this.shape_223,p:{x:-20.9,y:-8.2}},{t:this.shape_224,p:{x:-20.9,y:-8.2}}]},2).to({state:[{t:this.shape_223,p:{x:-16.5,y:-7.8}},{t:this.shape_224,p:{x:-16.5,y:-7.8}}]},2).to({state:[{t:this.shape_227},{t:this.shape_226}]},2).to({state:[{t:this.shape_229},{t:this.shape_228}]},2).to({state:[{t:this.shape_231},{t:this.shape_230}]},2).to({state:[{t:this.shape_233},{t:this.shape_232}]},2).to({state:[{t:this.shape_235},{t:this.shape_234}]},2).to({state:[{t:this.shape_237},{t:this.shape_236}]},2).to({state:[{t:this.shape_239},{t:this.shape_238}]},2).to({state:[]},2).wait(9));

	// Layer 2
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAhgFQAOgBALAGQAMAIgJANQgJANgSgHQgXgIgXgBQgagCgaAFQANgLANgKQAJgGALgGQABgBABAAQAPgIAQgFQAWgHAFARQABABAAACQAAADgFADQgCABgDABQgDABgDAA");
	this.shape_240.setTransform(-31.9,-10.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C8E3FF").s().p("AAiAbQgXgIgXgBQgagCgaAFIAagVQAJgGALgGIACgBQAPgIAQgFQAWgHAFARIABADQAAADgFADIgFACIgGABIAGgBQAOgBALAGQAMAIgJANQgGAIgKAAQgFAAgGgCg");
	this.shape_241.setTransform(-31.9,-10.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#696D5E").ss(1.5,1,1).p("Ag7ADIgBAAIAGgDQAIgEAHgEQACgBACgBQABgBABAAQAQgGANgEQAEgCAEgBQAHgCAFgBQAFgBADAAQgBAAgBAAQAFAAABAAQABAAABAAIACABQAIACADAHQACAEgCADQABAAAAAEQAAACAAADIAAAAAAYgcQACAAABAAQABAAAAAAAgtADIgDAAQgFAAgGAAAAsgCIAAAAQAAABABAAQABAAACABQADABADACQADADABACQAGAGgHAIQgCACgCACQgJAGgLgGQgDgBgCgBQgTgKgUgFQgHgCgIgCIgIgBQgFAAgGgBQgHAAgHAA");
	this.shape_242.setTransform(-25.5,-10);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#C8E3FF").s().p("AAfAaIgEgBQgRgKgTgGIgFgBIgVgEIAJABIAOADQAUAFATALIAFACQAGADAFAAQAFAAAEgDIAFgFQAEgEAAgEQgBgDgCgDIgEgEIgHgDIgDgCIgBAAIAAAAIAAAAIAAAAIAAAAIABAAIADACIAHADIAEAEQACADABADQAAAEgEAEIgFAFQgEADgFAAQgFAAgGgDIgFgCQgTgLgUgFIgOgDIgJgBIgKgBIgEAAIgLAAIgBAAIAHgDIAPgIIAEgDIABAAIAdgLIAIgCIANgDIAIgBIgCgBIAFABIADAAIACAAQAHADADAHIACAEIgBADIAAAEIAAgEIABgDIgCgEQgDgHgHgDQAJADACAIIABAFIgBAKIAAgFIAAgBIgBABIgBACIgCABIAAAAIgBABIABAAIAEABIAAAAIACgBIABgBIABACIAHAEIAGAFIABAFIAAACQAAAEgEAFIgEADQgEAEgGAAQgGAAgGgEgAAbgcIAAAAIAAAAIAAAAIAAAAIgDAAIADAAgAg8ADIALAAIAEAAIgPAAgAArgCIAAAAg");
	this.shape_243.setTransform(-25.4,-10);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#696D5E").ss(1.5,1,1).p("Ag5gPQAPgFAPgEAg5gPQAOgFAOgEQABAAABAAQAWgFADAAQANgCAOACQACABACAAQAPAEACAMIAAABQABAIAAADQABABAHAIQAIALgNAIQgMAIgNgMQgRgPgTgJQgWgLgYgEg");
	this.shape_244.setTransform(-19,-9.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#C8E3FF").s().p("AAZAYQgRgPgTgJQgWgLgYgEIAegJIgeAJIAcgJIACAAIAZgFQANgCAOACIAEABQAPAEACAMIAAABIABALIAIAJQAIALgNAIQgFADgFAAQgHAAgIgHg");
	this.shape_245.setTransform(-19,-9.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgMgFQgWgPgZgIQARgDAQgCQAMgCANAAQARABAQAHQAPAHACAKQADAKgCABQgBABACACQACABAFAJQAGANgOAHQgPAGgMgOQgQgTgTgMg");
	this.shape_246.setTransform(-12.6,-8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C8E3FF").s().p("AAXAaQgQgTgTgMQgWgPgZgIIAhgFQAMgCANAAQARABAQAHQAPAHACAKQADAKgCABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQACABAFAJQAGANgOAHQgFACgEAAQgJAAgJgKg");
	this.shape_247.setTransform(-12.6,-8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAfArQAHABAGgBQACgBACAAIADgKIgFgRIADgNQABgIgHgHQgRgQgVgDQgbgHgcgEQAuAgAaAwQACAFAHABg");
	this.shape_248.setTransform(-6,-6.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C8E3FF").s().p("AAfArQgGgBgDgFQgagwguggQAcAEAbAHQAVADARAQQAHAHgBAIIgDANIAFARIgDAKIgEABIgGABIgHgBg");
	this.shape_249.setTransform(-6,-6.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAnAsQgBABgBAAQgBACgCACQgBABgBAAQgBAAAAAAQgEAAgCAAQgEgBgDgCQgBgBgBAAQgEgDgCgEQgBgDgBgDQgFgMgDgKQgGgNgIgMQgNgTgQgQIAAAAQAEABAEABQAYAJAJAEQAFACAGADQAEACAEACQAKAGAJAKQABABAAABQAFAHABADQABAEgBAFQgBAGgCAGQAAABAAABIAAAP");
	this.shape_250.setTransform(2.8,1.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C8E3FF").s().p("AAfAyIgGAAIgHgDIgCgBQgEgDgCgEIgCgGIgIgWQgGgNgIgMQgNgTgQgQIAAAAIAIACIAhANIALAFIAIAEQAKAGAJAKIABACQAFAHABADQABAEgBAFIgDAMIAAACIAAAPIgBADIgCABIgDAEIgCABIgBAAg");
	this.shape_251.setTransform(2.8,1.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAJA+IgKgHIgdh0QA8AeABA+QAAAFgDAGQgFAIgEAIg");
	this.shape_252.setTransform(9.9,16.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C8E3FF").s().p("AgBA3Igdh0QA8AeABA+QAAAFgDAGIgJAQIgKAEg");
	this.shape_253.setTransform(9.9,16.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#696D5E").ss(1.5,1,1).p("AgMA/IgIiFQAxAogJBFQgBAGgEAGQgFAIgFAJIgIADg");
	this.shape_254.setTransform(12.5,37.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C8E3FF").s().p("AgMA+IgIiEQAxAogJBFQgBAGgEAGIgKARIgIADg");
	this.shape_255.setTransform(12.5,37.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#696D5E").ss(1.5,1,1).p("AADBVQgXgRAEghQAJg7AEg9QAGApAKAoQAKAogKAqg");
	this.shape_256.setTransform(13.7,65.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C8E3FF").s().p("AgQAjQAJg7AEg9QAGApAKAoQAKAogKArIgKAGQgXgRAEghg");
	this.shape_257.setTransform(13.7,65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_241},{t:this.shape_240}]}).to({state:[{t:this.shape_243},{t:this.shape_242}]},2).to({state:[{t:this.shape_245},{t:this.shape_244}]},2).to({state:[{t:this.shape_247},{t:this.shape_246}]},2).to({state:[{t:this.shape_249},{t:this.shape_248}]},2).to({state:[{t:this.shape_251},{t:this.shape_250}]},2).to({state:[{t:this.shape_253},{t:this.shape_252}]},2).to({state:[{t:this.shape_255},{t:this.shape_254}]},2).to({state:[{t:this.shape_257},{t:this.shape_256}]},2).to({state:[]},2).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-14.3,63.1,75.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shuibo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,209,82), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shuibo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,94,39), null);


(lib.符0号15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-2.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(11.2,-7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmIP4IAWgCIABAAIAAAAIAugFIACAGIAAABIACAAgA/fP4IgegHIgGgFIgFgDIgDgCQgJgBgJAEIgIAEQgPAJgRgGIgGgFIgDgEIgBgBQgegNggABIgbABQgDAAgDACIgcgCIgFgGQgDgCAAgDIgRAEQgmAKgXgXIABgFIAEgFQAqAPAqgPIAVgHQBSgEBPASQAvALAyAAQAxgBAwgGIABAAIAHgBQA9gJA/ADIAGAAIAAAAQBiAFBiAJIAAAAIAIABIAXACIAKABQA7AGA8AEIA2ADQBgAHBhAAIABAAIAOAAQBPABBMAPgEgx+AP4IA2gFIAFgEQAQADAQAAIANAAQADgFAIgCIAJgBQARgBARABIACACQAVgFAVgHIAGgDQAZgLAcgCIACgBIABAAQBngIBmgFQAfgBAegHQAegHAdgNIAYgJIAAgBIACAAQAcgKAbgGIAiABIAFAEIAygCIAKgCIACAGIAAAFQgOAGgOAEIAAAEQgIAQgYgFQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABIhTADQgOAMgQAJIgIAEIgKAEIgNAHIgDAFIgCAEIhBASIgKADgEg0YAP4IAIgBIBXABgEArwAPyIgBAAIAAAAIg/gEIgBAAQhAgGg/gKQgXgEgUgMIgDgGIgCgDQgGgDgEgEQgUgQgdABQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgFIACgEIADgCIAnACIALAAIAFAEIA/ADIAHAAIgHgCQgqgJgkgZIgDgCIgBgBIAAAAIgBgBIgDgFQgOgHgMgJIgMABIgmABIgFAEQhJAGhJALIgGABIgZAHIgDAFIgCAEIgrAIIAAAAIgjAFIAAAAQgaADgaABQhEADhFgLIgBAAIgEgBQhHgMhHAKQgXAEgYAGIgQgEQgagFgaAJIgZgGQhEAIhDgLQgWgPgbgGIgFgCIAAAAQgXACgRgNQAPgYAigIIAngEIAFgDQBUgCBTgLIAOgCIANAAIAOgBQBngEBiAZIB8ADIAFAEIB0gCIAFgDQAgABAdgEIAKgCIAAAAIAVgEQgKABgJgBIgDAAIgEAAQgjABgjgDQhJgFhJgTQgpgKgogGQghgFgggBIgFADIg3AEIgFADQg2ADgzAMIg3gGIhkgJIiFgNQgOgBABgIIgHgCQgFgBgEgEIgEgFIgBgFIADgEQACgBADAAIAGADQAMAAAMgDQAHgBAHgDIAEgCIAFgDIArgEIAFgDQAjAEAkABQAjAAAjgFIArgFIAJgBIAAgBIBCABIAFAEIAqAGQAmAEAmABQA6ADA7gDIACAAIAFADQAlAEAlAFIACABIACAAQALABALAEIAnADIARAHIAXAIIAGACIAaAIIAagCIAFgDQAnACAmgDQAngEAlgKIBmACIAFAEIAvABIABAAIBkACIAFADIAKAFIAIAFIADADIABAAICCAGIAFADIBIgBIAFgEIBDgEIAFgDIArACQAFAFAGAEQAFAEAHACIAGABIAmAJQAJgHAHgJIACABIAigBIB0gFIABAAIESgOIBQgFIAFAEQBQgDBQgBQAYADARAPIAFAGIAAAFIgDALIgCADQgdANggACQgJABgIAEIgFADQhygIhugRQgeAZgsADQgfACgggBIgkAAIgFAEIhMADIgFAEIgrADIgFAEQgUgFgTgDIgbgEQgrgFgsACQgQABgPAEQgPAFgOAHQgQAJgSACQgSACgTgFQgcAFgaANQgfgFggAAQgggBggADIgFADIgrAEQgvANgvAKIgHACIAOAEQAWAHAXAFQBEgBBEgIIAFgDIATACIAGADQASABARgCQARgCARgFQAcgJAcgFIAWgEQA5gKA1gLIAAAAIAIgBIA2ACQAQAJARABIBYAFQBIAEBIACIAhAIQA6AOA+gBIAPAFIAAAAIAJAEIAWAHIAEACQAZADATgPIAEAFIABAFIgDAFIgFAEIAmAEIACAFIAAAGQgpAHgrgKIgCAAQgOgDgOgFIgKgCIgHAAIh8ADQhlADhkAHIgjACIhwAKQgegDgdAAQgvAAgvAJIgeAGIgBAAQgDAAgCACIg4ABQgrAAgrgCgEAyBANLIAAAAIgIgBIAIABgEAynANJIADABIAAgBIgDAAgAh5OlIhOgOIgLgDIgEgCQgFgDgFgEIgCgEIAAgBQgbAAgagFIgEgBQgGgBgFgFIABgFIAEgGIAGADIAFADIAzgCIBRgEIA9gDIArgCQANAFAOADQAaAFAaACQA1AEA0gJQAZgEAagIIAGgCQAVgGAXgDIABAAQA3gIA3AAIABAAIAGAAIgGgBQgzgDgzAKIgJABQi0AJipglQglgIgmgDQhYgIhYgJQgcgDgdgFQhrgUhgApQgYABgXA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");
	this.shape_2.setTransform(11.7,-7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(20.1,-8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(3.2,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EAtAAPVIABgCIAEgFIAagFQADgBACgCIgCgBIgqgJIABgFIAEgGIAmACIAFACIAXAFIAEAFIACAEIABABIAKgBIAGgFIAEgEIAEgBIA4gIICSACQADACADAAIAfAFIADAFIADAEIABABIAXgBIADgFIACgEQBIgNBJgHIAIgFIAHgFIBQADIAIABIAmAFQASAFASADQAZADAJAYIACAGIgJAHgAP/PVQhhgDhiADQgDAAgDgCIgDACIltAAIgGgCIhBACIo5AAIg7gGIgTgBQgNAAgLACIgRACQgFABgFgCIAFgKQACgDAEgCIANgHIAGgCQAMgDAJgKIADgBIAvgFIAVgIIAEgBIAiAAQAQAEAQAFIAGABIASAGIAFACIAsAFIAHACIAFgCIAGgDIAEACIAEACIAEABIACAAQBhgGBigMIAIgBQAYgDAWgHIAJgEICmgJICngJIAFgEIA4gGIAAgBIAyACIAFADQBmAHBmAEIAkAHIAgAIIAGACIAYAIQAGgBAFgCIAGgCIBQgHIA2ABQAZAPAeAAIAIAAQAyAIAxAMIAMADQATAGAUgBIADAFIgBAGIgCAFIgDAEgAfRO1IgigFIgEAAIgHADIgHgDIgqgBIgBAAIAAAAQg+gEg8gKQgLgBgMABQglAEgkAJQgHACgHADQgdACgagQIgFgDIgJgFQgCgCgBgDIAAgFIACgDIADgCQAOABANgFQAIgDAHgFIABAAIAKgIIAbgGIAEgDIASADQADABACACQArgLAqASQA4AFAzgQIAGgCIAaACIAUAIIALAIIACACIAZAHIAZgFIAaABQAMAEAMABQBJAFBKAEIAEABIAEABIAeAGIACAFIAAAFQgCADgCAAIgkACQhrAFhrADIgDAAgEg9nAN6IgUgHIgFgGIgEgFIgFgLIABgCIgBgDQASglAyAEQBCAGA8gaIBeABIAlAMQAWAGATALQAPAIAOgIIAEgCIAPADIAGADICMgdQAzgKAxgRIA1gGIA2gGIAFADQBJAHBKAEIAGADIALAEIAHACIAHgEQAQAOASALQAdARAkgCIAGABQAUgBASgFQAegKAjAHQBOgSBRgKIBCgHQDaggDggEIAFgDIAOgEIAGgCIAAgCQBBABA+AJQAjAFAlACQAJgGAMgDQApgJApgHQATgDARgKIB0gEQAZgGAZgIIACgF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");
	this.shape_5.setTransform(8.6,-5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(5,-4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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DAAjDgOgEAweALVQgkgKgmAAIgzAAQgDAAgDACQg2gBg2gCQgDAAgDgCIglADIgGACQgRgDgSgBQhjgLhggTIgJADIgGADQh6AAh7gEIg4gCQgngBglgKIgCgBQgMgDgMAAQgMgBgMADQhGARhJgGIjzgTQgIAAgHABIgMAEIgPgCIgGgFIgEgDIgCgBIgNAEQg5AAg4gDQgfgCgWgQIABgFIAEgGQBHgFBIgEQCigICjABQBTABBTADIAGADIAJgCIAGgDQAMAAAMACQAGAAAGADIAKgCIAGgDIB2ABIBJABIAFADIA3gDQAEAAADgCQBOAIBOgGIBlgHQAGAAACgCQBzABBzAFQASABASAEQBTASBVADQArABApgFQCGAICDAXQBiARBegeQAsgOAugEIAEAAIBrACIAUAAIACAFIAAAGIgCACIgOAFIgjANIhwApQgUAHgPAOIgDABQghAGggAJQhHAIhCgUQgQgFgQgGQgZgLgYAHQhiAehhAAQhYAAhXgYgAZvKAIAPgBIAAAAIAAAAIgPABgAjIHXQgigDgfgNIABACIAAAFQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQhYAChXgFQgLgBgMADIgPAEIi3gCQhxAAhwgLQhXgIhVgOQglgHglgJQhDgShBgUQgRgGgSgDQgcgFgagOIgvgYIgbAFIghgFQkxgNkuAXQgNABgLAHIjbAAQglgKgngEIgLgJQnyghnxAbIgJABQg6AFg6ADQitAFiegwQAAgIAGgIQAcgQAggHQAqAEAogJIACAFIAAADQATABARAJQCFgQCGgUQBjgQBnAGQAJAAAJgBIBSgGIAFAAQApgDAogEIAGAAQA8AGArgQQCpALCoAXQBgANBkgCIAFADIAQAHQH/AJH3gLIAGgBQADAKACALIABAGQADAIAEAIIADAFIALALQAkAGAfAOQAMAGAGANIACADIABACQAMAEAIAJQBUAKBQgHQDYALDSgZQAFACAFgBQA6gDAyAOIAvgBIgBAAIACgFQABgDADgDQAKgDALAAQCrgCCrAAIAFADQDBAZDBgQQBVgHBQgVQCtAECpABQCdACCXApICUADIAGAGQAIAHAKACIACAFIACAAIAIACIADAFIgBAFIgDAFQgBADgDACIgEABIgCgCQgNgBgNABIgFAEQioAbilgh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");
	this.shape_7.setTransform(3.6,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.7,-97,783.3,194);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(388.1,342.3,1,1,0,0,0,388.1,342.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,776.3,684.7);


(lib.sprite14副本5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.sprite13副本3();
	this.instance.parent = this;
	this.instance.setTransform(6.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.6,y:5.9},4).to({rotation:0.3,x:6.7},13).to({x:6.6},2).to({rotation:0.5,x:6.5,y:6},14).to({x:6.6,y:5.9},2).to({scaleX:1,scaleY:1,rotation:6.1,x:7.7,y:5.3},4).to({rotation:11,x:8.6,y:4.7},2).to({rotation:24.9,x:11.5,y:3.1},3).to({scaleX:1,scaleY:1,rotation:20.8,x:11.1,y:3.8},2).to({rotation:-11.8,x:8.4,y:8.8},4).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},4).to({rotation:-86.2,x:6.3,y:21.2},2).to({rotation:-93.5,x:7.4,y:22.4},2).to({rotation:-99.3,x:8.3,y:23.3},2).to({rotation:-103.5,x:8.9,y:23.9},2).to({rotation:-106.9,x:9.5,y:24.4},4).to({scaleX:1,scaleY:1,rotation:-100.8,x:8.6,y:23.6},2).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},5).to({scaleX:1,scaleY:1,rotation:-49.9,x:6,y:15.1},2).to({scaleX:1,scaleY:1,rotation:-27.1,x:7.3,y:11.2},2).to({rotation:-8.3,x:8.6,y:8.1},2).to({rotation:16.5,x:10.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:20.6,x:11.1,y:3.6},1).to({scaleX:1,scaleY:1,rotation:24.9,x:11.5,y:3.1},1).to({scaleX:1,scaleY:1,rotation:22,x:11.2,y:3.6},1).to({scaleX:1,scaleY:1,rotation:-0.5,x:9.3,y:7},2).to({scaleX:1,scaleY:1,rotation:-20.3,x:7.8,y:10.3},1).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},2).to({rotation:-85,x:6.1,y:21},1).to({rotation:-97,x:7.9,y:22.9},2).to({rotation:-101.3,x:8.6,y:23.6},1).to({scaleX:1,scaleY:1,rotation:-105.5,x:9.2,y:24.3},2).to({scaleX:1,scaleY:1,rotation:-106.9,x:9.5,y:24.4},1).to({scaleX:1,scaleY:1,rotation:-100.8,x:8.6,y:23.6},1).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},4).to({scaleX:1,scaleY:1,rotation:-49.9,x:6,y:15.1},1).to({scaleX:1,scaleY:1,rotation:-27.1,x:7.3,y:11.2},1).to({rotation:-8.3,x:8.6,y:8.1},1).to({rotation:16.5,x:10.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:20.6,x:11.1,y:3.6},1).to({scaleX:1,scaleY:1,rotation:24.9,x:11.5,y:3.1},1).to({scaleX:1,scaleY:1,rotation:24.6,x:11.4,y:3.2},1).to({rotation:24.3},1).to({rotation:24,x:11.3},1).to({rotation:23.8,x:11.2},1).to({scaleX:1,scaleY:1,rotation:22.8,x:11.1,y:3.4},1).to({scaleX:1,scaleY:1,rotation:20.8,x:10.8,y:3.6},2).to({scaleX:1,scaleY:1,rotation:20,x:10.6,y:3.7},1).to({scaleX:1,scaleY:1,rotation:19.3,x:10.3,y:3.8},1).to({scaleX:1,scaleY:1,rotation:15.8,x:9.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:12.5,x:9,y:4.5},2).to({rotation:8.5,x:8.3,y:5.1},2).to({rotation:6.3,x:7.8,y:5.3},1).to({scaleX:1,scaleY:1,rotation:4.3,x:7.5,y:5.6},1).to({rotation:2,x:6.9,y:5.8},1).to({scaleX:1,scaleY:1,rotation:0,x:6.5,y:6},1).wait(1));

	// Layer 7
	this.instance_1 = new lib.sprite11副本();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,2,0.999,0.999,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-10.6,y:1.9},1).to({scaleX:1,scaleY:1,rotation:-10.1,x:-1.9,y:1.8},2).to({rotation:-7.8,x:-1.5,y:1.4},4).to({scaleX:1,scaleY:1,rotation:-7.3,x:-1.4,y:1.3},2).to({rotation:-6.8,x:-1.2,y:1.1},2).to({scaleX:1,scaleY:1,rotation:-6,x:-1.1},2).to({rotation:-4.8,x:-0.9,y:0.8},4).to({rotation:-4.3,x:-0.8,y:0.7},2).to({rotation:-3.5,x:-0.7,y:0.6},2).to({scaleX:1,scaleY:1,rotation:-3.1,x:-0.6,y:0.5},2).to({rotation:-2.5,x:-0.4},2).to({rotation:-0.8,x:-0.1,y:0.1},6).to({rotation:-0.3,x:0},2).to({rotation:0.3,y:-0.1},2).to({rotation:1.8,y:0},2).to({scaleX:1,scaleY:1,rotation:3.3,x:1.2,y:-1.2},2).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},5).to({scaleX:1,scaleY:1,rotation:6,x:4.2,y:-1.9},2).to({scaleX:1,scaleY:1,rotation:-1.5,x:3.1,y:0},2).to({scaleX:1,scaleY:1,rotation:-47.6,x:-2.2,y:14.6},4).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},2).to({scaleX:1,scaleY:1,rotation:-107.5,x:3,y:29.7},2).to({rotation:-144.6,x:12,y:32.4},4).to({rotation:-160.7,x:15.6,y:32.2},4).to({scaleX:1,scaleY:1,rotation:-165.3,x:16.6,y:31.9},2).to({scaleX:0.99,scaleY:0.99,rotation:-148.7,x:13,y:30.6},2).to({scaleX:0.99,scaleY:0.99,rotation:-132.1,x:9.4,y:29.3},2).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},3).to({scaleX:1,scaleY:1,rotation:-56.7,x:-2.3,y:17.4},2).to({rotation:-35.1,x:-1.4,y:10.2},2).to({rotation:-19.3,x:0.4,y:5.4},2).to({scaleX:1,scaleY:1,rotation:6,x:4.5,y:-2.3},2).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},2).to({scaleX:1,scaleY:1,rotation:8.3,x:4.7,y:-2.5},1).to({scaleX:1,scaleY:1,rotation:3,x:3.9,y:-1.2},1).to({scaleX:1,scaleY:1,rotation:-28.8,x:-0.6,y:8.4},2).to({rotation:-82.2,x:-1.6,y:25.4},2).to({scaleX:1,scaleY:1,rotation:-122.8,x:6.7,y:31.1},2).to({rotation:-150.1,x:13.3,y:32.3},2).to({scaleX:0.99,scaleY:0.99,rotation:-156.2,x:14.6},1).to({scaleX:1,scaleY:1,rotation:-165.3,x:16.6,y:31.9},2).to({scaleX:0.99,scaleY:0.99,rotation:-148.7,x:13,y:30.6},1).to({scaleX:0.99,scaleY:0.99,rotation:-132.1,x:9.4,y:29.3},1).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},3).to({scaleX:1,scaleY:1,rotation:-56.7,x:-2.3,y:17.4},1).to({rotation:-35.1,x:-1.4,y:10.2},1).to({rotation:-19.3,x:0.4,y:5.4},1).to({scaleX:1,scaleY:1,rotation:6,x:4.5,y:-2.3},2).to({rotation:9.8,x:5,y:-2.2},1).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},1).to({scaleX:1,scaleY:1,rotation:13.5,x:6.1,y:-3.8},1).to({scaleX:1,scaleY:1,rotation:12.8,x:5.8,y:-3.7},2).to({scaleX:1,scaleY:1,rotation:12.5,x:5.7,y:-3.5},1).to({scaleX:1,scaleY:1,rotation:11.5,x:5.3,y:-3.1},3).to({scaleX:1,scaleY:1,rotation:11.3,x:5.2,y:-3},1).to({scaleX:1,scaleY:1,rotation:9.3,x:4.3,y:-2.1},2).to({rotation:8.3,x:3.9,y:-1.9},1).to({rotation:7.3,x:3.6,y:-1.5},1).to({scaleX:1,scaleY:1,rotation:6.5,x:3.2,y:-1.1},1).to({scaleX:1,scaleY:1,rotation:2.8,x:0.9,y:-0.9},4).to({scaleX:1,scaleY:1,rotation:1.3,x:0.4,y:0.4},1).to({rotation:0,x:0,y:0},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite9副本();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128));

	// Layer 3
	this.instance_3 = new lib.sprite7副本3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.5,12.9,0.999,0.999,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:22.6},1).to({rotation:2.8,x:22.5},5).to({rotation:2.3,x:22.4,y:12.8},3).to({rotation:2},2).to({scaleX:1,scaleY:1,rotation:1.8,y:12.7},2).to({y:12.8},2).to({rotation:1.5,x:22.5,y:12.7},2).to({rotation:1.3,x:22.4},2).to({rotation:1,y:12.6},2).to({rotation:0.8,y:12.7},2).to({y:12.6},2).to({rotation:0.5},2).to({rotation:0,y:12.5},6).to({rotation:-1.5,x:22.3,y:12.4},2).to({scaleX:1,scaleY:1,rotation:-6.1,x:21.9,y:12},2).to({rotation:-14,x:21.2,y:11.5},2).to({scaleX:1,scaleY:1,rotation:-24.8,x:20.3,y:10.7},2).to({scaleX:1,scaleY:1,rotation:-56.2,x:18.1,y:8.6},3).to({scaleX:1,scaleY:1,rotation:-52.6,x:18.2,y:8.9},2).to({scaleX:1,scaleY:1,rotation:-41.9,x:18.9,y:9.7},2).to({rotation:-20.6,x:20.3,y:11.2},2).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},4).to({scaleX:0.99,scaleY:0.99,rotation:56.9,x:24.2,y:16.7},2).to({scaleX:1,scaleY:1,rotation:77,x:24.1,y:18.2},2).to({scaleX:0.99,scaleY:0.99,rotation:110.3,x:23.7,y:21.1},6).to({scaleX:1,scaleY:1,rotation:112.6,x:23.8,y:21.3},2).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},7).to({rotation:8.8,x:22.3,y:13.3},2).to({rotation:-10.8,x:20.9,y:11.7},2).to({scaleX:1,scaleY:1,rotation:-27.1,x:19.8,y:10.7},2).to({rotation:-39.9,x:19,y:9.8},1).to({rotation:-48.9,x:18.5,y:9.2},1).to({scaleX:1,scaleY:1,rotation:-56.2,x:18.1,y:8.6},2).to({scaleX:1,scaleY:1,rotation:-53.7,x:18.2,y:8.9},1).to({scaleX:1,scaleY:1,rotation:-46.4,x:18.6,y:9.4},1).to({rotation:-34.1,x:19.3,y:10.2},1).to({scaleX:1,scaleY:1,rotation:-16.8,x:20.4,y:11.4},1).to({rotation:32.4,x:24.3,y:15.1},2).to({scaleX:0.99,scaleY:0.99,rotation:53.7,x:24.2,y:16.5},1).to({scaleX:1,scaleY:1,rotation:71.7,x:24.1,y:17.8},1).to({rotation:86.5,x:24,y:18.9},1).to({rotation:97.8,x:23.9,y:20},1).to({scaleX:0.99,scaleY:0.99,rotation:111,x:23.7,y:21.1},2).to({scaleX:1,scaleY:1,rotation:112.6,x:23.8,y:21.3},1).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},5).to({rotation:8.8,x:22.3,y:13.3},1).to({rotation:-10.8,x:20.9,y:11.7},1).to({scaleX:1,scaleY:1,rotation:-39.9,x:19,y:9.8},2).to({scaleX:0.99,scaleY:0.99,rotation:-47.1,x:18.7,y:9.3},1).to({scaleX:1,scaleY:1,rotation:-54.4,x:18.2,y:8.8},1).to({scaleX:0.99,scaleY:0.99,rotation:-55.2,x:18.1},1).to({scaleX:1,scaleY:1,rotation:-55.9,x:18,y:8.6},1).to({scaleX:0.99,scaleY:0.99,rotation:-55.4,y:8.7},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:18.1,y:8.8},1).to({scaleX:0.99,scaleY:0.99,rotation:-52.1,x:18.4,y:9},2).to({scaleX:0.99,scaleY:0.99,rotation:-49.9,y:9.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-47.9,x:18.7,y:9.3},1).to({rotation:-45.7,x:18.8,y:9.5},1).to({scaleX:1,scaleY:1,rotation:-43.6,x:18.9,y:9.6},1).to({scaleX:1,scaleY:1,rotation:-37.1,x:19.3,y:10},2).to({scaleX:0.99,scaleY:0.99,rotation:-33.1,x:19.7,y:10.3},1).to({scaleX:1,scaleY:1,rotation:-29.1,x:20,y:10.5},1).to({scaleX:1,scaleY:1,rotation:-25.1,x:20.4,y:10.8},1).to({scaleX:1,scaleY:1,rotation:-21.1,x:20.6,y:11},1).to({rotation:-15.8,x:21.1,y:11.4},1).to({rotation:-10.5,x:21.5,y:11.8},1).to({scaleX:1,scaleY:1,rotation:0,x:22.4,y:12.5},2).wait(1));

	// Layer 1
	this.instance_4 = new lib.sprite5副本4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.2,12.8,0.999,0.999,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:3.3},2).to({x:16.3},1).to({rotation:3},1).to({scaleX:1,scaleY:1,rotation:2.8,x:16.2,y:12.7},1).to({scaleX:1,scaleY:1,rotation:2.5,x:16.1},1).to({rotation:2.3,y:12.8},2).to({rotation:1.8,x:16},4).to({scaleX:1,scaleY:1,rotation:1.5,x:16.1},2).to({rotation:1.3},2).to({rotation:1.1},2).to({rotation:1,y:12.7},2).wait(2).to({rotation:0.8},2).to({rotation:0.5,y:12.8},2).to({rotation:0.3,x:16,y:12.7},2).to({rotation:-0.3},2).to({rotation:-0.8,y:12.8},2).to({rotation:-1.5,x:15.9},2).to({scaleX:1,scaleY:1,rotation:-6.1,x:15.6,y:12.9},2).to({rotation:-14,x:15,y:13.3},2).to({scaleX:1,scaleY:1,rotation:-26.3,x:14.8,y:13.7},2).to({scaleX:1,scaleY:1,rotation:-38.9,x:14.4,y:14},2).to({rotation:-56.2,x:14.7,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-42.6,x:14.3,y:14.3},4).to({scaleX:1,scaleY:1,rotation:-31.6,x:14.2},2).to({rotation:-9.8,x:15.2,y:13.9},2).to({scaleX:1,scaleY:1,rotation:24.3,x:16.9,y:13.3},4).to({scaleX:1,scaleY:1,rotation:36.8,x:17.2,y:13},2).to({rotation:51.9,x:18.3,y:13.2},4).to({scaleX:1,scaleY:1,rotation:54.4,x:18.5,y:13.3},2).to({scaleX:1,scaleY:1,rotation:56.8,x:18.7},2).to({scaleX:0.99,scaleY:0.99,rotation:47.9,x:18.2,y:13.4},2).to({rotation:38.8,x:17.7},2).to({scaleX:1,scaleY:1,rotation:29.8,x:17.3,y:13.5},1).to({scaleX:1,scaleY:1,rotation:11.8,x:16.4},2).to({rotation:-6.3,x:15,y:13.9},2).to({scaleX:1,scaleY:1,rotation:-33.9,x:14.2,y:14.4},4).to({scaleX:0.99,scaleY:0.99,rotation:-41.6,x:14.4},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.8,y:14.2},2).to({scaleX:0.99,scaleY:0.99,rotation:-54.7,x:14.7},1).to({scaleX:1,scaleY:1,rotation:-54.4,x:14.6,y:14.1},1).to({rotation:-48.6,x:14.5,y:14.3},1).to({scaleX:0.99,scaleY:0.99,rotation:-37.1,x:14.3},1).to({scaleX:1,scaleY:1,rotation:-25.8,x:14.2},1).to({scaleX:1,scaleY:1,rotation:-8.8,x:14.7,y:13.9},1).to({rotation:11.8,x:16.4,y:13.5},1).to({scaleX:1,scaleY:1,rotation:23.6,x:16.6,y:13.2},1).to({scaleX:0.99,scaleY:0.99,rotation:32.3,x:17.1,y:13.1},1).to({scaleX:0.99,scaleY:0.99,rotation:46.4,x:18},2).to({scaleX:0.99,scaleY:0.99,rotation:51.7,x:18.4,y:13.2},1).to({scaleX:1,scaleY:1,rotation:54.9,x:18.6,y:13.3},1).to({scaleX:1,scaleY:1,rotation:56.8,x:18.7},1).to({scaleX:0.99,scaleY:0.99,rotation:47.9,x:18.2,y:13.4},1).to({rotation:38.8,x:17.7},1).to({scaleX:1,scaleY:1,rotation:29.8,x:17.3,y:13.5},1).to({scaleX:1,scaleY:1,rotation:11.8,x:16.4},2).to({rotation:-6.3,x:15,y:13.9},1).to({scaleX:1,scaleY:1,rotation:-33.9,x:14.2,y:14.4},2).to({scaleX:0.99,scaleY:0.99,rotation:-41.6,x:14.4},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.8,y:14.2},2).to({scaleX:0.99,scaleY:0.99,rotation:-55.4,x:14.7,y:14.1},1).to({scaleX:1,scaleY:1,rotation:-55.7,y:14},1).to({rotation:-55.4,x:14.6,y:14.1},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.7,y:14.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-53.4,x:14.6,y:14.1},1).to({rotation:-52.1,y:14.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-50.2,x:14.5,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-48.4,x:14.6},1).to({scaleX:1,scaleY:1,rotation:-45.9,y:14.2},1).to({scaleX:1,scaleY:1,rotation:-43.6,x:14.5},1).to({scaleX:1,scaleY:1,rotation:-40.4,x:14.4,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-37.1,y:14},1).to({scaleX:1,scaleY:1,rotation:-33.8,x:14.5},1).to({scaleX:1,scaleY:1,rotation:-29.6,y:13.9},1).to({rotation:-25.3,x:14.6,y:13.7},1).to({scaleX:1,scaleY:1,rotation:-21.1,x:14.7,y:13.5},1).to({rotation:-10.5,x:15.4,y:13.2},2).to({scaleX:1,scaleY:1,rotation:-5.3,x:15.7,y:12.9},1).to({scaleX:1,scaleY:1,rotation:0,x:16,y:12.7},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0.6,31.5,16.7);


(lib.sprite14副本5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.sprite13副本3();
	this.instance.parent = this;
	this.instance.setTransform(6.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.6,y:5.9},3).to({rotation:0.3,x:6.7},8).to({x:6.6},1).to({rotation:0.5,x:6.5,y:6},7).to({x:6.6,y:5.9},1).to({scaleX:1,scaleY:1,rotation:6.1,x:7.7,y:5.3},2).to({rotation:11,x:8.6,y:4.7},1).to({rotation:24.9,x:11.5,y:3.1},2).to({scaleX:1,scaleY:1,rotation:20.8,x:11.1,y:3.8},1).to({rotation:-11.8,x:8.4,y:8.8},2).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},2).to({rotation:-86.2,x:6.3,y:21.2},1).to({rotation:-93.5,x:7.4,y:22.4},1).to({rotation:-99.3,x:8.3,y:23.3},1).to({rotation:-103.5,x:8.9,y:23.9},1).to({rotation:-106.9,x:9.5,y:24.4},2).to({scaleX:1,scaleY:1,rotation:-100.8,x:8.6,y:23.6},1).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},4).to({scaleX:1,scaleY:1,rotation:-49.9,x:6,y:15.1},1).to({scaleX:1,scaleY:1,rotation:-27.1,x:7.3,y:11.2},1).to({rotation:-8.3,x:8.6,y:8.1},1).to({rotation:16.5,x:10.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:20.6,x:11.1,y:3.6},1).to({scaleX:1,scaleY:1,rotation:24.9,x:11.5,y:3.1},1).to({scaleX:1,scaleY:1,rotation:22,x:11.2,y:3.6},1).to({scaleX:1,scaleY:1,rotation:-0.5,x:9.3,y:7},2).to({scaleX:1,scaleY:1,rotation:-20.3,x:7.8,y:10.3},1).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},2).to({rotation:-85,x:6.1,y:21},1).to({rotation:-97,x:7.9,y:22.9},2).to({rotation:-101.3,x:8.6,y:23.6},1).to({scaleX:1,scaleY:1,rotation:-105.5,x:9.2,y:24.3},2).to({scaleX:1,scaleY:1,rotation:-106.9,x:9.5,y:24.4},1).to({scaleX:1,scaleY:1,rotation:-100.8,x:8.6,y:23.6},1).to({scaleX:1,scaleY:1,rotation:-76.9,x:4.9,y:19.7},4).to({scaleX:1,scaleY:1,rotation:-49.9,x:6,y:15.1},1).to({scaleX:1,scaleY:1,rotation:-27.1,x:7.3,y:11.2},1).to({rotation:-8.3,x:8.6,y:8.1},1).to({rotation:16.5,x:10.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:20.6,x:11.1,y:3.6},1).to({scaleX:1,scaleY:1,rotation:24.9,x:11.5,y:3.1},1).to({scaleX:1,scaleY:1,rotation:24.6,x:11.4,y:3.2},1).to({rotation:24.3},1).to({rotation:24,x:11.3},1).to({rotation:23.8,x:11.2},1).to({scaleX:1,scaleY:1,rotation:22.8,x:11.1,y:3.4},1).to({scaleX:1,scaleY:1,rotation:20.8,x:10.8,y:3.6},2).to({scaleX:1,scaleY:1,rotation:20,x:10.6,y:3.7},1).to({scaleX:1,scaleY:1,rotation:19.3,x:10.3,y:3.8},1).to({scaleX:1,scaleY:1,rotation:15.8,x:9.8,y:4.2},2).to({scaleX:1,scaleY:1,rotation:12.5,x:9,y:4.5},2).to({rotation:8.5,x:8.3,y:5.1},2).to({rotation:6.3,x:7.8,y:5.3},1).to({scaleX:1,scaleY:1,rotation:4.3,x:7.5,y:5.6},1).to({rotation:2,x:6.9,y:5.8},1).to({scaleX:1,scaleY:1,rotation:0,x:6.5,y:6},1).wait(1));

	// Layer 7
	this.instance_1 = new lib.sprite11副本();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,2,0.999,0.999,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-10.6,y:1.9},1).to({scaleX:1,scaleY:1,rotation:-10.1,x:-1.9,y:1.8},1).to({rotation:-7.8,x:-1.5,y:1.4},4).to({scaleX:1,scaleY:1,rotation:-7.3,x:-1.4,y:1.3},1).to({rotation:-6.8,x:-1.2,y:1.1},1).to({scaleX:1,scaleY:1,rotation:-6,x:-1.1},1).to({rotation:-4.8,x:-0.9,y:0.8},2).to({rotation:-4.3,x:-0.8,y:0.7},1).to({rotation:-3.5,x:-0.7,y:0.6},1).to({scaleX:1,scaleY:1,rotation:-3.1,x:-0.6,y:0.5},1).to({rotation:-2.5,x:-0.4},1).to({rotation:-0.8,x:-0.1,y:0.1},3).to({rotation:-0.3,x:0},1).to({rotation:0.3,y:-0.1},1).to({rotation:1.8,y:0},1).to({scaleX:1,scaleY:1,rotation:3.3,x:1.2,y:-1.2},1).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},3).to({scaleX:1,scaleY:1,rotation:6,x:4.2,y:-1.9},1).to({scaleX:1,scaleY:1,rotation:-1.5,x:3.1,y:0},1).to({scaleX:1,scaleY:1,rotation:-47.6,x:-2.2,y:14.6},2).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},1).to({scaleX:1,scaleY:1,rotation:-107.5,x:3,y:29.7},1).to({rotation:-144.6,x:12,y:32.4},2).to({rotation:-160.7,x:15.6,y:32.2},2).to({scaleX:1,scaleY:1,rotation:-165.3,x:16.6,y:31.9},1).to({scaleX:0.99,scaleY:0.99,rotation:-148.7,x:13,y:30.6},1).to({scaleX:0.99,scaleY:0.99,rotation:-132.1,x:9.4,y:29.3},1).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},3).to({scaleX:1,scaleY:1,rotation:-56.7,x:-2.3,y:17.4},1).to({rotation:-35.1,x:-1.4,y:10.2},1).to({rotation:-19.3,x:0.4,y:5.4},1).to({scaleX:1,scaleY:1,rotation:6,x:4.5,y:-2.3},2).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},2).to({scaleX:1,scaleY:1,rotation:8.3,x:4.7,y:-2.5},1).to({scaleX:1,scaleY:1,rotation:3,x:3.9,y:-1.2},1).to({scaleX:1,scaleY:1,rotation:-28.8,x:-0.6,y:8.4},2).to({rotation:-82.2,x:-1.6,y:25.4},2).to({scaleX:1,scaleY:1,rotation:-122.8,x:6.7,y:31.1},2).to({rotation:-150.1,x:13.3,y:32.3},2).to({scaleX:0.99,scaleY:0.99,rotation:-156.2,x:14.6},1).to({scaleX:1,scaleY:1,rotation:-165.3,x:16.6,y:31.9},2).to({scaleX:0.99,scaleY:0.99,rotation:-148.7,x:13,y:30.6},1).to({scaleX:0.99,scaleY:0.99,rotation:-132.1,x:9.4,y:29.3},1).to({scaleX:1,scaleY:1,rotation:-82.2,x:-1.6,y:25.4},3).to({scaleX:1,scaleY:1,rotation:-56.7,x:-2.3,y:17.4},1).to({rotation:-35.1,x:-1.4,y:10.2},1).to({rotation:-19.3,x:0.4,y:5.4},1).to({scaleX:1,scaleY:1,rotation:6,x:4.5,y:-2.3},2).to({rotation:9.8,x:5,y:-2.2},1).to({scaleX:1,scaleY:1,rotation:13.8,x:6.2,y:-4},1).to({scaleX:1,scaleY:1,rotation:13.5,x:6.1,y:-3.8},1).to({scaleX:1,scaleY:1,rotation:12.8,x:5.8,y:-3.7},2).to({scaleX:1,scaleY:1,rotation:12.5,x:5.7,y:-3.5},1).to({scaleX:1,scaleY:1,rotation:11.5,x:5.3,y:-3.1},3).to({scaleX:1,scaleY:1,rotation:11.3,x:5.2,y:-3},1).to({scaleX:1,scaleY:1,rotation:9.3,x:4.3,y:-2.1},2).to({rotation:8.3,x:3.9,y:-1.9},1).to({rotation:7.3,x:3.6,y:-1.5},1).to({scaleX:1,scaleY:1,rotation:6.5,x:3.2,y:-1.1},1).to({scaleX:1,scaleY:1,rotation:2.8,x:0.9,y:-0.9},4).to({scaleX:1,scaleY:1,rotation:1.3,x:0.4,y:0.4},1).to({rotation:0,x:0,y:0},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite9副本();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93));

	// Layer 3
	this.instance_3 = new lib.sprite7副本3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.5,12.9,0.999,0.999,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:22.6},1).to({rotation:2.8,x:22.5},4).to({rotation:2.3,x:22.4,y:12.8},2).to({rotation:2},1).to({scaleX:1,scaleY:1,rotation:1.8,y:12.7},1).to({y:12.8},1).to({rotation:1.5,x:22.5,y:12.7},1).to({rotation:1.3,x:22.4},1).to({rotation:1,y:12.6},1).to({rotation:0.8,y:12.7},1).to({y:12.6},1).to({rotation:0.5},1).to({rotation:0,y:12.5},3).to({rotation:-1.5,x:22.3,y:12.4},1).to({scaleX:1,scaleY:1,rotation:-6.1,x:21.9,y:12},1).to({rotation:-14,x:21.2,y:11.5},1).to({scaleX:1,scaleY:1,rotation:-24.8,x:20.3,y:10.7},1).to({scaleX:1,scaleY:1,rotation:-56.2,x:18.1,y:8.6},2).to({scaleX:1,scaleY:1,rotation:-52.6,x:18.2,y:8.9},1).to({scaleX:1,scaleY:1,rotation:-41.9,x:18.9,y:9.7},1).to({rotation:-20.6,x:20.3,y:11.2},1).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},2).to({scaleX:0.99,scaleY:0.99,rotation:56.9,x:24.2,y:16.7},1).to({scaleX:1,scaleY:1,rotation:77,x:24.1,y:18.2},1).to({scaleX:0.99,scaleY:0.99,rotation:110.3,x:23.7,y:21.1},3).to({scaleX:1,scaleY:1,rotation:112.6,x:23.8,y:21.3},1).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},5).to({rotation:8.8,x:22.3,y:13.3},1).to({rotation:-10.8,x:20.9,y:11.7},1).to({scaleX:1,scaleY:1,rotation:-27.1,x:19.8,y:10.7},1).to({rotation:-39.9,x:19,y:9.8},1).to({rotation:-48.9,x:18.5,y:9.2},1).to({scaleX:1,scaleY:1,rotation:-56.2,x:18.1,y:8.6},2).to({scaleX:1,scaleY:1,rotation:-53.7,x:18.2,y:8.9},1).to({scaleX:1,scaleY:1,rotation:-46.4,x:18.6,y:9.4},1).to({rotation:-34.1,x:19.3,y:10.2},1).to({scaleX:1,scaleY:1,rotation:-16.8,x:20.4,y:11.4},1).to({rotation:32.4,x:24.3,y:15.1},2).to({scaleX:0.99,scaleY:0.99,rotation:53.7,x:24.2,y:16.5},1).to({scaleX:1,scaleY:1,rotation:71.7,x:24.1,y:17.8},1).to({rotation:86.5,x:24,y:18.9},1).to({rotation:97.8,x:23.9,y:20},1).to({scaleX:0.99,scaleY:0.99,rotation:111,x:23.7,y:21.1},2).to({scaleX:1,scaleY:1,rotation:112.6,x:23.8,y:21.3},1).to({scaleX:1,scaleY:1,rotation:32.4,x:24.3,y:15.1},5).to({rotation:8.8,x:22.3,y:13.3},1).to({rotation:-10.8,x:20.9,y:11.7},1).to({scaleX:1,scaleY:1,rotation:-39.9,x:19,y:9.8},2).to({scaleX:0.99,scaleY:0.99,rotation:-47.1,x:18.7,y:9.3},1).to({scaleX:1,scaleY:1,rotation:-54.4,x:18.2,y:8.8},1).to({scaleX:0.99,scaleY:0.99,rotation:-55.2,x:18.1},1).to({scaleX:1,scaleY:1,rotation:-55.9,x:18,y:8.6},1).to({scaleX:0.99,scaleY:0.99,rotation:-55.4,y:8.7},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:18.1,y:8.8},1).to({scaleX:0.99,scaleY:0.99,rotation:-52.1,x:18.4,y:9},2).to({scaleX:0.99,scaleY:0.99,rotation:-49.9,y:9.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-47.9,x:18.7,y:9.3},1).to({rotation:-45.7,x:18.8,y:9.5},1).to({scaleX:1,scaleY:1,rotation:-43.6,x:18.9,y:9.6},1).to({scaleX:1,scaleY:1,rotation:-37.1,x:19.3,y:10},2).to({scaleX:0.99,scaleY:0.99,rotation:-33.1,x:19.7,y:10.3},1).to({scaleX:1,scaleY:1,rotation:-29.1,x:20,y:10.5},1).to({scaleX:1,scaleY:1,rotation:-25.1,x:20.4,y:10.8},1).to({scaleX:1,scaleY:1,rotation:-21.1,x:20.6,y:11},1).to({rotation:-15.8,x:21.1,y:11.4},1).to({rotation:-10.5,x:21.5,y:11.8},1).to({scaleX:1,scaleY:1,rotation:0,x:22.4,y:12.5},2).wait(1));

	// Layer 1
	this.instance_4 = new lib.sprite5副本4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.2,12.8,0.999,0.999,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:3.3},1).to({x:16.3},1).to({rotation:3},1).to({scaleX:1,scaleY:1,rotation:2.8,x:16.2,y:12.7},1).to({scaleX:1,scaleY:1,rotation:2.5,x:16.1},1).to({rotation:2.3,y:12.8},1).to({rotation:1.8,x:16},2).to({scaleX:1,scaleY:1,rotation:1.5,x:16.1},1).to({rotation:1.3},1).to({rotation:1.1},1).to({rotation:1,y:12.7},1).wait(1).to({rotation:0.8},1).to({rotation:0.5,y:12.8},1).to({rotation:0.3,x:16,y:12.7},1).to({rotation:-0.3},1).to({rotation:-0.8,y:12.8},1).to({rotation:-1.5,x:15.9},1).to({scaleX:1,scaleY:1,rotation:-6.1,x:15.6,y:12.9},1).to({rotation:-14,x:15,y:13.3},1).to({scaleX:1,scaleY:1,rotation:-26.3,x:14.8,y:13.7},1).to({scaleX:1,scaleY:1,rotation:-38.9,x:14.4,y:14},1).to({rotation:-56.2,x:14.7,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-42.6,x:14.3,y:14.3},2).to({scaleX:1,scaleY:1,rotation:-31.6,x:14.2},1).to({rotation:-9.8,x:15.2,y:13.9},1).to({scaleX:1,scaleY:1,rotation:24.3,x:16.9,y:13.3},2).to({scaleX:1,scaleY:1,rotation:36.8,x:17.2,y:13},1).to({rotation:51.9,x:18.3,y:13.2},2).to({scaleX:1,scaleY:1,rotation:54.4,x:18.5,y:13.3},1).to({scaleX:1,scaleY:1,rotation:56.8,x:18.7},1).to({scaleX:0.99,scaleY:0.99,rotation:47.9,x:18.2,y:13.4},1).to({rotation:38.8,x:17.7},1).to({scaleX:1,scaleY:1,rotation:29.8,x:17.3,y:13.5},1).to({scaleX:1,scaleY:1,rotation:11.8,x:16.4},2).to({rotation:-6.3,x:15,y:13.9},1).to({scaleX:1,scaleY:1,rotation:-33.9,x:14.2,y:14.4},2).to({scaleX:0.99,scaleY:0.99,rotation:-41.6,x:14.4},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.8,y:14.2},2).to({scaleX:0.99,scaleY:0.99,rotation:-54.7,x:14.7},1).to({scaleX:1,scaleY:1,rotation:-54.4,x:14.6,y:14.1},1).to({rotation:-48.6,x:14.5,y:14.3},1).to({scaleX:0.99,scaleY:0.99,rotation:-37.1,x:14.3},1).to({scaleX:1,scaleY:1,rotation:-25.8,x:14.2},1).to({scaleX:1,scaleY:1,rotation:-8.8,x:14.7,y:13.9},1).to({rotation:11.8,x:16.4,y:13.5},1).to({scaleX:1,scaleY:1,rotation:23.6,x:16.6,y:13.2},1).to({scaleX:0.99,scaleY:0.99,rotation:32.3,x:17.1,y:13.1},1).to({scaleX:0.99,scaleY:0.99,rotation:46.4,x:18},2).to({scaleX:0.99,scaleY:0.99,rotation:51.7,x:18.4,y:13.2},1).to({scaleX:1,scaleY:1,rotation:54.9,x:18.6,y:13.3},1).to({scaleX:1,scaleY:1,rotation:56.8,x:18.7},1).to({scaleX:0.99,scaleY:0.99,rotation:47.9,x:18.2,y:13.4},1).to({rotation:38.8,x:17.7},1).to({scaleX:1,scaleY:1,rotation:29.8,x:17.3,y:13.5},1).to({scaleX:1,scaleY:1,rotation:11.8,x:16.4},2).to({rotation:-6.3,x:15,y:13.9},1).to({scaleX:1,scaleY:1,rotation:-33.9,x:14.2,y:14.4},2).to({scaleX:0.99,scaleY:0.99,rotation:-41.6,x:14.4},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.8,y:14.2},2).to({scaleX:0.99,scaleY:0.99,rotation:-55.4,x:14.7,y:14.1},1).to({scaleX:1,scaleY:1,rotation:-55.7,y:14},1).to({rotation:-55.4,x:14.6,y:14.1},1).to({scaleX:1,scaleY:1,rotation:-54.9,x:14.7,y:14.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-53.4,x:14.6,y:14.1},1).to({rotation:-52.1,y:14.2},1).to({scaleX:0.99,scaleY:0.99,rotation:-50.2,x:14.5,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-48.4,x:14.6},1).to({scaleX:1,scaleY:1,rotation:-45.9,y:14.2},1).to({scaleX:1,scaleY:1,rotation:-43.6,x:14.5},1).to({scaleX:1,scaleY:1,rotation:-40.4,x:14.4,y:14.1},1).to({scaleX:0.99,scaleY:0.99,rotation:-37.1,y:14},1).to({scaleX:1,scaleY:1,rotation:-33.8,x:14.5},1).to({scaleX:1,scaleY:1,rotation:-29.6,y:13.9},1).to({rotation:-25.3,x:14.6,y:13.7},1).to({scaleX:1,scaleY:1,rotation:-21.1,x:14.7,y:13.5},1).to({rotation:-10.5,x:15.4,y:13.2},2).to({scaleX:1,scaleY:1,rotation:-5.3,x:15.7,y:12.9},1).to({scaleX:1,scaleY:1,rotation:0,x:16,y:12.7},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0.6,31.5,16.7);


(lib.ee1156scenecomp_schoo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 46
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAkBIQABgIgCgJQgBgHAAgGQAAgWAIgUQAGgOgLgKQgRgNgIAZQgBgYgIgTQgLgZgTAOQgQAKAAAYQgBAYAKATQAKAUAFAVQACAKADAK");
	this.shape.setTransform(138.9,-21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8E3FF").s().p("AgOBIIgFgUQgFgVgKgUQgKgTABgYQAAgYAQgKQATgOALAZQAIATABAYQAIgZARANQALAKgGAOQgIAUAAAWIABANQACAJgBAIg");
	this.shape_1.setTransform(138.9,-21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#696D5E").ss(1.5,1,1).p("AAMB3QABgGACgGQAHgWAIgVQAJgXgEgXQgBgIAAgGQAAgWAIgWQAGgRgLgKQgRgPgIAcQgBgagIgVQgLgbgTAPQgQALAAAbQgBAZAKAVQAKAWAFAWQAFAWAFAWQAGAWgCAYQgBAHAAAH");
	this.shape_2.setTransform(139.7,-28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8E3FF").s().p("AgGB3IABgOQACgYgGgWIgKgsQgFgWgKgWQgKgVABgZQAAgbAQgLQATgPALAbQAIAVABAaQAIgcARAPQALAKgGARQgIAWAAAWIABAOQAEAXgJAXQgIAVgHAWIgDAMg");
	this.shape_3.setTransform(139.7,-28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#696D5E").ss(1.5,1,1).p("AATCRQgBgGAAgFQgBgOABgOQAAgPABgPQAAgKAAgJQABgOAAgOQgBgTABgSQABgOACgOQACgSACgSQABgIgBgIQgCgIgDgGQAEgEAGgDQAGgDADgJQACgJAAgCQgBgCgBgFQgCgFgJAAQgDABgCACQgGAGgBALQAAAMgBAOQAAABAAABQgBABgBABQgBABgBABQgCAAgBAAQgCAAgCgBQgDgIgDgHQgEgJgHgIQgEgEgFgCQgNACgFAPQgHAVAHAVQAFAPAGAOQAJAXAFAXQAEARADARQADARACASQAAAGAAAHQAAAIgBAIQgBARgCASQAAAFgBAE");
	this.shape_4.setTransform(139.8,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8E3FF").s().p("AgGCRIABgJIADgjIABgQIAAgNIgFgjIgHgiQgFgXgJgXIgLgdQgHgVAHgVQAFgPANgCQAFACAEAEQAHAIAEAJIAGAPIAEABIADAAIACgCIACgCIAAgCIABgaQABgLAGgGIAFgDQAJAAACAFIACAHIgCALQgDAJgGADQgGADgEAEQADAGACAIQABAIgBAIIgEAkIgDAcIAAAlIgBAcIAAATIgBAeIAAAcIABALg");
	this.shape_5.setTransform(139.8,-35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#696D5E").ss(1.5,1,1).p("AhRjRQAGABAEADQAQALAKAQQAEAIgCAIQgBAIgFACQgDgBgDgBQgGgDgFgEQgJgFgLgFQgSgHgJgTQAMgTAUAHgAAZDiQgBgLgCgMQAAgJgCgJQgCgQgCgQQgDgTgBgTQgBgYAAgZQAAgYAEgYQACgMAFgKQAFgKAHgKQANgUgCgYQgCgBgBgBQgCgCgCgBQgEAAgEAAQgFABgDgCQgEAAgCgDQgCgEgCgEQgBgHgBgHQgBgEgDgEQgCgCgCgDQgCAAAAAAQgCAAgCAAQgCABgCABQgCABgCABQgBABgBACQgBABAAACQAAAFAAAFQABAGgCAFQgBAEgEADQgJAHgCAMQgBAFABAEQACAHAEAFQAIAQAGASQAIAcAAAfQAAAzgIAyQgEAWgCAXQgBALAAAKABqjhQgOgBgJAMQgIAIgHAJQgKAPgFAQQgDAMgDAMQAhgGAagZQACgDACgEQABgCABgCIgJgIQAIgGADgKQgBgJgFgGQgBgBgBgBg");
	this.shape_6.setTransform(139.6,-42.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8E3FF").s().p("AgTDiIABgVQACgXAEgWQAIgyAAgzQAAgfgIgcQgGgSgIgQQgEgFgCgHQgBgEABgFQACgMAJgHQAEgDABgEQACgFgBgGIAAgKIABgDIACgDIAEgCIAEgCIAEAAIACAAIAEAFQADAEABAEIACAOIAEAIQACADAEAAQADACAFgBIAIAAIAEADIADACQACAYgNAUIgMAUQgFAKgCAMQgEAYAAAYIABAxQABATADATIAEAgIACASIADAXgAA1imQAFgQAKgPIAPgRQAJgMAOABIACACQAFAGABAJQgDAKgIAGIAJAIIgCAEIgEAHQgaAZghAGIAGgYgAg3iaIgLgHIgUgKQgSgHgJgTQAMgTAUAHQAGABAEADQAQALAKAQQAEAIgCAIQgBAIgFACIgGgCg");
	this.shape_7.setTransform(139.6,-42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#696D5E").ss(1.5,1,1).p("Aioi8QAAAIAWAGQgRAGAGAEQAPAKARAEQAUAFAUgGQAEgBAEgCQAEgGgBgJQgJgBgHgGQgCgCgBgBQgBgCgBgCQgPgXgVgBQgPgBgOAIQgIAEAAAIgAABh3QgBAQgKALQgDAEgDACQgFgYgTgIQgEgDgFAAQAAAAgBABQgBADABAEQADAUAQAJQAFAEAGACQgDAaANAWQACADACAFQAEAGACAGQAOAagBAfQAEgIACgIQADgLABgMQAAgWASgGQAJgCAGgIQADgDACgEQAAgCABgBIgBgDQACgHABgKQACgPgNgEQgHgBgFgBQgPgQgMgcQgIgJgFAPgACijjQgJAMAGAOQgMAUgagCQgOgBgPAFQgNgEAMgOQAIgJAJgJQARgSAVgHQAjgKgTAXgAgFD0QgHgLgCgOQgBgOAAgOQABgIABgHQACgBABgBQABgBACAAQABAAACAAQABgBABABQABABABABQAAACABACQACAEACAFQACgPADgOQACgQgBgPQgBgGgBgFQADgJgDgJQgBgEABgEQACgJAKgCQACABACADQACABABACQAAACgBADQAAABAAABQAAACAAACQAAANgBAKQgDALAAAMQgBAQABAQQABAPABAQQABAJAAAJQABAFAAAO");
	this.shape_8.setTransform(139.2,-47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8E3FF").s().p("AgFD0QgHgLgCgOQgBgOAAgOIACgPIADgCIADgBIADAAIACAAIACACIABAEIAEAJIAFgdQACgQgBgPIgCgLQADgJgDgJQgBgEABgEQACgJAKgCIAEAEIADADIgBAFIAAACIAAAEQAAANgBAKQgDALAAAMQgBAQABAQIACAfIABASIABATgAAAgKIgGgMIgEgIQgNgWADgaIgLgGQgQgJgDgUIAAgHIABgBQAFAAAEADQATAIAFAYIAGgGQAKgLABgQQAFgPAIAJQAMAcAPAQIAMACQAOAEgDAPIgDARIABADIgBADIgFAHQgGAIgJACQgSAGAAAWQgBAMgDALIgGAQQABgfgOgagAh9iWQgRgEgPgKQgGgEARgGQgWgGAAgIQAAgIAIgEQAOgIAPABQAVABAPAXIACAEIADADQAHAGAJABQABAJgEAGIgIADQgLADgLAAQgJAAgJgCgABbjFIARgSQARgSAVgHQAjgKgTAXQgJAMAGAOQgMAUgagCQgOgBgPAFQgNgEAMgOg");
	this.shape_9.setTransform(139.2,-47.5);

	this.instance = new lib.ee1156hotchocolatespray_school("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(137.9,-5.6,0.783,0.992,0,0,0,-53.9,65.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.instance}]},2).to({state:[]},34).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.5,-30.1,10.8,16.5);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shuibo1.png
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.6,21.9,0.085,0.085,0,0,0,47.3,20.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:47,regY:19.5,scaleX:0.85,scaleY:0.85},29).to({regY:19.6,scaleX:1.01,scaleY:1.01,x:3.5,y:20.7,alpha:0},23).wait(1));

	// shuibo.png
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,28.3,0.085,0.085,0,0,0,104.7,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:104.5,regY:41.1,scaleX:0.85,scaleY:0.85},29).to({regY:41,scaleX:1.01,scaleY:1.01,alpha:0},23).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,24.8,17.7,7);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 6
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(382.7,575.4,1,1,1.7,0,0,144.5,572.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:144.6,regY:573,rotation:2.5,x:382.8,y:601.4},34,cjs.Ease.get(0.98)).to({regX:144.5,regY:572.9,rotation:1.7,x:382.7,y:575.4},35,cjs.Ease.get(0.99)).wait(1));

	// Symbol 7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(310.4,21.3,1,0.84,-3.5,0,0,36.8,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:37,regY:-0.4,rotation:-1.7,x:323.7,y:64.7},34,cjs.Ease.get(0.98)).to({regX:36.8,regY:-0.6,rotation:-3.5,x:310.4,y:21.3},35,cjs.Ease.get(0.99)).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(388.1,731.5,1,1,0,0,0,388.1,342.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:760.6},34,cjs.Ease.get(0.98)).to({y:731.5},35,cjs.Ease.get(0.99)).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(313.3,315.7,0.656,0.523,0,0,0,20.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:20.3,regY:18.9,rotation:4.7,x:311,y:361.2},34,cjs.Ease.get(0.98)).to({regX:20.2,regY:18.8,rotation:0,x:314.5,y:317.7},35,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.6,776.3,1075.4);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgibANvIAA7dMBE3AAAIAAbdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.3,y:16.2}).wait(156).to({graphics:null,x:0,y:0}).wait(42));

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(91.3,131.1,0.637,0.637,0,0,0,80.6,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:78.3},24).wait(106).to({y:131.1},23).to({_off:true},3).wait(42));

	// Layer 3
	this.instance_1 = new lib.ee1156scenecomp_schoo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.7,87.2,1.253,1.253,0,0,0,140.8,-17.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({_off:true},105).wait(68));

	// Layer 4
	this.instance_2 = new lib.Symbol4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.9,101.6,1.355,0.563,0,0,0,4.3,27.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},105).wait(68));

	// Layer 7
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.7,105.3,0.39,0.132,0,0,0,49.6,19.7);
	this.instance_3.alpha = 0.449;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regY:19.8,scaleX:0.61,scaleY:0.35,x:86.4,y:107.3},2).to({regX:49.5,scaleX:0.79,scaleY:0.55,x:89,y:109},3).to({regX:49.6,scaleX:0.92,scaleY:0.95,x:91.1,y:112.6,alpha:0.578},3).to({scaleX:1.01,scaleY:1.16,x:93,y:114.4,alpha:0.699},3).to({scaleX:1.05,scaleY:1.37,x:94.7,y:114.9,alpha:0.828},3).to({regY:19.9,scaleY:1.51,x:94.5,y:111.7,alpha:0.922},2).to({regX:49.4,regY:19.6,scaleX:1.05,scaleY:1.66,x:94.2,y:108.3,alpha:1},2).wait(106).to({regX:49.3,regY:19.5,scaleX:1,scaleY:1,x:92.9,y:104.1},0).to({scaleY:0.94,y:112.2,alpha:0.82},4).to({regX:49.5,regY:19.6,scaleX:0.97,scaleY:0.75,x:91.9,y:110.7,alpha:0.648},4).to({regX:49.6,scaleX:0.8,scaleY:0.51,x:89.2,y:108.6,alpha:0.48},4).to({regX:49.7,regY:19.8,scaleX:0.54,scaleY:0.23,x:85.4,y:106.2,alpha:0.301},4).to({regX:49.8,regY:19.9,scaleX:0.3,scaleY:0.11,x:83.8,y:105.1,alpha:0.219},2).to({_off:true},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgibANvIAA7dMBE3AAAIAAbdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.3,y:16.2}).wait(99).to({graphics:null,x:0,y:0}).wait(42));

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(91.3,131.1,0.637,0.637,0,0,0,80.6,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:78.3},24).wait(49).to({y:131.1},23).to({_off:true},3).wait(42));

	// Layer 3
	this.instance_1 = new lib.ee1156scenecomp_schoo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.7,87.2,1.253,1.253,0,0,0,140.8,-17.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({_off:true},48).wait(68));

	// Layer 4
	this.instance_2 = new lib.Symbol4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.9,101.6,1.355,0.563,0,0,0,4.3,27.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},48).wait(68));

	// Layer 7
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.7,105.3,0.39,0.132,0,0,0,49.6,19.7);
	this.instance_3.alpha = 0.449;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regY:19.8,scaleX:0.61,scaleY:0.35,x:86.4,y:107.3},2).to({regX:49.5,scaleX:0.79,scaleY:0.55,x:89,y:109},3).to({regX:49.6,scaleX:0.92,scaleY:0.95,x:91.1,y:112.6,alpha:0.578},3).to({scaleX:1.01,scaleY:1.16,x:93,y:114.4,alpha:0.699},3).to({scaleX:1.05,scaleY:1.37,x:94.7,y:114.9,alpha:0.828},3).to({regY:19.9,scaleY:1.51,x:94.5,y:111.7,alpha:0.922},2).to({regX:49.4,regY:19.6,scaleX:1.05,scaleY:1.66,x:94.2,y:108.3,alpha:1},2).wait(49).to({regX:49.3,regY:19.5,scaleX:1,scaleY:1,x:92.9,y:104.1},0).to({scaleY:0.94,y:112.2,alpha:0.82},4).to({regX:49.5,regY:19.6,scaleX:0.97,scaleY:0.75,x:91.9,y:110.7,alpha:0.648},4).to({regX:49.6,scaleX:0.8,scaleY:0.51,x:89.2,y:108.6,alpha:0.48},4).to({regX:49.7,regY:19.8,scaleX:0.54,scaleY:0.23,x:85.4,y:106.2,alpha:0.301},4).to({regX:49.8,regY:19.9,scaleX:0.3,scaleY:0.11,x:83.8,y:105.1,alpha:0.219},2).to({_off:true},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite15副本4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.instance = new lib.sprite14副本5copy();
	this.instance.parent = this;
	this.instance.setTransform(57.3,64.2,0.976,0.914,0,0,180);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:69.7,y:62.8,alpha:1},11).to({x:414.6,y:25.4},153).to({x:833,y:-180.7},106).to({_off:true},1).wait(9));

	// Layer 11
	this.instance_1 = new lib.sprite14副本5copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.6,134.9,0.509,0.477,0,0,180);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({x:82.6,y:132.3,alpha:1},15).to({x:254.4,y:100.6},65).to({x:790.9,y:72.1},148).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_2 = new lib.sprite14副本5copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.2,1.4,0.328,0.307,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:333.3},199).to({regX:-1.6,regY:1.7,scaleX:0.03,scaleY:0.03,x:686.5,y:-235.4},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.3,1.5,43.1,78.4);


(lib.sprite15副本4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.instance = new lib.sprite14副本5();
	this.instance.parent = this;
	this.instance.setTransform(57.3,64.2,0.976,0.914,0,0,180);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:69.7,y:62.8,alpha:1},5).to({x:414.6,y:25.4},140).to({x:833,y:-180.7},199).to({_off:true},1).wait(12));

	// Layer 11
	this.instance_1 = new lib.sprite14副本5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.6,134.9,0.509,0.477,0,0,180);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:82.6,y:132.3,alpha:1},15).to({x:254.4,y:100.6},41).to({x:790.9,y:72.1},247).to({_off:true},1).wait(28));

	// Layer 1
	this.instance_2 = new lib.sprite14副本5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.2,1.4,0.328,0.307,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:333.3},190).to({regX:-1.6,regY:1.7,scaleX:0.03,scaleY:0.03,x:686.5,y:-235.4},166).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.3,1.5,43.1,78.4);


// stage content:
(lib.SeaWaterDH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 船
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(376.1,801.8,1,1,0,0,0,388.1,536.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(281));

	// 鲸鱼
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(618.4,473.7,0.76,0.76,0,0,0,81,77);

	this.instance_2 = new lib.Symbol1copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.9,483.7,0.76,0.76,0,0,0,81.2,77.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:81.2,regY:77.1,x:410.7,y:481.7,startPosition:105},105).to({_off:true},2).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({x:-55.6,startPosition:125},125).wait(2));

	// 水波
	this.instance_3 = new lib.符0号15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.1,517.1,1.151,0.412,0,180,0,0.1,-0.3);
	this.instance_3.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(281));

	// 海面
	this.instance_4 = new lib.海面();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,473,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(281));

	// 飞鸟
	this.instance_5 = new lib.sprite15副本4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(818,115.8,1.018,1.018,0,0,180,38.3,51.1);

	this.instance_6 = new lib.sprite15副本4copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-88.6,296.2,1.139,1.139,1.2,0,0,38.3,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(281));

	// 天空
	this.instance_7 = new lib.云彩pngcopy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-13,-96,1.039,1.039);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261.4,571,955.1,1434.7);
// library properties:
lib.properties = {
	id: '2B0541BF1CB2F84B82477D19060F027D',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SeaWaterDH_atlas_.png?1521887869912", id:"SeaWaterDH_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2B0541BF1CB2F84B82477D19060F027D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

/*=========================*/

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initFish() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("2B0541BF1CB2F84B82477D19060F027D");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.SeaWaterDH();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(true,'both',true,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}