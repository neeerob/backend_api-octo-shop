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
exports.CheckoutController = void 0;
const common_1 = require("@nestjs/common");
const checkout_service_1 = require("./checkout.service");
let CheckoutController = class CheckoutController {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    getModerators() {
        return this.checkoutService.getAll();
    }
    searchById(id) {
        return this.checkoutService.searchById(id);
    }
    getAllInfo() {
        return this.checkoutService.getAllInfo();
    }
};
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CheckoutController.prototype, "getModerators", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CheckoutController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)('/getAllInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CheckoutController.prototype, "getAllInfo", null);
CheckoutController = __decorate([
    (0, common_1.Controller)('/checkout'),
    __metadata("design:paramtypes", [checkout_service_1.CheckoutService])
], CheckoutController);
exports.CheckoutController = CheckoutController;
//# sourceMappingURL=checkout.controller.js.map