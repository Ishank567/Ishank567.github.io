(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container>\n   \n  <mat-sidenav #sidenav role=\"navigation\">\n   <mat-nav-list>\n     <a mat-list-item routerLink=\"/insight\" (click)=\"sidenav.close()\">\n       <span>Insight</span>\n     </a>\n     <a mat-list-item routerLink=\"/global-service\" (click)=\"sidenav.close()\">\n      <span>Global Service</span>\n    </a>\n    <a mat-list-item routerLink=\"/financial-service\" (click)=\"sidenav.close()\">\n      <span>Financial Service</span>\n    </a>\n    <a mat-list-item routerLink=\"/pay-here\" (click)=\"sidenav.close()\">\n      <span>Pay Here</span>\n    </a>\n   </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <mat-toolbar>\n          <div fxHide.gt-xs>\n            <i class=\"material-icons\" (click)=\"sidenav.toggle()\">format_align_justify</i>\n          </div>\n          <div>\n            <a routerLink=\"/\">\n            <img class=\"logo\"src=\"../assets/samrat-logo.PNG\"></a>\n          </div>\n          <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n            <ul fxLayout fxLayoutGap=\"20px\"fxHide.xs>\n              <li><a routerLink=\"/insight\">Insight</a></li>\n              <li><a routerLink=\"/global-service\">Global Service</a></li>\n              <li><a routerLink=\"/financial-service\">Financial Service\n                </a>\n                </li>\n              <li><a routerLink=\"/pay-here\">Pay Here</a></li>\n            </ul>\n          </div>\n        </mat-toolbar>\n    \n  </mat-sidenav-content>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n  \n<app-home></app-home>\n<footer class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <span class=\"footer-section\"><h2 class=\"footer-head\">About</h2>\n        <ul>\n          <li>Contact Us</li>\n          <li>Gloval Community</li>\n          <li>Short-term Saving</li>\n          <li>Long-Term Saving</li>\n          <li>For Students</li>\n        </ul>\n      </span>\n      <span class=\"footer-section\"><h2 class=\"footer-head\">Service</h2>\n        <ul>\n          <li>Financial Consultancy</li>\n          <li>Funding</li>\n          <li>Investment Management</li>\n          <li>New User</li>\n          <li>FAQs</li>\n          \n        </ul>\n\n      </span>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"\"><h2 class=\"\">Reach Us</h2>\n        <div class=\"second\">Business: <a href=\"business@samratinvestment.com\">business@samratinvestment.com</a></div>\n        <div class=\"second\">Phone No: 9501174361</div>\n      </div>\n        <div class=\"mapouter\">\n          <iframe width=\"320\" height=\"300\" src=\"https://maps.google.com/maps?q=samrat%20investment%20Koramangala%20Club%20Rd%2C%20Santhosapuram%2C%206th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560095&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\"></iframe>\n        </div>\n\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contact-us works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/financial-service/financial-service.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/financial-service/financial-service.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>financial-service works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/global-service/global-service.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/global-service/global-service.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>global-service works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content container\">\n    <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6 text\">\n     <h1 class=\"head-text\">World we define together</h1>\n     <span class=\"line-text\">We evolved to transform the way your economy works for you, to a great experience. What you have earned; Serving you the Value & Profit.</span>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n        <mat-card class=\"card\">\n            <mat-card-header class=\"mat-header\">\n                <mat-card-title>\n                    <div class=\"title\"> \n                    <span class=\"card-title\">Samrat</span>\n                    <span class=\"card-title2\">Investments</span>\n                </div> \n                <div class=\"mat-t\">Not mere a banker, something beyond</div>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              <div class=\"ideas\">\n                  <span class=\"card-icon\"><img src=\"../../assets/icons8-service-24.png\"></span>\n                  <span class=\"card-heading\">Financial Services</span>\n                  <div class=\"card-content\">Reducing Risk to saving profitability</div>\n              </div>\n              <div class=\"ideas\">\n                    <span class=\"card-icon\"><img src=\"../../assets/icons8-sales-performance-24.png\"></span>\n                    <span class=\"card-heading\">Consultancy</span>\n                    <div class=\"card-content\">Authentic information to research innovation</div>\n                </div>\n                <div class=\"ideas\">\n                       <span class=\"card-icon\"><img src=\"../../assets/icons8-consultation-24.png\"></span>\n                       <span class=\"card-heading\">Investment</span>\n                       <div class=\"card-content\">Great ideas to consumer experience</div>\n                    </div>\n                    <div class=\"ideas\">\n                            <span class=\"card-icon\"><img src=\"../../assets/icons8-consultation-24.png\"></span>\n                            <span class=\"card-heading\">Freedom Venture</span>\n                            <div class=\"card-content\">Service opportunity to investors profitability</div>\n                         </div>\n                         <div class=\"ideas\">\n                                <span class=\"card-icon\"><img src=\"../../assets/icons8-crowdfunding-24.png\"></span>\n                                <span class=\"card-heading\">Funding</span>\n                                <div class=\"card-content\">Bringing ideas to life</div>\n                             </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>\n\n</div>\n\n\n\n   <div class=\"container\">\n       <h1 class=\"service-head\">Our Services</h1>\n       <mat-card class=\"card\" data-aos=\"fade-right\">\n       <div class=\"row\">\n       <div class=\"col-lg-6 col-md-12 fxHide.gt-xs\">\n           <img class=\"image\" src=\"../../assets/financial.jpg\">\n       </div>\n           <div class=\"col-lg-6 col-md-12 \"><h3 class=\"card-title\">Financial Services</h3>\n            <p class=\"card-desc\">Financial service is designed to get you higher profit on saving for your financial strength. You can customize your financial plan, let you experience financial freedom. Caring your choice and securing your wealth. Positive loss zone experience.\n                <b>Most profitable personal saving. Advanced, analyzed & valuable investing</b></p>\n                <div class=\"card-title\"><h4 class=\"points\">Key Points</h4>\n                <ul class=\"card-list\">\n                    <li>Customise your financial scheme</li>\n                    <li>Strengthening your 'Personal savings'</li>\n                    <li>Minimum assured return rate 8%-23% to 'Live value'</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    </mat-card>\n\n    <mat-card class=\"card\"data-aos=\"fade-left\">\n       <div class=\"row\">\n          \n           <div class=\"col-lg-6 col-md-12\">\n             <h3 class=\"card-title\">Funding</h3>\n               <p class=\"card-desc\">Bring your ideas and start-up to a new level of global platform and customer focused.\n                  Build your dreams by innovating the way of business and service quality.</p>\n                  <div class=\"card-title\"><h4 class=\"points\">Key Points</h4>\n                      <ul class=\"card-list\">\n                          <li>Infinite opportunity for startups</li>\n                          <li>Problem solving idea with simplifying life</li>\n                          <li>Excellent business & service arena</li>\n                      </ul>\n                  </div>\n           </div>\n           <div class=\"col-lg-6 col-md-12 fxHide.gt-xs\">\n                <img class=\"image\" src=\"../../assets/funding.jpg\">\n               </div>\n\n       </div>\n    </mat-card>\n    <mat-card class=\"card\"data-aos=\"fade-right\">\n       <div class=\"row\">\n           <div class=\"col-lg-6 col-md-12 fxHide.gt-xs\">\n               <img class=\"image\" src=\"../../assets/freedom.jpg\">\n           </div>\n           <div class=\"col-lg-6 col-md-12\">\n                <h3 class=\"card-title\">Freedom Venture</h3>\n                <p class=\"card-desc\">Globally collaboration of moderate investor & small business-brand/service provider for their mutual growth.\n                     Offers quality experience in products and service to people in all locality. Let life be full of moments and livings.\n\n                </p>\n                   <div class=\"card-title\"><h4 class=\"points\">Key Points</h4>\n                       <ul class=\"card-list\">\n                           <li>Upgrading investor & service connectivity</li>\n                           <li>Bringing quality experience to people</li>\n                           <li>Service provider & investor profitability</li>\n                       </ul>\n                   </div>\n           </div>\n       </div>\n    </mat-card>\n    <mat-card class=\"card\"data-aos=\"fade-left\">\n       <div class=\"row\" >\n           <div class=\"col-lg-6 col-md-12\">\n                <h3 class=\"card-title\">Business Feature & Services</h3>\n                \n                       <ul class=\"card-list\">\n                           <li>Advanced Deep Insight</li>\n                           <li>Business Innovation</li>\n                           <li>Technology and AI</li>\n                           <li>Operation and Management</li>\n                           <li>Risk & Wealth Management</li>\n                       </ul>\n                    \n                    <div>\n                        <h3 class=\"card-title\">Individual Services</h3>\n                            <ul class=\"card-list\">\n                                    <li>Wealth Management</li>\n                                    <li>Financial Planning</li>\n                                    <li>Tax Reduction</li>\n                                    <li>Economic Growth</li>\n                                </ul>\n\n                            </div>\n       </div>\n       <div class=\"col-lg-6 col-md-12\">\n            <img class=\"image\" src=\"../../assets/business.jpg\">\n         </div>\n    </div>\n</mat-card>\n   </div> \n<div class=\"container\">\n   <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6 startup-head\"><h1 >Recent Startups</h1>\n        <h3 class=\"card-list\">We built more platforms to be explored</h3>\n        <span class=\"startup\"><a  href=\"https://www.loveonn.com/\" target=\"_blank\"><img  src=\"../../assets/loveonn.jpg\"></a></span>\n        <span class=\"startup\"><img src=\"../../assets/mama-casa.jpg\"></span>\n        <span class=\"startup\"><img src=\"../../assets/dailygraph.jpg\"></span>\n        <span class=\"startup\"><img src=\"../../assets/inspyr-foods.jpg\"></span>\n        <span class=\"startup\"><img src=\"../../assets/antariksh.jpg\"></span></div>\n\n\n    <div class=\"col-md-12 col-lg-6 form\">\n            <div class=\"p-3\">\n                    <div class=\"contact\">\n                      <h2>CONTACT US</h2>\n                    </div>\n                    <form>\n                    <mat-form-field appearance=\"outline\" class=\"form-contact\">\n                      <mat-label>Your Name</mat-label>\n                      <input matInput placeholder=\"Name\" required>\n                     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"form-contact\">\n                      <mat-label>Phone Number</mat-label>\n                      <input matInput placeholder=\"Phone No.\" required>\n                     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"form-contact\">\n                      <mat-label>Email</mat-label>\n                      <input matInput placeholder=\"Email\" required>\n                      \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"form-contact\">\n                      <mat-label>Your Message</mat-label>\n                      <textarea matInput placeholder=\"Message\"></textarea>\n                    </mat-form-field>\n                </form>\n                    <div class=\"text-center\" style=\"padding:0 15px;\">\n                        <button class=\"w-100 p-2\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n        \n    </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/insight/insight.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/insight/insight.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>insight works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pay-here/pay-here.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pay-here/pay-here.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div><h2>Cashback upto *₹700</h2></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 60px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:hover, a:active {\n  color: #d62828;\n}\n\nmat-toolbar {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n  background-color: wheat;\n}\n\n.footer-section {\n  display: inline-block;\n  padding-left: 40px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.footer-head {\n  text-align: center;\n  color: blue;\n}\n\nfooter {\n  background-color: wheat;\n}\n\n.second {\n  padding: 6px;\n  display: block;\n  color: #1900ff;\n}\n\n@media only screen and (max-width: 992px) {\n  .mapouter {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJc2hhbmtcXERvY3VtZW50c1xcQ29kaW5nIEJsb2Nrc1xcQW5ndWxhckludHJvXFxTYW1yYXQtSW52ZXN0bWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FERUE7RUFFSyxjQUFBO0FDQUw7O0FER0E7RUFFSSxnSEFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDR0o7O0FEQUE7RUFDSTtJQUNJLFlBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297IFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufVxyXG5cclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBcclxuICAgICBjb2xvcjogcmdiKDIxNCwgNDAsIDQwKTtcclxuICAgICBcclxufVxyXG5tYXQtdG9vbGJhcntcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XHJcbn1cclxuLmZvb3Rlci1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuLmZvb3Rlci1oZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDsgICAgXHJcbn1cclxuLnNlY29uZHtcclxuICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiKDI1LCAwLCAyNTUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLm1hcG91dGVye1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5sb2dvIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogI2Q2MjgyODtcbn1cblxubWF0LXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmZvb3Rlci1oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cbi5zZWNvbmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzE5MDBmZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFwb3V0ZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Samrat-Investment';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _global_service_global_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-service/global-service.component */ "./src/app/global-service/global-service.component.ts");
/* harmony import */ var _financial_service_financial_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./financial-service/financial-service.component */ "./src/app/financial-service/financial-service.component.ts");
/* harmony import */ var _pay_here_pay_here_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay-here/pay-here.component */ "./src/app/pay-here/pay-here.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"],
            _global_service_global_service_component__WEBPACK_IMPORTED_MODULE_7__["GlobalServiceComponent"],
            _financial_service_financial_service_component__WEBPACK_IMPORTED_MODULE_8__["FinancialServiceComponent"],
            _pay_here_pay_here_component__WEBPACK_IMPORTED_MODULE_9__["PayHereComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/financial-service/financial-service.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/financial-service/financial-service.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFuY2lhbC1zZXJ2aWNlL2ZpbmFuY2lhbC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/financial-service/financial-service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/financial-service/financial-service.component.ts ***!
  \******************************************************************/
/*! exports provided: FinancialServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialServiceComponent", function() { return FinancialServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinancialServiceComponent = class FinancialServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinancialServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financial-service',
        template: __webpack_require__(/*! raw-loader!./financial-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/financial-service/financial-service.component.html"),
        styles: [__webpack_require__(/*! ./financial-service.component.scss */ "./src/app/financial-service/financial-service.component.scss")]
    })
], FinancialServiceComponent);



