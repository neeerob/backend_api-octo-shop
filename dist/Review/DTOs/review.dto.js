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
exports.ReviewDTO = void 0;
const class_validator_1 = require("class-validator");
class ReviewDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Provide Review" }),
    __metadata("design:type", String)
], ReviewDTO.prototype, "Review", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReviewDTO.prototype, "ReviewByUsername", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please give seller username" }),
    __metadata("design:type", String)
], ReviewDTO.prototype, "ReviewToUsername", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ReviewDTO.prototype, "Timestamp", void 0);
exports.ReviewDTO = ReviewDTO;
//# sourceMappingURL=review.dto.js.map