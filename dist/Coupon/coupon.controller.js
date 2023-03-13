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
exports.CouponController = void 0;
const common_1 = require("@nestjs/common");
const admin_guard_1 = require("../Admin/admin.guard");
const coupon_guard_1 = require("./coupon.guard");
const coupon_service_1 = require("./coupon.service");
const coupon_dto_1 = require("./DTOs/coupon.dto");
let CouponController = class CouponController {
    constructor(couponService) {
        this.couponService = couponService;
    }
    insertAdmin(mydto, session) {
        mydto.AdminUsername = session.username;
        return this.couponService.addReport(mydto);
    }
    getAll() {
        return this.couponService.getAll();
    }
    getPartial() {
        return this.couponService.getPartial();
    }
    deleteModeratorById(id) {
        return this.couponService.deleteCoupon(id);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_dto_1.CouponDTO, Object]),
    __metadata("design:returntype", Object)
], CouponController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(coupon_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CouponController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/getPartial'),
    (0, common_1.UseGuards)(coupon_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CouponController.prototype, "getPartial", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(coupon_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], CouponController.prototype, "deleteModeratorById", null);
CouponController = __decorate([
    (0, common_1.Controller)('/coupon'),
    __metadata("design:paramtypes", [coupon_service_1.CouponService])
], CouponController);
exports.CouponController = CouponController;
//# sourceMappingURL=coupon.controller.js.map