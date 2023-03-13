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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponEntity = void 0;
const admin_entity_1 = require("../Admin/admin.entity");
const typeorm_1 = require("typeorm");
let CouponEntity = class CouponEntity {
    constructor() {
        this.Timestamp = new Date();
        this.Used = 0;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CouponEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponEntity.prototype, "AdminUsername", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "Ammount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponEntity.prototype, "Discription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CouponEntity.prototype, "Timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponEntity.prototype, "Useability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponEntity.prototype, "Couponcode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CouponEntity.prototype, "Used", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.AdminEntity, (admin) => admin.coupon),
    __metadata("design:type", admin_entity_1.AdminEntity)
], CouponEntity.prototype, "admin", void 0);
CouponEntity = __decorate([
    (0, typeorm_1.Entity)("coupon")
], CouponEntity);
exports.CouponEntity = CouponEntity;
//# sourceMappingURL=coupon.entity.js.map