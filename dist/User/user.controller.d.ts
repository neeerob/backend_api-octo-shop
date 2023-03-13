/// <reference types="multer" />
import { EditUserDTO } from "./DTOs/editUser.dto";
import { UserDTO } from "./DTOs/user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    Index(): any;
    getModeratorSecure(): any;
    getModerators(): any;
    searchById(id: number): any;
    searchByUsername(username: string): any;
    editProfile(editModeratorDTO: EditUserDTO, id: number): any;
    deleteModeratorById(id: number): any;
    blockModerator(id: number): any;
    unblockModerator(id: number): any;
    signup(mydto: UserDTO, file: Express.Multer.File): Promise<any>;
    addModerator(session: any, username: string, password: string): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
}
