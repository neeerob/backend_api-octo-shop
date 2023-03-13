/// <reference types="multer" />
import { EditSellerDTO } from "./DTOs/editSeller.dto";
import { SellerDTO } from "./DTOs/seller.dto";
import { SellerService } from "./seller.service";
export declare class SellerController {
    private sellerService;
    constructor(sellerService: SellerService);
    Index(): any;
    getModerators(): any;
    searchById(id: number): any;
    searchByUsername(username: string): any;
    editProfile(editModeratorDTO: EditSellerDTO, id: number): any;
    deleteModeratorById(id: number): any;
    blockModerator(id: number): any;
    unblockModerator(id: number): any;
    signup(mydto: SellerDTO, file: Express.Multer.File): Promise<any>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
}
