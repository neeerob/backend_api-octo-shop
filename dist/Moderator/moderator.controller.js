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
exports.ModeratorController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const editModerator_dto_1 = require("./DTOs/editModerator.dto");
const moderator_dto_1 = require("./DTOs/moderator.dto");
const moderator_service_1 = require("./moderator.service");
const session_guard_1 = require("./session.guard");
const admin_guard_1 = require("../Admin/admin.guard");
let ModeratorController = class ModeratorController {
    constructor(moderatorService) {
        this.moderatorService = moderatorService;
    }
    Index() {
        return this.moderatorService.getIndex();
    }
    getModeratorSecure() {
        return this.moderatorService.getAllSecureData();
    }
    getModerators() {
        return this.moderatorService.getAll();
    }
    searchById(id) {
        return this.moderatorService.searchById(id);
    }
    searchByUsername(username) {
        return this.moderatorService.searchByUsername(username);
    }
    editProfile(editModeratorDTO, id) {
        return this.moderatorService.editModerator(editModeratorDTO, id);
    }
    deleteModeratorById(id) {
        return this.moderatorService.deleteModeratorById(id);
    }
    blockModerator(id) {
        return this.moderatorService.blockModeratorById(id);
    }
    unblockModerator(id) {
        return this.moderatorService.unblockModeratorById(id);
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        mydto.Blocked = false;
        return this.moderatorService.signup(mydto);
    }
    async addModerator(session, username, password) {
        if (await this.moderatorService.login(username, password) == 1) {
            session.username = username;
            session.role = "moderator";
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
], ModeratorController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/getSecure'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "getModeratorSecure", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "getModerators", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModeratorController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("search/s/:username"),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModeratorController.prototype, "searchByUsername", null);
__decorate([
    (0, common_1.Post)("/editProfile/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editModerator_dto_1.EditModeratorDTO, Number]),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "deleteModeratorById", null);
__decorate([
    (0, common_1.Patch)('block/:id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "blockModerator", null);
__decorate([
    (0, common_1.Patch)('unblock/:id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminSessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ModeratorController.prototype, "unblockModerator", null);
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
    __metadata("design:paramtypes", [moderator_dto_1.ModeratorDTO, Object]),
    __metadata("design:returntype", void 0)
], ModeratorController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ModeratorController.prototype, "addModerator", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModeratorController.prototype, "signout", null);
ModeratorController = __decorate([
    (0, common_1.Controller)('/moderator'),
    __metadata("design:paramtypes", [moderator_service_1.ModeratorService])
], ModeratorController);
exports.ModeratorController = ModeratorController;
//# sourceMappingURL=moderator.controller.js.map