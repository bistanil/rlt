(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/common/articles/listing/components/Article.js":
/*!********************************************************************!*\
  !*** ./resources/js/common/articles/listing/components/Article.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
// import libs

 // import components


const displayName = 'ArticleComponent';
const propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
}; // const renderAuthor = (article) => {
//   return article.user && `By ${ article.user.name }`
// }

const renderPublishedAt = article => {
  return article.publishedAt && "at ".concat(article.publishedAt.format('MMMM D, YYYY'));
};

function render({
  article
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-9 mb-5 mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "card-title"
  }, article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle mb-2 text-muted"
  }, renderPublishedAt(article)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text"
  }, article.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "blog/".concat(article.slug),
    className: "card-link"
  }, "Read More"))));
}

render.displayName = displayName;
render.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./resources/js/common/articles/listing/components/Articles.js":
/*!*********************************************************************!*\
  !*** ./resources/js/common/articles/listing/components/Articles.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./resources/js/common/articles/listing/components/Article.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Articles extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {//
    };
  }

  renderArticles() {
    return this.props.articles.map((article, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "article-".concat(index),
        index: index,
        article: article
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "components-articles"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, this.props.articles && this.renderArticles())));
  }

}

_defineProperty(Articles, "displayName", 'Articles');

_defineProperty(Articles, "propTypes", {
  articles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "./resources/js/common/articles/listing/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/common/articles/listing/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_article_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/article/Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Articles */ "./resources/js/common/articles/listing/components/Articles.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// libs

 // components



const mapStateToProps = state => {
  const _state$articles = state.articles,
        data = _state$articles.data,
        meta = _objectWithoutProperties(_state$articles, ["data"]);

  return {
    articles: data.map(article => new _modules_article_Article__WEBPACK_IMPORTED_MODULE_1__["default"](article)),
    meta: Object.assign({}, meta)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_Articles__WEBPACK_IMPORTED_MODULE_2__["default"]));

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

/***/ "./resources/js/modules/web/pages/blog/list/Page.js":
/*!**********************************************************!*\
  !*** ./resources/js/modules/web/pages/blog/list/Page.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_articles_listing_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/articles/listing/index */ "./resources/js/common/articles/listing/index.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../article/service */ "./resources/js/modules/article/service.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import components

 // import services



class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.props.dispatch(Object(_article_service__WEBPACK_IMPORTED_MODULE_3__["articleListRequest"])({
      url: '/articles/published'
    }));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_articles_listing_index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

_defineProperty(Page, "displayName", "HomePage");

_defineProperty(Page, "propTypes", {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/web/pages/blog/list/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/modules/web/pages/blog/list/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/web/pages/blog/list/Page.js");
// import libs
 // import components


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])()(_Page__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=4.js.map