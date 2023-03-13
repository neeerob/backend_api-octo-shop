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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./review.entity");
let ReviewService = class ReviewService {
    constructor(userRepo, sellerRepo, reviewRepo) {
        this.userRepo = userRepo;
        this.sellerRepo = sellerRepo;
        this.reviewRepo = reviewRepo;
    }
    async addReport(mydto) {
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.ReviewByUsername });
        if (existingUser) {
            const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.ReviewToUsername });
            if (existSeller) {
                const reviewEnt = new review_entity_1.ReviewEntity();
                reviewEnt.user = existingUser;
                reviewEnt.seller = existSeller;
                reviewEnt.Review = mydto.Review;
                reviewEnt.ReviewByUsername = mydto.ReviewByUsername;
                reviewEnt.ReviewToUsername = mydto.ReviewToUsername;
                return this.reviewRepo.save(reviewEnt);
            }
            else {
                return "Seller username not found.";
            }
        }
        else {
            return "Only user can review seller. Login as user!";
        }
    }
    async getAll() {
        const queryBuilder = this.reviewRepo
            .createQueryBuilder('review')
            .leftJoinAndSelect('review.seller', 'seller')
            .leftJoinAndSelect('review.user', 'user');
        const reports = await queryBuilder.getMany();
        return reports;
    }
    getPartial() {
        return this.reviewRepo.find();
    }
    async searchById(id) {
        var ext = this.reviewRepo.findOneBy({ Id: id });
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
        const reports = await this.reviewRepo.find({
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
        const reports = await this.reviewRepo.find({
            where: { seller: seller },
            relations: ['user', 'seller'],
        });
        return reports;
    }
    async searchBySellerUsername(username) {
        console.log(username);
        var ext = this.sellerRepo.findOne({ where: { Username: username } });
        return this.searchBySellerId((await ext).Id);
    }
    async searchBySellerUsernameReturnAll(username) {
        console.log(username);
        var ext = this.sellerRepo.findOne({ where: { Username: username } });
        return this.searchBySellerIdReturnAll((await ext).Id);
    }
    async searchByUserId(userId) {
        const user = await this.userRepo.findOneBy({ Id: userId });
        if (!user) {
            throw new Error('Seller not found');
        }
        const reports = await this.reviewRepo.find({
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
        const reports = await this.reviewRepo.find({
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
};
ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(review_entity_1.ReviewEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map