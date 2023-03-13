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
exports.ForgotPasswordController = void 0;
const common_1 = require("@nestjs/common");
const forgot_service_1 = require("./forgot.service");
let ForgotPasswordController = class ForgotPasswordController {
    constructor(forgotService) {
        this.forgotService = forgotService;
    }
    sendEmail(username) {
        return this.forgotService.createCode(username);
    }
    changePassword(username, password, code) {
        return this.forgotService.changePassword(username, password, code);
    }
};
__decorate([
    (0, common_1.Post)("/:username"),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForgotPasswordController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)("/setPassword/:username"),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], ForgotPasswordController.prototype, "changePassword", null);
ForgotPasswordController = __decorate([
    (0, common_1.Controller)('/forgotPassword'),
    __metadata("design:paramtypes", [forgot_service_1.ForgotPasswordService])
], ForgotPasswordController);
exports.ForgotPasswordController = ForgotPasswordController;
//# sourceMappingURL=forgot.controller.js.map