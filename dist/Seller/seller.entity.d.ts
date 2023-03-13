import { CheckoutEntity } from "src/Checkout/checkout.entity";
import { ProductEntity } from "src/Product/product.entity";
import { ReportEntity } from "src/Report/report.entity";
import { TransactionEntity } from "src/Transaction/transaction.entity";
export declare class SellerEntity {
    Id: number;
    Name: string;
    Email: string;
    Phone: string;
    Username: string;
    Password: string;
    Blocked: boolean;
    filename: string;
    Wallet: number;
    Star: number;
    TotalReviewer: number;
    reports: ReportEntity[];
    review: ReportEntity[];
    transaction: TransactionEntity[];
    product: ProductEntity[];
    checkout: CheckoutEntity[];
}
