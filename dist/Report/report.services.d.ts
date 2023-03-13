import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { ReportDTO } from "./DTOs/report.dto";
import { ReportEntity } from "./report.entity";
export declare class ReportService {
    private userRepo;
    private sellerRepo;
    private moderatorRepo;
    private reportRepo;
    constructor(userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>, moderatorRepo: Repository<ModeratorEntity>, reportRepo: Repository<ReportEntity>);
    addReport(mydto: ReportDTO): Promise<any>;
    getAll(): Promise<ReportEntity[]>;
    getPartial(): any;
    searchById(id: any): any;
    searchBySellerId(sellerId: any): Promise<ReportEntity[]>;
    searchBySellerIdReturnAll(sellerId: any): Promise<ReportEntity[]>;
    searchBySellerUsername(username: any): Promise<ReportEntity[]>;
    searchBySellerUsernameReturnAll(username: any): Promise<ReportEntity[]>;
    searchByUserId(userId: any): Promise<ReportEntity[]>;
    searchByUserIdReturnAll(userId: any): Promise<ReportEntity[]>;
    searchByUserUsername(username: any): Promise<ReportEntity[]>;
    searchByUserUsernameReturnAll(username: any): Promise<ReportEntity[]>;
    getUnprocessedReport(): Promise<ReportEntity[]>;
    process(id: any, Action: any, sess: any): Promise<any>;
    getProcessedReport(): Promise<ReportEntity[]>;
}
