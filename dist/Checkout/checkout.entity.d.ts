import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
export declare class CheckoutEntity {
    Id: number;
    ProductName: string;
    Timestamp: Date;
    Price: number;
    Discription: string;
    SellerUsername: string;
    BuyerUsername: string;
    Quantity: number;
    seller: SellerEntity;
    user: UserEntity;
}
