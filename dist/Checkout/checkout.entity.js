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
exports.CheckoutEntity = void 0;
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_1 = require("typeorm");
let CheckoutEntity = class CheckoutEntity {
    constructor() {
        this.Timestamp = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CheckoutEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CheckoutEntity.prototype, "ProductName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CheckoutEntity.prototype, "Timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CheckoutEntity.prototype, "Price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CheckoutEntity.prototype, "Discription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CheckoutEntity.prototype, "SellerUsername", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CheckoutEntity.prototype, "BuyerUsername", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CheckoutEntity.prototype, "Quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seller_entity_1.SellerEntity, (seller) => seller.checkout),
    __metadata("design:type", seller_entity_1.SellerEntity)
], CheckoutEntity.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.checkout),
    __metadata("design:type", user_entity_1.UserEntity)
], CheckoutEntity.prototype, "user", void 0);
CheckoutEntity = __decorate([
    (0, typeorm_1.Entity)("checkout")
], CheckoutEntity);
exports.CheckoutEntity = CheckoutEntity;
//# sourceMappingURL=checkout.entity.js.map