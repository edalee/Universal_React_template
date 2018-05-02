__isBrowser__ = false;
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _News = __webpack_require__(12);

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    component: _Home2.default,
    exact: true
}, {
    path: '/news',
    component: _News2.default,
    exact: true
}];

exports.default = routes;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cors = __webpack_require__(5);

var _cors2 = _interopRequireDefault(_cors);

__webpack_require__(6);

var _serializeJavascript = __webpack_require__(7);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(1);

var _server = __webpack_require__(8);

var _sourceMapSupport = __webpack_require__(9);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'development') {
    _sourceMapSupport2.default.install();
}

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

app.get('/api/news', function (req, res) {
    res.json([{
        id: 1,
        upvotes: 257,
        title: 'Fianto Duri, the complete tutorial',
        author: 'RubeusH',
        date: new Date(Date.now() - 15000000)
    }, {
        id: 2,
        upvotes: 221,
        title: 'Untransfiguration classes to become compulsory at Hogwarts',
        author: 'Baddock',
        date: new Date(Date.now() - 45000000)
    }, {
        id: 3,
        upvotes: 198,
        title: 'Cracking the Aurologist Interview ',
        author: 'Hetty',
        date: new Date(Date.now() - 900000)
    }, {
        id: 4,
        upvotes: 171,
        title: 'ASK WN: What do you use to digitalize your scrolls?',
        author: 'Alphard',
        date: new Date(Date.now() - 40000000)
    }, {
        id: 5,
        upvotes: 166,
        title: 'The Pragmatic Dragon Feeder',
        author: 'Baruffio',
        date: new Date(Date.now() - 10000000)
    }, {
        id: 6,
        upvotes: 145,
        title: 'The complete quidditch statistics',
        author: 'Hbeery',
        date: new Date(Date.now() - 5000000)
    }, {
        id: 7,
        upvotes: 126,
        title: 'Ordinary Wizarding Levels study guide',
        author: 'BathBabb',
        date: new Date(Date.now() - 600000)
    }, {
        id: 8,
        upvotes: 114,
        title: 'Is muggle-baiting ever acceptable?',
        author: 'Falco',
        date: new Date(Date.now() - 60000000)
    }, {
        id: 9,
        upvotes: 74,
        title: 'Conserving waterplants cheatsheet.',
        author: 'Otto',
        date: new Date(Date.now() - 3000000)
    }, {
        id: 10,
        upvotes: 59,
        title: 'Could wizards prevent WW3?',
        author: 'Cuthbert',
        date: new Date(Date.now() - 6000000)
    }, {
        id: 11,
        upvotes: 46,
        title: 'Show WN: Wand-Extinguishing Protection',
        author: 'Humphrey22',
        date: new Date(Date.now() - 50000)
    }, {
        id: 12,
        upvotes: 30,
        title: 'Do you still use Alarte Ascendare?',
        author: 'Bellatrix1',
        date: new Date(Date.now() - 6000000)
    }, {
        id: 13,
        upvotes: 10,
        title: 'Mailing lists WN readers ought to know about?',
        author: 'Dracod',
        date: new Date(Date.now() - 60000)
    }, {
        id: 14,
        upvotes: 8,
        title: 'How to tell which spell used on a bug?',
        author: 'Lupin',
        date: new Date()
    }]);
});

app.get('*', function (req, res, next) {
    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    });

    var requestInitialData = activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

    Promise.resolve(requestInitialData).then(function (initialData) {
        var context = { initialData: initialData };
        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_App2.default, null)
        ));

        res.send('\n                <!doctype html>\n                <html lang="en">\n\n                <head>\n                    <meta charset="UTF-8">\n                    <title>SSR</title>\n                    <meta name="description" content="The HTML5 Herald">\n                    <meta name="author" content="SitePoint">\n                    <script>window.__initial_data__ = ' + (0, _serializeJavascript2.default)(initialData) + '</script>\n                </head>\n\n                <body>\n                    <div id="root">' + markup + '</div>\n                    <script src="/bundle.js"></script>\n                </body>\n                </html>\n            ');
    }).catch(next);
});

app.listen(port, function () {
    console.log('Server is listening on http://localhost:' + port);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _routes2.default.map(function (route, i) {
                    return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
                })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/home' },
                        'Home'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/news' },
                        'News'
                    )
                ),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Home Page'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Some introductory text about this site.'
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewsList = __webpack_require__(13);

var _NewsList2 = _interopRequireDefault(_NewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_Component) {
    _inherits(News, _Component);

    _createClass(News, null, [{
        key: 'requestInitialData',
        value: function requestInitialData() {
            return fetch('http://localhost:3000/api/news').then(function (response) {
                return response.json();
            });
        }
    }]);

    function News(props) {
        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        var initialData = void 0;

        if (props.staticContext) {
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        _this.state = { news: initialData };
        return _this;
    }

    _createClass(News, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.state.news) {
                News.requestInitialData().then(function (news) {
                    return _this2.setState({ news: news });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var news = this.state.news;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'News Page'
                ),
                _react2.default.createElement(_NewsList2.default, { news: news })
            );
        }
    }]);

    return News;
}(_react.Component);

exports.default = News;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _nodeTimeAgo = __webpack_require__(15);

var _nodeTimeAgo2 = _interopRequireDefault(_nodeTimeAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsList = function (_Component) {
    _inherits(NewsList, _Component);

    function NewsList(props) {
        _classCallCheck(this, NewsList);

        var _this = _possibleConstructorReturn(this, (NewsList.__proto__ || Object.getPrototypeOf(NewsList)).call(this, props));

        _this.state = {
            sortOrder: 'upvotes'
        };
        return _this;
    }

    _createClass(NewsList, [{
        key: 'setOrder',
        value: function setOrder(order, event) {
            event.preventDefault();
            this.setState({ sortOrder: order });
        }
    }, {
        key: 'render',
        value: function render() {
            var news = (0, _lodash2.default)(this.props.news, this.state.sortOrder, 'desc');
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Wizard News'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Sort By:',
                        ' ',
                        _react2.default.createElement(
                            'a',
                            {
                                href: '#',
                                onClick: this.setOrder.bind(this, 'upvotes') },
                            'Upvotes'
                        ),
                        '|',
                        _react2.default.createElement(
                            'a',
                            {
                                href: '#',
                                onClick: this.setOrder.bind(this, 'date') },
                            'Date'
                        )
                    )
                ),
                news.map(function (post) {
                    return _react2.default.createElement(
                        'div',
                        { key: post.id },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                post.id,
                                '. \u25B2'
                            ),
                            ' ',
                            post.title,
                            ' ',
                            _react2.default.createElement(
                                'small',
                                null,
                                '(by ',
                                post.author,
                                ')'
                            )
                        ),
                        _react2.default.createElement(
                            'small',
                            null,
                            post.upvotes,
                            ' upvotes | ',
                            (0, _nodeTimeAgo2.default)(post.date)
                        )
                    );
                })
            );
        }
    }]);

    return NewsList;
}(_react.Component);

exports.default = NewsList;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("lodash.orderby");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("node-time-ago");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map