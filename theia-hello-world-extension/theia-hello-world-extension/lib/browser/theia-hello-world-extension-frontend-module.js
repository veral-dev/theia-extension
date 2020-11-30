"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var theia_hello_world_extension_contribution_1 = require("./theia-hello-world-extension-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(theia_hello_world_extension_contribution_1.TheiaHelloWorldExtensionCommandContribution);
    bind(common_1.MenuContribution).to(theia_hello_world_extension_contribution_1.TheiaHelloWorldExtensionMenuContribution);
});
//# sourceMappingURL=theia-hello-world-extension-frontend-module.js.map