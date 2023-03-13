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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_dto_1 = require("./DTOs/report.dto");
const report_services_1 = require("./report.services");
const session_guard_1 = require("./session.guard");
let ReportController = class ReportController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    insertAdmin(mydto, session) {
        mydto.ReporterUsername = session.username;
        mydto.ModeratorUsername = null;
        return this.reportsService.addReport(mydto);
    }
    getAll() {
        return this.reportsService.getAll();
    }
    getPartial() {
        return this.reportsService.getPartial();
    }
    searchById(id) {
        return this.reportsService.searchById(id);
    }
    searchBySellerId(id) {
        return this.reportsService.searchBySellerId(id);
    }
    searchBySellerIdReturnAll(id) {
        return this.reportsService.searchBySellerIdReturnAll(id);
    }
    searchBySellerUsername(username) {
        return this.reportsService.searchBySellerUsername(username);
    }
    searchBySellerUsernameReturnAll(username) {
        return this.reportsService.searchBySellerUsernameReturnAll(username);
    }
    searchByUserId(id) {
        return this.reportsService.searchByUserId(id);
    }
    searchByUserIdReturnAll(id) {
        return this.reportsService.searchByUserIdReturnAll(id);
    }
    searchByUserUsername(username) {
        return this.reportsService.searchByUserUsername(username);
    }
    searchByUserUsernameReturnAll(username) {
        return this.reportsService.searchByUserUsernameReturnAll(username);
    }
    getUnprocessedReport() {
        return this.reportsService.getUnprocessedReport();
    }
    async addModerator(session, Action, id) {
        const sess = session.username;
        return await this.reportsService.process(id, Action, sess);
    }
    getProcessedReport() {
        return this.reportsService.getProcessedReport();
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO, Object]),
    __metadata("design:returntype", Object)
], ReportController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/getPartial'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getPartial", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("/search/bySellerId/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchBySellerId", null);
__decorate([
    (0, common_1.Get)("/search/bySellerId/returnAll/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchBySellerIdReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/bySellerUsername/:username"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchBySellerUsername", null);
__decorate([
    (0, common_1.Get)("/search/bySellerUsername/returnAll/:username"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchBySellerUsernameReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/byUserId/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchByUserId", null);
__decorate([
    (0, common_1.Get)("/search/byUserId/returnAll/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchByUserIdReturnAll", null);
__decorate([
    (0, common_1.Get)("/search/byUserUsername/:username"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchByUserUsername", null);
__decorate([
    (0, common_1.Get)("/search/byUserUsername/returnAll/:username"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "searchByUserUsernameReturnAll", null);
__decorate([
    (0, common_1.Get)('/getUnprocessedReport'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getUnprocessedReport", null);
__decorate([
    (0, common_1.Put)("/processReportByModerator/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)("Action")),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "addModerator", null);
__decorate([
    (0, common_1.Get)('/getProcessedReport'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getProcessedReport", null);
ReportController = __decorate([
    (0, common_1.Controller)('/report'),
    __metadata("design:paramtypes", [report_services_1.ReportService])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map