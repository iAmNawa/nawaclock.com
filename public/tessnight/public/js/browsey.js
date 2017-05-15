(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
module.exports={
  "_args": [
    [
      {
        "raw": "tesseract.js",
        "scope": null,
        "escapedName": "tesseract.js",
        "name": "tesseract.js",
        "rawSpec": "",
        "spec": "latest",
        "type": "tag"
      },
      "/Users/paul/Desktop/tessnight"
    ]
  ],
  "_from": "tesseract.js@latest",
  "_id": "tesseract.js@1.0.10",
  "_inCache": true,
  "_location": "/tesseract.js",
  "_nodeVersion": "6.7.0",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/tesseract.js-1.0.10.tgz_1476823577978_0.5278713656589389"
  },
  "_npmUser": {
    "name": "antimatter15",
    "email": "antimatter15@gmail.com"
  },
  "_npmVersion": "3.10.8",
  "_phantomChildren": {},
  "_requested": {
    "raw": "tesseract.js",
    "scope": null,
    "escapedName": "tesseract.js",
    "name": "tesseract.js",
    "rawSpec": "",
    "spec": "latest",
    "type": "tag"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz",
  "_shasum": "e11a96ae76147939d9218f88e287fb69414b1e5d",
  "_shrinkwrap": null,
  "_spec": "tesseract.js",
  "_where": "/Users/paul/Desktop/tessnight",
  "author": "",
  "browser": {
    "./src/node/index.js": "./src/browser/index.js"
  },
  "bugs": {
    "url": "https://github.com/naptha/tesseract.js/issues"
  },
  "dependencies": {
    "file-type": "^3.8.0",
    "is-url": "^1.2.2",
    "jpeg-js": "^0.2.0",
    "level-js": "^2.2.4",
    "node-fetch": "^1.6.3",
    "object-assign": "^4.1.0",
    "png.js": "^0.2.1",
    "tesseract.js-core": "^1.0.2"
  },
  "description": "Pure Javascript Multilingual OCR",
  "devDependencies": {
    "babel-preset-es2015": "^6.16.0",
    "babelify": "^7.3.0",
    "browserify": "^13.1.0",
    "envify": "^3.4.1",
    "http-server": "^0.9.0",
    "pako": "^1.0.3",
    "watchify": "^3.7.0"
  },
  "directories": {},
  "dist": {
    "shasum": "e11a96ae76147939d9218f88e287fb69414b1e5d",
    "tarball": "https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz"
  },
  "gitHead": "fc15b0ef43cbf2d8729f8db2ef06a16b2497a16e",
  "homepage": "https://github.com/naptha/tesseract.js",
  "license": "Apache-2.0",
  "main": "src/index.js",
  "maintainers": [
    {
      "name": "antimatter15",
      "email": "antimatter15@gmail.com"
    },
    {
      "name": "bijection",
      "email": "guillermo@cdbzb.com"
    }
  ],
  "name": "tesseract.js",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/naptha/tesseract.js.git"
  },
  "scripts": {
    "build": "browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js",
    "release": "npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish",
    "start": "watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract & watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js & http-server -p 7355",
    "test": "echo \"Error: no test specified\" & exit 1"
  },
  "version": "1.0.10"
}

},{}],3:[function(require,module,exports){
(function (process){
var defaultOptions = {
    // workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/worker.js',
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',    
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
}

if (process.env.NODE_ENV === "development") {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{
    var version = require('../../package.json').version;
    defaultOptions.workerPath = 'https://cdn.rawgit.com/naptha/tesseract.js/' + version + '/dist/worker.js'
}

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(window.Blob && window.URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'])
        var worker = new Worker(window.URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            xhr.onload = e => loadImage(xhr.response, cb);
            xhr.onerror = function(e){
                if(/^https?:\/\//.test(image) && !/^https:\/\/crossorigin.me/.test(image)){
                    console.debug('Attempting to load image with CORS proxy')
                    loadImage('https://crossorigin.me/' + image, cb)
                }
            }
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}

}).call(this,require('_process'))

},{"../../package.json":2,"_process":8}],4:[function(require,module,exports){
// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}
},{}],5:[function(require,module,exports){
const adapter = require('../node/index.js')

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}

},{"../node/index.js":3}],6:[function(require,module,exports){
const adapter = require('./node/index.js')
const circularize = require('./common/circularize.js')
const TesseractJob = require('./common/job');
const objectAssign = require('object-assign');
const version = require('../package.json').version;

function create(workerOptions){
	workerOptions = workerOptions || {};
	var worker = new TesseractWorker(objectAssign({}, adapter.defaultOptions, workerOptions))
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = []
	}

	recognize(image, options){
		return this._delay(job => {
			if(typeof options === 'string'){
				options = { lang: options };
			}else{
				options = options || {}
				options.lang = options.lang || 'eng';	
			}
			
			job._send('recognize', { image: image, options: options, workerOptions: this.workerOptions })
		})
	}
	detect(image, options){
		options = options || {}
		return this._delay(job => {
			job._send('detect', { image: image, options: options, workerOptions: this.workerOptions })
		})
	}

	terminate(){ 
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift()
			this._currentJob = job;
			fn(job)
		})
		if(!this._currentJob) this._dequeue();
		return job
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length > 0){
			this._queue[0]()
		}
	}

	_recv(packet){

        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		}else{
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

var DefaultTesseract = create()

module.exports = DefaultTesseract
},{"../package.json":2,"./common/circularize.js":4,"./common/job":5,"./node/index.js":3,"object-assign":1}],7:[function(require,module,exports){
document.querySelector('#pleaseWork').style.color = 'green'

var Tesseract = require('tesseract.js')

var myImage = document.querySelector('#imagez')

var whatIt = document.querySelector('#pleaseWork2').innerHTML

Tesseract.recognize(myImage)
         .progress(function  (p) { console.log('progress', p)    })
         .then(function (result) { document.querySelector('#pleaseWork2').innerHTML = 'What is says is:' + result.text })

},{"tesseract.js":6}],8:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9wYWNrYWdlLmpzb24iLCIuLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9icm93c2VyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2NpcmN1bGFyaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIi4uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2luZGV4LmpzIiwibWFpbi5qcyIsIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiX2FyZ3NcIjogW1xuICAgIFtcbiAgICAgIHtcbiAgICAgICAgXCJyYXdcIjogXCJ0ZXNzZXJhY3QuanNcIixcbiAgICAgICAgXCJzY29wZVwiOiBudWxsLFxuICAgICAgICBcImVzY2FwZWROYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG4gICAgICAgIFwibmFtZVwiOiBcInRlc3NlcmFjdC5qc1wiLFxuICAgICAgICBcInJhd1NwZWNcIjogXCJcIixcbiAgICAgICAgXCJzcGVjXCI6IFwibGF0ZXN0XCIsXG4gICAgICAgIFwidHlwZVwiOiBcInRhZ1wiXG4gICAgICB9LFxuICAgICAgXCIvVXNlcnMvcGF1bC9EZXNrdG9wL3Rlc3NuaWdodFwiXG4gICAgXVxuICBdLFxuICBcIl9mcm9tXCI6IFwidGVzc2VyYWN0LmpzQGxhdGVzdFwiLFxuICBcIl9pZFwiOiBcInRlc3NlcmFjdC5qc0AxLjAuMTBcIixcbiAgXCJfaW5DYWNoZVwiOiB0cnVlLFxuICBcIl9sb2NhdGlvblwiOiBcIi90ZXNzZXJhY3QuanNcIixcbiAgXCJfbm9kZVZlcnNpb25cIjogXCI2LjcuMFwiLFxuICBcIl9ucG1PcGVyYXRpb25hbEludGVybmFsXCI6IHtcbiAgICBcImhvc3RcIjogXCJwYWNrYWdlcy0xMi13ZXN0LmludGVybmFsLm5wbWpzLmNvbVwiLFxuICAgIFwidG1wXCI6IFwidG1wL3Rlc3NlcmFjdC5qcy0xLjAuMTAudGd6XzE0NzY4MjM1Nzc5NzhfMC41Mjc4NzEzNjU2NTg5Mzg5XCJcbiAgfSxcbiAgXCJfbnBtVXNlclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiYW50aW1hdHRlcjE1XCIsXG4gICAgXCJlbWFpbFwiOiBcImFudGltYXR0ZXIxNUBnbWFpbC5jb21cIlxuICB9LFxuICBcIl9ucG1WZXJzaW9uXCI6IFwiMy4xMC44XCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInJhd1wiOiBcInRlc3NlcmFjdC5qc1wiLFxuICAgIFwic2NvcGVcIjogbnVsbCxcbiAgICBcImVzY2FwZWROYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG4gICAgXCJuYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG4gICAgXCJyYXdTcGVjXCI6IFwiXCIsXG4gICAgXCJzcGVjXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJ0eXBlXCI6IFwidGFnXCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIjVVNFUlwiLFxuICAgIFwiL1wiXG4gIF0sXG4gIFwiX3Jlc29sdmVkXCI6IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvdGVzc2VyYWN0LmpzLy0vdGVzc2VyYWN0LmpzLTEuMC4xMC50Z3pcIixcbiAgXCJfc2hhc3VtXCI6IFwiZTExYTk2YWU3NjE0NzkzOWQ5MjE4Zjg4ZTI4N2ZiNjk0MTRiMWU1ZFwiLFxuICBcIl9zaHJpbmt3cmFwXCI6IG51bGwsXG4gIFwiX3NwZWNcIjogXCJ0ZXNzZXJhY3QuanNcIixcbiAgXCJfd2hlcmVcIjogXCIvVXNlcnMvcGF1bC9EZXNrdG9wL3Rlc3NuaWdodFwiLFxuICBcImF1dGhvclwiOiBcIlwiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9zcmMvbm9kZS9pbmRleC5qc1wiOiBcIi4vc3JjL2Jyb3dzZXIvaW5kZXguanNcIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hcHRoYS90ZXNzZXJhY3QuanMvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZmlsZS10eXBlXCI6IFwiXjMuOC4wXCIsXG4gICAgXCJpcy11cmxcIjogXCJeMS4yLjJcIixcbiAgICBcImpwZWctanNcIjogXCJeMC4yLjBcIixcbiAgICBcImxldmVsLWpzXCI6IFwiXjIuMi40XCIsXG4gICAgXCJub2RlLWZldGNoXCI6IFwiXjEuNi4zXCIsXG4gICAgXCJvYmplY3QtYXNzaWduXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJwbmcuanNcIjogXCJeMC4yLjFcIixcbiAgICBcInRlc3NlcmFjdC5qcy1jb3JlXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlB1cmUgSmF2YXNjcmlwdCBNdWx0aWxpbmd1YWwgT0NSXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi4xNi4wXCIsXG4gICAgXCJiYWJlbGlmeVwiOiBcIl43LjMuMFwiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xMy4xLjBcIixcbiAgICBcImVudmlmeVwiOiBcIl4zLjQuMVwiLFxuICAgIFwiaHR0cC1zZXJ2ZXJcIjogXCJeMC45LjBcIixcbiAgICBcInBha29cIjogXCJeMS4wLjNcIixcbiAgICBcIndhdGNoaWZ5XCI6IFwiXjMuNy4wXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7fSxcbiAgXCJkaXN0XCI6IHtcbiAgICBcInNoYXN1bVwiOiBcImUxMWE5NmFlNzYxNDc5MzlkOTIxOGY4OGUyODdmYjY5NDE0YjFlNWRcIixcbiAgICBcInRhcmJhbGxcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy90ZXNzZXJhY3QuanMvLS90ZXNzZXJhY3QuanMtMS4wLjEwLnRnelwiXG4gIH0sXG4gIFwiZ2l0SGVhZFwiOiBcImZjMTViMGVmNDNjYmYyZDg3MjlmOGRiMmVmMDZhMTZiMjQ5N2ExNmVcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYXB0aGEvdGVzc2VyYWN0LmpzXCIsXG4gIFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcbiAgXCJtYWluXCI6IFwic3JjL2luZGV4LmpzXCIsXG4gIFwibWFpbnRhaW5lcnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcImFudGltYXR0ZXIxNVwiLFxuICAgICAgXCJlbWFpbFwiOiBcImFudGltYXR0ZXIxNUBnbWFpbC5jb21cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiYmlqZWN0aW9uXCIsXG4gICAgICBcImVtYWlsXCI6IFwiZ3VpbGxlcm1vQGNkYnpiLmNvbVwiXG4gICAgfVxuICBdLFxuICBcIm5hbWVcIjogXCJ0ZXNzZXJhY3QuanNcIixcbiAgXCJvcHRpb25hbERlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJyZWFkbWVcIjogXCJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL25hcHRoYS90ZXNzZXJhY3QuanMuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwiYnJvd3NlcmlmeSBzcmMvaW5kZXguanMgLXQgWyBiYWJlbGlmeSAtLXByZXNldHMgWyBlczIwMTUgXSBdIC1vIGRpc3QvdGVzc2VyYWN0LmpzIC0tc3RhbmRhbG9uZSBUZXNzZXJhY3QgJiYgYnJvd3NlcmlmeSBzcmMvYnJvd3Nlci93b3JrZXIuanMgLXQgWyBiYWJlbGlmeSAtLXByZXNldHMgWyBlczIwMTUgXSBdIC1vIGRpc3Qvd29ya2VyLmpzXCIsXG4gICAgXCJyZWxlYXNlXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgY29tbWl0IC1hbSAnbmV3IHJlbGVhc2UnICYmIGdpdCBwdXNoICYmIGdpdCB0YWcgYGpxIC1yICcudmVyc2lvbicgcGFja2FnZS5qc29uYCAmJiBnaXQgcHVzaCBvcmlnaW4gLS10YWdzICYmIG5wbSBwdWJsaXNoXCIsXG4gICAgXCJzdGFydFwiOiBcIndhdGNoaWZ5IHNyYy9pbmRleC5qcyAgLXQgWyBlbnZpZnkgLS1OT0RFX0VOViBkZXZlbG9wbWVudCBdIC10IFsgYmFiZWxpZnkgLS1wcmVzZXRzIFsgZXMyMDE1IF0gXSAtbyBkaXN0L3Rlc3NlcmFjdC5kZXYuanMgLS1zdGFuZGFsb25lIFRlc3NlcmFjdCAmIHdhdGNoaWZ5IHNyYy9icm93c2VyL3dvcmtlci5qcyAgLXQgWyBlbnZpZnkgLS1OT0RFX0VOViBkZXZlbG9wbWVudCBdIC10IFsgYmFiZWxpZnkgLS1wcmVzZXRzIFsgZXMyMDE1IF0gXSAtbyBkaXN0L3dvcmtlci5kZXYuanMgJiBodHRwLXNlcnZlciAtcCA3MzU1XCIsXG4gICAgXCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmIGV4aXQgMVwiXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuMC4xMFwiXG59XG4iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gd29ya2VyUGF0aDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbmFwdGhhL3Rlc3NlcmFjdC5qcy8wLjIuMC9kaXN0L3dvcmtlci5qcycsXG4gICAgY29yZVBhdGg6ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL25hcHRoYS90ZXNzZXJhY3QuanMtY29yZS8wLjEuMC9pbmRleC5qcycsICAgIFxuICAgIGxhbmdQYXRoOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9uYXB0aGEvdGVzc2RhdGEvZ2gtcGFnZXMvMy4wMi8nLFxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGNvbnNvbGUuZGVidWcoJ1VzaW5nIERldmVsb3BtZW50IENvbmZpZ3VyYXRpb24nKVxuICAgIGRlZmF1bHRPcHRpb25zLndvcmtlclBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy9kaXN0L3dvcmtlci5kZXYuanM/bm9jYWNoZT0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMylcbn1lbHNle1xuICAgIHZhciB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbmFwdGhhL3Rlc3NlcmFjdC5qcy8nICsgdmVyc2lvbiArICcvZGlzdC93b3JrZXIuanMnXG59XG5cbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblxuXG5leHBvcnRzLnNwYXduV29ya2VyID0gZnVuY3Rpb24gc3Bhd25Xb3JrZXIoaW5zdGFuY2UsIHdvcmtlck9wdGlvbnMpe1xuICAgIGlmKHdpbmRvdy5CbG9iICYmIHdpbmRvdy5VUkwpe1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsnaW1wb3J0U2NyaXB0cyhcIicgKyB3b3JrZXJPcHRpb25zLndvcmtlclBhdGggKyAnXCIpOyddKVxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgfWVsc2V7XG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlck9wdGlvbnMud29ya2VyUGF0aClcbiAgICB9XG5cbiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBwYWNrZXQgPSBlLmRhdGE7XG4gICAgICAgIGluc3RhbmNlLl9yZWN2KHBhY2tldClcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtlclxufVxuXG5leHBvcnRzLnRlcm1pbmF0ZVdvcmtlciA9IGZ1bmN0aW9uKGluc3RhbmNlKXtcbiAgICBpbnN0YW5jZS53b3JrZXIudGVybWluYXRlKClcbn1cblxuZXhwb3J0cy5zZW5kUGFja2V0ID0gZnVuY3Rpb24gc2VuZFBhY2tldChpbnN0YW5jZSwgcGFja2V0KXtcbiAgICBsb2FkSW1hZ2UocGFja2V0LnBheWxvYWQuaW1hZ2UsIGZ1bmN0aW9uKGltZyl7XG4gICAgICAgIHBhY2tldC5wYXlsb2FkLmltYWdlID0gaW1nXG4gICAgICAgIGluc3RhbmNlLndvcmtlci5wb3N0TWVzc2FnZShwYWNrZXQpIFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlLCBjYil7XG4gICAgaWYodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGlmKC9eXFwjLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGNzcyBzZWxlY3RvclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlKSwgY2IpXG4gICAgICAgIH1lbHNlIGlmKC8oYmxvYnxkYXRhKVxcOi8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgLy8gZGF0YSB1cmxcbiAgICAgICAgICAgIHZhciBpbSA9IG5ldyBJbWFnZVxuICAgICAgICAgICAgaW0uc3JjID0gaW1hZ2U7XG4gICAgICAgICAgICBpbS5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZShpbSwgY2IpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGltYWdlLCB0cnVlKVxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKHhoci5yZXNwb25zZSwgY2IpO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZigvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaW1hZ2UpICYmICEvXmh0dHBzOlxcL1xcL2Nyb3Nzb3JpZ2luLm1lLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0F0dGVtcHRpbmcgdG8gbG9hZCBpbWFnZSB3aXRoIENPUlMgcHJveHknKVxuICAgICAgICAgICAgICAgICAgICBsb2FkSW1hZ2UoJ2h0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvJyArIGltYWdlLCBjYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIuc2VuZChudWxsKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEZpbGUpe1xuICAgICAgICAvLyBmaWxlc1xuICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKGZyLnJlc3VsdCwgY2IpO1xuICAgICAgICBmci5yZWFkQXNEYXRhVVJMKGltYWdlKVxuICAgICAgICByZXR1cm5cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEJsb2Ipe1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRDb250ZXh0KXtcbiAgICAgICAgLy8gY2FudmFzIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShpbWFnZS5nZXRDb250ZXh0KCcyZCcpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS50YWdOYW1lID09IFwiSU1HXCIgfHwgaW1hZ2UudGFnTmFtZSA9PSBcIlZJREVPXCIpe1xuICAgICAgICAvLyBpbWFnZSBlbGVtZW50IG9yIHZpZGVvIGVsZW1lbnRcbiAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgYy53aWR0aCAgPSBpbWFnZS5uYXR1cmFsV2lkdGggIHx8IGltYWdlLnZpZGVvV2lkdGg7XG4gICAgICAgIGMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodCB8fCBpbWFnZS52aWRlb0hlaWdodDtcbiAgICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoY3R4LCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRJbWFnZURhdGEpe1xuICAgICAgICAvLyBjYW52YXMgY29udGV4dFxuICAgICAgICB2YXIgZGF0YSA9IGltYWdlLmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS5jYW52YXMud2lkdGgsIGltYWdlLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRhdGEsIGNiKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY2IoaW1hZ2UpXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXR1cm4gaW4gbG9hZEltYWdlIGNhc2NhZGUnKVxuXG59XG4iLCIvLyBUaGUgcmVzdWx0IG9mIGR1bXAuanMgaXMgYSBiaWcgSlNPTiB0cmVlXG4vLyB3aGljaCBjYW4gYmUgZWFzaWx5IHNlcmlhbGl6ZWQgKGZvciBpbnN0YW5jZVxuLy8gdG8gYmUgc2VudCBmcm9tIGEgd2Vid29ya2VyIHRvIHRoZSBtYWluIGFwcFxuLy8gb3IgdGhyb3VnaCBOb2RlJ3MgSVBDKSwgYnV0IHdlIHdhbnRcbi8vIGEgKGNpcmN1bGFyKSBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmdcbi8vIHRocm91Z2ggdGhlIGRhdGEuIFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNpcmN1bGFyaXplKHBhZ2Upe1xuICAgIHBhZ2UucGFyYWdyYXBocyA9IFtdXG4gICAgcGFnZS5saW5lcyA9IFtdXG4gICAgcGFnZS53b3JkcyA9IFtdXG4gICAgcGFnZS5zeW1ib2xzID0gW11cblxuICAgIHBhZ2UuYmxvY2tzLmZvckVhY2goZnVuY3Rpb24oYmxvY2spe1xuICAgICAgICBibG9jay5wYWdlID0gcGFnZTtcblxuICAgICAgICBibG9jay5saW5lcyA9IFtdXG4gICAgICAgIGJsb2NrLndvcmRzID0gW11cbiAgICAgICAgYmxvY2suc3ltYm9scyA9IFtdXG5cbiAgICAgICAgYmxvY2sucGFyYWdyYXBocy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmEpe1xuICAgICAgICAgICAgcGFyYS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgcGFyYS5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICAgcGFyYS53b3JkcyA9IFtdXG4gICAgICAgICAgICBwYXJhLnN5bWJvbHMgPSBbXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJhLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSl7XG4gICAgICAgICAgICAgICAgbGluZS5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgIGxpbmUuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICBsaW5lLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgICAgICAgICAgbGluZS5zeW1ib2xzID0gW11cblxuICAgICAgICAgICAgICAgIGxpbmUud29yZHMuZm9yRWFjaChmdW5jdGlvbih3b3JkKXtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5saW5lID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uKHN5bSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ud29yZCA9IHdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhcmFncmFwaC5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmJsb2NrLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFnZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhcmFncmFwaC53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgICAgIHdvcmQuYmxvY2sud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhZ2Uud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGluZS5ibG9jay5saW5lcy5wdXNoKGxpbmUpXG4gICAgICAgICAgICAgICAgbGluZS5wYWdlLmxpbmVzLnB1c2gobGluZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYXJhLnBhZ2UucGFyYWdyYXBocy5wdXNoKHBhcmEpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcGFnZVxufSIsImNvbnN0IGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9ub2RlL2luZGV4LmpzJylcblxubGV0IGpvYkNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRlc3NlcmFjdEpvYiB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2Upe1xuICAgICAgICB0aGlzLmlkID0gJ0pvYi0nICsgKCsram9iQ291bnRlcikgKyAnLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgzLCA4KVxuXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBbXVxuICAgICAgICB0aGlzLl9yZWplY3QgPSBbXVxuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IFtdXG4gICAgICAgIHRoaXMuX2ZpbmFsbHkgPSBbXVxuICAgIH1cblxuICAgIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgaWYodGhpcy5fcmVzb2x2ZS5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUucHVzaChyZXNvbHZlKSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Jlc29sdmUpXG4gICAgICAgIH1cblxuICAgICAgICBpZihyZWplY3QpIHRoaXMuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhdGNoKHJlamVjdCl7XG4gICAgICAgIGlmKHRoaXMuX3JlamVjdC5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdC5wdXNoKHJlamVjdCkgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVqZWN0KHRoaXMuX3JlamVjdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHJvZ3Jlc3MoZm4pe1xuICAgICAgICB0aGlzLl9wcm9ncmVzcy5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmluYWxseShmbikge1xuICAgICAgICB0aGlzLl9maW5hbGx5LnB1c2goZm4pXG4gICAgICAgIHJldHVybiB0aGlzOyAgXG4gICAgfVxuICAgIF9zZW5kKGFjdGlvbiwgcGF5bG9hZCl7XG4gICAgICAgIGFkYXB0ZXIuc2VuZFBhY2tldCh0aGlzLl9pbnN0YW5jZSwge1xuICAgICAgICAgICAgam9iSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfaGFuZGxlKHBhY2tldCl7XG4gICAgICAgIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gICAgICAgIGxldCBydW5GaW5hbGx5Q2JzID0gZmFsc2U7XG5cbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3Jlc29sdmUubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGZuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGVzc2VyYWN0Sm9iIGluc3RhbmNlcyBkbyBub3QgY2hhaW4gbGlrZSBFUzYgUHJvbWlzZXMuIFRvIGNvbnZlcnQgaXQgaW50byBhIHJlYWwgcHJvbWlzZSwgdXNlIFByb21pc2UucmVzb2x2ZS4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXF1ZXVlKClcbiAgICAgICAgICAgIHJ1bkZpbmFsbHlDYnMgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihwYWNrZXQuc3RhdHVzID09PSAncmVqZWN0Jyl7XG4gICAgICAgICAgICBpZih0aGlzLl9yZWplY3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2RlcXVldWUoKVxuICAgICAgICAgICAgcnVuRmluYWxseUNicyA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKHBhY2tldC5zdGF0dXMgPT09ICdwcm9ncmVzcycpe1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MuZm9yRWFjaChmbiA9PiBmbihkYXRhKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lc3NhZ2UgdHlwZSB1bmtub3duJywgcGFja2V0LnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5GaW5hbGx5Q2JzKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5hbGx5LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgYWRhcHRlciA9IHJlcXVpcmUoJy4vbm9kZS9pbmRleC5qcycpXG5jb25zdCBjaXJjdWxhcml6ZSA9IHJlcXVpcmUoJy4vY29tbW9uL2NpcmN1bGFyaXplLmpzJylcbmNvbnN0IFRlc3NlcmFjdEpvYiA9IHJlcXVpcmUoJy4vY29tbW9uL2pvYicpO1xuY29uc3Qgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuY29uc3QgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbmZ1bmN0aW9uIGNyZWF0ZSh3b3JrZXJPcHRpb25zKXtcblx0d29ya2VyT3B0aW9ucyA9IHdvcmtlck9wdGlvbnMgfHwge307XG5cdHZhciB3b3JrZXIgPSBuZXcgVGVzc2VyYWN0V29ya2VyKG9iamVjdEFzc2lnbih7fSwgYWRhcHRlci5kZWZhdWx0T3B0aW9ucywgd29ya2VyT3B0aW9ucykpXG5cdHdvcmtlci5jcmVhdGUgPSBjcmVhdGU7XG5cdHdvcmtlci52ZXJzaW9uID0gdmVyc2lvbjtcblx0cmV0dXJuIHdvcmtlcjtcbn1cblxuY2xhc3MgVGVzc2VyYWN0V29ya2VyIHtcblx0Y29uc3RydWN0b3Iod29ya2VyT3B0aW9ucyl7XG5cdFx0dGhpcy53b3JrZXIgPSBudWxsO1xuXHRcdHRoaXMud29ya2VyT3B0aW9ucyA9IHdvcmtlck9wdGlvbnM7XG5cdFx0dGhpcy5fY3VycmVudEpvYiA9IG51bGw7XG5cdFx0dGhpcy5fcXVldWUgPSBbXVxuXHR9XG5cblx0cmVjb2duaXplKGltYWdlLCBvcHRpb25zKXtcblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGlmKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdG9wdGlvbnMgPSB7IGxhbmc6IG9wdGlvbnMgfTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0XHRvcHRpb25zLmxhbmcgPSBvcHRpb25zLmxhbmcgfHwgJ2VuZyc7XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0am9iLl9zZW5kKCdyZWNvZ25pemUnLCB7IGltYWdlOiBpbWFnZSwgb3B0aW9uczogb3B0aW9ucywgd29ya2VyT3B0aW9uczogdGhpcy53b3JrZXJPcHRpb25zIH0pXG5cdFx0fSlcblx0fVxuXHRkZXRlY3QoaW1hZ2UsIG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0cmV0dXJuIHRoaXMuX2RlbGF5KGpvYiA9PiB7XG5cdFx0XHRqb2IuX3NlbmQoJ2RldGVjdCcsIHsgaW1hZ2U6IGltYWdlLCBvcHRpb25zOiBvcHRpb25zLCB3b3JrZXJPcHRpb25zOiB0aGlzLndvcmtlck9wdGlvbnMgfSlcblx0XHR9KVxuXHR9XG5cblx0dGVybWluYXRlKCl7IFxuXHRcdGlmKHRoaXMud29ya2VyKSBhZGFwdGVyLnRlcm1pbmF0ZVdvcmtlcih0aGlzKTtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdH1cblxuXHRfZGVsYXkoZm4pe1xuXHRcdGlmKCF0aGlzLndvcmtlcikgdGhpcy53b3JrZXIgPSBhZGFwdGVyLnNwYXduV29ya2VyKHRoaXMsIHRoaXMud29ya2VyT3B0aW9ucyk7XG5cblx0XHR2YXIgam9iID0gbmV3IFRlc3NlcmFjdEpvYih0aGlzKTtcblx0XHR0aGlzLl9xdWV1ZS5wdXNoKGUgPT4ge1xuXHRcdFx0dGhpcy5fcXVldWUuc2hpZnQoKVxuXHRcdFx0dGhpcy5fY3VycmVudEpvYiA9IGpvYjtcblx0XHRcdGZuKGpvYilcblx0XHR9KVxuXHRcdGlmKCF0aGlzLl9jdXJyZW50Sm9iKSB0aGlzLl9kZXF1ZXVlKCk7XG5cdFx0cmV0dXJuIGpvYlxuXHR9XG5cblx0X2RlcXVldWUoKXtcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHRpZih0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKXtcblx0XHRcdHRoaXMuX3F1ZXVlWzBdKClcblx0XHR9XG5cdH1cblxuXHRfcmVjdihwYWNrZXQpe1xuXG4gICAgICAgIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZXNvbHZlJyAmJiBwYWNrZXQuYWN0aW9uID09PSAncmVjb2duaXplJyl7XG4gICAgICAgICAgICBwYWNrZXQuZGF0YSA9IGNpcmN1bGFyaXplKHBhY2tldC5kYXRhKTtcbiAgICAgICAgfVxuXG5cdFx0aWYodGhpcy5fY3VycmVudEpvYi5pZCA9PT0gcGFja2V0LmpvYklkKXtcblx0XHRcdHRoaXMuX2N1cnJlbnRKb2IuX2hhbmRsZShwYWNrZXQpXG5cdFx0fWVsc2V7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0pvYiBJRCAnICsgcGFja2V0LmpvYklkICsgJyBub3Qga25vd24uJylcblx0XHR9XG5cdH1cbn1cblxudmFyIERlZmF1bHRUZXNzZXJhY3QgPSBjcmVhdGUoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRUZXNzZXJhY3QiLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxlYXNlV29yaycpLnN0eWxlLmNvbG9yID0gJ2dyZWVuJ1xuXG52YXIgVGVzc2VyYWN0ID0gcmVxdWlyZSgndGVzc2VyYWN0LmpzJylcblxudmFyIG15SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2V6JylcblxudmFyIHdoYXRJdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGVhc2VXb3JrMicpLmlubmVySFRNTFxuXG5UZXNzZXJhY3QucmVjb2duaXplKG15SW1hZ2UpXG4gICAgICAgICAucHJvZ3Jlc3MoZnVuY3Rpb24gIChwKSB7IGNvbnNvbGUubG9nKCdwcm9ncmVzcycsIHApICAgIH0pXG4gICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGVhc2VXb3JrMicpLmlubmVySFRNTCA9ICdXaGF0IGlzIHNheXMgaXM6JyArIHJlc3VsdC50ZXh0IH0pXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
