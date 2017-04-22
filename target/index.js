(function(){
	var transform = getTransform();

	function Target(selector){
		this.elem = typeof selector == 'Object' ? selector : document.getElementById(selector);
		var startX = 0;
		var	startY = 0; 
		var	sourceX = 0;
		var	sourceY = 0;
		this.init();
	}

	Target.prototype = {
		constructor: Target,

		init: function(){
			this.setDrag();
		},
		getStyle: function(property){
			return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem,false)[property] : this.elem.currentStyle[property];
		},
		getPosition: function(){
			var pos = {x:0,y:0};
			if(transform){
				var transformValue = this.getStyle(transform);
				if(transformValue == 'none'){
					this.elem.style[transform] = 'translate(0, 0)';
					return pos;
				}else{
					var temp = transformValue.match(/-?\d+/g);
					return pos = {
						x: parseInt(temp[4].trim()),
						y: parseInt(temp[5].trim())
					}
				}
			}else{
				if(this.getStyle('position') == 'static'){
					this.elem.style.position = 'relative';
					return pos;
				}else{
					var x = parseInt(this.getStyle('left') ? this.getStyle('left') : 0 );
					var y = parseInt(this.getStyle('top') ? this.getStyle('top') : 0);
		            return pos = {
		                x: x,
		                y: y
		            }
				}
			}
			return pos;
		},
		setPosition: function(pos){
			if(transform) {
		        this.elem.style[transform] = 'translate('+ pos.x +'px, '+ pos.y +'px)';
		    } else {
		        this.elem.style.left = pos.x + 'px';
		        this.elem.style.top = pos.y + 'px';
		    }
		    return this.elem;
		},
		setDrag: function(){
			var self = this;
			this.elem.addEventListener('mousedown', start, false);
			function start(event) {
                self.startX = event.pageX;
                self.startY = event.pageY;

                var pos = self.getPosition();

                self.sourceX = pos.x;
                self.sourceY = pos.y;

                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', end, false);
            }

            function move(event) {
                var currentX = event.pageX;
                var currentY = event.pageY;

                var distanceX = currentX - self.startX;
                var distanceY = currentY - self.startY;

                self.setPosition({
                    x: (self.sourceX + distanceX).toFixed(),
                    y: (self.sourceY + distanceY).toFixed()
                })
            }

            function end(event) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', end);
                // do other things
            }
		}
	}

	function getTransform(){
		var transform = '',
			divStyle = document.createElement('div').style,
			transformArr = ['transform','webkitTransform','MozTransform','msTransform','OTransform'],
			i = 0;
			len = transformArr.length;
		for(; i < len; i++){
			if (transformArr[i] in divStyle){
				// 找到之后立即返回，结束函数
				return transform = transformArr[i];
			}
		}
		// 如果没有找到，就直接返回空字符串
    	return transform;
	}

	window.Target = Target;
})();
var Position = new Target('demo');
