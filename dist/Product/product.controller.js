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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const product_dto_1 = require("./DTOs/product.dto");
const product_guard_1 = require("./product.guard");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    signup(session, mydto, file) {
        mydto.filename = file.filename;
        mydto.SellerUsername = session.username;
        return this.productService.add(mydto);
    }
    getAll() {
        return this.productService.getAll();
    }
    getPartial() {
        return this.productService.getPartial();
    }
    searchById(id) {
        return this.productService.searchById(id);
    }
    searchByUsername(productname) {
        return this.productService.searchByUsername(productname);
    }
    deleteModeratorById(id) {
        return this.productService.deleteProduct(id);
    }
    buyProduct(session, id) {
        const buyerUsername = session.username;
        return this.productService.buyProduct(id, buyerUsername);
    }
    buyProductUsingCoupon(session, id, coupon) {
        const buyerUsername = session.username;
        return this.productService.buyProductUsingCoupon(id, buyerUsername, coupon);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.ProductDTO, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/getPartial'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProductController.prototype, "getPartial", null);
__decorate([
    (0, common_1.Get)("/search/:id"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)("search/s/:productname"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('productname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "searchByUsername", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "deleteModeratorById", null);
__decorate([
    (0, common_1.Get)("/buy/:id"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "buyProduct", null);
__decorate([
    (0, common_1.Post)("/buyUsingCoupon/:id"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)("coupon")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "buyProductUsingCoupon", null);
ProductController = __decorate([
    (0, common_1.Controller)('/product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map