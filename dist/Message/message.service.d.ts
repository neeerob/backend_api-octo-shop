import { Repository } from "typeorm";
import { MessageEntity } from "./message.entity";
export declare class MessageService {
    private messageRepo;
    constructor(messageRepo: Repository<MessageEntity>);
    send(myDto: any): any;
    getMessages(senderUsername: string, receiverUsername: string): Promise<MessageEntity[]>;
}
