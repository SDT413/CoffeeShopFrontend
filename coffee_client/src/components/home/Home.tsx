import React, {FC} from 'react';
import Layout from "@/components/UI/Layout";
import Catalog from "@/components/UI/catalog/Catalog";
import {products} from "@/components/data/product.data";
import Title from "@/components/UI/title/Title";
const Home: FC = () => {
    return (
        <div>
          <Layout title="Home" description={"More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."}>
              <Title>
                  The happiest hour of the year
              </Title>
              <Catalog products={products}/>
            </Layout>
        </div>
    );
};

export default Home;