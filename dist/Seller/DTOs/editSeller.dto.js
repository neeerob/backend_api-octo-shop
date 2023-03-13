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
exports.EditSellerDTO = void 0;
const class_validator_1 = require("class-validator");
class EditSellerDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "Please enter your First name" }),
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the first name can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(5, { message: "Minimum length of the first name can't exceed 3 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "First name can't be empty" }),
    __metadata("design:type", String)
], EditSellerDTO.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Matches)("^[^@\s]+@[^@\s]+\.(com|net|org|gov|edu)$"),
    __metadata("design:type", String)
], EditSellerDTO.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(15, { message: "Maximum length of the Mobile number can't exceed 15 characters" }),
    (0, class_validator_1.MinLength)(11, { message: "Minimum length of the Mobile number can't exceed 3 characters" }),
    (0, class_validator_1.IsMobilePhone)("bn-BD"),
    __metadata("design:type", String)
], EditSellerDTO.prototype, "Phone", void 0);
exports.EditSellerDTO = EditSellerDTO;
//# sourceMappingURL=editSeller.dto.js.map