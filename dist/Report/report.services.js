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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moderator_entity_1 = require("../Moderator/moderator.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const report_entity_1 = require("./report.entity");
let ReportService = class ReportService {
    constructor(userRepo, sellerRepo, moderatorRepo, reportRepo) {
        this.userRepo = userRepo;
        this.sellerRepo = sellerRepo;
        this.moderatorRepo = moderatorRepo;
        this.reportRepo = reportRepo;
    }
    async addReport(mydto) {
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.ReporterUsername });
        if (existingUser) {
            const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.ReportedUsername });
            if (existSeller) {
                const reportEnty = new report_entity_1.ReportEntity();
                reportEnty.user = existingUser;
                reportEnty.seller = existSeller;
                reportEnty.Discription = mydto.Discription;
                reportEnty.ModeratorUsername = mydto.ModeratorUsername;
                reportEnty.ReportedUsername = mydto.ReportedUsername;
                reportEnty.ReporterUsername = mydto.ReporterUsername;
                return this.reportRepo.save(reportEnty);
            }
            else {
                return "Seller username not found.";
            }
        }
        else {
            return "Only user can report seller.";
        }
    }
    async getAll() {
        const queryBuilder = this.reportRepo
            .createQueryBuilder('report')
            .leftJoinAndSelect('report.seller', 'seller')
            .leftJoinAndSelect('report.user', 'user');
        const reports = await queryBuilder.getMany();
        return reports;
    }
    getPartial() {
        return this.reportRepo.find();
    }
    searchById(id) {
        const ext = this.reportRepo.findOneBy({ Id: id });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this ID in database!";
    }
    async searchBySellerId(sellerId) {
        const seller = await this.sellerRepo.findOneBy({ Id: sellerId });
        if (!seller) {
            throw new Error('Seller not found');
        }
        const reports = await this.reportRepo.find({
            where: { seller: seller },
            relations: ['user'],
        });
        return reports;
    }
    async searchBySellerIdReturnAll(sellerId) {
        const seller = await this.sellerRepo.findOneBy({ Id: sellerId });
        if (!seller) {
            throw new Error('Seller not found');
        }
        const reports = await this.reportRepo.find({
            where: { seller: seller },
            relations: ['user', 'seller'],
        });
        return reports;
    }
    async searchBySellerUsername(username) {
        var ext = this.sellerRepo.findOne({ where: { Username: username } });
        return this.searchBySellerId((await ext).Id);
    }
    async searchBySellerUsernameReturnAll(username) {
        var ext = this.sellerRepo.findOne({ where: { Username: username } });
        return this.searchBySellerIdReturnAll((await ext).Id);
    }
    async searchByUserId(userId) {
        const user = await this.userRepo.findOneBy({ Id: userId });
        if (!user) {
            throw new Error('Seller not found');
        }
        const reports = await this.reportRepo.find({
            where: { user: user },
            relations: ['seller'],
        });
        return reports;
    }
    async searchByUserIdReturnAll(userId) {
        const user = await this.userRepo.findOneBy({ Id: userId });
        if (!user) {
            throw new Error('Seller not found');
        }
        const reports = await this.reportRepo.find({
            where: { user: user },
            relations: ['seller', 'user'],
        });
        return reports;
    }
    async searchByUserUsername(username) {
        var ext = this.userRepo.findOne({ where: { Username: username } });
        return this.searchByUserId((await ext).Id);
    }
    async searchByUserUsernameReturnAll(username) {
        var ext = this.userRepo.findOne({ where: { Username: username } });
        return this.searchByUserIdReturnAll((await ext).Id);
    }
    async getUnprocessedReport() {
        return await this.reportRepo.find({
            where: { ModeratorUsername: null },
        });
    }
    async process(id, Action, sess) {
        const existingModerator = await this.moderatorRepo.findOneBy({ Username: sess });
        if (existingModerator) {
            const ext = await this.reportRepo.findOneBy({ Id: id });
            if (ext) {
                (await ext).Action = Action;
                (await ext).ModeratorUsername = sess;
                return this.reportRepo.update(id, ext);
            }
            else
                return "Wront Report Id";
        }
        else
            return "Only moderator can process this! Login as moderator!";
    }
    async getProcessedReport() {
        return await this.reportRepo.find({
            where: { ModeratorUsername: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()) },
        });
    }
};
ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(moderator_entity_1.ModeratorEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(report_entity_1.ReportEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.services.js.map