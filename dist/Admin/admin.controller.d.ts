/// <reference types="multer" />
import { AdminService } from "./admin.service";
import { AdminDTO } from "./DTOs/admin.dto";
import { EditAdminDTO } from "./DTOs/editAdmin.dto";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    Index(): any;
    getModeratorSecure(): any;
    getModerators(): any;
    searchById(id: number): any;
    searchByUsername(username: string): any;
    editProfile(editModeratorDTO: EditAdminDTO, id: number): any;
    deleteModeratorById(id: number): any;
    blockModerator(id: number): any;
    unblockModerator(id: number): any;
    signup(mydto: AdminDTO, file: Express.Multer.File): Promise<any>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
}
