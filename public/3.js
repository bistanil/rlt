(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/react-document-title/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-document-title/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),
    withSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title) {
  var nextTitle = title || '';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

function DocumentTitle() {}
DocumentTitle.prototype = Object.create(React.Component.prototype);

DocumentTitle.displayName = 'DocumentTitle';
DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
};

DocumentTitle.prototype.render = function() {
  if (this.props.children) {
    return React.Children.only(this.props.children);
  } else {
    return null;
  }
};

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);


/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./resources/js/modules/article/Article.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/article/Article.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Model */ "./resources/js/utils/Model.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/User */ "./resources/js/modules/user/User.js");




class Article extends _utils_Model__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(props) {
    super(props);
    this.initialize(props);
  }

  initialize(props) {
    super.initialize(props);
    this.slug = props.slug || '';
    this.title = props.title || '';
    this.description = props.description || '';
    this.content = props.content || '';
    this.published = props.published || false;
    this.publishedAt = props.publishedAt ? moment__WEBPACK_IMPORTED_MODULE_0___default()(props.publishedAt) : null; // relate user model

    this.user = props.user ? new _user_User__WEBPACK_IMPORTED_MODULE_2__["default"](props.user) : null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./resources/js/modules/article/service.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/article/service.js ***!
  \*************************************************/
/*! exports provided: articleAddRequest, articleUpdateRequest, articleRemoveRequest, articleListRequest, articleEditRequest, articleFetchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleAddRequest", function() { return articleAddRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleUpdateRequest", function() { return articleUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleRemoveRequest", function() { return articleRemoveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListRequest", function() { return articleListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleEditRequest", function() { return articleEditRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleFetchRequest", function() { return articleFetchRequest; });
/* harmony import */ var _utils_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Http */ "./resources/js/utils/Http.js");
/* harmony import */ var _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Transformer */ "./resources/js/utils/Transformer.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./resources/js/modules/article/store/actions.js");




function transformRequest(parms) {
  return _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].send(parms);
}

function transformResponse(params) {
  return _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(params);
}

function articleAddRequest(params) {
  return dispatch => new Promise((resolve, reject) => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].post('/articles', transformRequest(params)).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["add"](transformResponse(res.data)));
      return resolve();
    }).catch(err => {
      const statusCode = err.response.status;
      const data = {
        error: null,
        statusCode
      };

      if (statusCode === 422) {
        const resetErrors = {
          errors: err.response.data,
          replace: false,
          searchStr: '',
          replaceStr: ''
        };
        data.error = _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].resetValidationFields(resetErrors);
      } else if (statusCode === 401) {
        data.error = err.response.data.message;
      }

      return reject(data);
    });
  });
}
function articleUpdateRequest(params) {
  return dispatch => new Promise((resolve, reject) => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].patch("articles/".concat(params.id), transformRequest(params)).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["add"](transformResponse(res.data)));
      return resolve();
    }).catch(err => {
      const statusCode = err.response.status;
      const data = {
        error: null,
        statusCode
      };

      if (statusCode === 422) {
        const resetErrors = {
          errors: err.response.data,
          replace: false,
          searchStr: '',
          replaceStr: ''
        };
        data.error = _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].resetValidationFields(resetErrors);
      } else if (statusCode === 401) {
        data.error = err.response.data.message;
      }

      return reject(data);
    });
  });
}
function articleRemoveRequest(id) {
  return dispatch => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].delete("articles/".concat(id)).then(() => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["remove"](id));
    }).catch(err => {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleListRequest({
  pageNumber = 1,
  url = '/articles'
}) {
  return dispatch => {
    if (pageNumber > 1) {
      url = url + "?page=".concat(pageNumber);
    }

    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["list"](transformResponse(res.data)));
    }).catch(err => {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleEditRequest(id) {
  return dispatch => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].get("articles/".concat(id)).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["add"](transformResponse(res.data)));
    }).catch(err => {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleFetchRequest(slug) {
  return dispatch => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].get("articles/published/".concat(slug)).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["add"](transformResponse(res.data)));
    }).catch(err => {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

/***/ }),

/***/ "./resources/js/modules/article/store/actions.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/article/store/actions.js ***!
  \*******************************************************/
/*! exports provided: add, update, remove, list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./resources/js/modules/article/store/action-types.js");
/* ============
 * Actions for the article module
 * ============
 *
 * The actions that are available on the
 * article module.
 */

function add(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ARTICLE_ADD"],
    payload
  };
}
function update(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ARTICLE_UPDATE"],
    payload
  };
}
function remove(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ARTICLE_REMOVE"],
    payload
  };
}
function list(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ARTICLE_LIST"],
    payload
  };
}

/***/ }),

/***/ "./resources/js/modules/web/pages/blog/details/Page.js":
/*!*************************************************************!*\
  !*** ./resources/js/modules/web/pages/blog/details/Page.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-document-title */ "./node_modules/react-document-title/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../article/service */ "./resources/js/modules/article/service.js");
/* harmony import */ var _values_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../values/index */ "./resources/js/values/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import libs






class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {//
    };
  }

  UNSAFE_componentWillMount() {
    this.loadArticle();
  }

  loadArticle() {
    const _this$props = this.props,
          match = _this$props.match,
          article = _this$props.article,
          dispatch = _this$props.dispatch;

    if (!article.slug) {
      dispatch(Object(_article_service__WEBPACK_IMPORTED_MODULE_3__["articleFetchRequest"])(match.params.slug));
    }
  }

  renderPublishedDate() {
    const publishedAt = this.props.article.publishedAt;

    if (publishedAt) {
      return "at ".concat(publishedAt.format('MMMM d, YYYY'));
    }
  }

  renderAuthor() {
    const user = this.props.article.user;

    if (user) {
      return "by ".concat(user.name);
    }
  }

  createMarkup() {
    return {
      __html: this.props.article.content
    };
  }

  renderArticle() {
    const article = this.props.article;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-sm-9 mb-5 mx-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted mb-5"
    }, this.renderPublishedDate(), " ", this.renderAuthor()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted mb-5"
    }, article.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: this.createMarkup()
    }));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "".concat(this.props.article.title, " - ").concat(_values_index__WEBPACK_IMPORTED_MODULE_4__["APP_TITLE"])
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "components-articles"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, this.renderArticle()))));
  }

}

_defineProperty(Page, "displayName", 'ArticleShowPage');

_defineProperty(Page, "propTypes", {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/web/pages/blog/details/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/modules/web/pages/blog/details/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _article_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../article/Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/web/pages/blog/details/Page.js");

 // import components



const mapStateToProps = (state, router) => {
  const params = router.match.params;
  const article = state.articles.data.find(article => article.slug === params.slug);
  return {
    article: article ? new _article_Article__WEBPACK_IMPORTED_MODULE_1__["default"](article) : new _article_Article__WEBPACK_IMPORTED_MODULE_1__["default"]({})
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./resources/js/values/index.js":
/*!**************************************!*\
  !*** ./resources/js/values/index.js ***!
  \**************************************/
/*! exports provided: APP_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_TITLE", function() { return APP_TITLE; });
const APP_TITLE = 'Your Blog Name';


/***/ })

}]);
//# sourceMappingURL=3.js.map