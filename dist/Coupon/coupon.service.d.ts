import { AdminEntity } from "src/Admin/admin.entity";
import { Repository } from "typeorm";
import { CouponEntity } from "./coupon.entity";
import { CouponDTO } from "./DTOs/coupon.dto";
export declare class CouponService {
    private adminRepo;
    private couponRepo;
    constructor(adminRepo: Repository<AdminEntity>, couponRepo: Repository<CouponEntity>);
    addReport(mydto: CouponDTO): Promise<any>;
    getAll(): Promise<CouponEntity[]>;
    getPartial(): any;
    deleteCoupon(id: any): any;
}
