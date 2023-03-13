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
exports.CouponDTO = void 0;
const class_validator_1 = require("class-validator");
class CouponDTO {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CouponDTO.prototype, "AdminUsername", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please provide Ammount" }),
    __metadata("design:type", Number)
], CouponDTO.prototype, "Ammount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please provide a Discription" }),
    __metadata("design:type", String)
], CouponDTO.prototype, "Discription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CouponDTO.prototype, "Timestamp", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CouponDTO.prototype, "Useability", void 0);
exports.CouponDTO = CouponDTO;
//# sourceMappingURL=coupon.dto.js.map