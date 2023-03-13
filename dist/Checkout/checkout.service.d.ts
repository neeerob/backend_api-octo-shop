import { Repository } from "typeorm";
import { CheckoutEntity } from "./checkout.entity";
export declare class CheckoutService {
    private checkoutRepo;
    constructor(checkoutRepo: Repository<CheckoutEntity>);
    getAll(): any;
    searchById(id: any): Promise<any>;
    getAllInfo(): Promise<CheckoutEntity[]>;
}
