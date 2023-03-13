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
exports.SellerEntity = void 0;
const checkout_entity_1 = require("../Checkout/checkout.entity");
const product_entity_1 = require("../Product/product.entity");
const report_entity_1 = require("../Report/report.entity");
const transaction_entity_1 = require("../Transaction/transaction.entity");
const typeorm_1 = require("typeorm");
let SellerEntity = class SellerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SellerEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "Phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], SellerEntity.prototype, "Blocked", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SellerEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SellerEntity.prototype, "Wallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SellerEntity.prototype, "Star", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SellerEntity.prototype, "TotalReviewer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => report_entity_1.ReportEntity, (report) => report.seller),
    __metadata("design:type", Array)
], SellerEntity.prototype, "reports", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => report_entity_1.ReportEntity, (review) => review.seller),
    __metadata("design:type", Array)
], SellerEntity.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.TransactionEntity, (transaction) => transaction.seller),
    __metadata("design:type", Array)
], SellerEntity.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.ProductEntity, (product) => product.seller),
    __metadata("design:type", Array)
], SellerEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => checkout_entity_1.CheckoutEntity, (checkout) => checkout.seller),
    __metadata("design:type", Array)
], SellerEntity.prototype, "checkout", void 0);
SellerEntity = __decorate([
    (0, typeorm_1.Entity)("seller")
], SellerEntity);
exports.SellerEntity = SellerEntity;
//# sourceMappingURL=seller.entity.js.map