/***/ }),

/***/ "./src/app/global-service/global-service.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/global-service/global-service.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zZXJ2aWNlL2dsb2JhbC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-service/global-service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/global-service/global-service.component.ts ***!
  \************************************************************/
/*! exports provided: GlobalServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServiceComponent", function() { return GlobalServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GlobalServiceComponent = class GlobalServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
GlobalServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-global-service',
        template: __webpack_require__(/*! raw-loader!./global-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/global-service/global-service.component.html"),
        styles: [__webpack_require__(/*! ./global-service.component.scss */ "./src/app/global-service/global-service.component.scss")]
    })
], GlobalServiceComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  padding-left: 5vw;\n  padding-top: 7vh;\n}\n\n.head-text {\n  font-weight: bold;\n  color: rgba(116, 49, 49, 0.884);\n  padding-bottom: 15px;\n}\n\n.line-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.title {\n  padding-top: 1vh;\n  font-weight: 700;\n  font-size: 20px;\n}\n\n.mat-header {\n  background-image: linear-gradient(120deg, #ddbb7b, #a5675c);\n  padding-left: 50px;\n}\n\n.card {\n  margin-top: 7vh;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 0.5em;\n  margin-bottom: 5vh;\n  background-color: wheat;\n}\n\n.card-title {\n  color: rgba(226, 40, 40, 0.884);\n  padding-right: 10px;\n}\n\n.mat-t {\n  font-family: cursive;\n  font-weight: 600;\n}\n\n.card-title2 {\n  color: blue;\n}\n\n.card-icon {\n  padding-right: 5px;\n}\n\n.card-heading {\n  font-size: 20px;\n  font-weight: bold;\n  color: rgba(226, 40, 40, 0.884);\n}\n\n.card-content {\n  font-size: 15px;\n  font-weight: 600;\n  padding-left: 30px;\n}\n\n.ideas {\n  margin-bottom: 10px;\n}\n\n.service {\n  text-align: center;\n  box-shadow: 0 15px 30px 0 rgba(8, 24, 54, 0.22), 0 5px 10px 0 rgba(8, 23, 54, 0.14);\n  transition: background 1s;\n  -webkit-transition: background 1s;\n  border-radius: 0.5em;\n}\n\n.service-title {\n  text-align: center;\n  color: #e44640d2;\n}\n\n.image {\n  width: 100%;\n  height: 370px;\n}\n\n.service-head {\n  text-align: center;\n  padding-right: 40px;\n}\n\n.card-desc {\n  font-size: 20px;\n  color: #464692;\n}\n\n.card-list {\n  color: black;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.points {\n  padding-left: 30px;\n  font-size: 20px;\n}\n\n.startup-head {\n  text-align: center;\n  color: brown;\n  font-weight: bold;\n  background-color: wheat;\n}\n\n.startup {\n  padding-left: 20px;\n  min-height: 90px;\n}\n\n.contact {\n  text-align: center;\n  padding-bottom: 5px;\n}\n\n.form-contact {\n  padding-left: 15px;\n  padding-right: 15px;\n  width: 100%;\n}\n\n.form {\n  padding: 20px;\n  background-image: linear-gradient(50deg, #28a6d8, #52c498);\n}\n\n#btn {\n  padding: 0 30px;\n}\n\n@media only screen and (max-width: 992px) {\n  .mat-header {\n    padding-left: 10px;\n  }\n  .mat-header .mat-t {\n    font-size: 3.5vw;\n    font-weight: 600;\n  }\n\n  .service-head {\n    padding-left: 30px;\n    padding-bottom: 0;\n    padding-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXElzaGFua1xcRG9jdW1lbnRzXFxDb2RpbmcgQmxvY2tzXFxBbmd1bGFySW50cm9cXFNhbXJhdC1JbnZlc3RtZW50L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0FDQUg7O0FERUE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNHLDJEQUFBO0VBQ0Msa0JBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxrSEFBQTtFQUNBLG9CQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtBQ0lKOztBRERBO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksbUJBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUNVSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDV0o7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksWUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ2FMOztBRFhBO0VBQ0ssa0JBQUE7RUFDRCxlQUFBO0FDY0o7O0FEWkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ2dCSjs7QURiRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGRFO0VBQ0ksYUFBQTtFQUNBLDBEQUFBO0FDaUJOOztBRGRFO0VBQ0ksZUFBQTtBQ2lCTjs7QURmQTtFQUVFO0lBQ0ksa0JBQUE7RUNpQko7RURoQkk7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDa0JMOztFRGZBO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDa0JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHR7XHJcbiAgIHBhZGRpbmctbGVmdDogNXZ3O1xyXG4gICBwYWRkaW5nLXRvcDo3dmg7XHJcbn1cclxuLmhlYWQtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjpyZ2JhKDExNiwgNDksIDQ5LCAwLjg4NCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4ubGluZS10ZXh0eyAgXHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgcGFkZGluZy10b3A6MXZoO1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5tYXQtaGVhZGVye1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYigyMjEsIDE4NywgMTIzKSxyZ2IoMTY1LCAxMDMsIDkyKSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7ICAgIFxyXG59XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xyXG4gICBcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOnJnYmEoMjI2LCA0MCwgNDAsIDAuODg0KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIFxyXG59XHJcbi5tYXQtdHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5jYXJkLXRpdGxlMntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5jYXJkLWljb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDs7XHJcbn1cclxuLmNhcmQtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6cmdiYSgyMjYsIDQwLCA0MCwgMC44ODQpO1xyXG59XHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuLmlkZWFze1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5zZXJ2aWNle1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoOCwgMjQsIDU0LCAwLjIyKSwgMCA1cHggMTBweCAwIHJnYmEoOCwgMjMsIDU0LCAwLjE0KTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG5cclxuLnNlcnZpY2UtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2U0NDY0MGQyO1xyXG59XHJcbi5pbWFnZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzcwcHg7XHJcbiAgICBcclxufVxyXG4uc2VydmljZS1oZWFke1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbn1cclxuLmNhcmQtZGVzY3tcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgY29sb3I6cmdiKDcwLCA3MCwgMTQ2KTtcclxufVxyXG4uY2FyZC1saXN0e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnBvaW50c3tcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG4uc3RhcnR1cC1oZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6YnJvd247XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XHJcbn1cclxuLnN0YXJ0dXB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG5cclxufVxyXG4uY29udGFjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIFxyXG4gIH1cclxuICAuZm9ybS1jb250YWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZvcm17XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2IoNDAsIDE2NiwgMjE2KSwgcmdiKDgyLCAxOTYsIDE1MikpO1xyXG4gICAgICBcclxuICB9XHJcbiAgI2J0bntcclxuICAgICAgcGFkZGluZzowIDMwcHg7XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpXHJcbntcclxuICAubWF0LWhlYWRlcntcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAubWF0LXR7XHJcbiAgICAgICBmb250LXNpemU6My41dnc7XHJcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5zZXJ2aWNlLWhlYWR7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxufSIsIi50ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gIHBhZGRpbmctdG9wOiA3dmg7XG59XG5cbi5oZWFkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMTE2LCA0OSwgNDksIDAuODg0KTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5saW5lLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1hdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZGRiYjdiLCAjYTU2NzVjKTtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDd2aDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBjb2xvcjogcmdiYSgyMjYsIDQwLCA0MCwgMC44ODQpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LXQge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtdGl0bGUyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5jYXJkLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXJkLWhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiYSgyMjYsIDQwLCA0MCwgMC44ODQpO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5pZGVhcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZXJ2aWNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoOCwgMjQsIDU0LCAwLjIyKSwgMCA1cHggMTBweCAwIHJnYmEoOCwgMjMsIDU0LCAwLjE0KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNlcnZpY2UtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTQ0NjQwZDI7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG4uc2VydmljZS1oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY2FyZC1kZXNjIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ2NDY5Mjtcbn1cblxuLmNhcmQtbGlzdCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG9pbnRzIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zdGFydHVwLWhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBicm93bjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xufVxuXG4uc3RhcnR1cCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWluLWhlaWdodDogOTBweDtcbn1cblxuLmNvbnRhY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWNvbnRhY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgIzI4YTZkOCwgIzUyYzQ5OCk7XG59XG5cbiNidG4ge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1hdC1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAubWF0LWhlYWRlciAubWF0LXQge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5zZXJ2aWNlLWhlYWQge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/insight/insight.component.scss":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InsightComponent = class InsightComponent {
    constructor() { }
    ngOnInit() {
    }
};
InsightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insight',
        template: __webpack_require__(/*! raw-loader!./insight.component.html */ "./node_modules/raw-loader/index.js!./src/app/insight/insight.component.html"),
        styles: [__webpack_require__(/*! ./insight.component.scss */ "./src/app/insight/insight.component.scss")]
    })
], InsightComponent);



/***/ }),

/***/ "./src/app/pay-here/pay-here.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pay-here/pay-here.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheS1oZXJlL3BheS1oZXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pay-here/pay-here.component.ts":
/*!************************************************!*\
  !*** ./src/app/pay-here/pay-here.component.ts ***!
  \************************************************/
/*! exports provided: PayHereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayHereComponent", function() { return PayHereComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PayHereComponent = class PayHereComponent {
    constructor() { }
    ngOnInit() {
    }
};
PayHereComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pay-here',
        template: __webpack_require__(/*! raw-loader!./pay-here.component.html */ "./node_modules/raw-loader/index.js!./src/app/pay-here/pay-here.component.html"),
        styles: [__webpack_require__(/*! ./pay-here.component.scss */ "./src/app/pay-here/pay-here.component.scss")]
    })
], PayHereComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ishank\Documents\Coding Blocks\AngularIntro\Samrat-Investment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map