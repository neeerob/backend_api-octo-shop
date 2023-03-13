import { ReportDTO } from "./DTOs/report.dto";
import { ReportService } from "./report.services";
export declare class ReportController {
    private reportsService;
    constructor(reportsService: ReportService);
    insertAdmin(mydto: ReportDTO, session: any): any;
    getAll(): any;
    getPartial(): any;
    searchById(id: number): any;
    searchBySellerId(id: number): Promise<import("./report.entity").ReportEntity[]>;
    searchBySellerIdReturnAll(id: number): Promise<import("./report.entity").ReportEntity[]>;
    searchBySellerUsername(username: string): Promise<import("./report.entity").ReportEntity[]>;
    searchBySellerUsernameReturnAll(username: string): Promise<import("./report.entity").ReportEntity[]>;
    searchByUserId(id: number): Promise<import("./report.entity").ReportEntity[]>;
    searchByUserIdReturnAll(id: number): Promise<import("./report.entity").ReportEntity[]>;
    searchByUserUsername(username: string): Promise<import("./report.entity").ReportEntity[]>;
    searchByUserUsernameReturnAll(username: string): Promise<import("./report.entity").ReportEntity[]>;
    getUnprocessedReport(): any;
    addModerator(session: any, Action: string, id: number): Promise<any>;
    getProcessedReport(): any;
}
