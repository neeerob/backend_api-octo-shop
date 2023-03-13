import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { DepositOrWithdrawlDTO } from "./DTOs/depositOrWithdraw.dto";
import { TransactionDTO } from "./DTOs/transaction.dto";
import { TransactionEntity } from "./transaction.entity";
export declare class TransactionService {
    private userRepo;
    private sellerRepo;
    private transactionRepo;
    constructor(userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>, transactionRepo: Repository<TransactionEntity>);
    addTransaction(mydto: TransactionDTO): Promise<any>;
    deposit(mydto: DepositOrWithdrawlDTO): Promise<any>;
    withdraw(mydto: DepositOrWithdrawlDTO): Promise<any>;
    getAll(): Promise<TransactionEntity[]>;
    getPartial(): any;
    getAlldeposit(): Promise<any>;
    getAllWithdraw(): Promise<any>;
}
