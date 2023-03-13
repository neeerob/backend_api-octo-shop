import { CouponService } from "./coupon.service";
import { CouponDTO } from "./DTOs/coupon.dto";
export declare class CouponController {
    private couponService;
    constructor(couponService: CouponService);
    insertAdmin(mydto: CouponDTO, session: any): any;
    getAll(): any;
    getPartial(): any;
    deleteModeratorById(id: number): any;
}
