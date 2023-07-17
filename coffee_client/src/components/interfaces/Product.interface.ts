export interface IProduct {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    //todo: add reviews interface
    reviews: IProductReview[];
    images: string[];
    category: string;
    quantity: number;
}

export interface IProductReview {
    id: number;
    product_id: number;
    content: string;
    rating: number;
}

export interface IProductProps {
    product: IProduct;
}