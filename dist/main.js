"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express_session_1 = __importDefault(require("express-session"));
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_session_1.default)({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 300000
        }
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map