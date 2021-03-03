import React from 'react';
import Layout from '../../components/Layout';
import ProductsGrid from './ProductsGrid';

const Product = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Products</h1>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Product;