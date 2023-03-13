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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seller_entity_1 = require("../Seller/seller.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
let TransactionService = class TransactionService {
    constructor(userRepo, sellerRepo, transactionRepo) {
        this.userRepo = userRepo;
        this.sellerRepo = sellerRepo;
        this.transactionRepo = transactionRepo;
    }
    async addTransaction(mydto) {
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.SenderUsername });
        if (existingUser) {
            const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.ReceiverUsername });
            if (existSeller) {
                const reportEnty = new transaction_entity_1.TransactionEntity();
                reportEnty.user = existingUser;
                reportEnty.seller = existSeller;
                reportEnty.Discription = mydto.Discription;
                reportEnty.SenderUsername = mydto.SenderUsername;
                reportEnty.ReceiverUsername = mydto.ReceiverUsername;
                reportEnty.Ammount = mydto.Ammount;
                return this.transactionRepo.save(reportEnty);
            }
            else {
                return "Seller username not found.";
            }
        }
        else {
            return "Only user can send money to seller.";
        }
    }
    async deposit(mydto) {
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.SenderUsername });
        const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.SenderUsername });
        if (existingUser) {
            if (mydto.Ammount > 0) {
                const reportEnty = new transaction_entity_1.TransactionEntity();
                reportEnty.user = existingUser;
                reportEnty.seller = null;
                reportEnty.Discription = "Deposit";
                reportEnty.SenderUsername = mydto.SenderUsername;
                reportEnty.ReceiverUsername = null;
                reportEnty.Ammount = mydto.Ammount.valueOf();
                existingUser.Wallet = (+existingUser.Wallet + mydto.Ammount);
                await this.userRepo.update(existingUser.Id, existingUser);
                return this.transactionRepo.save(reportEnty);
            }
            else {
                return "You cant put negative number in deposit";
            }
        }
        else if (existSeller) {
            if (mydto.Ammount > 0) {
                const reportEnty = new transaction_entity_1.TransactionEntity();
                reportEnty.user = null;
                reportEnty.seller = existSeller;
                reportEnty.Discription = "Deposit";
                reportEnty.SenderUsername = mydto.SenderUsername;
                reportEnty.ReceiverUsername = null;
                reportEnty.Ammount = mydto.Ammount.valueOf();
                existSeller.Wallet = (+existSeller.Wallet + mydto.Ammount);
                await this.sellerRepo.update(existSeller.Id, existSeller);
                return this.transactionRepo.save(reportEnty);
            }
            else {
                return "You cant put negative number in deposit";
            }
        }
        else {
            return "Login as seller or user.";
        }
    }
    async withdraw(mydto) {
        const existingUser = await this.userRepo.findOneBy({ Username: mydto.SenderUsername });
        const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.SenderUsername });
        if (existingUser) {
            if (mydto.Ammount > 0) {
                if (mydto.Ammount < existingUser.Wallet) {
                    const reportEnty = new transaction_entity_1.TransactionEntity();
                    reportEnty.user = existingUser;
                    reportEnty.seller = null;
                    reportEnty.Discription = "Withdraw";
                    reportEnty.SenderUsername = mydto.SenderUsername;
                    reportEnty.ReceiverUsername = null;
                    reportEnty.Ammount = mydto.Ammount.valueOf();
                    existingUser.Wallet = (+existingUser.Wallet - mydto.Ammount);
                    await this.userRepo.update(existingUser.Id, existingUser);
                    return this.transactionRepo.save(reportEnty);
                }
                else {
                    return "You dont have enough money to withdraw";
                }
            }
            else {
                return "You cant put negative number in deposit";
            }
        }
        else if (existSeller) {
            if (mydto.Ammount > 0) {
                if (mydto.Ammount < existSeller.Wallet) {
                    const reportEnty = new transaction_entity_1.TransactionEntity();
                    reportEnty.user = null;
                    reportEnty.seller = existSeller;
                    reportEnty.Discription = "Withdraw";
                    reportEnty.SenderUsername = mydto.SenderUsername;
                    reportEnty.ReceiverUsername = null;
                    reportEnty.Ammount = mydto.Ammount.valueOf();
                    existSeller.Wallet = (+existSeller.Wallet - mydto.Ammount);
                    await this.sellerRepo.update(existSeller.Id, existSeller);
                    return this.transactionRepo.save(reportEnty);
                }
                else {
                    return "You dont have enough money to withdraw";
                }
            }
            else {
                return "You cant put negative number in deposit";
            }
        }
        else {
            return "Login as seller or user.";
        }
    }
    async getAll() {
        const queryBuilder = this.transactionRepo
            .createQueryBuilder('report')
            .leftJoinAndSelect('report.seller', 'seller')
            .leftJoinAndSelect('report.user', 'user');
        const reports = await queryBuilder.getMany();
        return reports;
    }
    getPartial() {
        return this.transactionRepo.find();
    }
    async getAlldeposit() {
        const transactions = await this.transactionRepo.find({ where: { Discription: "Deposit" } });
        return transactions;
    }
    async getAllWithdraw() {
        const transactions = await this.transactionRepo.find({ where: { Discription: "Withdraw" } });
        return transactions;
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(transaction_entity_1.TransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map