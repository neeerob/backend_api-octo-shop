import { CheckoutEntity } from "src/Checkout/checkout.entity";
import { ReportEntity } from "src/Report/report.entity";
import { ReviewEntity } from "src/Review/review.entity";
import { TransactionEntity } from "src/Transaction/transaction.entity";
export declare class UserEntity {
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
    Wallet: number;
    reports: ReportEntity[];
    review: ReviewEntity[];
    transaction: TransactionEntity[];
    checkout: CheckoutEntity[];
}
