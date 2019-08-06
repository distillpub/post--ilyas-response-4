/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_stage", function() { return _stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDev", function() { return setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAnimation", function() { return wrapAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixPosition", function() { return fixPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePromise", function() { return handlePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBefore", function() { return detachBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachAfter", function() { return detachAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBetween", function() { return reinsertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertChildren", function() { return reinsertChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertAfter", function() { return reinsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBefore", function() { return reinsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomElementData", function() { return setCustomElementData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangesToArray", function() { return timeRangesToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOption", function() { return selectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectValue", function() { return selectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMultipleValue", function() { return selectMultipleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyBlock", function() { return destroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyBlock", function() { return outroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAndOutroAndDestroyBlock", function() { return fixAndOutroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadUpdate", function() { return getSpreadUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAttributeNameCharacter", function() { return invalidAttributeNameCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingComponent", function() { return missingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSsrComponent", function() { return validateSsrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outros", function() { return outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupOutros", function() { return groupOutros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTrue", function() { return assignTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAfter", function() { return callAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoc", function() { return addLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function assignTrue(tar, src) {
	for (var k in src) tar[k] = 1;
	return tar;
}

function isPromise(value) {
	return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
	if (i === 0) fn();
	return () => {
		if (!--i) fn();
	};
}

function addLoc(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function exclude(src, prop) {
	const tar = {};
	for (const k in src) k === prop || (tar[k] = src[k]);
	return tar;
}

function run(fn) {
	fn();
}

function append(target, node) {
	target.appendChild(node);
}

function insert(target, node, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations, detach) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detach);
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
	for (var key in attributes) {
		if (key === 'style') {
			node.style.cssText = attributes[key];
		} else if (key in node) {
			node[key] = attributes[key];
		} else {
			if (attributes[key] === undefined) removeAttribute(node, key);
			else setAttribute(node, key, attributes[key]);
		}
	}
}

function setCustomElementData(node, prop, value) {
	if (prop in node) {
		node[prop] = value;
	} else if (value) {
		setAttribute(node, prop, value);
	} else {
		removeAttribute(node, prop);
	}
}

function removeAttribute(node, attribute) {
	node.removeAttribute(attribute);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
	var array = [];
	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setData(text, data) {
	text.data = '' + data;
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectOptions(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
	return [].map.call(select.querySelectorAll(':checked'), function(option) {
		return option.__value;
	});
}

function addResizeListener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win && win.removeEventListener && win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function toggleClass(element, name, toggle) {
	element.classList.toggle(name, !!toggle);
}

function linear(t) {
	return t;
}

function generateRule({ a, b, delta, duration }, ease, fn) {
	const step = 16.666 / duration;
	let keyframes = '{\n';

	for (let p = 0; p <= 1; p += step) {
		const t = a + delta * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}

	return keyframes + `100% {${fn(b, 1 - b)}}\n}`;
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
	let obj = fn.call(component, node, params);
	let duration;
	let ease;
	let cssText;

	let initialised = false;

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,

		run(b, callback) {
			if (typeof obj === 'function') {
				transitionManager.wait().then(() => {
					obj = obj();
					this._run(b, callback);
				});
			} else {
				this._run(b, callback);
			}
		},

		_run(b, callback) {
			duration = obj.duration || 300;
			ease = obj.easing || linear;

			const program = {
				start: window.performance.now() + (obj.delay || 0),
				b,
				callback: callback || noop
			};

			if (intro && !initialised) {
				if (obj.css && obj.delay) {
					cssText = node.style.cssText;
					node.style.cssText += obj.css(0, 1);
				}

				if (obj.tick) obj.tick(0, 1);
				initialised = true;
			}

			if (!b) {
				program.group = outros.current;
				outros.current.remaining += 1;
			}

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},

		start(program) {
			component.fire(`${program.b ? 'intro' : 'outro'}.start`, { node });

			program.a = this.t;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, obj.css);
				transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},

		update(now) {
			const program = this.program;
			if (!program) return;

			const p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t, 1 - this.t);
		},

		done() {
			const program = this.program;
			this.t = program.b;

			if (obj.tick) obj.tick(this.t, 1 - this.t);

			component.fire(`${program.b ? 'intro' : 'outro'}.end`, { node });

			if (!program.b && !program.invalidated) {
				program.group.callbacks.push(() => {
					program.callback();
					if (obj.css) transitionManager.deleteRule(node, program.name);
				});

				if (--program.group.remaining === 0) {
					program.group.callbacks.forEach(run);
				}
			} else {
				if (obj.css) transitionManager.deleteRule(node, program.name);
			}

			this.running = !!this.pending;
		},

		abort(reset) {
			if (this.program) {
				if (reset && obj.tick) obj.tick(1, 0);
				if (obj.css) transitionManager.deleteRule(node, this.program.name);
				this.program = this.pending = null;
				this.running = false;
			}
		},

		invalidate() {
			if (this.program) {
				this.program.invalidated = true;
			}
		}
	};
}

let outros = {};

function groupOutros() {
	outros.current = {
		remaining: 0,
		callbacks: []
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},
	promise: null,

	add(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule(rule, name) {
		if (!this.stylesheet) {
			const style = createElement('style');
			document.head.appendChild(style);
			transitionManager.stylesheet = style.sheet;
		}

		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
		}
	},

	next() {
		this.running = false;

		const now = window.performance.now();
		let i = this.transitions.length;

		while (i--) {
			const transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			let i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(anim => anim && anim.indexOf(name) === -1)
			.join(', ');
	},

	wait() {
		if (!transitionManager.promise) {
			transitionManager.promise = Promise.resolve();
			transitionManager.promise.then(() => {
				transitionManager.promise = null;
			});
		}

		return transitionManager.promise;
	}
};

function wrapAnimation(node, from, fn, params) {
	if (!from) return;

	const to = node.getBoundingClientRect();
	if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;

	const info = fn(node, { from, to }, params);

	const duration = 'duration' in info ? info.duration : 300;
	const delay = 'delay' in info ? info.delay : 0;
	const ease = info.easing || linear;
	const start = window.performance.now() + delay;
	const end = start + duration;

	const program = {
		a: 0,
		t: 0,
		b: 1,
		delta: 1,
		duration,
		start,
		end
	};

	const cssText = node.style.cssText;

	const animation = {
		pending: delay ? program : null,
		program: delay ? null : program,
		running: true,

		start() {
			if (info.css) {
				if (delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, info.css);
				program.name = `__svelte_${hash(rule)}`;

				transitionManager.addRule(rule, program.name);

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			animation.program = program;
			animation.pending = null;
		},

		update: now => {
			const p = now - program.start;
			const t = program.a + program.delta * ease(p / program.duration);
			if (info.tick) info.tick(t, 1 - t);
		},

		done() {
			if (info.tick) info.tick(1, 0);
			animation.stop();
		},

		stop() {
			if (info.css) transitionManager.deleteRule(node, program.name);
			animation.running = false;
		}
	};

	transitionManager.add(animation);

	if (info.tick) info.tick(0, 1);

	if (delay) {
		if (info.css) node.style.cssText += info.css(0, 1);
	} else {
		animation.start();
	}

	return animation;
}

function fixPosition(node) {
	const style = getComputedStyle(node);

	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		const b = node.getBoundingClientRect();

		if (a.left !== b.left || a.top !== b.top) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
		}
	}
}

function handlePromise(promise, info) {
	var token = info.token = {};

	function update(type, index, key, value) {
		if (info.token !== token) return;

		info.resolved = key && { [key]: value };

		const child_ctx = assign(assign({}, info.ctx), info.resolved);
		const block = type && (info.current = type)(info.component, child_ctx);

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						groupOutros();
						block.o(() => {
							block.d(1);
							info.blocks[i] = null;
						});
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			block[block.i ? 'i' : 'm'](info.mount(), info.anchor);

			info.component.root.set({}); // flush any handlers that were created
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;
	}

	if (isPromise(promise)) {
		promise.then(value => {
			update(info.then, 1, info.value, value);
		}, error => {
			update(info.catch, 2, info.error, error);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = { [info.value]: promise };
	}
}

function destroyBlock(block, lookup) {
	block.d(1);
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function fixAndOutroAndDestroyBlock(block, lookup) {
	block.f();
	outroAndDestroyBlock(block, lookup);
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, intro_method, next, get_context) {
	var o = old_blocks.length;
	var n = list.length;

	var i = o;
	var old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;

	var new_blocks = [];
	var new_lookup = {};
	var deltas = {};

	var i = n;
	while (i--) {
		var child_ctx = get_context(ctx, list, i);
		var key = get_key(child_ctx);
		var block = lookup[key];

		if (!block) {
			block = create_each_block(component, key, child_ctx);
			block.c();
		} else if (dynamic) {
			block.p(changed, child_ctx);
		}

		new_blocks[i] = new_lookup[key] = block;

		if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
	}

	var will_move = {};
	var did_move = {};

	function insert(block) {
		block[intro_method](node, next);
		lookup[block.key] = block;
		next = block.first;
		n--;
	}

	while (o && n) {
		var new_block = new_blocks[n - 1];
		var old_block = old_blocks[o - 1];
		var new_key = new_block.key;
		var old_key = old_block.key;

		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		}

		else if (!new_lookup[old_key]) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		}

		else if (!lookup[new_key] || will_move[new_key]) {
			insert(new_block);
		}

		else if (did_move[old_key]) {
			o--;

		} else if (deltas[new_key] > deltas[old_key]) {
			did_move[new_key] = true;
			insert(new_block);

		} else {
			will_move[old_key] = true;
			o--;
		}
	}

	while (o--) {
		var old_block = old_blocks[o];
		if (!new_lookup[old_block.key]) destroy(old_block, lookup);
	}

	while (n) insert(new_blocks[n - 1]);

	return new_blocks;
}

function measure(blocks) {
	const rects = {};
	let i = blocks.length;
	while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
	return rects;
}

function animate(blocks, rects, fn, params) {
	let i = blocks.length;
	while (i--) {
		const block = blocks[i];
		const from = rects[block.key];

		if (!from) continue;
		const to = block.node.getBoundingClientRect();

		if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) continue;


	}
}

function getSpreadUpdate(levels, updates) {
	var update = {};

	var to_null_out = {};
	var accounted_for = {};

	var i = levels.length;
	while (i--) {
		var o = levels[i];
		var n = updates[i];

		if (n) {
			for (var key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}

			for (var key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}

			levels[i] = n;
		} else {
			for (var key in o) {
				accounted_for[key] = 1;
			}
		}
	}

	for (var key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}

	return update;
}

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
const invalidAttributeNameCharacter = /[\s'">\/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;

function spread(args) {
	const attributes = Object.assign({}, ...args);
	let str = '';

	Object.keys(attributes).forEach(name => {
		if (invalidAttributeNameCharacter.test(name)) return;

		const value = attributes[name];
		if (value === undefined) return;
		if (value === true) str += " " + name;

		const escaped = String(value)
			.replace(/"/g, '&#34;')
			.replace(/'/g, '&#39;');

		str += " " + name + "=" + JSON.stringify(escaped);
	});

	return str;
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(assign(items[i], i));
	}
	return str;
}

const missingComponent = {
	_render: () => ''
};

function validateSsrComponent(component, name) {
	if (!component || !component._render) {
		if (name === 'svelte:component') name += 'this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

function debug(file, line, column, values) {
	console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`);
	console.log(values);
	return '';
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function _differsImmutable(a, b) {
	return a != a ? b == b : a !== b;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			try {
				handler.__calling = true;
				handler.call(this, data);
			} finally {
				handler.__calling = false;
			}
		}
	}
}

function flush(component) {
	component._lock = true;
	callAll(component._beforecreate);
	callAll(component._oncreate);
	callAll(component._aftercreate);
	component._lock = false;
}

function get() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._slots = blankObject();
	component._bind = options._bind;
	component._staged = {};

	component.options = options;
	component.root = options.root || component;
	component.store = options.store || component.root.store;

	if (!options.root) {
		component._beforecreate = [];
		component._oncreate = [];
		component._aftercreate = [];
	}
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	flush(this.root);
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	newState = assign(this._staged, newState);
	this._staged = {};

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function _stage(newState) {
	assign(this._staged, newState);
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy,
	get,
	fire,
	on,
	set,
	_recompute: noop,
	_set,
	_stage,
	_mount,
	_differs
};

var protoDev = {
	destroy: destroyDev,
	get,
	fire,
	on,
	set: setDev,
	_recompute: noop,
	_set,
	_stage,
	_mount,
	_differs
};




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VisualTOC = __webpack_require__(2);

var _VisualTOC2 = _interopRequireDefault(_VisualTOC);

var _ColabLink = __webpack_require__(5);

var _ColabLink2 = _interopRequireDefault(_ColabLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eagerly initialize vtoc  as it's above the fold
var tocNav = document.getElementById('vtoc');
var visualTOC = new _VisualTOC2.default({ target: tocNav });

// lazily initialize any diagram below the fold. E.G:
// {
//   const figure = document.getElementById('StyleTransferExamples');
//   figure.addEventListener("ready", function() {
//     const styleTransferExamples = new StyleTransferExamples({target: figure});
//   });
// }

function addColabLink() {
  var className = "add-colab-link";
  var elements = document.getElementsByClassName(className);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      var data = {
        target: element,
        data: {
          url: "https://colab.research.google.com/github/reiinakano/adversarially-robust-neural-style-transfer/blob/master/Robust_Neural_Style_Transfer.ipynb"
        }
      };
      var colabLink = new _ColabLink2.default(data);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

addColabLink();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var _util = __webpack_require__(3);

var _lucidComponents = __webpack_require__(4);

function data() {
	return {
		sections: [{ title: "Example Section with image", colab_url: "", anchor: "#experiment-aligned", sprite_index: 0 }, { title: "Example Section with image-VGG", colab_url: "", anchor: "#experiment-styletransfer", sprite_index: 1 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-xy2rgb", sprite_index: 3 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-featureviz-rgba", sprite_index: 2 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-featureviz-3d", sprite_index: 4 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-styletransfer-3d", sprite_index: 5 }]
	};
} /* src/diagrams/VisualTOC.html generated by Svelte v2.13.2 */
;

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1eb0vow-style';
	style.textContent = ".visual-toc.svelte-1eb0vow{counter-reset:toc-heading;display:grid;grid-auto-flow:dense;grid-template-columns:1fr 1fr 1fr;grid-gap:16px}@media(min-width: 1000px){.visual-toc.svelte-1eb0vow{grid-gap:8px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr}}@media(min-width: 1180px){.visual-toc.svelte-1eb0vow{grid-gap:20px}}.visual-toc-item.svelte-1eb0vow{display:flex;flex-flow:column}.visual-toc-top.svelte-1eb0vow{flex-grow:1;border:1px solid #E5E5E5;border-radius:5px;overflow:hidden;text-decoration:none;transition:box-shadow 0.35s, transform 0.35s;transform:scale(1.0);display:flex;flex-flow:column}.visual-toc-top.svelte-1eb0vow:hover{box-shadow:0px 1px 4px rgba(0,0,0,0.05);transform:scale(1.02);transition:box-shadow 0.15s, transform 0.15s}.visual-toc-heading.svelte-1eb0vow,.visual-toc-subheading.svelte-1eb0vow{display:block;line-height:1.3em;font-size:85%;padding:0.5em 1em 1em 1em}.visual-toc-heading.svelte-1eb0vow{counter-increment:toc-heading;color:#333;font-weight:600}.visual-toc-heading.svelte-1eb0vow::before{display:block;content:\"Section \" counter(toc-heading);font-weight:400;text-transform:uppercase;font-size:0.6rem;color:#666}.visual-toc-subheading.svelte-1eb0vow{display:none;color:#666;font-size:75%}.visual-toc-colab.svelte-1eb0vow{border-radius:5px;border:dashed 1px rgba(0,0,0,0.1);margin-top:1em;padding-left:1.2em;padding-right:1.2em;padding-top:0.25em;padding-bottom:0.25em;text-transform:uppercase;color:#aaa;font-size:10.5px;line-height:24px}.visual-toc-colab.svelte-1eb0vow>img.svelte-1eb0vow{position:relative;top:4px}.visual-toc-item.svelte-1eb0vow:hover .visual-toc-colab>img.svelte-1eb0vow{filter:unset}.visual-toc-colab.svelte-1eb0vow:hover{background-color:hsl(0, 0%, 97%);border-color:rgba(0,0,0,0.2);color:#888}a.svelte-1eb0vow{display:block;text-decoration:none;cursor:pointer}a.svelte-1eb0vow canvas{width:100%}";
	(0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
	var nav;

	var each_value = ctx.sections;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c: function c() {
			nav = (0, _shared.createElement)("nav");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			nav.className = "visual-toc svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, nav, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(nav, null);
			}
		},
		p: function p(changed, ctx) {
			if (changed.sections) {
				each_value = ctx.sections;

				for (var i = 0; i < each_value.length; i += 1) {
					var child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(nav, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(nav);
			}

			(0, _shared.destroyEach)(each_blocks, detach);
		}
	};
}

// (2:2) {#each sections as section, i}
function create_each_block(component, ctx) {
	var div,
	    a,
	    text,
	    span,
	    text_1_value = ctx.section.title,
	    text_1,
	    text_2,
	    a_href_value,
	    text_4,
	    a_1,
	    a_1_href_value;

	var sprite_initial_data = {
		url: "images/vtoc.jpg",
		width: "320",
		columns: "3",
		index: ctx.section.sprite_index
	};
	var sprite = new _lucidComponents.Sprite({
		root: component.root,
		store: component.store,
		data: sprite_initial_data
	});

	var if_block = ctx.section.subtitle && create_if_block(component, ctx);

	return {
		c: function c() {
			div = (0, _shared.createElement)("div");
			a = (0, _shared.createElement)("a");
			sprite._fragment.c();
			text = (0, _shared.createText)("\n      ");
			span = (0, _shared.createElement)("span");
			text_1 = (0, _shared.createText)(text_1_value);
			text_2 = (0, _shared.createText)("\n      ");
			if (if_block) if_block.c();
			text_4 = (0, _shared.createText)("\n    ");
			a_1 = (0, _shared.createElement)("a");
			a_1.innerHTML = "try in a <img alt=\"Colab\" src=\"images/colab.svg\" class=\"svelte-1eb0vow\"> notebook";
			span.className = "visual-toc-heading svelte-1eb0vow";
			a.href = a_href_value = ctx.section.anchor;
			a.className = "visual-toc-top svelte-1eb0vow";
			a_1.href = a_1_href_value = ctx.section.colab_url;
			a_1.className = "visual-toc-colab svelte-1eb0vow";
			div.className = "visual-toc-item svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, div, anchor);
			(0, _shared.append)(div, a);
			sprite._mount(a, null);
			(0, _shared.append)(a, text);
			(0, _shared.append)(a, span);
			(0, _shared.append)(span, text_1);
			(0, _shared.append)(a, text_2);
			if (if_block) if_block.m(a, null);
			(0, _shared.append)(div, text_4);
			(0, _shared.append)(div, a_1);
		},
		p: function p(changed, ctx) {
			var sprite_changes = {};
			if (changed.sections) sprite_changes.index = ctx.section.sprite_index;
			sprite._set(sprite_changes);

			if (changed.sections && text_1_value !== (text_1_value = ctx.section.title)) {
				(0, _shared.setData)(text_1, text_1_value);
			}

			if (ctx.section.subtitle) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (changed.sections && a_href_value !== (a_href_value = ctx.section.anchor)) {
				a.href = a_href_value;
			}

			if (changed.sections && a_1_href_value !== (a_1_href_value = ctx.section.colab_url)) {
				a_1.href = a_1_href_value;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}

			sprite.destroy();
			if (if_block) if_block.d();
		}
	};
}

// (7:6) {#if section.subtitle}
function create_if_block(component, ctx) {
	var span,
	    text_value = ctx.section.subtitle,
	    text;

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			text = (0, _shared.createText)(text_value);
			span.className = "visual-toc-subheading svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
			(0, _shared.append)(span, text);
		},
		p: function p(changed, ctx) {
			if (changed.sections && text_value !== (text_value = ctx.section.subtitle)) {
				(0, _shared.setData)(text, text_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}
		}
	};
}

function get_each_context(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx.section = list[i];
	child_ctx.each_value = list;
	child_ctx.i = i;
	return child_ctx;
}

function VisualTOC(options) {
	(0, _shared.init)(this, options);
	this._state = (0, _shared.assign)(data(), options.data);
	this._intro = true;

	if (!document.getElementById("svelte-1eb0vow-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		(0, _shared.flush)(this);
	}
}

(0, _shared.assign)(VisualTOC.prototype, _shared.proto);
exports.default = VisualTOC;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
function range(n) {
  return Array(n).fill().map(function (_, i) {
    return i;
  });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
		this._fragment.p(changed, this._state);
		dispatchObservers(this, this._observers.post, changed, this._state, oldState);
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};

/* src/Sprite.html generated by Svelte v1.57.1 */

// We need to create a global cache of loaded images independent of any sprite instance.
const cache = new Map();

function realHeight(width, height) {
  return height ? height : width;
}

function data() {
  return {
    url: '',
    index: 0,
    width: 100,
    loaded: null,
    columns: Infinity,
    height: null,
    img: null
  }
}
var methods = {
  draw() {
    if (this.refs.canvas) {
      const context = this.refs.canvas.getContext('2d');
      const { img, index, width, realHeight, columns, loaded } = this.get();
      context.clearRect(0, 0, width, realHeight);
      const sx = Array.isArray(index) ? index[0] * width : (index % columns) * width;
      const sy = Array.isArray(index) ? index[1] * realHeight : Math.floor(index / columns) * realHeight;
      if (loaded) {
        context.drawImage(img, sx, sy, width, realHeight, 0, 0, width, realHeight);
      } else {
        context.fillStyle = '#ccc';
        context.fillRect(0, 0, width, realHeight);
        context.fillStyle = "#eee";
        context.textAlign = 'center';
        context.font = '16px sans-serif';
        context.fillText('...', width / 2, realHeight / 2);
      }
    }
  }
};

function oncreate() {
  const done = (e) => {
    this.set({loaded: true});
    const {img} = this.get();
    img.removeEventListener('loaded', done);
  };
  // TODO this redraws one too many times on when you change the index and url at the same time. 
  // could add the svelte extras dependency for 'observeMany', but not sure it's worth it.
  this.observe('index', index => {
    this.draw();
  }, { init: false });
  this.observe('img', index => {
    this.draw();
  }, { init: false });
  this.observe('loaded', loaded => {
    this.draw();
  }, { init: false });
  this.observe('url', url => {
    // Clear any pending events for old urls.
    const currentImg = this.get('img');
    if (currentImg) {currentImg.removeEventListener('load', done); }
    // Check if we've already seen this url in the global cache
    if (cache.has(url)) {
      const cached = cache.get(url);
      // If we've seen it, we need to check if we're currently loading it.
      if (cached.loaded) {
        // If it's loaded, just start using it!
        this.set({
          loaded: true,
          img: cached.img
        });
      } else {
        // If it's not loaded, we need to wait until the other request is done before we start drawing.
        this.set({
          loaded: false,
          img: cached.img
        });
        cached.img.addEventListener('load', done);
      }
    } else {
      // If we haven't seen the url yet, we need to load the image.
      const img = new Image();
      this.set({ 
        loaded: false,
        img: img
       });
      const data = {img};
      // We need this event to persist, so that we still know when an abandoned image is done loading.
      const finished = (e) => {
        data.loaded = true;
        img.removeEventListener('load', finished);
      };
      img.addEventListener('load', finished);
      img.addEventListener('load', done);
      cache.set(url, data);
      img.src = url;
    }
  });
}
function create_main_fragment(component, state) {
	var canvas;

	return {
		c: function create() {
			canvas = createElement("canvas");
			this.h();
		},

		h: function hydrate() {
			canvas.width = state.width;
			canvas.height = state.realHeight;
		},

		m: function mount(target, anchor) {
			insertNode(canvas, target, anchor);
			component.refs.canvas = canvas;
		},

		p: function update(changed, state) {
			if (changed.width) {
				canvas.width = state.width;
			}

			if (changed.realHeight) {
				canvas.height = state.realHeight;
			}
		},

		u: function unmount() {
			detachNode(canvas);
		},

		d: function destroy$$1() {
			if (component.refs.canvas === canvas) component.refs.canvas = null;
		}
	};
}

function Sprite(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data(), options.data);
	this._recompute({ width: 1, height: 1 }, this._state);

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(Sprite.prototype, methods, proto);

Sprite.prototype._recompute = function _recompute(changed, state) {
	if (changed.width || changed.height) {
		if (this._differs(state.realHeight, (state.realHeight = realHeight(state.width, state.height)))) changed.realHeight = true;
	}
};

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function dsv(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
}

var csv = dsv(",");

var csvParse = csv.parse;

var tsv = dsv("\t");

var tsvParse = tsv.parse;

// Copyright 2018 The Lucid Authors.All Rights Reserved.


// // Basic usage examples: 
// import {load} from 'lucid-components';
// 
// load("test.csv").then(response => console.log("1", response));
// load(["test.csv", "test.tsv"]).then(response => console.log("2", response[0], response[1]));
// load('3a.jpg').then(response => {this.refs.img.src = response.src;})
// 
// // You can also namespace requests, which will cancel previous requests
// load("test.csv", "namespace").then(response => console.log("This will never be called."))
// load("test.tsv", "namespace").then(response => console.log("This will interrupt the previous one and be resolved instead."))



// We will cache requests and parsing.
const cache$1 = new Map();
const suppress = new Map();
const namespaces = new Map();

// Mapping file extensions to loaders
const loaders = new Map([
  ['gif', image],
  ['png', image],
  ['jpeg', image],
  ['jpg', image],
  ['csv', csv$1],
  ['tsv', tsv$1],
  ['txt', text],
  ['text', text],
  ['json', json],
]);

// Loaders
function handleErrors(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error(response.status + ':' + response.statusText);
  }
}

function image(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = event => resolve(img);
    img.onerror = event => reject(event);
    img.src = url;
  })
}

function json(url) {
  return fetch(url).then(handleErrors).then(response => response.json())
}

function text(url) {
  return fetch(url).then(handleErrors).then(response => response.text());
}

function csv$1(url) {
  return text(url).then(text => Promise.resolve(csvParse(text)));
}

function tsv$1(url) {
  return text(url).then(text => Promise.resolve(tsvParse(text)));
}


// Load a url or an array of urls.
function load(url, namespace) {

  // We will to create a namespace if we don't have one.
  let ns = namespace != null ? namespace : Date.now() + "" + Math.random();

  // Create a unique ID for this request
  let requestID = "namespace:" + ns + ", url:" + url + ", random:" + Date.now() + "" + Math.random();
  suppress.set(requestID, false);

  // If we have a previous request in this namespace, mark it as suppressed so 
  // that the promise is never resolved. Then we reset the current namespace to 
  // the current request.
  if (namespaces.has(ns)) {
    const pendingRequestID = namespaces.get(ns);
    suppress.set(pendingRequestID, true);
  }
  namespaces.set(ns, requestID);
  
  return new Promise((resolve, reject) => {
    let p;
    if (Array.isArray(url)) {
      const promises = url.map(u => _loadURL(u));
      p = Promise.all(promises);
    } else {
      p =  _loadURL(url);
    }
    p
      .then(val => {
        //check to see if we've suppressed this request.
        if (!suppress.get(requestID)) {
          resolve(val);
        }
      })
      .catch(error => {
        //check to see if we've suppressed this request.
        if (!suppress.get(requestID)) {
          reject(error);
        }
      });
    
  });
}

// Private loading function
function _loadURL(url) {
  let id = url;
  if (cache$1.has(id)) {
    return cache$1.get(id);
  } else {
    let extension = parseFileExtensionFromURL(url, loaders);
    let loader = loaders.get(extension);
    let p = loader(url);
    cache$1.set(id, p);
    return p;
  }
}

// Helpers

// Returns a filetype extension from a given url string
function parseFileExtensionFromURL(url, loaders) {
  const parts = url.split(".");
  const ext = parts[parts.length - 1];
  if (!loaders.has(ext)) {
    console.warn('Trying to load url: ' + url + ' with an unknown filetype. Assuming "text".');
  }
  return loaders.has(ext) ? ext : 'text';
}

// Copyright 2018 The Lucid Authors.All Rights Reserved.


//# sourceMappingURL=index.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function oncreate() {
	var _get = this.get(),
	    url = _get.url;

	if (typeof url == "undefined") {
		console.error("<ColabLink> was instantiated without a URL!");
	}
} /* src/components/ColabLink.html generated by Svelte v2.13.2 */
;

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-hyyx41-style';
	style.textContent = ".colab-root.svelte-hyyx41{display:inline-block;background:rgba(255, 255, 255, 0.75);padding:4px 8px;border-radius:4px;font-size:11px!important;text-decoration:none;color:#aaa;border:none;font-weight:300;border:solid 1px rgba(0, 0, 0, 0.08);border-bottom-color:rgba(0, 0, 0, 0.15);text-transform:uppercase;line-height:16px}span.svelte-hyyx41{background-image:url(images/colab.svg);background-repeat:no-repeat;background-size:20px;background-position-y:2px;display:inline-block;padding-left:24px;border-radius:4px;text-decoration:none}a.svelte-hyyx41:hover{color:#666;background:white;border-color:rgba(0, 0, 0, 0.2)}";
	(0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
	var a;

	return {
		c: function c() {
			a = (0, _shared.createElement)("a");
			a.innerHTML = "Reproduce in a <span class=\"svelte-hyyx41\">Notebook</span>";
			a.href = ctx.url;
			a.className = "colab-root svelte-hyyx41";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, a, anchor);
		},
		p: function p(changed, ctx) {
			if (changed.url) {
				a.href = ctx.url;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(a);
			}
		}
	};
}

function ColabLink(options) {
	var _this = this;

	(0, _shared.init)(this, options);
	this._state = (0, _shared.assign)({}, options.data);
	this._intro = true;

	if (!document.getElementById("svelte-hyyx41-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(function () {
		oncreate.call(_this);
		_this.fire("update", { changed: (0, _shared.assignTrue)({}, _this._state), current: _this._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		(0, _shared.flush)(this);
	}
}

(0, _shared.assign)(ColabLink.prototype, _shared.proto);
exports.default = ColabLink;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBiYzAyZjRmYzU5NmFkNDdkMjYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9WaXN1YWxUT0MuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVjaWQtY29tcG9uZW50cy9wdWJsaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sYWJMaW5rLmh0bWwiXSwibmFtZXMiOlsidG9jTmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZpc3VhbFRPQyIsIlZpc3VhbFRPQyIsInRhcmdldCIsImFkZENvbGFiTGluayIsImNsYXNzTmFtZSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVsZW1lbnQiLCJkYXRhIiwidXJsIiwiY29sYWJMaW5rIiwiQ29sYWJMaW5rIiwicmFuZ2UiLCJuIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQyxjQUFjLDZDQUE2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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O1NDaGxCWSxRLEdBQUc7QUFBQSxZQUNPLEtBQUssR0FBTCxFQURQO0FBQUEsS0FDRCxHQURDLFFBQ0QsR0FEQzs7QUFFVCxLQUFJLE9BQU8sR0FBUCxJQUFjLFdBQWxCLEVBQStCO0FBQzdCLFVBQVEsS0FBUixDQUFjLDZDQUFkO0FBQ0Q7QUFDRixDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBOUNLLEc7Ozs7Ozs7O2lCQUFBLEciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODBiYzAyZjRmYzU5NmFkNDdkMjYiLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRydWUodGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IDE7XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGNhbGxBZnRlcihmbiwgaSkge1xuXHRpZiAoaSA9PT0gMCkgZm4oKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIS0taSkgZm4oKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkTG9jKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuXHRlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG5cdFx0bG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGV4Y2x1ZGUoc3JjLCBwcm9wKSB7XG5cdGNvbnN0IHRhciA9IHt9O1xuXHRmb3IgKGNvbnN0IGsgaW4gc3JjKSBrID09PSBwcm9wIHx8ICh0YXJba10gPSBzcmNba10pO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBydW4oZm4pIHtcblx0Zm4oKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucywgZGV0YWNoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChrZXkgaW4gbm9kZSkge1xuXHRcdFx0bm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlc1trZXldID09PSB1bmRlZmluZWQpIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBrZXkpO1xuXHRcdFx0ZWxzZSBzZXRBdHRyaWJ1dGUobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRDdXN0b21FbGVtZW50RGF0YShub2RlLCBwcm9wLCB2YWx1ZSkge1xuXHRpZiAocHJvcCBpbiBub2RlKSB7XG5cdFx0bm9kZVtwcm9wXSA9IHZhbHVlO1xuXHR9IGVsc2UgaWYgKHZhbHVlKSB7XG5cdFx0c2V0QXR0cmlidXRlKG5vZGUsIHByb3AsIHZhbHVlKTtcblx0fSBlbHNlIHtcblx0XHRyZW1vdmVBdHRyaWJ1dGUobm9kZSwgcHJvcCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuXHRub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRpbWVSYW5nZXNUb0FycmF5KHJhbmdlcykge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXREYXRhKHRleHQsIGRhdGEpIHtcblx0dGV4dC5kYXRhID0gJycgKyBkYXRhO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFZhbHVlKHNlbGVjdCkge1xuXHR2YXIgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLl9fdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE11bHRpcGxlVmFsdWUoc2VsZWN0KSB7XG5cdHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0cmV0dXJuIG9wdGlvbi5fX3ZhbHVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcblx0aWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG5cdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cblx0bGV0IHdpbjtcblxuXHRvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0fTtcblxuXHRpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0d2luICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUNoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcblx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsICEhdG9nZ2xlKTtcbn1cblxuZnVuY3Rpb24gbGluZWFyKHQpIHtcblx0cmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUnVsZSh7IGEsIGIsIGRlbHRhLCBkdXJhdGlvbiB9LCBlYXNlLCBmbikge1xuXHRjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG5cdGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG5cblx0Zm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG5cdFx0Y29uc3QgdCA9IGEgKyBkZWx0YSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcblx0fVxuXG5cdHJldHVybiBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0bGV0IGhhc2ggPSA1MzgxO1xuXHRsZXQgaSA9IHN0ci5sZW5ndGg7XG5cblx0d2hpbGUgKGktLSkgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5mdW5jdGlvbiB3cmFwVHJhbnNpdGlvbihjb21wb25lbnQsIG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG5cdGxldCBvYmogPSBmbi5jYWxsKGNvbXBvbmVudCwgbm9kZSwgcGFyYW1zKTtcblx0bGV0IGR1cmF0aW9uO1xuXHRsZXQgZWFzZTtcblx0bGV0IGNzc1RleHQ7XG5cblx0bGV0IGluaXRpYWxpc2VkID0gZmFsc2U7XG5cblx0cmV0dXJuIHtcblx0XHR0OiBpbnRybyA/IDAgOiAxLFxuXHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdHByb2dyYW06IG51bGwsXG5cdFx0cGVuZGluZzogbnVsbCxcblxuXHRcdHJ1bihiLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIud2FpdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdG9iaiA9IG9iaigpO1xuXHRcdFx0XHRcdHRoaXMuX3J1bihiLCBjYWxsYmFjayk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fcnVuKGIsIGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X3J1bihiLCBjYWxsYmFjaykge1xuXHRcdFx0ZHVyYXRpb24gPSBvYmouZHVyYXRpb24gfHwgMzAwO1xuXHRcdFx0ZWFzZSA9IG9iai5lYXNpbmcgfHwgbGluZWFyO1xuXG5cdFx0XHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdFx0XHRzdGFydDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgKG9iai5kZWxheSB8fCAwKSxcblx0XHRcdFx0Yixcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrIHx8IG5vb3Bcblx0XHRcdH07XG5cblx0XHRcdGlmIChpbnRybyAmJiAhaW5pdGlhbGlzZWQpIHtcblx0XHRcdFx0aWYgKG9iai5jc3MgJiYgb2JqLmRlbGF5KSB7XG5cdFx0XHRcdFx0Y3NzVGV4dCA9IG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdFx0XHRub2RlLnN0eWxlLmNzc1RleHQgKz0gb2JqLmNzcygwLCAxKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChvYmoudGljaykgb2JqLnRpY2soMCwgMSk7XG5cdFx0XHRcdGluaXRpYWxpc2VkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFiKSB7XG5cdFx0XHRcdHByb2dyYW0uZ3JvdXAgPSBvdXRyb3MuY3VycmVudDtcblx0XHRcdFx0b3V0cm9zLmN1cnJlbnQucmVtYWluaW5nICs9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmouZGVsYXkpIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gcHJvZ3JhbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQocHJvZ3JhbSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c3RhcnQocHJvZ3JhbSkge1xuXHRcdFx0Y29tcG9uZW50LmZpcmUoYCR7cHJvZ3JhbS5iID8gJ2ludHJvJyA6ICdvdXRybyd9LnN0YXJ0YCwgeyBub2RlIH0pO1xuXG5cdFx0XHRwcm9ncmFtLmEgPSB0aGlzLnQ7XG5cdFx0XHRwcm9ncmFtLmRlbHRhID0gcHJvZ3JhbS5iIC0gcHJvZ3JhbS5hO1xuXHRcdFx0cHJvZ3JhbS5kdXJhdGlvbiA9IGR1cmF0aW9uICogTWF0aC5hYnMocHJvZ3JhbS5iIC0gcHJvZ3JhbS5hKTtcblx0XHRcdHByb2dyYW0uZW5kID0gcHJvZ3JhbS5zdGFydCArIHByb2dyYW0uZHVyYXRpb247XG5cblx0XHRcdGlmIChvYmouY3NzKSB7XG5cdFx0XHRcdGlmIChvYmouZGVsYXkpIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cblx0XHRcdFx0Y29uc3QgcnVsZSA9IGdlbmVyYXRlUnVsZShwcm9ncmFtLCBlYXNlLCBvYmouY3NzKTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShydWxlLCBwcm9ncmFtLm5hbWUgPSAnX19zdmVsdGVfJyArIGhhc2gocnVsZSkpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKSlcblx0XHRcdFx0XHQuY29uY2F0KGAke3Byb2dyYW0ubmFtZX0gJHtwcm9ncmFtLmR1cmF0aW9ufW1zIGxpbmVhciAxIGZvcndhcmRzYClcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZShub3cpIHtcblx0XHRcdGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW07XG5cdFx0XHRpZiAoIXByb2dyYW0pIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHR0aGlzLnQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCwgMSAtIHRoaXMudCk7XG5cdFx0fSxcblxuXHRcdGRvbmUoKSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5iO1xuXG5cdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKHRoaXMudCwgMSAtIHRoaXMudCk7XG5cblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5lbmRgLCB7IG5vZGUgfSk7XG5cblx0XHRcdGlmICghcHJvZ3JhbS5iICYmICFwcm9ncmFtLmludmFsaWRhdGVkKSB7XG5cdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdHByb2dyYW0uY2FsbGJhY2soKTtcblx0XHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoLS1wcm9ncmFtLmdyb3VwLnJlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0XHRcdHByb2dyYW0uZ3JvdXAuY2FsbGJhY2tzLmZvckVhY2gocnVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ydW5uaW5nID0gISF0aGlzLnBlbmRpbmc7XG5cdFx0fSxcblxuXHRcdGFib3J0KHJlc2V0KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9ncmFtKSB7XG5cdFx0XHRcdGlmIChyZXNldCAmJiBvYmoudGljaykgb2JqLnRpY2soMSwgMCk7XG5cdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHRoaXMucHJvZ3JhbS5uYW1lKTtcblx0XHRcdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGludmFsaWRhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9ncmFtKSB7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbS5pbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5sZXQgb3V0cm9zID0ge307XG5cbmZ1bmN0aW9uIGdyb3VwT3V0cm9zKCkge1xuXHRvdXRyb3MuY3VycmVudCA9IHtcblx0XHRyZW1haW5pbmc6IDAsXG5cdFx0Y2FsbGJhY2tzOiBbXVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cdGJvdW5kOiBudWxsLFxuXHRzdHlsZXNoZWV0OiBudWxsLFxuXHRhY3RpdmVSdWxlczoge30sXG5cdHByb21pc2U6IG51bGwsXG5cblx0YWRkKHRyYW5zaXRpb24pIHtcblx0XHR0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJvdW5kIHx8ICh0aGlzLmJvdW5kID0gdGhpcy5uZXh0LmJpbmQodGhpcykpKTtcblx0XHR9XG5cdH0sXG5cblx0YWRkUnVsZShydWxlLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5hY3RpdmVSdWxlc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0XHR0aGlzLnN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCB0aGlzLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0XHR9XG5cdH0sXG5cblx0bmV4dCgpIHtcblx0XHR0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdGNvbnN0IG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHRsZXQgaSA9IHRoaXMudHJhbnNpdGlvbnMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0Y29uc3QgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnNbaV07XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnByb2dyYW0gJiYgbm93ID49IHRyYW5zaXRpb24ucHJvZ3JhbS5lbmQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5kb25lKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnBlbmRpbmcgJiYgbm93ID49IHRyYW5zaXRpb24ucGVuZGluZy5zdGFydCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLnN0YXJ0KHRyYW5zaXRpb24ucGVuZGluZyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cmFuc2l0aW9uLnJ1bm5pbmcpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi51cGRhdGUobm93KTtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRyYW5zaXRpb24ucGVuZGluZykge1xuXHRcdFx0XHR0aGlzLnRyYW5zaXRpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5ydW5uaW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0eWxlc2hlZXQpIHtcblx0XHRcdGxldCBpID0gdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHRoaXMuc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuXHRcdFx0dGhpcy5hY3RpdmVSdWxlcyA9IHt9O1xuXHRcdH1cblx0fSxcblxuXHRkZWxldGVSdWxlKG5vZGUsIG5hbWUpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uXG5cdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIGFuaW0uaW5kZXhPZihuYW1lKSA9PT0gLTEpXG5cdFx0XHQuam9pbignLCAnKTtcblx0fSxcblxuXHR3YWl0KCkge1xuXHRcdGlmICghdHJhbnNpdGlvbk1hbmFnZXIucHJvbWlzZSkge1xuXHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIucHJvbWlzZSA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIucHJvbWlzZTtcblx0fVxufTtcblxuZnVuY3Rpb24gd3JhcEFuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG5cdGlmICghZnJvbSkgcmV0dXJuO1xuXG5cdGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0aWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pIHJldHVybjtcblxuXHRjb25zdCBpbmZvID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuXG5cdGNvbnN0IGR1cmF0aW9uID0gJ2R1cmF0aW9uJyBpbiBpbmZvID8gaW5mby5kdXJhdGlvbiA6IDMwMDtcblx0Y29uc3QgZGVsYXkgPSAnZGVsYXknIGluIGluZm8gPyBpbmZvLmRlbGF5IDogMDtcblx0Y29uc3QgZWFzZSA9IGluZm8uZWFzaW5nIHx8IGxpbmVhcjtcblx0Y29uc3Qgc3RhcnQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyBkZWxheTtcblx0Y29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcblxuXHRjb25zdCBwcm9ncmFtID0ge1xuXHRcdGE6IDAsXG5cdFx0dDogMCxcblx0XHRiOiAxLFxuXHRcdGRlbHRhOiAxLFxuXHRcdGR1cmF0aW9uLFxuXHRcdHN0YXJ0LFxuXHRcdGVuZFxuXHR9O1xuXG5cdGNvbnN0IGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cblx0Y29uc3QgYW5pbWF0aW9uID0ge1xuXHRcdHBlbmRpbmc6IGRlbGF5ID8gcHJvZ3JhbSA6IG51bGwsXG5cdFx0cHJvZ3JhbTogZGVsYXkgPyBudWxsIDogcHJvZ3JhbSxcblx0XHRydW5uaW5nOiB0cnVlLFxuXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoaW5mby5jc3MpIHtcblx0XHRcdFx0aWYgKGRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdGNvbnN0IHJ1bGUgPSBnZW5lcmF0ZVJ1bGUocHJvZ3JhbSwgZWFzZSwgaW5mby5jc3MpO1xuXHRcdFx0XHRwcm9ncmFtLm5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfWA7XG5cblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkUnVsZShydWxlLCBwcm9ncmFtLm5hbWUpO1xuXG5cdFx0XHRcdG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuXHRcdFx0XHRcdC5zcGxpdCgnLCAnKVxuXHRcdFx0XHRcdC5maWx0ZXIoYW5pbSA9PiBhbmltICYmIChwcm9ncmFtLmRlbHRhIDwgMCB8fCAhL19fc3ZlbHRlLy50ZXN0KGFuaW0pKSlcblx0XHRcdFx0XHQuY29uY2F0KGAke3Byb2dyYW0ubmFtZX0gJHtwcm9ncmFtLmR1cmF0aW9ufW1zIGxpbmVhciAxIGZvcndhcmRzYClcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdH1cblxuXHRcdFx0YW5pbWF0aW9uLnByb2dyYW0gPSBwcm9ncmFtO1xuXHRcdFx0YW5pbWF0aW9uLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cblx0XHR1cGRhdGU6IG5vdyA9PiB7XG5cdFx0XHRjb25zdCBwID0gbm93IC0gcHJvZ3JhbS5zdGFydDtcblx0XHRcdGNvbnN0IHQgPSBwcm9ncmFtLmEgKyBwcm9ncmFtLmRlbHRhICogZWFzZShwIC8gcHJvZ3JhbS5kdXJhdGlvbik7XG5cdFx0XHRpZiAoaW5mby50aWNrKSBpbmZvLnRpY2sodCwgMSAtIHQpO1xuXHRcdH0sXG5cblx0XHRkb25lKCkge1xuXHRcdFx0aWYgKGluZm8udGljaykgaW5mby50aWNrKDEsIDApO1xuXHRcdFx0YW5pbWF0aW9uLnN0b3AoKTtcblx0XHR9LFxuXG5cdFx0c3RvcCgpIHtcblx0XHRcdGlmIChpbmZvLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCBwcm9ncmFtLm5hbWUpO1xuXHRcdFx0YW5pbWF0aW9uLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKGFuaW1hdGlvbik7XG5cblx0aWYgKGluZm8udGljaykgaW5mby50aWNrKDAsIDEpO1xuXG5cdGlmIChkZWxheSkge1xuXHRcdGlmIChpbmZvLmNzcykgbm9kZS5zdHlsZS5jc3NUZXh0ICs9IGluZm8uY3NzKDAsIDEpO1xuXHR9IGVsc2Uge1xuXHRcdGFuaW1hdGlvbi5zdGFydCgpO1xuXHR9XG5cblx0cmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gZml4UG9zaXRpb24obm9kZSkge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cblx0aWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcblx0XHRjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0bm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Y29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuXG5cdFx0XHRub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG5cdHZhciB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcblxuXHRmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pIHJldHVybjtcblxuXHRcdGluZm8ucmVzb2x2ZWQgPSBrZXkgJiYgeyBba2V5XTogdmFsdWUgfTtcblxuXHRcdGNvbnN0IGNoaWxkX2N0eCA9IGFzc2lnbihhc3NpZ24oe30sIGluZm8uY3R4KSwgaW5mby5yZXNvbHZlZCk7XG5cdFx0Y29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShpbmZvLmNvbXBvbmVudCwgY2hpbGRfY3R4KTtcblxuXHRcdGlmIChpbmZvLmJsb2NrKSB7XG5cdFx0XHRpZiAoaW5mby5ibG9ja3MpIHtcblx0XHRcdFx0aW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcblx0XHRcdFx0XHRpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcblx0XHRcdFx0XHRcdGdyb3VwT3V0cm9zKCk7XG5cdFx0XHRcdFx0XHRibG9jay5vKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0YmxvY2suZCgxKTtcblx0XHRcdFx0XHRcdFx0aW5mby5ibG9ja3NbaV0gPSBudWxsO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluZm8uYmxvY2suZCgxKTtcblx0XHRcdH1cblxuXHRcdFx0YmxvY2suYygpO1xuXHRcdFx0YmxvY2tbYmxvY2suaSA/ICdpJyA6ICdtJ10oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG5cblx0XHRcdGluZm8uY29tcG9uZW50LnJvb3Quc2V0KHt9KTsgLy8gZmx1c2ggYW55IGhhbmRsZXJzIHRoYXQgd2VyZSBjcmVhdGVkXG5cdFx0fVxuXG5cdFx0aW5mby5ibG9jayA9IGJsb2NrO1xuXHRcdGlmIChpbmZvLmJsb2NrcykgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG5cdH1cblxuXHRpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG5cdFx0cHJvbWlzZS50aGVuKHZhbHVlID0+IHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcblx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG5cdFx0XHR1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcblx0XHRcdHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aW5mby5yZXNvbHZlZCA9IHsgW2luZm8udmFsdWVdOiBwcm9taXNlIH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZCgxKTtcblx0bG9va3VwW2Jsb2NrLmtleV0gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLm8oZnVuY3Rpb24oKSB7XG5cdFx0ZGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZml4QW5kT3V0cm9BbmREZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdG91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVLZXllZEVhY2gob2xkX2Jsb2NrcywgY29tcG9uZW50LCBjaGFuZ2VkLCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIGludHJvX21ldGhvZCwgbmV4dCwgZ2V0X2NvbnRleHQpIHtcblx0dmFyIG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcblx0dmFyIG4gPSBsaXN0Lmxlbmd0aDtcblxuXHR2YXIgaSA9IG87XG5cdHZhciBvbGRfaW5kZXhlcyA9IHt9O1xuXHR3aGlsZSAoaS0tKSBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuXG5cdHZhciBuZXdfYmxvY2tzID0gW107XG5cdHZhciBuZXdfbG9va3VwID0ge307XG5cdHZhciBkZWx0YXMgPSB7fTtcblxuXHR2YXIgaSA9IG47XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcblx0XHR2YXIga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuXHRcdHZhciBibG9jayA9IGxvb2t1cFtrZXldO1xuXG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhjb21wb25lbnQsIGtleSwgY2hpbGRfY3R4KTtcblx0XHRcdGJsb2NrLmMoKTtcblx0XHR9IGVsc2UgaWYgKGR5bmFtaWMpIHtcblx0XHRcdGJsb2NrLnAoY2hhbmdlZCwgY2hpbGRfY3R4KTtcblx0XHR9XG5cblx0XHRuZXdfYmxvY2tzW2ldID0gbmV3X2xvb2t1cFtrZXldID0gYmxvY2s7XG5cblx0XHRpZiAoa2V5IGluIG9sZF9pbmRleGVzKSBkZWx0YXNba2V5XSA9IE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKTtcblx0fVxuXG5cdHZhciB3aWxsX21vdmUgPSB7fTtcblx0dmFyIGRpZF9tb3ZlID0ge307XG5cblx0ZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG5cdFx0YmxvY2tbaW50cm9fbWV0aG9kXShub2RlLCBuZXh0KTtcblx0XHRsb29rdXBbYmxvY2sua2V5XSA9IGJsb2NrO1xuXHRcdG5leHQgPSBibG9jay5maXJzdDtcblx0XHRuLS07XG5cdH1cblxuXHR3aGlsZSAobyAmJiBuKSB7XG5cdFx0dmFyIG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdHZhciBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcblx0XHR2YXIgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG5cdFx0dmFyIG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXG5cdFx0aWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG5cdFx0XHQvLyBkbyBub3RoaW5nXG5cdFx0XHRuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuXHRcdFx0by0tO1xuXHRcdFx0bi0tO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCFuZXdfbG9va3VwW29sZF9rZXldKSB7XG5cdFx0XHQvLyByZW1vdmUgb2xkIGJsb2NrXG5cdFx0XHRkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0XHRcdG8tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbG9va3VwW25ld19rZXldIHx8IHdpbGxfbW92ZVtuZXdfa2V5XSkge1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoZGlkX21vdmVbb2xkX2tleV0pIHtcblx0XHRcdG8tLTtcblxuXHRcdH0gZWxzZSBpZiAoZGVsdGFzW25ld19rZXldID4gZGVsdGFzW29sZF9rZXldKSB7XG5cdFx0XHRkaWRfbW92ZVtuZXdfa2V5XSA9IHRydWU7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmVbb2xkX2tleV0gPSB0cnVlO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChvLS0pIHtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcblx0XHRpZiAoIW5ld19sb29rdXBbb2xkX2Jsb2NrLmtleV0pIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuXHR9XG5cblx0d2hpbGUgKG4pIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG5cblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmUoYmxvY2tzKSB7XG5cdGNvbnN0IHJlY3RzID0ge307XG5cdGxldCBpID0gYmxvY2tzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkgcmVjdHNbYmxvY2tzW2ldLmtleV0gPSBibG9ja3NbaV0ubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0cmV0dXJuIHJlY3RzO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKGJsb2NrcywgcmVjdHMsIGZuLCBwYXJhbXMpIHtcblx0bGV0IGkgPSBibG9ja3MubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0Y29uc3QgYmxvY2sgPSBibG9ja3NbaV07XG5cdFx0Y29uc3QgZnJvbSA9IHJlY3RzW2Jsb2NrLmtleV07XG5cblx0XHRpZiAoIWZyb20pIGNvbnRpbnVlO1xuXHRcdGNvbnN0IHRvID0gYmxvY2subm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKSBjb250aW51ZTtcblxuXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U3ByZWFkVXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuXHR2YXIgdXBkYXRlID0ge307XG5cblx0dmFyIHRvX251bGxfb3V0ID0ge307XG5cdHZhciBhY2NvdW50ZWRfZm9yID0ge307XG5cblx0dmFyIGkgPSBsZXZlbHMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG8gPSBsZXZlbHNbaV07XG5cdFx0dmFyIG4gPSB1cGRhdGVzW2ldO1xuXG5cdFx0aWYgKG4pIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBuKSB7XG5cdFx0XHRcdGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG5cdFx0XHRcdFx0dXBkYXRlW2tleV0gPSBuW2tleV07XG5cdFx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXZlbHNbaV0gPSBuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB0b19udWxsX291dCkge1xuXHRcdGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiB1cGRhdGU7XG59XG5cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuY29uc3QgaW52YWxpZEF0dHJpYnV0ZU5hbWVDaGFyYWN0ZXIgPSAvW1xccydcIj5cXC89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG5cbmZ1bmN0aW9uIHNwcmVhZChhcmdzKSB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcblx0bGV0IHN0ciA9ICcnO1xuXG5cdE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0aWYgKGludmFsaWRBdHRyaWJ1dGVOYW1lQ2hhcmFjdGVyLnRlc3QobmFtZSkpIHJldHVybjtcblxuXHRcdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkgc3RyICs9IFwiIFwiICsgbmFtZTtcblxuXHRcdGNvbnN0IGVzY2FwZWQgPSBTdHJpbmcodmFsdWUpXG5cdFx0XHQucmVwbGFjZSgvXCIvZywgJyYjMzQ7Jylcblx0XHRcdC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xuXG5cdFx0c3RyICs9IFwiIFwiICsgbmFtZSArIFwiPVwiICsgSlNPTi5zdHJpbmdpZnkoZXNjYXBlZCk7XG5cdH0pO1xuXG5cdHJldHVybiBzdHI7XG59XG5cbmNvbnN0IGVzY2FwZWQgPSB7XG5cdCdcIic6ICcmcXVvdDsnLFxuXHRcIidcIjogJyYjMzk7Jyxcblx0JyYnOiAnJmFtcDsnLFxuXHQnPCc6ICcmbHQ7Jyxcblx0Jz4nOiAnJmd0Oydcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG5cdHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuXG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBhc3NpZ24sIGZuKSB7XG5cdGxldCBzdHIgPSAnJztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHN0ciArPSBmbihhc3NpZ24oaXRlbXNbaV0sIGkpKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuXG5jb25zdCBtaXNzaW5nQ29tcG9uZW50ID0ge1xuXHRfcmVuZGVyOiAoKSA9PiAnJ1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTc3JDb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG5cdGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuX3JlbmRlcikge1xuXHRcdGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpIG5hbWUgKz0gJ3RoaXM9ey4uLn0nO1xuXHRcdHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG5cdGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApO1xuXHRjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXHRyZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGJsYW5rT2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gbm9vcDtcblxuXHR0aGlzLl9mcmFnbWVudC5kKGRldGFjaCAhPT0gZmFsc2UpO1xuXHR0aGlzLl9mcmFnbWVudCA9IG51bGw7XG5cdHRoaXMuX3N0YXRlID0ge307XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lEZXYoZGV0YWNoKSB7XG5cdGRlc3Ryb3kuY2FsbCh0aGlzLCBkZXRhY2gpO1xuXHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX2RpZmZlcnMoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzSW1tdXRhYmxlKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5cbmZ1bmN0aW9uIGZpcmUoZXZlbnROYW1lLCBkYXRhKSB7XG5cdHZhciBoYW5kbGVycyA9XG5cdFx0ZXZlbnROYW1lIGluIHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50TmFtZV0uc2xpY2UoKTtcblx0aWYgKCFoYW5kbGVycykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgaGFuZGxlciA9IGhhbmRsZXJzW2ldO1xuXG5cdFx0aWYgKCFoYW5kbGVyLl9fY2FsbGluZykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlci5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0XHRoYW5kbGVyLmNhbGwodGhpcywgZGF0YSk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRoYW5kbGVyLl9fY2FsbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBmbHVzaChjb21wb25lbnQpIHtcblx0Y29tcG9uZW50Ll9sb2NrID0gdHJ1ZTtcblx0Y2FsbEFsbChjb21wb25lbnQuX2JlZm9yZWNyZWF0ZSk7XG5cdGNhbGxBbGwoY29tcG9uZW50Ll9vbmNyZWF0ZSk7XG5cdGNhbGxBbGwoY29tcG9uZW50Ll9hZnRlcmNyZWF0ZSk7XG5cdGNvbXBvbmVudC5fbG9jayA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXQoKSB7XG5cdHJldHVybiB0aGlzLl9zdGF0ZTtcbn1cblxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29tcG9uZW50Ll9oYW5kbGVycyA9IGJsYW5rT2JqZWN0KCk7XG5cdGNvbXBvbmVudC5fc2xvdHMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXHRjb21wb25lbnQuX3N0YWdlZCA9IHt9O1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBvcHRpb25zLnN0b3JlIHx8IGNvbXBvbmVudC5yb290LnN0b3JlO1xuXG5cdGlmICghb3B0aW9ucy5yb290KSB7XG5cdFx0Y29tcG9uZW50Ll9iZWZvcmVjcmVhdGUgPSBbXTtcblx0XHRjb21wb25lbnQuX29uY3JlYXRlID0gW107XG5cdFx0Y29tcG9uZW50Ll9hZnRlcmNyZWF0ZSA9IFtdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHR2YXIgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdIHx8ICh0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdID0gW10pO1xuXHRoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cdFx0XHRpZiAofmluZGV4KSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gc2V0KG5ld1N0YXRlKSB7XG5cdHRoaXMuX3NldChhc3NpZ24oe30sIG5ld1N0YXRlKSk7XG5cdGlmICh0aGlzLnJvb3QuX2xvY2spIHJldHVybjtcblx0Zmx1c2godGhpcy5yb290KTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRuZXdTdGF0ZSA9IGFzc2lnbih0aGlzLl9zdGFnZWQsIG5ld1N0YXRlKTtcblx0dGhpcy5fc3RhZ2VkID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG5ld1N0YXRlKSB7XG5cdFx0aWYgKHRoaXMuX2RpZmZlcnMobmV3U3RhdGVba2V5XSwgb2xkU3RhdGVba2V5XSkpIGNoYW5nZWRba2V5XSA9IGRpcnR5ID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWRpcnR5KSByZXR1cm47XG5cblx0dGhpcy5fc3RhdGUgPSBhc3NpZ24oYXNzaWduKHt9LCBvbGRTdGF0ZSksIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdHRoaXMuZmlyZShcInN0YXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0XHR0aGlzLl9mcmFnbWVudC5wKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0XHR0aGlzLmZpcmUoXCJ1cGRhdGVcIiwgeyBjaGFuZ2VkOiBjaGFuZ2VkLCBjdXJyZW50OiB0aGlzLl9zdGF0ZSwgcHJldmlvdXM6IG9sZFN0YXRlIH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9zdGFnZShuZXdTdGF0ZSkge1xuXHRhc3NpZ24odGhpcy5fc3RhZ2VkLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldERldihuZXdTdGF0ZSkge1xuXHRpZiAodHlwZW9mIG5ld1N0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdHRoaXMuX2RlYnVnTmFtZSArICcuc2V0IHdhcyBjYWxsZWQgd2l0aG91dCBhbiBvYmplY3Qgb2YgZGF0YSBrZXktdmFsdWVzIHRvIHVwZGF0ZS4nXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuX2NoZWNrUmVhZE9ubHkobmV3U3RhdGUpO1xuXHRzZXQuY2FsbCh0aGlzLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGwoZm5zKSB7XG5cdHdoaWxlIChmbnMgJiYgZm5zLmxlbmd0aCkgZm5zLnNoaWZ0KCkoKTtcbn1cblxuZnVuY3Rpb24gX21vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdHRoaXMuX2ZyYWdtZW50W3RoaXMuX2ZyYWdtZW50LmkgPyAnaScgOiAnbSddKHRhcmdldCwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG52YXIgUEVORElORyA9IHt9O1xudmFyIFNVQ0NFU1MgPSB7fTtcbnZhciBGQUlMVVJFID0ge307XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21TdG9yZSgpIHtcblx0dGhpcy5zdG9yZS5fcmVtb3ZlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3ksXG5cdGdldCxcblx0ZmlyZSxcblx0b24sXG5cdHNldCxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X3N0YWdlLFxuXHRfbW91bnQsXG5cdF9kaWZmZXJzXG59O1xuXG52YXIgcHJvdG9EZXYgPSB7XG5cdGRlc3Ryb3k6IGRlc3Ryb3lEZXYsXG5cdGdldCxcblx0ZmlyZSxcblx0b24sXG5cdHNldDogc2V0RGV2LFxuXHRfcmVjb21wdXRlOiBub29wLFxuXHRfc2V0LFxuXHRfc3RhZ2UsXG5cdF9tb3VudCxcblx0X2RpZmZlcnNcbn07XG5cbmV4cG9ydCB7IGJsYW5rT2JqZWN0LCBkZXN0cm95LCBkZXN0cm95RGV2LCBfZGlmZmVycywgX2RpZmZlcnNJbW11dGFibGUsIGZpcmUsIGZsdXNoLCBnZXQsIGluaXQsIG9uLCBzZXQsIF9zZXQsIF9zdGFnZSwgc2V0RGV2LCBjYWxsQWxsLCBfbW91bnQsIFBFTkRJTkcsIFNVQ0NFU1MsIEZBSUxVUkUsIHJlbW92ZUZyb21TdG9yZSwgcHJvdG8sIHByb3RvRGV2LCB3cmFwQW5pbWF0aW9uLCBmaXhQb3NpdGlvbiwgaGFuZGxlUHJvbWlzZSwgYXBwZW5kLCBpbnNlcnQsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHNldEN1c3RvbUVsZW1lbnREYXRhLCByZW1vdmVBdHRyaWJ1dGUsIHNldFhsaW5rQXR0cmlidXRlLCBnZXRCaW5kaW5nR3JvdXBWYWx1ZSwgdG9OdW1iZXIsIHRpbWVSYW5nZXNUb0FycmF5LCBjaGlsZHJlbiwgY2xhaW1FbGVtZW50LCBjbGFpbVRleHQsIHNldERhdGEsIHNldElucHV0VHlwZSwgc2V0U3R5bGUsIHNlbGVjdE9wdGlvbiwgc2VsZWN0T3B0aW9ucywgc2VsZWN0VmFsdWUsIHNlbGVjdE11bHRpcGxlVmFsdWUsIGFkZFJlc2l6ZUxpc3RlbmVyLCB0b2dnbGVDbGFzcywgZGVzdHJveUJsb2NrLCBvdXRyb0FuZERlc3Ryb3lCbG9jaywgZml4QW5kT3V0cm9BbmREZXN0cm95QmxvY2ssIHVwZGF0ZUtleWVkRWFjaCwgbWVhc3VyZSwgYW5pbWF0ZSwgZ2V0U3ByZWFkVXBkYXRlLCBpbnZhbGlkQXR0cmlidXRlTmFtZUNoYXJhY3Rlciwgc3ByZWFkLCBlc2NhcGVkLCBlc2NhcGUsIGVhY2gsIG1pc3NpbmdDb21wb25lbnQsIHZhbGlkYXRlU3NyQ29tcG9uZW50LCBkZWJ1ZywgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCBvdXRyb3MsIGdyb3VwT3V0cm9zLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduLCBhc3NpZ25UcnVlLCBpc1Byb21pc2UsIGNhbGxBZnRlciwgYWRkTG9jLCBleGNsdWRlLCBydW4gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFZpc3VhbFRPQyAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2RpYWdyYW1zL1Zpc3VhbFRPQy5odG1sJztcblxuaW1wb3J0IENvbGFiTGluayAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvQ29sYWJMaW5rLmh0bWwnO1xuXG4vLyBlYWdlcmx5IGluaXRpYWxpemUgdnRvYyAgYXMgaXQncyBhYm92ZSB0aGUgZm9sZFxuY29uc3QgdG9jTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Z0b2MnKTtcbmNvbnN0IHZpc3VhbFRPQyA9IG5ldyBWaXN1YWxUT0Moe3RhcmdldDogdG9jTmF2fSk7XG5cbi8vIGxhemlseSBpbml0aWFsaXplIGFueSBkaWFncmFtIGJlbG93IHRoZSBmb2xkLiBFLkc6XG4vLyB7XG4vLyAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTdHlsZVRyYW5zZmVyRXhhbXBsZXMnKTtcbi8vICAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCBzdHlsZVRyYW5zZmVyRXhhbXBsZXMgPSBuZXcgU3R5bGVUcmFuc2ZlckV4YW1wbGVzKHt0YXJnZXQ6IGZpZ3VyZX0pO1xuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gYWRkQ29sYWJMaW5rKCkge1xuICBjb25zdCBjbGFzc05hbWUgPSBcImFkZC1jb2xhYi1saW5rXCI7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdGFyZ2V0OiBlbGVtZW50LCBcbiAgICAgIGRhdGE6IHsgXG4gICAgICAgIHVybDogXCJodHRwczovL2NvbGFiLnJlc2VhcmNoLmdvb2dsZS5jb20vZ2l0aHViL3JlaWluYWthbm8vYWR2ZXJzYXJpYWxseS1yb2J1c3QtbmV1cmFsLXN0eWxlLXRyYW5zZmVyL2Jsb2IvbWFzdGVyL1JvYnVzdF9OZXVyYWxfU3R5bGVfVHJhbnNmZXIuaXB5bmJcIiBcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNvbGFiTGluayA9IG5ldyBDb2xhYkxpbmsoZGF0YSk7XG4gIH1cbn1cblxuYWRkQ29sYWJMaW5rKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCI8bmF2IGNsYXNzPVwidmlzdWFsLXRvY1wiPlxuICB7I2VhY2ggc2VjdGlvbnMgYXMgc2VjdGlvbiwgaX1cbiAgPGRpdiBjbGFzcz1cInZpc3VhbC10b2MtaXRlbVwiPlxuICAgIDxhIGhyZWY9XCJ7c2VjdGlvbi5hbmNob3J9XCIgY2xhc3M9XCJ2aXN1YWwtdG9jLXRvcFwiPlxuICAgICAgPFNwcml0ZSB1cmw9J2ltYWdlcy92dG9jLmpwZycgd2lkdGg9MzIwIGNvbHVtbnM9MyBpbmRleD17c2VjdGlvbi5zcHJpdGVfaW5kZXh9Lz5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsLXRvYy1oZWFkaW5nXCI+e3NlY3Rpb24udGl0bGV9PC9zcGFuPlxuICAgICAgeyNpZiBzZWN0aW9uLnN1YnRpdGxlfVxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbC10b2Mtc3ViaGVhZGluZ1wiPntzZWN0aW9uLnN1YnRpdGxlfTwvc3Bhbj5cbiAgICAgIHsvaWZ9XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJ7c2VjdGlvbi5jb2xhYl91cmx9XCIgY2xhc3M9XCJ2aXN1YWwtdG9jLWNvbGFiXCI+XG4gICAgICB0cnkgaW4gYSA8aW1nIGFsdD1cIkNvbGFiXCIgc3JjPVwiaW1hZ2VzL2NvbGFiLnN2Z1wiPiBub3RlYm9va1xuICAgIDwvYT5cbiAgPC9kaXY+XG4gIHsvZWFjaH1cbjwvbmF2PlxuXG5cbjxzdHlsZT5cbi52aXN1YWwtdG9jIHtcbiAgY291bnRlci1yZXNldDogdG9jLWhlYWRpbmc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC52aXN1YWwtdG9jIHtcbiAgICBncmlkLWdhcDogOHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTgwcHgpIHtcbiAgLnZpc3VhbC10b2Mge1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG59XG4udmlzdWFsLXRvYy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4udmlzdWFsLXRvYy10b3Age1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKiBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMDUpOyAqL1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4udmlzdWFsLXRvYy10b3A6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzLCB0cmFuc2Zvcm0gMC4xNXM7XG59XG4udmlzdWFsLXRvYy1oZWFkaW5nLFxuLnZpc3VhbC10b2Mtc3ViaGVhZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIGZvbnQtc2l6ZTogODUlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW0gMWVtIDFlbTtcbn1cbi52aXN1YWwtdG9jLWhlYWRpbmcge1xuICBjb3VudGVyLWluY3JlbWVudDogdG9jLWhlYWRpbmc7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnZpc3VhbC10b2MtaGVhZGluZzo6YmVmb3Jle1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJTZWN0aW9uIFwiIGNvdW50ZXIodG9jLWhlYWRpbmcpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4udmlzdWFsLXRvYy1zdWJoZWFkaW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuLnZpc3VhbC10b2MtY29sYWIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogZGFzaGVkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogMS4yZW07XG4gIHBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbn1cbi52aXN1YWwtdG9jLWNvbGFiID4gaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgLyogZmlsdGVyOiBncmF5c2NhbGUoKTsgKi9cbn1cbi52aXN1YWwtdG9jLWl0ZW06aG92ZXIgLnZpc3VhbC10b2MtY29sYWIgPiBpbWcge1xuICBmaWx0ZXI6IHVuc2V0O1xufVxuXG4vKiAudmlzdWFsLXRvYy10b3A6aG92ZXIsICAqL1xuLnZpc3VhbC10b2MtY29sYWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICBjb2xvcjogIzg4ODtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSA6Z2xvYmFsKGNhbnZhcykge1xuICB3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJsdWNpZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZVwiLCBjb2xhYl91cmw6IFwiXCIsIGFuY2hvcjogXCIjZXhwZXJpbWVudC1hbGlnbmVkXCIsIHNwcml0ZV9pbmRleDogMCAgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZS1WR0dcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtc3R5bGV0cmFuc2ZlclwiLCBzcHJpdGVfaW5kZXg6IDEgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZVwiLCBjb2xhYl91cmw6IFwiXCIsIGFuY2hvcjogXCIjZXhwZXJpbWVudC14eTJyZ2JcIiwgc3ByaXRlX2luZGV4OiAzIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRXhhbXBsZSBTZWN0aW9uIHdpdGggaW1hZ2VcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtZmVhdHVyZXZpei1yZ2JhXCIsIHNwcml0ZV9pbmRleDogMiB9LFxuICAgICAgICB7IHRpdGxlOiBcIkV4YW1wbGUgU2VjdGlvbiB3aXRoIGltYWdlXCIsIGNvbGFiX3VybDogXCJcIiwgYW5jaG9yOiBcIiNleHBlcmltZW50LWZlYXR1cmV2aXotM2RcIiwgc3ByaXRlX2luZGV4OiA0IH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRXhhbXBsZSBTZWN0aW9uIHdpdGggaW1hZ2VcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtc3R5bGV0cmFuc2Zlci0zZFwiLCBzcHJpdGVfaW5kZXg6IDUgfSxcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gIGhlbHBlcnM6IHsgcmFuZ2UgfSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvVmlzdWFsVE9DLmh0bWwiLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2Uobil7XG4gIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG5cdHZhciBrLFxuXHRcdHNvdXJjZSxcblx0XHRpID0gMSxcblx0XHRsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0c291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoayBpbiBzb3VyY2UpIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUobm9kZSwgdGFyZ2V0LCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGJsYW5rT2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gdGhpcy5nZXQgPSBub29wO1xuXG5cdGlmIChkZXRhY2ggIT09IGZhbHNlKSB0aGlzLl9mcmFnbWVudC51KCk7XG5cdHRoaXMuX2ZyYWdtZW50LmQoKTtcblx0dGhpcy5fZnJhZ21lbnQgPSB0aGlzLl9zdGF0ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyhjb21wb25lbnQsIGdyb3VwLCBjaGFuZ2VkLCBuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcblx0Zm9yICh2YXIga2V5IGluIGdyb3VwKSB7XG5cdFx0aWYgKCFjaGFuZ2VkW2tleV0pIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVba2V5XTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVtrZXldO1xuXG5cdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwW2tleV07XG5cdFx0aWYgKCFjYWxsYmFja3MpIGNvbnRpbnVlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdGlmIChjYWxsYmFjay5fX2NhbGxpbmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0Y2FsbGJhY2suY2FsbChjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUsIGRhdGEpIHtcblx0dmFyIGhhbmRsZXJzID1cblx0XHRldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXS5zbGljZSgpO1xuXHRpZiAoIWhhbmRsZXJzKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZGF0YSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVba2V5XSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb21wb25lbnQuX29ic2VydmVycyA9IHsgcHJlOiBibGFua09iamVjdCgpLCBwb3N0OiBibGFua09iamVjdCgpIH07XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBjb21wb25lbnQucm9vdC5zdG9yZSB8fCBvcHRpb25zLnN0b3JlO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGdyb3VwID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyXG5cdFx0PyB0aGlzLl9vYnNlcnZlcnMucG9zdFxuXHRcdDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoZ3JvdXBba2V5XSB8fCAoZ3JvdXBba2V5XSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG5cblx0aWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UpIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5fc3RhdGVba2V5XSk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFtrZXldLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKH5pbmRleCkgZ3JvdXBba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMucm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAodGhpcy5fZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbih7fSwgb2xkU3RhdGUsIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wcmUsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnBvc3QsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2FsbEFsbChmbnMpIHtcblx0d2hpbGUgKGZucyAmJiBmbnMubGVuZ3RoKSBmbnMuc2hpZnQoKSgpO1xufVxuXG5mdW5jdGlvbiBfbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0dGhpcy5fZnJhZ21lbnRbdGhpcy5fZnJhZ21lbnQuaSA/ICdpJyA6ICdtJ10odGFyZ2V0LCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIF91bm1vdW50KCkge1xuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHRoaXMuX2ZyYWdtZW50LnUoKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0dGVhcmRvd246IGRlc3Ryb3ksXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXQsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnQsXG5cdF9kaWZmZXJzOiBfZGlmZmVyc1xufTtcblxuLyogc3JjL1Nwcml0ZS5odG1sIGdlbmVyYXRlZCBieSBTdmVsdGUgdjEuNTcuMSAqL1xuXG4vLyBXZSBuZWVkIHRvIGNyZWF0ZSBhIGdsb2JhbCBjYWNoZSBvZiBsb2FkZWQgaW1hZ2VzIGluZGVwZW5kZW50IG9mIGFueSBzcHJpdGUgaW5zdGFuY2UuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gcmVhbEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBoZWlnaHQgPyBoZWlnaHQgOiB3aWR0aDtcbn1cblxuZnVuY3Rpb24gZGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICB1cmw6ICcnLFxuICAgIGluZGV4OiAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGNvbHVtbnM6IEluZmluaXR5LFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBpbWc6IG51bGxcbiAgfVxufVxudmFyIG1ldGhvZHMgPSB7XG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMucmVmcy5jYW52YXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnJlZnMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb25zdCB7IGltZywgaW5kZXgsIHdpZHRoLCByZWFsSGVpZ2h0LCBjb2x1bW5zLCBsb2FkZWQgfSA9IHRoaXMuZ2V0KCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICBjb25zdCBzeCA9IEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXhbMF0gKiB3aWR0aCA6IChpbmRleCAlIGNvbHVtbnMpICogd2lkdGg7XG4gICAgICBjb25zdCBzeSA9IEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXhbMV0gKiByZWFsSGVpZ2h0IDogTWF0aC5mbG9vcihpbmRleCAvIGNvbHVtbnMpICogcmVhbEhlaWdodDtcbiAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBzeCwgc3ksIHdpZHRoLCByZWFsSGVpZ2h0LCAwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjY2NjJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZWVlXCI7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCcuLi4nLCB3aWR0aCAvIDIsIHJlYWxIZWlnaHQgLyAyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9uY3JlYXRlKCkge1xuICBjb25zdCBkb25lID0gKGUpID0+IHtcbiAgICB0aGlzLnNldCh7bG9hZGVkOiB0cnVlfSk7XG4gICAgY29uc3Qge2ltZ30gPSB0aGlzLmdldCgpO1xuICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWQnLCBkb25lKTtcbiAgfTtcbiAgLy8gVE9ETyB0aGlzIHJlZHJhd3Mgb25lIHRvbyBtYW55IHRpbWVzIG9uIHdoZW4geW91IGNoYW5nZSB0aGUgaW5kZXggYW5kIHVybCBhdCB0aGUgc2FtZSB0aW1lLiBcbiAgLy8gY291bGQgYWRkIHRoZSBzdmVsdGUgZXh0cmFzIGRlcGVuZGVuY3kgZm9yICdvYnNlcnZlTWFueScsIGJ1dCBub3Qgc3VyZSBpdCdzIHdvcnRoIGl0LlxuICB0aGlzLm9ic2VydmUoJ2luZGV4JywgaW5kZXggPT4ge1xuICAgIHRoaXMuZHJhdygpO1xuICB9LCB7IGluaXQ6IGZhbHNlIH0pO1xuICB0aGlzLm9ic2VydmUoJ2ltZycsIGluZGV4ID0+IHtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfSwgeyBpbml0OiBmYWxzZSB9KTtcbiAgdGhpcy5vYnNlcnZlKCdsb2FkZWQnLCBsb2FkZWQgPT4ge1xuICAgIHRoaXMuZHJhdygpO1xuICB9LCB7IGluaXQ6IGZhbHNlIH0pO1xuICB0aGlzLm9ic2VydmUoJ3VybCcsIHVybCA9PiB7XG4gICAgLy8gQ2xlYXIgYW55IHBlbmRpbmcgZXZlbnRzIGZvciBvbGQgdXJscy5cbiAgICBjb25zdCBjdXJyZW50SW1nID0gdGhpcy5nZXQoJ2ltZycpO1xuICAgIGlmIChjdXJyZW50SW1nKSB7Y3VycmVudEltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSk7IH1cbiAgICAvLyBDaGVjayBpZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB1cmwgaW4gdGhlIGdsb2JhbCBjYWNoZVxuICAgIGlmIChjYWNoZS5oYXModXJsKSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHVybCk7XG4gICAgICAvLyBJZiB3ZSd2ZSBzZWVuIGl0LCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlJ3JlIGN1cnJlbnRseSBsb2FkaW5nIGl0LlxuICAgICAgaWYgKGNhY2hlZC5sb2FkZWQpIHtcbiAgICAgICAgLy8gSWYgaXQncyBsb2FkZWQsIGp1c3Qgc3RhcnQgdXNpbmcgaXQhXG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgaW1nOiBjYWNoZWQuaW1nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgaXQncyBub3QgbG9hZGVkLCB3ZSBuZWVkIHRvIHdhaXQgdW50aWwgdGhlIG90aGVyIHJlcXVlc3QgaXMgZG9uZSBiZWZvcmUgd2Ugc3RhcnQgZHJhd2luZy5cbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgaW1nOiBjYWNoZWQuaW1nXG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZWQuaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBzZWVuIHRoZSB1cmwgeWV0LCB3ZSBuZWVkIHRvIGxvYWQgdGhlIGltYWdlLlxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLnNldCh7IFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBpbWc6IGltZ1xuICAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IHtpbWd9O1xuICAgICAgLy8gV2UgbmVlZCB0aGlzIGV2ZW50IHRvIHBlcnNpc3QsIHNvIHRoYXQgd2Ugc3RpbGwga25vdyB3aGVuIGFuIGFiYW5kb25lZCBpbWFnZSBpcyBkb25lIGxvYWRpbmcuXG4gICAgICBjb25zdCBmaW5pc2hlZCA9IChlKSA9PiB7XG4gICAgICAgIGRhdGEubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmaW5pc2hlZCk7XG4gICAgICB9O1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmaW5pc2hlZCk7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUpO1xuICAgICAgY2FjaGUuc2V0KHVybCwgZGF0YSk7XG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfbWFpbl9mcmFnbWVudChjb21wb25lbnQsIHN0YXRlKSB7XG5cdHZhciBjYW52YXM7XG5cblx0cmV0dXJuIHtcblx0XHRjOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdFx0XHRjYW52YXMgPSBjcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5oKCk7XG5cdFx0fSxcblxuXHRcdGg6IGZ1bmN0aW9uIGh5ZHJhdGUoKSB7XG5cdFx0XHRjYW52YXMud2lkdGggPSBzdGF0ZS53aWR0aDtcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5yZWFsSGVpZ2h0O1xuXHRcdH0sXG5cblx0XHRtOiBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHRcdFx0aW5zZXJ0Tm9kZShjYW52YXMsIHRhcmdldCwgYW5jaG9yKTtcblx0XHRcdGNvbXBvbmVudC5yZWZzLmNhbnZhcyA9IGNhbnZhcztcblx0XHR9LFxuXG5cdFx0cDogZnVuY3Rpb24gdXBkYXRlKGNoYW5nZWQsIHN0YXRlKSB7XG5cdFx0XHRpZiAoY2hhbmdlZC53aWR0aCkge1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSBzdGF0ZS53aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoYW5nZWQucmVhbEhlaWdodCkge1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gc3RhdGUucmVhbEhlaWdodDtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dTogZnVuY3Rpb24gdW5tb3VudCgpIHtcblx0XHRcdGRldGFjaE5vZGUoY2FudmFzKTtcblx0XHR9LFxuXG5cdFx0ZDogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcblx0XHRcdGlmIChjb21wb25lbnQucmVmcy5jYW52YXMgPT09IGNhbnZhcykgY29tcG9uZW50LnJlZnMuY2FudmFzID0gbnVsbDtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNwcml0ZShvcHRpb25zKSB7XG5cdGluaXQodGhpcywgb3B0aW9ucyk7XG5cdHRoaXMucmVmcyA9IHt9O1xuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbihkYXRhKCksIG9wdGlvbnMuZGF0YSk7XG5cdHRoaXMuX3JlY29tcHV0ZSh7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSwgdGhpcy5fc3RhdGUpO1xuXG5cdHZhciBfb25jcmVhdGUgPSBvbmNyZWF0ZS5iaW5kKHRoaXMpO1xuXG5cdGlmICghb3B0aW9ucy5yb290KSB7XG5cdFx0dGhpcy5fb25jcmVhdGUgPSBbXTtcblx0fVxuXG5cdHRoaXMuX2ZyYWdtZW50ID0gY3JlYXRlX21haW5fZnJhZ21lbnQodGhpcywgdGhpcy5fc3RhdGUpO1xuXG5cdHRoaXMucm9vdC5fb25jcmVhdGUucHVzaChfb25jcmVhdGUpO1xuXG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdHRoaXMuX2ZyYWdtZW50LmMoKTtcblx0XHR0aGlzLl9tb3VudChvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuXG5cdFx0Y2FsbEFsbCh0aGlzLl9vbmNyZWF0ZSk7XG5cdH1cbn1cblxuYXNzaWduKFNwcml0ZS5wcm90b3R5cGUsIG1ldGhvZHMsIHByb3RvKTtcblxuU3ByaXRlLnByb3RvdHlwZS5fcmVjb21wdXRlID0gZnVuY3Rpb24gX3JlY29tcHV0ZShjaGFuZ2VkLCBzdGF0ZSkge1xuXHRpZiAoY2hhbmdlZC53aWR0aCB8fCBjaGFuZ2VkLmhlaWdodCkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKHN0YXRlLnJlYWxIZWlnaHQsIChzdGF0ZS5yZWFsSGVpZ2h0ID0gcmVhbEhlaWdodChzdGF0ZS53aWR0aCwgc3RhdGUuaGVpZ2h0KSkpKSBjaGFuZ2VkLnJlYWxIZWlnaHQgPSB0cnVlO1xuXHR9XG59O1xuXG52YXIgRU9MID0ge30sXG4gICAgRU9GID0ge30sXG4gICAgUVVPVEUgPSAzNCxcbiAgICBORVdMSU5FID0gMTAsXG4gICAgUkVUVVJOID0gMTM7XG5cbmZ1bmN0aW9uIG9iamVjdENvbnZlcnRlcihjb2x1bW5zKSB7XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXCJkXCIsIFwicmV0dXJuIHtcIiArIGNvbHVtbnMubWFwKGZ1bmN0aW9uKG5hbWUsIGkpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobmFtZSkgKyBcIjogZFtcIiArIGkgKyBcIl1cIjtcbiAgfSkuam9pbihcIixcIikgKyBcIn1cIik7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbUNvbnZlcnRlcihjb2x1bW5zLCBmKSB7XG4gIHZhciBvYmplY3QgPSBvYmplY3RDb252ZXJ0ZXIoY29sdW1ucyk7XG4gIHJldHVybiBmdW5jdGlvbihyb3csIGkpIHtcbiAgICByZXR1cm4gZihvYmplY3Qocm93KSwgaSwgY29sdW1ucyk7XG4gIH07XG59XG5cbi8vIENvbXB1dGUgdW5pcXVlIGNvbHVtbnMgaW4gb3JkZXIgb2YgZGlzY292ZXJ5LlxuZnVuY3Rpb24gaW5mZXJDb2x1bW5zKHJvd3MpIHtcbiAgdmFyIGNvbHVtblNldCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBjb2x1bW5zID0gW107XG5cbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIGZvciAodmFyIGNvbHVtbiBpbiByb3cpIHtcbiAgICAgIGlmICghKGNvbHVtbiBpbiBjb2x1bW5TZXQpKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5TZXRbY29sdW1uXSA9IGNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29sdW1ucztcbn1cblxuZnVuY3Rpb24gZHN2KGRlbGltaXRlcikge1xuICB2YXIgcmVGb3JtYXQgPSBuZXcgUmVnRXhwKFwiW1xcXCJcIiArIGRlbGltaXRlciArIFwiXFxuXFxyXVwiKSxcbiAgICAgIERFTElNSVRFUiA9IGRlbGltaXRlci5jaGFyQ29kZUF0KDApO1xuXG4gIGZ1bmN0aW9uIHBhcnNlKHRleHQsIGYpIHtcbiAgICB2YXIgY29udmVydCwgY29sdW1ucywgcm93cyA9IHBhcnNlUm93cyh0ZXh0LCBmdW5jdGlvbihyb3csIGkpIHtcbiAgICAgIGlmIChjb252ZXJ0KSByZXR1cm4gY29udmVydChyb3csIGkgLSAxKTtcbiAgICAgIGNvbHVtbnMgPSByb3csIGNvbnZlcnQgPSBmID8gY3VzdG9tQ29udmVydGVyKHJvdywgZikgOiBvYmplY3RDb252ZXJ0ZXIocm93KTtcbiAgICB9KTtcbiAgICByb3dzLmNvbHVtbnMgPSBjb2x1bW5zIHx8IFtdO1xuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VSb3dzKHRleHQsIGYpIHtcbiAgICB2YXIgcm93cyA9IFtdLCAvLyBvdXRwdXQgcm93c1xuICAgICAgICBOID0gdGV4dC5sZW5ndGgsXG4gICAgICAgIEkgPSAwLCAvLyBjdXJyZW50IGNoYXJhY3RlciBpbmRleFxuICAgICAgICBuID0gMCwgLy8gY3VycmVudCBsaW5lIG51bWJlclxuICAgICAgICB0LCAvLyBjdXJyZW50IHRva2VuXG4gICAgICAgIGVvZiA9IE4gPD0gMCwgLy8gY3VycmVudCB0b2tlbiBmb2xsb3dlZCBieSBFT0Y/XG4gICAgICAgIGVvbCA9IGZhbHNlOyAvLyBjdXJyZW50IHRva2VuIGZvbGxvd2VkIGJ5IEVPTD9cblxuICAgIC8vIFN0cmlwIHRoZSB0cmFpbGluZyBuZXdsaW5lLlxuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoTiAtIDEpID09PSBORVdMSU5FKSAtLU47XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChOIC0gMSkgPT09IFJFVFVSTikgLS1OO1xuXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XG4gICAgICBpZiAoZW9mKSByZXR1cm4gRU9GO1xuICAgICAgaWYgKGVvbCkgcmV0dXJuIGVvbCA9IGZhbHNlLCBFT0w7XG5cbiAgICAgIC8vIFVuZXNjYXBlIHF1b3Rlcy5cbiAgICAgIHZhciBpLCBqID0gSSwgYztcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaikgPT09IFFVT1RFKSB7XG4gICAgICAgIHdoaWxlIChJKysgPCBOICYmIHRleHQuY2hhckNvZGVBdChJKSAhPT0gUVVPVEUgfHwgdGV4dC5jaGFyQ29kZUF0KCsrSSkgPT09IFFVT1RFKTtcbiAgICAgICAgaWYgKChpID0gSSkgPj0gTikgZW9mID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoKGMgPSB0ZXh0LmNoYXJDb2RlQXQoSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiArIDEsIGkgLSAxKS5yZXBsYWNlKC9cIlwiL2csIFwiXFxcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGRlbGltaXRlciBvciBuZXdsaW5lLlxuICAgICAgd2hpbGUgKEkgPCBOKSB7XG4gICAgICAgIGlmICgoYyA9IHRleHQuY2hhckNvZGVBdChpID0gSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgZWxzZSBpZiAoYyAhPT0gREVMSU1JVEVSKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiwgaSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBsYXN0IHRva2VuIGJlZm9yZSBFT0YuXG4gICAgICByZXR1cm4gZW9mID0gdHJ1ZSwgdGV4dC5zbGljZShqLCBOKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKHQgPSB0b2tlbigpKSAhPT0gRU9GKSB7XG4gICAgICB2YXIgcm93ID0gW107XG4gICAgICB3aGlsZSAodCAhPT0gRU9MICYmIHQgIT09IEVPRikgcm93LnB1c2godCksIHQgPSB0b2tlbigpO1xuICAgICAgaWYgKGYgJiYgKHJvdyA9IGYocm93LCBuKyspKSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHJvd3MsIGNvbHVtbnMpIHtcbiAgICBpZiAoY29sdW1ucyA9PSBudWxsKSBjb2x1bW5zID0gaW5mZXJDb2x1bW5zKHJvd3MpO1xuICAgIHJldHVybiBbY29sdW1ucy5tYXAoZm9ybWF0VmFsdWUpLmpvaW4oZGVsaW1pdGVyKV0uY29uY2F0KHJvd3MubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gZm9ybWF0VmFsdWUocm93W2NvbHVtbl0pO1xuICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgIH0pKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Um93cyhyb3dzKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZvcm1hdFJvdykuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFJvdyhyb3cpIHtcbiAgICByZXR1cm4gcm93Lm1hcChmb3JtYXRWYWx1ZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VmFsdWUodGV4dCkge1xuICAgIHJldHVybiB0ZXh0ID09IG51bGwgPyBcIlwiXG4gICAgICAgIDogcmVGb3JtYXQudGVzdCh0ZXh0ICs9IFwiXCIpID8gXCJcXFwiXCIgKyB0ZXh0LnJlcGxhY2UoL1wiL2csIFwiXFxcIlxcXCJcIikgKyBcIlxcXCJcIlxuICAgICAgICA6IHRleHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBwYXJzZVJvd3M6IHBhcnNlUm93cyxcbiAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICBmb3JtYXRSb3dzOiBmb3JtYXRSb3dzXG4gIH07XG59XG5cbnZhciBjc3YgPSBkc3YoXCIsXCIpO1xuXG52YXIgY3N2UGFyc2UgPSBjc3YucGFyc2U7XG5cbnZhciB0c3YgPSBkc3YoXCJcXHRcIik7XG5cbnZhciB0c3ZQYXJzZSA9IHRzdi5wYXJzZTtcblxuLy8gQ29weXJpZ2h0IDIwMTggVGhlIEx1Y2lkIEF1dGhvcnMuQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuXG4vLyAvLyBCYXNpYyB1c2FnZSBleGFtcGxlczogXG4vLyBpbXBvcnQge2xvYWR9IGZyb20gJ2x1Y2lkLWNvbXBvbmVudHMnO1xuLy8gXG4vLyBsb2FkKFwidGVzdC5jc3ZcIikudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhcIjFcIiwgcmVzcG9uc2UpKTtcbi8vIGxvYWQoW1widGVzdC5jc3ZcIiwgXCJ0ZXN0LnRzdlwiXSkudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhcIjJcIiwgcmVzcG9uc2VbMF0sIHJlc3BvbnNlWzFdKSk7XG4vLyBsb2FkKCczYS5qcGcnKS50aGVuKHJlc3BvbnNlID0+IHt0aGlzLnJlZnMuaW1nLnNyYyA9IHJlc3BvbnNlLnNyYzt9KVxuLy8gXG4vLyAvLyBZb3UgY2FuIGFsc28gbmFtZXNwYWNlIHJlcXVlc3RzLCB3aGljaCB3aWxsIGNhbmNlbCBwcmV2aW91cyByZXF1ZXN0c1xuLy8gbG9hZChcInRlc3QuY3N2XCIsIFwibmFtZXNwYWNlXCIpLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coXCJUaGlzIHdpbGwgbmV2ZXIgYmUgY2FsbGVkLlwiKSlcbi8vIGxvYWQoXCJ0ZXN0LnRzdlwiLCBcIm5hbWVzcGFjZVwiKS50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKFwiVGhpcyB3aWxsIGludGVycnVwdCB0aGUgcHJldmlvdXMgb25lIGFuZCBiZSByZXNvbHZlZCBpbnN0ZWFkLlwiKSlcblxuXG5cbi8vIFdlIHdpbGwgY2FjaGUgcmVxdWVzdHMgYW5kIHBhcnNpbmcuXG5jb25zdCBjYWNoZSQxID0gbmV3IE1hcCgpO1xuY29uc3Qgc3VwcHJlc3MgPSBuZXcgTWFwKCk7XG5jb25zdCBuYW1lc3BhY2VzID0gbmV3IE1hcCgpO1xuXG4vLyBNYXBwaW5nIGZpbGUgZXh0ZW5zaW9ucyB0byBsb2FkZXJzXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gIFsnZ2lmJywgaW1hZ2VdLFxuICBbJ3BuZycsIGltYWdlXSxcbiAgWydqcGVnJywgaW1hZ2VdLFxuICBbJ2pwZycsIGltYWdlXSxcbiAgWydjc3YnLCBjc3YkMV0sXG4gIFsndHN2JywgdHN2JDFdLFxuICBbJ3R4dCcsIHRleHRdLFxuICBbJ3RleHQnLCB0ZXh0XSxcbiAgWydqc29uJywganNvbl0sXG5dKTtcblxuLy8gTG9hZGVyc1xuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgJzonICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW1hZ2UodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSBldmVudCA9PiByZXNvbHZlKGltZyk7XG4gICAgaW1nLm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoZXZlbnQpO1xuICAgIGltZy5zcmMgPSB1cmw7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGpzb24odXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oaGFuZGxlRXJyb3JzKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuZnVuY3Rpb24gdGV4dCh1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihoYW5kbGVFcnJvcnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKTtcbn1cblxuZnVuY3Rpb24gY3N2JDEodXJsKSB7XG4gIHJldHVybiB0ZXh0KHVybCkudGhlbih0ZXh0ID0+IFByb21pc2UucmVzb2x2ZShjc3ZQYXJzZSh0ZXh0KSkpO1xufVxuXG5mdW5jdGlvbiB0c3YkMSh1cmwpIHtcbiAgcmV0dXJuIHRleHQodXJsKS50aGVuKHRleHQgPT4gUHJvbWlzZS5yZXNvbHZlKHRzdlBhcnNlKHRleHQpKSk7XG59XG5cblxuLy8gTG9hZCBhIHVybCBvciBhbiBhcnJheSBvZiB1cmxzLlxuZnVuY3Rpb24gbG9hZCh1cmwsIG5hbWVzcGFjZSkge1xuXG4gIC8vIFdlIHdpbGwgdG8gY3JlYXRlIGEgbmFtZXNwYWNlIGlmIHdlIGRvbid0IGhhdmUgb25lLlxuICBsZXQgbnMgPSBuYW1lc3BhY2UgIT0gbnVsbCA/IG5hbWVzcGFjZSA6IERhdGUubm93KCkgKyBcIlwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBDcmVhdGUgYSB1bmlxdWUgSUQgZm9yIHRoaXMgcmVxdWVzdFxuICBsZXQgcmVxdWVzdElEID0gXCJuYW1lc3BhY2U6XCIgKyBucyArIFwiLCB1cmw6XCIgKyB1cmwgKyBcIiwgcmFuZG9tOlwiICsgRGF0ZS5ub3coKSArIFwiXCIgKyBNYXRoLnJhbmRvbSgpO1xuICBzdXBwcmVzcy5zZXQocmVxdWVzdElELCBmYWxzZSk7XG5cbiAgLy8gSWYgd2UgaGF2ZSBhIHByZXZpb3VzIHJlcXVlc3QgaW4gdGhpcyBuYW1lc3BhY2UsIG1hcmsgaXQgYXMgc3VwcHJlc3NlZCBzbyBcbiAgLy8gdGhhdCB0aGUgcHJvbWlzZSBpcyBuZXZlciByZXNvbHZlZC4gVGhlbiB3ZSByZXNldCB0aGUgY3VycmVudCBuYW1lc3BhY2UgdG8gXG4gIC8vIHRoZSBjdXJyZW50IHJlcXVlc3QuXG4gIGlmIChuYW1lc3BhY2VzLmhhcyhucykpIHtcbiAgICBjb25zdCBwZW5kaW5nUmVxdWVzdElEID0gbmFtZXNwYWNlcy5nZXQobnMpO1xuICAgIHN1cHByZXNzLnNldChwZW5kaW5nUmVxdWVzdElELCB0cnVlKTtcbiAgfVxuICBuYW1lc3BhY2VzLnNldChucywgcmVxdWVzdElEKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHA7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXJsKSkge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cmwubWFwKHUgPT4gX2xvYWRVUkwodSkpO1xuICAgICAgcCA9IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcCA9ICBfbG9hZFVSTCh1cmwpO1xuICAgIH1cbiAgICBwXG4gICAgICAudGhlbih2YWwgPT4ge1xuICAgICAgICAvL2NoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBzdXBwcmVzc2VkIHRoaXMgcmVxdWVzdC5cbiAgICAgICAgaWYgKCFzdXBwcmVzcy5nZXQocmVxdWVzdElEKSkge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIC8vY2hlY2sgdG8gc2VlIGlmIHdlJ3ZlIHN1cHByZXNzZWQgdGhpcyByZXF1ZXN0LlxuICAgICAgICBpZiAoIXN1cHByZXNzLmdldChyZXF1ZXN0SUQpKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgXG4gIH0pO1xufVxuXG4vLyBQcml2YXRlIGxvYWRpbmcgZnVuY3Rpb25cbmZ1bmN0aW9uIF9sb2FkVVJMKHVybCkge1xuICBsZXQgaWQgPSB1cmw7XG4gIGlmIChjYWNoZSQxLmhhcyhpZCkpIHtcbiAgICByZXR1cm4gY2FjaGUkMS5nZXQoaWQpO1xuICB9IGVsc2Uge1xuICAgIGxldCBleHRlbnNpb24gPSBwYXJzZUZpbGVFeHRlbnNpb25Gcm9tVVJMKHVybCwgbG9hZGVycyk7XG4gICAgbGV0IGxvYWRlciA9IGxvYWRlcnMuZ2V0KGV4dGVuc2lvbik7XG4gICAgbGV0IHAgPSBsb2FkZXIodXJsKTtcbiAgICBjYWNoZSQxLnNldChpZCwgcCk7XG4gICAgcmV0dXJuIHA7XG4gIH1cbn1cblxuLy8gSGVscGVyc1xuXG4vLyBSZXR1cm5zIGEgZmlsZXR5cGUgZXh0ZW5zaW9uIGZyb20gYSBnaXZlbiB1cmwgc3RyaW5nXG5mdW5jdGlvbiBwYXJzZUZpbGVFeHRlbnNpb25Gcm9tVVJMKHVybCwgbG9hZGVycykge1xuICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi5cIik7XG4gIGNvbnN0IGV4dCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICBpZiAoIWxvYWRlcnMuaGFzKGV4dCkpIHtcbiAgICBjb25zb2xlLndhcm4oJ1RyeWluZyB0byBsb2FkIHVybDogJyArIHVybCArICcgd2l0aCBhbiB1bmtub3duIGZpbGV0eXBlLiBBc3N1bWluZyBcInRleHRcIi4nKTtcbiAgfVxuICByZXR1cm4gbG9hZGVycy5oYXMoZXh0KSA/IGV4dCA6ICd0ZXh0Jztcbn1cblxuLy8gQ29weXJpZ2h0IDIwMTggVGhlIEx1Y2lkIEF1dGhvcnMuQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuZXhwb3J0IHsgU3ByaXRlLCBsb2FkIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2x1Y2lkLWNvbXBvbmVudHMvcHVibGljL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjxhIGhyZWY9XCJ7dXJsfVwiIGNsYXNzPVwiY29sYWItcm9vdFwiPlxuICAgIFJlcHJvZHVjZSBpbiBhIDxzcGFuPk5vdGVib29rPC9zcGFuPlxuICA8L2E+XG4gIFxuICBcbiAgPHN0eWxlPlxuICAuY29sYWItcm9vdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9jb2xhYi5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBhOmhvdmVye1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIDwvc3R5bGU+XG4gIFxuICBcbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG9uY3JlYXRlKCkge1xuICAgICAgY29uc3QgeyB1cmwgfSA9IHRoaXMuZ2V0KCk7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCI8Q29sYWJMaW5rPiB3YXMgaW5zdGFudGlhdGVkIHdpdGhvdXQgYSBVUkwhXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIDwvc2NyaXB0PlxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db2xhYkxpbmsuaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=