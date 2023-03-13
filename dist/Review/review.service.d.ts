import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { ReviewDTO } from "./DTOs/review.dto";
import { ReviewEntity } from "./review.entity";
export declare class ReviewService {
    private userRepo;
    private sellerRepo;
    private reviewRepo;
    constructor(userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>, reviewRepo: Repository<ReviewEntity>);
    addReport(mydto: ReviewDTO): Promise<any>;
    getAll(): Promise<ReviewEntity[]>;
    getPartial(): any;
    searchById(id: any): Promise<any>;
    searchBySellerId(sellerId: any): Promise<ReviewEntity[]>;
    searchBySellerIdReturnAll(sellerId: any): Promise<ReviewEntity[]>;
    searchBySellerUsername(username: any): Promise<ReviewEntity[]>;
    searchBySellerUsernameReturnAll(username: any): Promise<ReviewEntity[]>;
    searchByUserId(userId: any): Promise<ReviewEntity[]>;
    searchByUserIdReturnAll(userId: any): Promise<ReviewEntity[]>;
    searchByUserUsername(username: any): Promise<ReviewEntity[]>;
    searchByUserUsernameReturnAll(username: any): Promise<ReviewEntity[]>;
}
