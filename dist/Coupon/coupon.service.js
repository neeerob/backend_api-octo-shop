"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Admin/admin.entity");
const typeorm_2 = require("typeorm");
const coupon_entity_1 = require("./coupon.entity");
const crypto = __importStar(require("crypto"));
let CouponService = class CouponService {
    constructor(adminRepo, couponRepo) {
        this.adminRepo = adminRepo;
        this.couponRepo = couponRepo;
    }
    async addReport(mydto) {
        const exAdmin = await this.adminRepo.findOneBy({ Username: mydto.AdminUsername });
        if (exAdmin) {
            const reportEnty = new coupon_entity_1.CouponEntity();
            reportEnty.admin = exAdmin;
            reportEnty.Discription = mydto.Discription;
            reportEnty.Ammount = mydto.Ammount.valueOf();
            reportEnty.AdminUsername = mydto.AdminUsername;
            reportEnty.Useability = mydto.Useability;
            reportEnty.Couponcode = crypto.randomInt(100000000, 999999999);
            return this.couponRepo.save(reportEnty);
        }
        else {
            return "Only admin can create coupon. Login as admin";
        }
    }
    async getAll() {
        const queryBuilder = this.couponRepo
            .createQueryBuilder('coupon')
            .leftJoinAndSelect('coupon.admin', 'admin');
        const reports = await queryBuilder.getMany();
        return reports;
    }
    getPartial() {
        return this.couponRepo.find();
    }
    deleteCoupon(id) {
        return this.couponRepo.delete(id);
    }
};
CouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(coupon_entity_1.CouponEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CouponService);
exports.CouponService = CouponService;
//# sourceMappingURL=coupon.service.js.map