(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./resources/js/modules/article/pages/list/Page.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/article/pages/list/Page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/article/service.js");
/* harmony import */ var _components_ArticleRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ArticleRow */ "./resources/js/modules/article/pages/list/components/ArticleRow.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Pagination */ "./resources/js/modules/article/pages/list/components/Pagination.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import libs



 // import components





class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const dispatch = this.props.dispatch;
    dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["articleListRequest"])({}));
  }

  pageChange(pageNumber) {
    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["articleListRequest"])({
      pageNumber
    }));
  }

  togglePublish(id) {
    const article = this.props.articles.find(article => article.id === id);
    if (!article) return;
    article.published = !article.published;

    if (article.published) {
      article.publishedAt = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    } else {
      article.publishedAt = null;
    }

    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["articleUpdateRequest"])(article.toJson()));
  }

  handleRemove(id) {
    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["articleRemoveRequest"])(id));
  }

  renderArticles() {
    return this.props.articles.map((article, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: index,
        article: article,
        index: index,
        togglePublish: this.togglePublish,
        handleRemove: this.handleRemove
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: "col-sm-9 ml-sm-auto col-md-10 pt-3",
      role: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Articles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-responsive table-striped"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      className: "thead-inverse"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created At"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Updated At"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Published At"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/articles/create",
      className: "btn btn-success"
    }, "Add")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.renderArticles())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
      meta: this.props.meta,
      onChange: this.pageChange
    }));
  }

}

_defineProperty(Page, "displayName", 'ArticlesPage');

_defineProperty(Page, "propTypes", {
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  articles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/components/ArticleRow.js":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/article/pages/list/components/ArticleRow.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



const displayName = 'ArticleRow';
const propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  togglePublish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

const ArticleRow = ({
  index,
  article,
  togglePublish,
  handleRemove
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, article.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, article.createdAt && article.createdAt.format('MMMM, DD YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, article.updatedAt && article.updatedAt.format('MMMM, DD YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group",
    role: "group",
    "aria-label": "Actions"
  }, article.published ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning",
    onClick: () => togglePublish(article.id)
  }, "Un Published") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success",
    onClick: () => togglePublish(article.id)
  }, "Publish"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn btn-primary",
    to: "articles/".concat(article.id, "/edit")
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger",
    onClick: () => handleRemove(article.id)
  }, "Delete"))));
};

ArticleRow.displayName = displayName;
ArticleRow.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ArticleRow);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/components/Pagination.js":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/article/pages/list/components/Pagination.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Pagination extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {//
    };
  }

  renderLinks() {
    const meta = this.props.meta;
    const range = [...Array(meta.lastPage).keys()];
    return range.map(n => {
      const className = meta.currentPage === n + 1 ? 'primary' : 'light';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        key: n,
        type: "button",
        className: "btn btn-".concat(className),
        onClick: () => this.props.onChange(n + 1)
      }, n + 1);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-toolbar",
      role: "toolbar",
      "aria-label": "Toolbar with button groups"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-group mr-2",
      role: "group",
      "aria-label": "First group"
    }, this.renderLinks()));
  }

}

_defineProperty(Pagination, "displayName", 'Pagination');

_defineProperty(Pagination, "propTypes", {
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/modules/article/pages/list/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/article/pages/list/Page.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import libs

 // import components



const mapStateToProps = state => {
  const _state$articles = state.articles,
        data = _state$articles.data,
        meta = _objectWithoutProperties(_state$articles, ["data"]);

  return {
    articles: data.map(article => new _Article__WEBPACK_IMPORTED_MODULE_1__["default"](article)),
    meta: Object.assign({}, meta)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__["default"]));

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

/***/ })

}]);
//# sourceMappingURL=7.js.map