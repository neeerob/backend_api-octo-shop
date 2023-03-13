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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const editUser_dto_1 = require("./DTOs/editUser.dto");
const user_dto_1 = require("./DTOs/user.dto");
const user_guard_1 = require("./user.guard");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    Index() {
        return this.userService.getIndex();
    }
    getModeratorSecure() {
        return this.userService.getAllSecureData();
    }
    getModerators() {
        return this.userService.getAll();
    }
    searchById(id) {
        return this.userService.searchById(id);
    }
    searchByUsername(username) {
        return this.userService.searchByUsername(username);
    }
    editProfile(editModeratorDTO, id) {
        return this.userService.editUser(editModeratorDTO, id);
    }
    deleteModeratorById(id) {
        return this.userService.deleteModeratorById(id);
    }
    blockModerator(id) {
        return this.userService.blockModeratorById(id);
    }
    unblockModerator(id) {
        return this.userService.unblockModeratorById(id);
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        mydto.Blocked = false;
        mydto.Wallet = 0.0;
        return this.userService.signup(mydto);
    }
    async addModerator(session, username, password) {
        if (await this.userService.login(username, password) == 1) {
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
], UserController.prototype, "Index", null);
__decorate([
    (0, common_1.Get)('/getSecure'),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "getModeratorSecure", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "getModerators", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("search/s/:username"),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "searchByUsername", null);
__decorate([
    (0, common_1.Post)("/editProfile/:id"),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editUser_dto_1.EditUserDTO, Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "deleteModeratorById", null);
__decorate([
    (0, common_1.Patch)('block/:id'),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "blockModerator", null);
__decorate([
    (0, common_1.Patch)('unblock/:id'),
    (0, common_1.UseGuards)(user_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], UserController.prototype, "unblockModerator", null);
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
    __metadata("design:paramtypes", [user_dto_1.UserDTO, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Put)("/login"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("username")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addModerator", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signout", null);
UserController = __decorate([
    (0, common_1.Controller)('/User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map