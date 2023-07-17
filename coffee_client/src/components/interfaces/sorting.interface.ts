import {Dispatch, SetStateAction} from "react";

export enum EnumSorting {
    INCREASING_PRICE = 'INCREASING_PRICE',
    DECREASING_PRICE = 'DECREASING_PRICE',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST'
}

export interface SortingInterface {
    name: 'Increasing price' | 'Decreasing price' | 'Newest' | 'Oldest';
    value: EnumSorting;
}

export interface ISortingProps {
    sortingType: EnumSorting;
    setSortingType: Dispatch<SetStateAction<EnumSorting>>
}