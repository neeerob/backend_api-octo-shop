"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Admin/admin.entity");
const moderator_entity_1 = require("../Moderator/moderator.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const forgot_controller_1 = require("./forgot.controller");
const forgot_entity_1 = require("./forgot.entity");
const forgot_service_1 = require("./forgot.service");
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([forgot_entity_1.ForgotPasswordEntity, admin_entity_1.AdminEntity, user_entity_1.UserEntity, moderator_entity_1.ModeratorEntity, seller_entity_1.SellerEntity])],
        controllers: [forgot_controller_1.ForgotPasswordController],
        providers: [forgot_service_1.ForgotPasswordService],
    })
], ForgotPasswordModule);
exports.ForgotPasswordModule = ForgotPasswordModule;
//# sourceMappingURL=forgot.module.js.map