"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeratorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Admin/admin.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const moderator_controller_1 = require("./moderator.controller");
const moderator_entity_1 = require("./moderator.entity");
const moderator_service_1 = require("./moderator.service");
let ModeratorModule = class ModeratorModule {
};
ModeratorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([moderator_entity_1.ModeratorEntity, admin_entity_1.AdminEntity, user_entity_1.UserEntity, seller_entity_1.SellerEntity])],
        controllers: [moderator_controller_1.ModeratorController],
        providers: [moderator_service_1.ModeratorService],
    })
], ModeratorModule);
exports.ModeratorModule = ModeratorModule;
//# sourceMappingURL=moderator.module.js.map