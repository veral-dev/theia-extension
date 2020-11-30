(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "../theia-hello-world-extension/lib/browser/theia-hello-world-extension-contribution.js":
/*!**********************************************************************************************!*\
  !*** ../theia-hello-world-extension/lib/browser/theia-hello-world-extension-contribution.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheiaHelloWorldExtensionMenuContribution = exports.TheiaHelloWorldExtensionCommandContribution = exports.TheiaHelloWorldExtensionCommand = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.TheiaHelloWorldExtensionCommand = {
    id: 'TheiaHelloWorldExtension.command',
    label: "Say Hello"
};
var TheiaHelloWorldExtensionCommandContribution = /** @class */ (function () {
    function TheiaHelloWorldExtensionCommandContribution(messageService) {
        this.messageService = messageService;
    }
    TheiaHelloWorldExtensionCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.TheiaHelloWorldExtensionCommand, {
            execute: function () { return _this.messageService.info('Hello World!'); }
        });
    };
    TheiaHelloWorldExtensionCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], TheiaHelloWorldExtensionCommandContribution);
    return TheiaHelloWorldExtensionCommandContribution;
}());
exports.TheiaHelloWorldExtensionCommandContribution = TheiaHelloWorldExtensionCommandContribution;
var TheiaHelloWorldExtensionMenuContribution = /** @class */ (function () {
    function TheiaHelloWorldExtensionMenuContribution() {
    }
    TheiaHelloWorldExtensionMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.TheiaHelloWorldExtensionCommand.id,
            label: exports.TheiaHelloWorldExtensionCommand.label
        });
    };
    TheiaHelloWorldExtensionMenuContribution = __decorate([
        inversify_1.injectable()
    ], TheiaHelloWorldExtensionMenuContribution);
    return TheiaHelloWorldExtensionMenuContribution;
}());
exports.TheiaHelloWorldExtensionMenuContribution = TheiaHelloWorldExtensionMenuContribution;


/***/ }),

/***/ "../theia-hello-world-extension/lib/browser/theia-hello-world-extension-frontend-module.js":
/*!*************************************************************************************************!*\
  !*** ../theia-hello-world-extension/lib/browser/theia-hello-world-extension-frontend-module.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var theia_hello_world_extension_contribution_1 = __webpack_require__(/*! ./theia-hello-world-extension-contribution */ "../theia-hello-world-extension/lib/browser/theia-hello-world-extension-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(theia_hello_world_extension_contribution_1.TheiaHelloWorldExtensionCommandContribution);
    bind(common_1.MenuContribution).to(theia_hello_world_extension_contribution_1.TheiaHelloWorldExtensionMenuContribution);
});


/***/ })

}]);
//# sourceMappingURL=29.bundle.js.map