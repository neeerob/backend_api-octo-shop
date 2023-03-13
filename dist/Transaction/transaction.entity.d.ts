import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
export declare class TransactionEntity {
    Id: number;
    SenderUsername: string;
    ReceiverUsername: string;
    Discription: string;
    Ammount: number;
    Timestamp: Date;
    user: UserEntity;
    seller: SellerEntity;
}
