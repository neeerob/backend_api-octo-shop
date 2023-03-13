import { SellerEntity } from "src/Seller/seller.entity";
export declare class ProductEntity {
    Id: number;
    ProductName: string;
    PublishedDate: Date;
    Price: number;
    Discription: string;
    SellerUsername: string;
    Quantity: number;
    SelledQuantity: number;
    filename: string;
    seller: SellerEntity;
}
