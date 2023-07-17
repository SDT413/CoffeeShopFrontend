import {IProduct} from "@/components/interfaces/Product.interface";

export interface IProductSliderItem {
    product: IProduct;
    index: number;
}

export interface IProductSliderItemHeader extends Omit<IProductSliderItem, 'index'> {
    isActive: boolean;
    onSelectItem: () => void;
}