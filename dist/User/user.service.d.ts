import { AdminEntity } from "src/Admin/admin.entity";
import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { SecureAdminDTO } from "src/Admin/DTOs/secureAdmin.dto";
import { EditUserDTO } from "./DTOs/editUser.dto";
import { SellerEntity } from "src/Seller/seller.entity";
export declare class UserService {
    private userRepo;
    private moderatorRepo;
    private adminRepo;
    private sellerRepo;
    constructor(userRepo: Repository<UserEntity>, moderatorRepo: Repository<ModeratorEntity>, adminRepo: Repository<AdminEntity>, sellerRepo: Repository<SellerEntity>);
    getIndex(): any;
    getAllSecureData(): Promise<SecureAdminDTO[]>;
    getAll(): any;
    searchById(id: any): any;
    searchByUsername(username: any): any;
    editUser(editModerator: EditUserDTO, id: any): any;
    deleteModeratorById(id: any): any;
    blockModeratorById(id: any): Promise<any>;
    unblockModeratorById(id: any): Promise<any>;
    signup(mydto: any): Promise<any>;
    login(username: any, password: any): Promise<0 | 1>;
}
