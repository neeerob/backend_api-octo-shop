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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("./admin.entity");
const bcrypt = __importStar(require("bcrypt"));
const moderator_entity_1 = require("../Moderator/moderator.entity");
const user_entity_1 = require("../User/user.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const forgot_entity_1 = require("../ForgotPassword/forgot.entity");
let AdminService = class AdminService {
    constructor(adminRepo, moderatorRepo, userRepo, sellerRepo, forgotRepo, mailerService) {
        this.adminRepo = adminRepo;
        this.moderatorRepo = moderatorRepo;
        this.userRepo = userRepo;
        this.sellerRepo = sellerRepo;
        this.forgotRepo = forgotRepo;
        this.mailerService = mailerService;
    }
    getIndex() {
        return "This path will be the Admin panel";
    }
    async getAllSecureData() {
        const moderators = await this.adminRepo.find();
        const secureModerators = moderators.map(({ Username, Firstname, Lastname, DOB, Phone, Email, filename }) => ({
            Username,
            Firstname,
            Lastname,
            DOB,
            Phone,
            Email,
            filename,
        }));
        return secureModerators;
    }
    getAll() {
        return this.adminRepo.find();
    }
    searchById(id) {
        var ext = this.adminRepo.findOneBy({ Id: id });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this ID in database!";
    }
    searchByUsername(username) {
        const ext = this.adminRepo.findOne({ where: { Username: username } });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this username in database!";
    }
    editModerator(editAdmin, id) {
        return this.adminRepo.update(id, editAdmin);
    }
    deleteModeratorById(id) {
        return this.adminRepo.delete(id);
    }
    async blockModeratorById(id) {
        var ext = this.adminRepo.findOneBy({ Id: id });
        if (ext) {
            (await ext).Blocked = true;
            return this.adminRepo.update(id, await ext);
        }
        else
            return "No matches found for this ID in database!";
    }
    async unblockModeratorById(id) {
        var ext = this.adminRepo.findOneBy({ Id: id });
        if (ext) {
            (await ext).Blocked = false;
            return this.adminRepo.update(id, await ext);
        }
        else
            return "No matches found for this ID in database!";
    }
    async signup(mydto) {
        const existingAdmin = await this.adminRepo.findOneBy({ Username: mydto.Username });
        const existingModerator = await this.moderatorRepo.findOneBy({ Username: mydto.Username });
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.Username });
        const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.Username });
        if (existingModerator || existingAdmin || existingUser || existSeller) {
            return "Username already exists, please choose a different username";
        }
        else {
            const salt = await bcrypt.genSalt();
            const hassedpassed = await bcrypt.hash(mydto.Password, salt);
            mydto.Password = hassedpassed;
            return this.adminRepo.save(mydto);
        }
    }
    async login(username, password) {
        const mydata = await this.adminRepo.findOneBy({ Username: username });
        if (mydata) {
            const isMatch = await bcrypt.compare(password, mydata.Password);
            if (isMatch && mydata.Blocked != true) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(moderator_entity_1.ModeratorEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(forgot_entity_1.ForgotPasswordEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map