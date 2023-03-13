"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const checkout_entity_1 = require("../Checkout/checkout.entity");
const coupon_entity_1 = require("../Coupon/coupon.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const transaction_entity_1 = require("../Transaction/transaction.entity");
const user_entity_1 = require("../User/user.entity");
const product_controller_1 = require("./product.controller");
const product_entity_1 = require("./product.entity");
const product_service_1 = require("./product.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([seller_entity_1.SellerEntity, product_entity_1.ProductEntity, user_entity_1.UserEntity, transaction_entity_1.TransactionEntity, checkout_entity_1.CheckoutEntity, coupon_entity_1.CouponEntity])],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map