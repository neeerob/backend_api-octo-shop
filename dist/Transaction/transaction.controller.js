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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const depositOrWithdraw_dto_1 = require("./DTOs/depositOrWithdraw.dto");
const transaction_dto_1 = require("./DTOs/transaction.dto");
const transaction_guard_1 = require("./transaction.guard");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    addTransaction(mydto, session) {
        mydto.SenderUsername = session.username;
        return this.transactionService.addTransaction(mydto);
    }
    depositModey(mydto, session) {
        mydto.SenderUsername = session.username;
        return this.transactionService.deposit(mydto);
    }
    withdrawModey(mydto, session) {
        mydto.SenderUsername = session.username;
        return this.transactionService.withdraw(mydto);
    }
    getAll() {
        return this.transactionService.getAll();
    }
    getPartial() {
        return this.transactionService.getPartial();
    }
    getAlldeposit() {
        return this.transactionService.getAlldeposit();
    }
    getAllWithdraw() {
        return this.transactionService.getAllWithdraw();
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_dto_1.TransactionDTO, Object]),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "addTransaction", null);
__decorate([
    (0, common_1.Post)('/deposit'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [depositOrWithdraw_dto_1.DepositOrWithdrawlDTO, Object]),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "depositModey", null);
__decorate([
    (0, common_1.Post)('/withdraw'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [depositOrWithdraw_dto_1.DepositOrWithdrawlDTO, Object]),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "withdrawModey", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/getPartial'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "getPartial", null);
__decorate([
    (0, common_1.Get)('/getAll/deposit'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "getAlldeposit", null);
__decorate([
    (0, common_1.Get)('/getAll/withdraw'),
    (0, common_1.UseGuards)(transaction_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TransactionController.prototype, "getAllWithdraw", null);
TransactionController = __decorate([
    (0, common_1.Controller)('/transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map