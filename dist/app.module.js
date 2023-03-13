"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const moderator_module_1 = require("./Moderator/moderator.module");
const admin_module_1 = require("./Admin/admin.module");
const user_module_1 = require("./User/user.module");
const message_module_1 = require("./Message/message.module");
const seller_module_1 = require("./Seller/seller.module");
const report_module_1 = require("./Report/report.module");
const review_module_1 = require("./Review/review.module");
const transaction_module_1 = require("./Transaction/transaction.module");
const coupon_module_1 = require("./Coupon/coupon.module");
const product_module_1 = require("./Product/product.module");
const checkout_module_1 = require("./Checkout/checkout.module");
const forgot_module_1 = require("./ForgotPassword/forgot.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [moderator_module_1.ModeratorModule, admin_module_1.AdminModule, user_module_1.UserModule, message_module_1.MessageModule, seller_module_1.SellerModule, report_module_1.ReportModule, review_module_1.ReviewModule, transaction_module_1.TransactionModule, coupon_module_1.CouponModule, product_module_1.ProductModule, checkout_module_1.CheckoutModule, forgot_module_1.ForgotPasswordModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '112233',
                database: 'dbv1.9',
                autoLoadEntities: true,
                synchronize: true,
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map