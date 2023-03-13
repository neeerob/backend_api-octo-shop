import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
export declare class ReportEntity {
    Id: number;
    ReporterUsername: string;
    ReportedUsername: string;
    Discription: string;
    ModeratorUsername: string;
    Action: string;
    Timestamp: Date;
    user: UserEntity;
    seller: SellerEntity;
}
