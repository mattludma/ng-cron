(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-started-get-started-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/containers/doc/get-started/get-started.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/ng-cron/ng-cron/node_modules/raw-loader/dist/cjs.js!./src/app/containers/doc/get-started/get-started.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"doc-title\">\n\tGet Started\n</h1>\n\n<p>\n\tThis is an open source project that builds a cron builder component for Angular applications.\n\t<br>\n\tIt supports\n\t<a\n\t\ttarget=\"blank\"\n\t\thref=\"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\">\n\t\tQuartz cron string format\n\t</a>\n\tfor both input and output.\n\t<br>\n\tInspired by this\n\t<a\n\t\ttarget=\"blank\"\n\t\thref=\"https://www.freeformatter.com/cron-expression-generator-quartz.html\">\n\t\tnon-angular\n\t</a>\n\timplementation.\n</p>\n\n<h2 class=\"doc-subtitle mt-5\">Installation</h2>\n<p>\n\tYou can use either the npm or yarn command-line tool to install packages.\n\t<br>\n\t<code>npm install --save ng-lightning</code>\n</p>\n\n<h2 class=\"doc-subtitle mt-5\">Display the cron component</h2>\n<p>\n\tYou need to import the CronBootstrapModule that you want to display by adding the following lines to your ngModule.\n</p>\n\n<ngx-prism language=\"js\">{{ngModule}}</ngx-prism>\n\n<p>\n\tAdd the cron component into yout template \n</p>\n\n<ngx-prism language=\"html\">{{template}}</ngx-prism>\n\n<h2 class=\"doc-subtitle mt-5\">UI widget</h2>\n<p>\n\tAs a result you will have this widget\n</p>\n\n<div class=\"demo\">\n\t<quartz-cron></quartz-cron>\n</div>");

/***/ }),

/***/ "./src/app/containers/doc/get-started/get-started-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/containers/doc/get-started/get-started-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DocGetStartedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocGetStartedRoutingModule", function() { return DocGetStartedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _get_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-started.component */ "./src/app/containers/doc/get-started/get-started.component.ts");




const routes = [
    {
        path: '',
        component: _get_started_component__WEBPACK_IMPORTED_MODULE_3__["DocGetStartedComponent"]
    }
];
let DocGetStartedRoutingModule = class DocGetStartedRoutingModule {
};
DocGetStartedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], DocGetStartedRoutingModule);



/***/ }),

/***/ "./src/app/containers/doc/get-started/get-started.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/doc/get-started/get-started.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocGetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocGetStartedComponent", function() { return DocGetStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let DocGetStartedComponent = class DocGetStartedComponent {
    constructor() {
        this.ngModule = `import { QuartzCronModule } from '@sbzen/cron';

@NgModule ({
	imports: [
		QuartzCronModule
	]
})`;
        this.template = '<quartz-cron></quartz-cron>';
    }
};
DocGetStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-started.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/containers/doc/get-started/get-started.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-started.scss */ "./src/app/containers/doc/get-started/get-started.scss")).default]
    })
], DocGetStartedComponent);



/***/ }),

/***/ "./src/app/containers/doc/get-started/get-started.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/containers/doc/get-started/get-started.module.ts ***!
  \******************************************************************/
/*! exports provided: DocGetStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocGetStartedModule", function() { return DocGetStartedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-prism/core */ "../../node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _sbzen_cron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sbzen/cron */ "../../libs/cron/src/index.ts");
/* harmony import */ var _get_started_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-started-routing.module */ "./src/app/containers/doc/get-started/get-started-routing.module.ts");
/* harmony import */ var _get_started_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-started.component */ "./src/app/containers/doc/get-started/get-started.component.ts");








let DocGetStartedModule = class DocGetStartedModule {
};
DocGetStartedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_prism_core__WEBPACK_IMPORTED_MODULE_4__["PrismModule"],
            _sbzen_cron__WEBPACK_IMPORTED_MODULE_5__["QuartzCronModule"],
            _get_started_routing_module__WEBPACK_IMPORTED_MODULE_6__["DocGetStartedRoutingModule"]
        ],
        declarations: [
            _get_started_component__WEBPACK_IMPORTED_MODULE_7__["DocGetStartedComponent"]
        ],
        exports: [
            _get_started_component__WEBPACK_IMPORTED_MODULE_7__["DocGetStartedComponent"]
        ]
    })
], DocGetStartedModule);



/***/ }),

/***/ "./src/app/containers/doc/get-started/get-started.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/doc/get-started/get-started.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo {\n  max-width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25nLWNyb24vbmctY3Jvbi9hcHBzL2RvYy9zcmMvYXBwL2NvbnRhaW5lcnMvZG9jL2dldC1zdGFydGVkL2dldC1zdGFydGVkLnNjc3MiLCJhcHBzL2RvYy9zcmMvYXBwL2NvbnRhaW5lcnMvZG9jL2dldC1zdGFydGVkL2dldC1zdGFydGVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtBQ0NEIiwiZmlsZSI6ImFwcHMvZG9jL3NyYy9hcHAvY29udGFpbmVycy9kb2MvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vIHtcblx0bWF4LXdpZHRoOiA3MDBweDtcbn0iLCIuZGVtbyB7XG4gIG1heC13aWR0aDogNzAwcHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=get-started-get-started-module-es2015.js.map