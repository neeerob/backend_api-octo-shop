import { ForgotPasswordService } from "./forgot.service";
export declare class ForgotPasswordController {
    private forgotService;
    constructor(forgotService: ForgotPasswordService);
    sendEmail(username: string): Promise<any>;
    changePassword(username: string, password: string, code: number): Promise<import("typeorm").UpdateResult | "Something went wrong!" | "Incorrect, Expare or Used code" | "Given username don't exist" | "Enter you code you recived in email address" | "Please provide valid password with at least 8 characters">;
}
