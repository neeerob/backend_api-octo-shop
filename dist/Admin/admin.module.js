"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const forgot_entity_1 = require("../ForgotPassword/forgot.entity");
const moderator_entity_1 = require("../Moderator/moderator.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const admin_controller_1 = require("./admin.controller");
const admin_entity_1 = require("./admin.entity");
const admin_service_1 = require("./admin.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    ignoreTLS: true,
                    secure: true,
                    auth: {
                        user: 'neeerob.ahmed2@gmail.com',
                        pass: 'bndcibuaqkiionsm'
                    },
                }
            }), typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, admin_entity_1.AdminEntity, moderator_entity_1.ModeratorEntity, seller_entity_1.SellerEntity, forgot_entity_1.ForgotPasswordEntity])],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map