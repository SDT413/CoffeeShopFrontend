"use client";
import {NextPage} from "next";
import ProductDetails from "@/components/product-details/ProductDetails";
import {IProduct, IProductProps} from "@/components/interfaces/Product.interface";
import {products} from "@/components/data/product.data";


const ProductPage: NextPage<IProductProps> = ({product}) => {
    const currentProduct: IProduct | undefined = products.find(p => p.id === 1);
    return (
        <div>
            <ProductDetails product={currentProduct ? currentProduct : product}/>
        </div>
    );
}


export default ProductPage;