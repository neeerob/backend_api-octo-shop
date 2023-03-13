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
exports.ForgotPasswordService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Admin/admin.entity");
const moderator_entity_1 = require("../Moderator/moderator.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const forgot_entity_1 = require("./forgot.entity");
const crypto = __importStar(require("crypto"));
const bcrypt = __importStar(require("bcrypt"));
let ForgotPasswordService = class ForgotPasswordService {
    constructor(adminRepo, moderatorRepo, userRepo, sellerRepo, forgotRepo, mailerService) {
        this.adminRepo = adminRepo;
        this.moderatorRepo = moderatorRepo;
        this.userRepo = userRepo;
        this.sellerRepo = sellerRepo;
        this.forgotRepo = forgotRepo;
        this.mailerService = mailerService;
    }
    async createCode(username) {
        const existingAdmin = await this.adminRepo.findOneBy({ Username: username });
        const existingModerator = await this.moderatorRepo.findOneBy({ Username: username });
        const existingUser = await this.userRepo.findOneBy({ Username: username });
        const existSeller = await this.sellerRepo.findOneBy({ Username: username });
        if (existingAdmin) {
            const forgoteEnty = new forgot_entity_1.ForgotPasswordEntity();
            forgoteEnty.Username = username;
            forgoteEnty.Status = "Not Used";
            forgoteEnty.Code = crypto.randomInt(10000, 99999);
            await this.forgotRepo.save(forgoteEnty);
            return await this.mailerService.sendMail({
                to: existingAdmin.Email,
                subject: "Reset Password",
                text: "Hello " + username + " ! " + forgoteEnty.Code + " Is you code. Dont share it with anyone!",
            });
        }
        else if (existingModerator) {
            const forgoteEnty = new forgot_entity_1.ForgotPasswordEntity();
            forgoteEnty.Username = username;
            forgoteEnty.Status = "Not Used";
            forgoteEnty.Code = crypto.randomInt(10000, 99999);
            await this.forgotRepo.save(forgoteEnty);
            return await this.mailerService.sendMail({
                to: existingModerator.Email,
                subject: "Reset Password",
                text: "Hello " + username + " ! " + forgoteEnty.Code + " Is you code. Dont share it with anyone!",
            });
        }
        else if (existingUser) {
            const forgoteEnty = new forgot_entity_1.ForgotPasswordEntity();
            forgoteEnty.Username = username;
            forgoteEnty.Status = "Not Used";
            forgoteEnty.Code = crypto.randomInt(10000, 99999);
            await this.forgotRepo.save(forgoteEnty);
            return await this.mailerService.sendMail({
                to: existingUser.Email,
                subject: "Reset Password",
                text: "Hello " + username + " ! " + forgoteEnty.Code + " Is you code. Dont share it with anyone!",
            });
        }
        else if (existSeller) {
            const forgoteEnty = new forgot_entity_1.ForgotPasswordEntity();
            forgoteEnty.Username = username;
            forgoteEnty.Status = "Not Used";
            forgoteEnty.Code = crypto.randomInt(10000, 99999);
            await this.forgotRepo.save(forgoteEnty);
            return await this.mailerService.sendMail({
                to: existSeller.Email,
                subject: "Reset Password",
                text: "Hello " + username + " ! " + forgoteEnty.Code + " Is you code. Dont share it with anyone!",
            });
        }
        else {
            return "Incurrect username! Please provide valid username";
        }
    }
    async changePassword(username, password, code) {
        if (password.length >= 8) {
            if (code != null) {
                const existingAdmin = await this.adminRepo.findOneBy({ Username: username });
                const existingModerator = await this.moderatorRepo.findOneBy({ Username: username });
                const existingUser = await this.userRepo.findOneBy({ Username: username });
                const existSeller = await this.sellerRepo.findOneBy({ Username: username });
                const codeCheck = await this.forgotRepo.findOneBy({ Username: username });
                if (existingModerator || existingAdmin || existingUser || existSeller || codeCheck) {
                    const codeCheck1 = await this.forgotRepo.findOneBy({
                        Code: code,
                        Username: username,
                        Status: "Not Used",
                    });
                    if (codeCheck1) {
                        if (existingAdmin) {
                            const salt = await bcrypt.genSalt();
                            const hassedpassed = await bcrypt.hash(password, salt);
                            existingAdmin.Password = hassedpassed;
                            codeCheck1.Status = "Used";
                            await this.forgotRepo.update(codeCheck1.Id, codeCheck1);
                            return this.adminRepo.update(existingAdmin.Id, existingAdmin);
                        }
                        else if (existingModerator) {
                            const salt = await bcrypt.genSalt();
                            const hassedpassed = await bcrypt.hash(password, salt);
                            existingModerator.Password = hassedpassed;
                            codeCheck1.Status = "Used";
                            await this.forgotRepo.update(codeCheck1.Id, codeCheck1);
                            return this.moderatorRepo.update(existingModerator.Id, existingModerator);
                        }
                        else if (existingUser) {
                            const salt = await bcrypt.genSalt();
                            const hassedpassed = await bcrypt.hash(password, salt);
                            existingUser.Password = hassedpassed;
                            codeCheck1.Status = "Used";
                            await this.forgotRepo.update(codeCheck1.Id, codeCheck1);
                            return this.userRepo.update(existingUser.Id, existingUser);
                        }
                        else if (existSeller) {
                            const salt = await bcrypt.genSalt();
                            const hassedpassed = await bcrypt.hash(password, salt);
                            existSeller.Password = hassedpassed;
                            codeCheck1.Status = "Used";
                            await this.forgotRepo.update(codeCheck1.Id, codeCheck1);
                            return this.sellerRepo.update(existSeller.Id, existSeller);
                        }
                        else {
                            return "Something went wrong!";
                        }
                    }
                    else {
                        return "Incorrect, Expare or Used code";
                    }
                }
                else {
                    return "Given username don't exist";
                }
            }
            else {
                return "Enter you code you recived in email address";
            }
        }
        else {
            return "Please provide valid password with at least 8 characters";
        }
    }
};
ForgotPasswordService = __decorate([
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
], ForgotPasswordService);
exports.ForgotPasswordService = ForgotPasswordService;
//# sourceMappingURL=forgot.service.js.map