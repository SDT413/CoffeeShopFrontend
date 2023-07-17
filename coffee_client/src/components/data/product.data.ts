import {IProduct} from "@/components/interfaces/Product.interface";
import {ReviewsData} from "@/components/data/Reviews.data";
export const products: IProduct[] = [
    {
        id: 1,
        name: 'Midnight Mint Mocha Frappuccino',
        slug: 'midnight-mint-mocha-frappuccino',
        description: 'Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.',
        category: 'test',
        reviews: ReviewsData,
        price: 6,
        quantity: 1,
        images: ['/images/products/MintMocha.png', '/images/products/CaramelClassic.png', '/images/products/MintMocha.png']
    },
    {
        id: 2,
        name: 'Caramel Caffe Latte Classic',
        slug: 'caramel-caffe-latte-classic',
        description: 'Our signature medium-roasted with a smooth, balanced and rich flavor, this is the perfect everyday coffee in a cup.',
        category: 'test',
        reviews: [],
        price: 4,
        quantity: 1,
        images: ['/images/products/CaramelClassic.png']
    },
    {
        id: 3,
        name: 'Midnight Mint Mocha Frappuccino',
        slug: 'midnight-mint-mocha-frappuccino',
        description: 'Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.',
        category: 'test',
        reviews: [],
        price: 6,
        quantity: 1,
        images: ['/images/products/MintMocha.png']
    },
    {
        id: 4,
        name: 'Caramel Caffe Latte Classic',
        slug: 'caramel-caffe-latte-classic',
        description: 'Our signature medium-roasted with a smooth, balanced and rich flavor, this is the perfect everyday coffee in a cup.',
        category: 'test',
        reviews: [],
        price: 4,
        quantity: 1,
        images: ['/images/products/CaramelClassic.png']
    },
    {
        id: 5,
        name: 'Midnight Mint Mocha Frappuccino',
        slug: 'midnight-mint-mocha-frappuccino',
        description: 'Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.',
        category: 'test',
        reviews: [],
        price: 6,
        quantity: 1,
        images: ['/images/products/MintMocha.png']
    }
]