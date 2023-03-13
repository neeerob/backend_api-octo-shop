import { AdminEntity } from "src/Admin/admin.entity";
import { ModeratorEntity } from "src/Moderator/moderator.entity";
import { UserEntity } from "src/User/user.entity";
import { Repository } from "typeorm";
import { SellerEntity } from "./seller.entity";
import { EditSellerDTO } from "./DTOs/editSeller.dto";
export declare class SellerService {
    private userRepo;
    private moderatorRepo;
    private adminRepo;
    private sellerRepo;
    constructor(userRepo: Repository<UserEntity>, moderatorRepo: Repository<ModeratorEntity>, adminRepo: Repository<AdminEntity>, sellerRepo: Repository<SellerEntity>);
    getIndex(): any;
    getAll(): any;
    searchById(id: any): any;
    searchByUsername(username: any): any;
    editUser(editModerator: EditSellerDTO, id: any): any;
    deleteModeratorById(id: any): any;
    blockModeratorById(id: any): Promise<any>;
    unblockModeratorById(id: any): Promise<any>;
    signup(mydto: any): Promise<any>;
    login(username: any, password: any): Promise<0 | 1>;
}
