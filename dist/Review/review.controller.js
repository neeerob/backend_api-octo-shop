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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const review_dto_1 = require("./DTOs/review.dto");
const review_guard_1 = require("./review.guard");
const review_service_1 = require("./review.service");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    insertAdmin(mydto, session) {
        mydto.ReviewByUsername = session.username;
        return this.reviewService.addReport(mydto);
    }
    getAll() {
        return this.reviewService.getAll();
    }
    getPartial() {
        return this.reviewService.getPartial();
    }
    searchById(id) {
        return this.reviewService.searchById(id);
    }
    searchBySellerId(id) {
        return this.reviewService.searchBySellerId(id);
    }
    searchBySellerIdReturnAll(id) {
        return this.reviewService.searchBySellerIdReturnAll(id);
    }
    searchBySellerUsername(username) {
        return this.reviewService.searchBySellerUsername(username);
    }
    searchBySellerUsernameReturnAll(username) {
        return this.reviewService.searchBySellerUsernameReturnAll(username);
    }
    searchByUserId(id) {
        return this.reviewService.searchByUserId(id);
    }
    searchByUserIdReturnAll(id) {
        return this.reviewService.searchByUserIdReturnAll(id);
    }
    searchByUserUsername(username) {
        return this.reviewService.searchByUserUsername(username);
    }
    searchByUserUsernameReturnAll(username) {
        return this.reviewService.searchByUserUsernameReturnAll(username);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.ReviewDTO, Object]),
    __metadata("design:returntype", Object)
], ReviewController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReviewController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/getPartial'),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReviewController.prototype, "getPartial", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("/search/bySellerId/:id"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchBySellerId", null);
__decorate([
    (0, common_1.Get)("/search/bySellerId/returnAll/:id"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchBySellerIdReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/bySellerUsername/:username"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchBySellerUsername", null);
__decorate([
    (0, common_1.Get)("/search/bySellerUsername/returnAll/:username"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchBySellerUsernameReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/byUserId/:id"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchByUserId", null);
__decorate([
    (0, common_1.Get)("/search/byUserId/returnAll/:id"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchByUserIdReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/byUserUsername/:username"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchByUserUsername", null);
__decorate([
    (0, common_1.Get)("/search/byUserUsername/returnAll/:username"),
    (0, common_1.UseGuards)(review_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "searchByUserUsernameReturnAll", null);
ReviewController = __decorate([
    (0, common_1.Controller)('/review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map