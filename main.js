'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mayFixedMiniBanner = function () {
	function mayFixedMiniBanner() {
		_classCallCheck(this, mayFixedMiniBanner);
		var _this = this;
		this.element = document.querySelector('.mayFixedMiniBanner');
		this.element.querySelector('.mayFixedMiniBanner__close').addEventListener('click',function(){
			_this.hide();
		});
	}

	_createClass(mayFixedMiniBanner, [{
		key: 'show',
		value: function show() {
			this.element.classList.add('mayFixedMiniBanner--show');
		}
	}, {
		key: 'hide',
		value: function hide() {
			console.log(this);
			this.element.classList.remove('mayFixedMiniBanner--show');
		}
	}]);

	return mayFixedMiniBanner;
}();

document.addEventListener('DOMContentLoaded', function () {
	window.mayFixedMiniBanner__rFQer4f = new mayFixedMiniBanner();
});