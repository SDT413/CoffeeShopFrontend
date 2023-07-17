import  {products} from "@/components/data/product.data";

export const useProductGallery = (productId: number) => {
    const nextProduct = products.find(product => product.id === productId + 1)?.slug;
    const prevProduct = products.find(product => product.id === productId - 1)?.slug;
    return {
        nextProduct,
        prevProduct
    }
}