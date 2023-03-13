"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const checkout_controller_1 = require("./checkout.controller");
const checkout_entity_1 = require("./checkout.entity");
const checkout_service_1 = require("./checkout.service");
let CheckoutModule = class CheckoutModule {
};
CheckoutModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([checkout_entity_1.CheckoutEntity])],
        controllers: [checkout_controller_1.CheckoutController],
        providers: [checkout_service_1.CheckoutService],
    })
], CheckoutModule);
exports.CheckoutModule = CheckoutModule;
//# sourceMappingURL=checkout.module.js.map