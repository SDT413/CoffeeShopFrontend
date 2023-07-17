import {FC, useState} from 'react';
import {IProduct} from "@/components/interfaces/Product.interface";
import ProductSliderItem from "@/components/UI/catalog/product_slider/product_slider-item/ProductSliderItem";
import styles from './ProductSlider.module.scss';

const ProductsSlider:FC<{products: IProduct[]}> = ({products}) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
    const nextItem = () => {
        if(selectedItemIndex === products.length) {
            setSelectedItemIndex(1);
        } else {
            setSelectedItemIndex(selectedItemIndex + 1);
        }
    }
    const prevItem = () => {
        if(selectedItemIndex === 1) {
            setSelectedItemIndex(products.length);
        } else {
            setSelectedItemIndex(selectedItemIndex - 1);
        }
    }
    return (
        <div className={styles.carousel}>
            {
                products.map((product,index) => (
                    <ProductSliderItem key={product.id} product={product} index={index}/>
                ))
            }
        </div>
    );
};

export default ProductsSlider;