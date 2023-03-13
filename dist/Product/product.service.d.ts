import { CheckoutEntity } from "src/Checkout/checkout.entity";
import { CouponEntity } from "src/Coupon/coupon.entity";
import { SellerEntity } from "src/Seller/seller.entity";
import { TransactionEntity } from "src/Transaction/transaction.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
export declare class ProductService {
    private sellerRepo;
    private productRepo;
    private userRepo;
    private transactionRepo;
    private checkoutRepo;
    private couponRepo;
    constructor(sellerRepo: Repository<SellerEntity>, productRepo: Repository<ProductEntity>, userRepo: Repository<UserEntity>, transactionRepo: Repository<TransactionEntity>, checkoutRepo: Repository<CheckoutEntity>, couponRepo: Repository<CouponEntity>);
    add(mydto: any): Promise<ProductEntity | "Login into a seller account!">;
    getAll(): Promise<ProductEntity[]>;
    getPartial(): any;
    searchById(id: any): Promise<any>;
    deleteProduct(id: any): any;
    searchByUsername(productname: any): any;
    buyProduct(id: any, buyerUsername: any): Promise<any>;
    buyProductUsingCoupon(id: any, buyerUsername: any, coupon: any): Promise<any>;
}
