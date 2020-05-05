(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/modules/user/pages/edit/Page.js":
/*!******************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/Page.js ***!
  \******************************************************/
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
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/user/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/user/pages/edit/components/Form.js");
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
      'name': 'required|min:3',
      'email': 'required|email',
      'phone': 'min:8|numeric',
      'about': 'min:10|max:1024'
    });
    const user = this.props.user.toJson();
    this.state = {
      user,
      errors: this.validator.errors
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user.toJson();

    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(this.state.user, user)) {
      this.setState({
        user
      });
    }
  }

  handleChange(name, value) {
    const errors = this.validator.errors;
    this.setState({
      user: _objectSpread({}, this.props.user, {
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
    const user = this.state.user;
    const errors = this.validator.errors;
    this.validator.validateAll(user).then(success => {
      if (success) {
        this.submit(user);
      } else {
        this.setState({
          errors
        });
      }
    });
  }

  submit(user) {
    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__["userUpdateRequest"])(user)).catch(({
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: "col-sm-9 ml-sm-auto col-md-10 pt-3",
      role: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-9 col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.state, {
      onChange: this.handleChange,
      onSubmit: this.handleSubmit
    })))));
  }

}

_defineProperty(Page, "displayName", 'UserPage');

_defineProperty(Page, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/user/pages/edit/components/Form.js":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/components/Form.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const displayName = 'UserFrom';
const propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

const Form = ({
  user,
  errors,
  onChange: _onChange,
  onSubmit: _onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: e => _onSubmit(e)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    className: "col-sm-2 col-form-label"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    className: "form-control ".concat(errors.has('name') && 'is-invalid'),
    placeholder: "Full Name",
    value: user.name || '',
    onChange: e => _onChange(e.target.name, e.target.value)
  }), errors.has('name') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('name')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    className: "col-sm-2 col-form-label"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control ".concat(errors.has('email') && 'is-invalid'),
    placeholder: "Email",
    value: user.email || '',
    onChange: e => _onChange(e.target.name, e.target.value)
  }), errors.has('email') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('email')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "phone",
    className: "col-sm-2 col-form-label"
  }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "phone",
    name: "phone",
    className: "form-control ".concat(errors.has('phone') && 'is-invalid'),
    placeholder: "Phone",
    value: user.phone || '',
    onChange: e => _onChange(e.target.name, e.target.value)
  }), errors.has('phone') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('phone')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "about",
    className: "col-sm-2 col-form-label"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "about",
    name: "about",
    className: "form-control ".concat(errors.has('about') && 'is-invalid'),
    rows: "3",
    placeholder: "About",
    value: user.about || '',
    onChange: e => _onChange(e.target.name, e.target.value)
  }), errors.has('about') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first('about')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ "./resources/js/modules/user/pages/edit/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../User */ "./resources/js/modules/user/User.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/user/pages/edit/Page.js");
/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */
// import libs

 // import components

 // map store state as properties of the component

const mapStateToProps = state => {
  return {
    user: new _User__WEBPACK_IMPORTED_MODULE_1__["default"](state.user)
  };
}; // binding store with component


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./resources/js/modules/user/service.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/user/service.js ***!
  \**********************************************/
/*! exports provided: userUpdateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUpdateRequest", function() { return userUpdateRequest; });
/* harmony import */ var _utils_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Http */ "./resources/js/utils/Http.js");
/* harmony import */ var _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Transformer */ "./resources/js/utils/Transformer.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./resources/js/modules/user/store/actions.js");



function userUpdateRequest(params) {
  return dispatch => new Promise((resolve, reject) => {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/users/".concat(params.id), _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].send(params)).then(res => {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["userUpdate"](_utils_Transformer__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(res.data.user)));
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

/***/ }),

/***/ "./resources/js/modules/user/store/actions.js":
/*!****************************************************!*\
  !*** ./resources/js/modules/user/store/actions.js ***!
  \****************************************************/
/*! exports provided: userUpdate, unsetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUpdate", function() { return userUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetUser", function() { return unsetUser; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./resources/js/modules/user/store/action-types.js");
/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

function userUpdate(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATE"],
    payload
  };
}
function unsetUser() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["USER_UNSET"]
  };
}

/***/ })

}]);
//# sourceMappingURL=8.js.map