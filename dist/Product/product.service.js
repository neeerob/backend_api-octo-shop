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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const checkout_entity_1 = require("../Checkout/checkout.entity");
const coupon_entity_1 = require("../Coupon/coupon.entity");
const seller_entity_1 = require("../Seller/seller.entity");
const transaction_entity_1 = require("../Transaction/transaction.entity");
const user_entity_1 = require("../User/user.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(sellerRepo, productRepo, userRepo, transactionRepo, checkoutRepo, couponRepo) {
        this.sellerRepo = sellerRepo;
        this.productRepo = productRepo;
        this.userRepo = userRepo;
        this.transactionRepo = transactionRepo;
        this.checkoutRepo = checkoutRepo;
        this.couponRepo = couponRepo;
    }
    async add(mydto) {
        const existSeller = await this.sellerRepo.findOneBy({ Username: mydto.SellerUsername });
        if (existSeller) {
            const transEn = new product_entity_1.ProductEntity();
            transEn.seller = existSeller;
            transEn.ProductName = mydto.ProductName;
            transEn.Price = mydto.Price;
            transEn.Discription = mydto.Discription;
            transEn.SellerUsername = mydto.SellerUsername;
            transEn.Quantity = mydto.Quantity;
            transEn.filename = mydto.filename;
            return this.productRepo.save(transEn);
        }
        else {
            return "Login into a seller account!";
        }
    }
    async getAll() {
        const queryBuilder = this.productRepo
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.seller', 'seller');
        const reports = await queryBuilder.getMany();
        return reports;
    }
    getPartial() {
        return this.productRepo.find();
    }
    async searchById(id) {
        var ext = await this.productRepo.findOneBy({ Id: id });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this ID in database!";
    }
    deleteProduct(id) {
        return this.productRepo.delete(id);
    }
    searchByUsername(productname) {
        const ext = this.productRepo.findOne({ where: { ProductName: productname } });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this username in database!";
    }
    async buyProduct(id, buyerUsername) {
        var product = await this.productRepo.findOne({ where: { Id: id } });
        if (product) {
            var buyer = await this.userRepo.findOne({ where: { Username: buyerUsername } });
            var seller = await this.sellerRepo.findOne({ where: { Username: product.SellerUsername } });
            if (buyer) {
                if (product.Quantity > 0) {
                    if (buyer.Wallet > product.Price) {
                        buyer.Wallet = (+buyer.Wallet - product.Price);
                        seller.Wallet = (+seller.Wallet + product.Price);
                        product.Quantity--;
                        product.SelledQuantity++;
                        const transEnty = new transaction_entity_1.TransactionEntity();
                        transEnty.user = buyer;
                        transEnty.seller = seller;
                        transEnty.Discription = "Bought a product";
                        transEnty.SenderUsername = buyer.Username;
                        transEnty.ReceiverUsername = seller.Username;
                        transEnty.Ammount = product.Price;
                        const cOut = new checkout_entity_1.CheckoutEntity();
                        cOut.ProductName = product.ProductName;
                        cOut.Price = product.Price;
                        cOut.Discription = "Bought a product";
                        cOut.SellerUsername = seller.Username;
                        cOut.BuyerUsername = buyer.Username;
                        cOut.Quantity = 1;
                        cOut.user = buyer;
                        cOut.seller = seller;
                        await this.checkoutRepo.save(cOut);
                        await this.transactionRepo.save(transEnty);
                        await this.userRepo.update(buyer.Id, buyer);
                        await this.sellerRepo.update(seller.Id, seller);
                        await this.productRepo.update(product.Id, product);
                        return cOut;
                    }
                    else {
                        return "You don't have enough money to buy this product";
                    }
                }
                else {
                    return "Quantity is 0. Not available. Try again later.";
                }
            }
            else {
                return "Login as User to buy products";
            }
        }
        else {
            return "No matches found for this ID in database!";
        }
    }
    async buyProductUsingCoupon(id, buyerUsername, coupon) {
        var couponObject = await this.couponRepo.findOne({ where: { Couponcode: coupon } });
        if (couponObject) {
            if (couponObject.Useability > 0) {
                var product = await this.productRepo.findOne({ where: { Id: id } });
                if (product) {
                    var buyer = await this.userRepo.findOne({ where: { Username: buyerUsername } });
                    var seller = await this.sellerRepo.findOne({ where: { Username: product.SellerUsername } });
                    if (buyer) {
                        if (product.Quantity > 0) {
                            if (buyer.Wallet > product.Price) {
                                buyer.Wallet = (+buyer.Wallet - product.Price) + +couponObject.Ammount;
                                seller.Wallet = (+seller.Wallet + product.Price) - +couponObject.Ammount;
                                product.Quantity--;
                                product.SelledQuantity++;
                                couponObject.Useability--;
                                const transEnty = new transaction_entity_1.TransactionEntity();
                                transEnty.user = buyer;
                                transEnty.seller = seller;
                                transEnty.Discription = "Bought a product";
                                transEnty.SenderUsername = buyer.Username;
                                transEnty.ReceiverUsername = seller.Username;
                                transEnty.Ammount = product.Price - +couponObject.Ammount;
                                const cOut = new checkout_entity_1.CheckoutEntity();
                                cOut.ProductName = product.ProductName;
                                cOut.Price = product.Price - +couponObject.Ammount;
                                cOut.Discription = "Bought a product";
                                cOut.SellerUsername = seller.Username;
                                cOut.BuyerUsername = buyer.Username;
                                cOut.Quantity = 1;
                                cOut.user = buyer;
                                cOut.seller = seller;
                                await this.couponRepo.update(couponObject.Id, couponObject);
                                await this.checkoutRepo.save(cOut);
                                await this.transactionRepo.save(transEnty);
                                await this.userRepo.update(buyer.Id, buyer);
                                await this.sellerRepo.update(seller.Id, seller);
                                await this.productRepo.update(product.Id, product);
                                return cOut;
                            }
                            else {
                                return "You don't have enough money to buy this product";
                            }
                        }
                        else {
                            return "Quantity is 0. Not available. Try again later.";
                        }
                    }
                    else {
                        return "Login as User to buy products";
                    }
                }
                else {
                    return "No matches found for this ID in database!";
                }
            }
            else {
                return "This coupon is alrady used!";
            }
        }
        else
            return "No matches found for this coupon in database!";
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(transaction_entity_1.TransactionEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(checkout_entity_1.CheckoutEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(coupon_entity_1.CouponEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map