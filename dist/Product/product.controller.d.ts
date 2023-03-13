/// <reference types="multer" />
import { ProductDTO } from "./DTOs/product.dto";
import { ProductService } from "./product.service";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    signup(session: any, mydto: ProductDTO, file: Express.Multer.File): Promise<import("./product.entity").ProductEntity | "Login into a seller account!">;
    getAll(): any;
    getPartial(): any;
    searchById(id: number): Promise<any>;
    searchByUsername(productname: string): any;
    deleteModeratorById(id: number): any;
    buyProduct(session: any, id: number): Promise<any>;
    buyProductUsingCoupon(session: any, id: number, coupon: number): Promise<any>;
}
