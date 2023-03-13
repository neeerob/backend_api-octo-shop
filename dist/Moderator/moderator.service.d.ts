import { Repository } from "typeorm";
import { ModeratorEntity } from "./moderator.entity";
import { SecureModeratorDTO } from "./DTOs/secureModerator.dto";
import { EditModeratorDTO } from "./DTOs/editModerator.dto";
import { AdminEntity } from "src/Admin/admin.entity";
import { UserEntity } from "src/User/user.entity";
import { SellerEntity } from "src/Seller/seller.entity";
export declare class ModeratorService {
    private moderatorRepo;
    private adminRepo;
    private userRepo;
    private sellerRepo;
    constructor(moderatorRepo: Repository<ModeratorEntity>, adminRepo: Repository<AdminEntity>, userRepo: Repository<UserEntity>, sellerRepo: Repository<SellerEntity>);
    getIndex(): any;
    getAllSecureData(): Promise<SecureModeratorDTO[]>;
    getAll(): any;
    searchById(id: any): any;
    searchByUsername(username: any): any;
    editModerator(editModerator: EditModeratorDTO, id: any): any;
    deleteModeratorById(id: any): any;
    blockModeratorById(id: any): Promise<any>;
    unblockModeratorById(id: any): Promise<any>;
    signup(mydto: any): Promise<any>;
    login(username: any, password: any): Promise<0 | 1>;
}
