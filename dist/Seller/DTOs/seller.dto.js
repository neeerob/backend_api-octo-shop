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
exports.SellerDTO = void 0;
const class_validator_1 = require("class-validator");
class SellerDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your First name" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the first name can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(5, { message: "Minimum length of the first name can't exceed 3 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "First name can't be empty" }),
    __metadata("design:type", String)
], SellerDTO.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Matches)("^[^@\s]+@[^@\s]+\.(com|net|org|gov|edu)$"),
    __metadata("design:type", String)
], SellerDTO.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the Mobile number can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(11, { message: "Minimum length of the Mobile number can't exceed 3 characters" }),
    (0, class_validator_1.IsMobilePhone)("bn-BD"),
    __metadata("design:type", String)
], SellerDTO.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your Username" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the Username can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(5, { message: "Minimum length of the Username can't exceed 5 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Username can't be empty" }),
    __metadata("design:type", String)
], SellerDTO.prototype, "Username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/, { message: "Password must contain one Upper Case letter 1 Lower case letter and a number" }),
    (0, class_validator_1.MaxLength)(25, { message: "Maximum length of the Password can't exceed 25 characters" }),
    (0, class_validator_1.MinLength)(8, { message: "Minimum length of the Password can't exceed 8 characters" }),
    __metadata("design:type", String)
], SellerDTO.prototype, "Password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: "Enter a boolean value: true or false" }),
    __metadata("design:type", Boolean)
], SellerDTO.prototype, "Blocked", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SellerDTO.prototype, "filename", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SellerDTO.prototype, "Wallet", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SellerDTO.prototype, "Star", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SellerDTO.prototype, "TotalReviewer", void 0);
exports.SellerDTO = SellerDTO;
//# sourceMappingURL=seller.dto.js.map