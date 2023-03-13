import { MailerService } from "@nestjs-modules/mailer";
import { AdminEntity } from "src/Admin/admin.entity";
import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { SellerEntity } from "src/Seller/seller.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { ForgotPasswordEntity } from "./forgot.entity";
export declare class ForgotPasswordService {
    private adminRepo;
    private moderatorRepo;
    private userRepo;
    private sellerRepo;
    private forgotRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, moderatorRepo: Repository<ModeratorEntity>, userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>, forgotRepo: Repository<ForgotPasswordEntity>, mailerService: MailerService);
    createCode(username: any): Promise<any>;
    changePassword(username: any, password: any, code: any): Promise<import("typeorm").UpdateResult | "Something went wrong!" | "Incorrect, Expare or Used code" | "Given username don't exist" | "Enter you code you recived in email address" | "Please provide valid password with at least 8 characters">;
}
