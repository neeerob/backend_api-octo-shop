import { DepositOrWithdrawlDTO } from "./DTOs/depositOrWithdraw.dto";
import { TransactionDTO } from "./DTOs/transaction.dto";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    addTransaction(mydto: TransactionDTO, session: any): any;
    depositModey(mydto: DepositOrWithdrawlDTO, session: any): any;
    withdrawModey(mydto: DepositOrWithdrawlDTO, session: any): any;
    getAll(): any;
    getPartial(): any;
    getAlldeposit(): any;
    getAllWithdraw(): any;
}
