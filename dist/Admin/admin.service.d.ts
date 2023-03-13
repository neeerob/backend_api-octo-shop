import { Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { SecureAdminDTO } from "./DTOs/secureAdmin.dto";
import { EditAdminDTO } from "./DTOs/editAdmin.dto";
import { UserEntity } from "src/User/user.entity";
import { SellerEntity } from "src/Seller/seller.entity";
import { MailerService } from "@nestjs-modules/mailer";
import { ForgotPasswordEntity } from "src/ForgotPassword/forgot.entity";
export declare class AdminService {
    private adminRepo;
    private moderatorRepo;
    private userRepo;
    private sellerRepo;
    private forgotRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, moderatorRepo: Repository<ModeratorEntity>, userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>, forgotRepo: Repository<ForgotPasswordEntity>, mailerService: MailerService);
    getIndex(): any;
    getAllSecureData(): Promise<SecureAdminDTO[]>;
    getAll(): any;
    searchById(id: any): any;
    searchByUsername(username: any): any;
    editModerator(editAdmin: EditAdminDTO, id: any): any;
    deleteModeratorById(id: any): any;
    blockModeratorById(id: any): Promise<any>;
    unblockModeratorById(id: any): Promise<any>;
    signup(mydto: any): Promise<any>;
    login(username: any, password: any): Promise<0 | 1>;
}
