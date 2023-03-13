import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
export declare class ReviewEntity {
    Id: number;
    Review: string;
    ReviewByUsername: string;
    ReviewToUsername: string;
    Timestamp: Date;
    user: UserEntity;
    seller: SellerEntity;
}
