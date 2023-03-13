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
exports.ForgotPasswordEntity = void 0;
const typeorm_1 = require("typeorm");
let ForgotPasswordEntity = class ForgotPasswordEntity {
    constructor() {
        this.Timestamp = new Date();
        this.ExpareTime = new Date(Date.now() + 3 * 60 * 1000);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ForgotPasswordEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ForgotPasswordEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ForgotPasswordEntity.prototype, "Code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ForgotPasswordEntity.prototype, "Timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ForgotPasswordEntity.prototype, "ExpareTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ForgotPasswordEntity.prototype, "Status", void 0);
ForgotPasswordEntity = __decorate([
    (0, typeorm_1.Entity)("forgot")
], ForgotPasswordEntity);
exports.ForgotPasswordEntity = ForgotPasswordEntity;
//# sourceMappingURL=forgot.entity.js.map