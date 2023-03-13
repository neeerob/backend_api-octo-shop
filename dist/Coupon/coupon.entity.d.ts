import { AdminEntity } from "src/Admin/admin.entity";
export declare class CouponEntity {
    Id: number;
    AdminUsername: string;
    Ammount: number;
    Discription: string;
    Timestamp: Date;
    Useability: number;
    Couponcode: number;
    Used: number;
    admin: AdminEntity;
}
