import { ReviewDTO } from "./DTOs/review.dto";
import { ReviewService } from "./review.service";
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    insertAdmin(mydto: ReviewDTO, session: any): any;
    getAll(): any;
    getPartial(): any;
    searchById(id: number): Promise<any>;
    searchBySellerId(id: number): Promise<import("./review.entity").ReviewEntity[]>;
    searchBySellerIdReturnAll(id: number): Promise<import("./review.entity").ReviewEntity[]>;
    searchBySellerUsername(username: string): Promise<import("./review.entity").ReviewEntity[]>;
    searchBySellerUsernameReturnAll(username: string): Promise<import("./review.entity").ReviewEntity[]>;
    searchByUserId(id: number): Promise<import("./review.entity").ReviewEntity[]>;
    searchByUserIdReturnAll(id: number): Promise<import("./review.entity").ReviewEntity[]>;
    searchByUserUsername(username: string): Promise<import("./review.entity").ReviewEntity[]>;
    searchByUserUsernameReturnAll(username: string): Promise<import("./review.entity").ReviewEntity[]>;
}
