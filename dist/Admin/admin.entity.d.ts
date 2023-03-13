import { CouponEntity } from "src/Coupon/coupon.entity";
export declare class AdminEntity {
    Id: number;
    Firstname: string;
    Lastname: string;
    DOB: Date;
    Email: string;
    Phone: string;
    Username: string;
    Password: string;
    Blocked: boolean;
    filename: string;
    coupon: CouponEntity[];
}
