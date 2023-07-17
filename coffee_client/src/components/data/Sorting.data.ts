import {EnumSorting, SortingInterface} from "@/components/interfaces/sorting.interface";

export const SortingData:SortingInterface[]
    = [
    {
        name: 'Increasing price',
        value: EnumSorting.INCREASING_PRICE,
    },
    {
        name: 'Decreasing price',
        value: EnumSorting.DECREASING_PRICE,
    },
    {
        name: 'Newest',
        value: EnumSorting.NEWEST,
    },
    {
        name: 'Oldest',
        value: EnumSorting.OLDEST,
    }
];