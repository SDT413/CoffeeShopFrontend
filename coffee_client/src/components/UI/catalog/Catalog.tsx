import {FC, useState} from 'react';
import ProductsSlider from "@/components/UI/catalog/product_slider/ProductsSlider";
import {IProduct} from "@/components/interfaces/Product.interface";
import Sorting from "@/components/UI/catalog/sorting/Sorting";
import {EnumSorting} from "@/components/interfaces/sorting.interface";

const Catalog :FC<{products: IProduct[]}> = ({products}) => {
    const [sortingType, setSortingType] = useState<EnumSorting>(EnumSorting.NEWEST);
    return (
        <div>
          <div className={'text-right mt-10'}>
              <Sorting sortingType={sortingType} setSortingType={setSortingType}/>
          </div>
            <ProductsSlider products={products}/>
        </div>
    );
};

export default Catalog;