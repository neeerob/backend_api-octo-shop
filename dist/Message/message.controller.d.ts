import { MessageDTO } from "./DTOs/message.dto";
import { MessageService } from "./message.service";
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    send(session: any, myDto: MessageDTO): any;
    getMessages(session: any, receiverUsername: string): Promise<any>;
}
