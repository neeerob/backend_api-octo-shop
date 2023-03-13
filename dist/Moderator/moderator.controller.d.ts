/// <reference types="multer" />
import { EditModeratorDTO } from "./DTOs/editModerator.dto";
import { ModeratorDTO } from "./DTOs/moderator.dto";
import { ModeratorService } from "./moderator.service";
export declare class ModeratorController {
    private moderatorService;
    constructor(moderatorService: ModeratorService);
    Index(): any;
    getModeratorSecure(): any;
    getModerators(): any;
    searchById(id: number): any;
    searchByUsername(username: string): any;
    editProfile(editModeratorDTO: EditModeratorDTO, id: number): any;
    deleteModeratorById(id: number): any;
    blockModerator(id: number): any;
    unblockModerator(id: number): any;
    signup(mydto: ModeratorDTO, file: Express.Multer.File): Promise<any>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
}
