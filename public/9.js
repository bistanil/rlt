(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/modules/auth/pages/login/Page.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/Page.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/auth/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/auth/pages/login/components/Form.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import libs






 // import components

 // initialize component

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // set name of the component
  // validate props
  constructor(props) {
    super(props);
    this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_6__["default"]({
      email: 'required|email',
      password: 'required|min:6'
    }); // set the state of the app

    this.state = {
      credentials: {
        email: '',
        password: '',
        remember: false
      },
      errors: this.validator.errors
    }; // bind component with event handlers

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } // after mounting the component add a style to the body


  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').attr('style', 'background-color: #eee');
  } // remove body style before component leaves dom


  componentWillUnmount() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').removeAttr('style');
  } // event to handle input change


  handleChange(name, value) {
    const errors = this.validator.errors;
    this.setState({
      credentials: _objectSpread({}, this.state.credentials, {
        [name]: value
      })
    });
    errors.remove(name);
    this.validator.validate(name, value).then(() => {
      this.setState({
        errors
      });
    });
  } // event to handle form submit


  handleSubmit(e) {
    e.preventDefault();
    const credentials = this.state.credentials;
    const errors = this.validator.errors;
    this.validator.validateAll(credentials).then(success => {
      if (success) {
        this.submit(credentials);
      } else {
        this.setState({
          errors
        });
      }
    });
  }

  submit(credentials) {
    this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_5__["login"])(credentials)).catch(({
      error,
      statusCode
    }) => {
      const errors = this.validator.errors;

      if (statusCode === 422) {
        lodash__WEBPACK_IMPORTED_MODULE_3___default.a.forOwn(error, (message, field) => {
          errors.add(field, message);
        });
      } else if (statusCode === 401) {
        errors.add('password', error);
      }

      this.setState({
        errors
      });
    });
  } // render component


  render() {
    // check if user is authenticated then redirect him to home page
    if (this.props.isAuthenticated) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/"
      });
    }

    const props = {
      email: this.state.credentials.email,
      password: this.state.credentials.password,
      remember: this.state.credentials.remember,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container py-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mx-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "anchor"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card has-shadow"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"], props))))))));
  }

}

_defineProperty(Page, "displayName", 'LoginPage');

_defineProperty(Page, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/auth/pages/login/components/Form.js":
/*!******************************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/components/Form.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



const displayName = 'LoginForm';
const propTypes = {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  password: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  remember: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

const Form = ({
  email,
  password,
  remember,
  errors,
  handleChange,
  handleSubmit
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
  className: "form",
  role: "form",
  onSubmit: handleSubmit,
  noValidate: true
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "card-title"
}, "Please sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "form-group"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  htmlFor: "email",
  className: "sr-only"
}, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "text",
  className: "form-control form-control-lg rounded-0 ".concat(errors.has('email') && 'is-invalid'),
  name: "email",
  id: "email",
  placeholder: "Email address",
  value: email || '',
  onChange: e => handleChange(e.target.name, e.target.value),
  required: true,
  autoFocus: true
}), errors.has('email') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "invalid-feedback"
}, errors.first('email'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "form-group"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  htmlFor: "password",
  className: "sr-only"
}, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "password",
  className: "form-control form-control-lg rounded-0 ".concat(errors.has('password') && 'is-invalid'),
  id: "password",
  name: "password",
  placeholder: "Password",
  value: password || '',
  onChange: e => handleChange(e.target.name, e.target.value),
  required: true
}), errors.has('password') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "invalid-feedback"
}, errors.first('password'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: "custom-control custom-checkbox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "checkbox",
  name: "remember",
  className: "custom-control-input",
  onChange: e => handleChange(e.target.name, !remember)
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "custom-control-indicator"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "custom-control-description small"
}, "Remember me on this computer"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "btn btn-lg btn-primary btn-block",
  type: "submit",
  disabled: errors.any()
}, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Not a member? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/register"
}, "Signup here")));

Form.displayName = displayName;
Form.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/modules/auth/pages/login/index.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/auth/pages/login/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/auth/pages/login/Page.js");
// import libs
 // import components



const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=9.js.map