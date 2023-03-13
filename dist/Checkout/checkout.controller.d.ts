import { CheckoutService } from "./checkout.service";
export declare class CheckoutController {
    private checkoutService;
    constructor(checkoutService: CheckoutService);
    getModerators(): any;
    searchById(id: number): Promise<any>;
    getAllInfo(): any;
}
