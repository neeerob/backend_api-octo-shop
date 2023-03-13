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
exports.SellerController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const editSeller_dto_1 = require("./DTOs/editSeller.dto");
const seller_dto_1 = require("./DTOs/seller.dto");
const seller_service_1 = require("./seller.service");
const session_guard_1 = require("./session.guard");
let SellerController = class SellerController {
    constructor(sellerService) {
        this.sellerService = sellerService;
    }
    Index() {
        return this.sellerService.getIndex();
    }
    getModerators() {
        return this.sellerService.getAll();
    }
    searchById(id) {
        return this.sellerService.searchById(id);
    }
    searchByUsername(username) {
        return this.sellerService.searchByUsername(username);
    }
    editProfile(editModeratorDTO, id) {
        return this.sellerService.editUser(editModeratorDTO, id);
    }
    deleteModeratorById(id) {
        return this.sellerService.deleteModeratorById(id);
    }
    blockModerator(id) {
        return this.sellerService.blockModeratorById(id);
    }
    unblockModerator(id) {
        return this.sellerService.unblockModeratorById(id);
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        mydto.Blocked = false;
        mydto.Wallet = 0.0;
        mydto.Star = 0.0;
        mydto.TotalReviewer = 0;
        return this.sellerService.signup(mydto);
    }
    async addModerator(session, username, password) {
        if (await this.sellerService.login(username, password) == 1) {
            session.username = username;
            return { message: "Successfully logged" };
        }
        else {
            return { message: "Invalid username or password" };
        }
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new common_1.UnauthorizedException("invalid actions");
        }
    }
};
__decorate([
    (0, common_1.Get)('/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SellerController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SellerController.prototype, "getModerators", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SellerController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("search/s/:username"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SellerController.prototype, "searchByUsername", null);
__decorate([
    (0, common_1.Post)("/editProfile/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editSeller_dto_1.EditSellerDTO, Number]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "deleteModeratorById", null);
__decorate([
    (0, common_1.Patch)('block/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "blockModerator", null);
__decorate([
    (0, common_1.Patch)('unblock/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "unblockModerator", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seller_dto_1.SellerDTO, Object]),
    __metadata("design:returntype", void 0)
], SellerController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], SellerController.prototype, "addModerator", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SellerController.prototype, "signout", null);
SellerController = __decorate([
    (0, common_1.Controller)('/seller'),
    __metadata("design:paramtypes", [seller_service_1.SellerService])
], SellerController);
exports.SellerController = SellerController;
//# sourceMappingURL=seller.controller.js.map