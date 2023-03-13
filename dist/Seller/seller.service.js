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
exports.SellerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("../Admin/admin.entity");
const moderator_entity_1 = require("../Moderator/moderator.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const seller_entity_1 = require("./seller.entity");
const bcrypt = __importStar(require("bcrypt"));
let SellerService = class SellerService {
    constructor(userRepo, moderatorRepo, adminRepo, sellerRepo) {
        this.userRepo = userRepo;
        this.moderatorRepo = moderatorRepo;
        this.adminRepo = adminRepo;
        this.sellerRepo = sellerRepo;
    }
    getIndex() {
        return "This path will be the seller panel";
    }
    getAll() {
        return this.sellerRepo.find();
    }
    searchById(id) {
        const ext = this.sellerRepo.findOneBy({ Id: id });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this ID in database!";
    }
    searchByUsername(username) {
        var ext = this.sellerRepo.findOne({ where: { Username: username } });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this username in database!";
    }
    editUser(editModerator, id) {
        return this.sellerRepo.update(id, editModerator);
    }
    deleteModeratorById(id) {
        return this.sellerRepo.delete(id);
    }
    async blockModeratorById(id) {
        var ext = this.sellerRepo.findOneBy({ Id: id });
        if (ext) {
            (await ext).Blocked = true;
            return this.sellerRepo.update(id, await ext);
        }
        else
            return "No matches found for this ID in database!";
    }
    async unblockModeratorById(id) {
        var ext = this.sellerRepo.findOneBy({ Id: id });
        if (ext) {
            (await ext).Blocked = false;
            return this.sellerRepo.update(id, await ext);
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
            return this.sellerRepo.save(mydto);
        }
    }
    async login(username, password) {
        const mydata = await this.sellerRepo.findOneBy({ Username: username });
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
SellerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(moderator_entity_1.ModeratorEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=seller.service.js.map