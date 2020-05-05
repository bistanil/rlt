(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/common/wysiwyg-editor/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/common/wysiwyg-editor/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class WYSIWYG extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "convertHtmlToEditorState", value => {
      if (value) {
        const blocksFromHTML = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertFromHTML"])(value);
        const state = draft_js__WEBPACK_IMPORTED_MODULE_2__["ContentState"].createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
        return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createWithContent(state);
      }
    });

    _defineProperty(this, "onEditorStateChange", editorState => {
      this.setState({
        editorState
      });
      this.props.onChange(draftjs_to_html__WEBPACK_IMPORTED_MODULE_4___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent())));
    });

    this.state = {
      editorState: this.convertHtmlToEditorState(this.props.value)
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  render() {
    const editorState = this.state.editorState;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_3__["Editor"], {
      editorState: editorState,
      wrapperClassName: "demo-wrapper",
      editorClassName: "form-control",
      onEditorStateChange: this.onEditorStateChange
    }));
  }

}

_defineProperty(WYSIWYG, "propTypes", {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (WYSIWYG);

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

/***/ "./resources/js/modules/article/pages/add/Page.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/article/pages/add/Page.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/article/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/article/pages/add/components/Form.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import libs




 // import components



class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_4__["default"]({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10'
    });
    const article = this.props.article.toJson();
    this.state = {
      article,
      errors: this.validator.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const article = nextProps.article.toJson();

    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(this.state.article, article)) {
      this.setState({
        article
      });
    }
  }

  handleChange(name, value) {
    const errors = this.validator.errors;
    this.setState({
      article: _objectSpread({}, this.state.article, {
        [name]: value
      })
    });
    errors.remove(name);
    this.validator.validate(name, value).then(() => {
      this.setState({
        errors
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const article = this.state.article;
    const errors = this.validator.errors;
    this.validator.validateAll(article).then(success => {
      if (success) {
        this.submit(article);
      } else {
        this.setState({
          errors
        });
      }
    });
  }

  submit(article) {
    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["articleAddRequest"])(article)).catch(({
      error,
      statusCode
    }) => {
      const errors = this.validator.errors;

      if (statusCode === 422) {
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forOwn(error, (message, field) => {
          errors.add(field, message);
        });
      }

      this.setState({
        errors
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-9 ml-sm-auto col-md-10 pt-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.state, {
      onChange: this.handleChange,
      onSubmit: this.handleSubmit
    })));
  }

}

_defineProperty(Page, "displayName", 'AddArticle');

_defineProperty(Page, "propTypes", {
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/article/pages/add/components/Form.js":
/*!*******************************************************************!*\
  !*** ./resources/js/modules/article/pages/add/components/Form.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_wysiwyg_editor_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/wysiwyg-editor/index */ "./resources/js/common/wysiwyg-editor/index.js");



const displayName = 'ArticleFrom';
const propTypes = {
  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

const Form = ({
  article,
  errors,
  onChange,
  onSubmit: _onSubmit
}) => {
  function handleChange(name, value) {
    if (value !== article[name]) {
      onChange(name, value);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: e => _onSubmit(e)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "title",
    className: "col-sm-2 col-form-label"
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "title",
    name: "title",
    className: "form-control ".concat(errors.has('title') && 'is-invalid'),
    placeholder: "Title",
    value: article.title || '',
    onChange: e => handleChange(e.target.name, e.target.value)
  }), errors.has('title') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('title')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "description",
    className: "col-sm-2 col-form-label"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "description",
    name: "description",
    className: "form-control ".concat(errors.has('description') && 'is-invalid'),
    rows: "3",
    placeholder: "Description",
    value: article.description,
    onChange: e => handleChange(e.target.name, e.target.value)
  }), errors.has('description') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('description')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "content",
    className: "col-sm-2 col-form-label"
  }, "Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wysiwyg_editor_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "content",
    value: article.content,
    onChange: e => handleChange('content', e)
  }), errors.has('content') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('content')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10 ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: errors.any(),
    type: "submit",
    className: "btn btn-primary"
  }, "Update"))));
};

Form.displayName = displayName;
Form.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/modules/article/pages/add/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/article/pages/add/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/article/pages/add/Page.js");

 // import components



const mapStateToProps = () => {
  const article = new _Article__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  return {
    article
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
//# sourceMappingURL=5.js.map