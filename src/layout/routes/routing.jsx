import React from "react";

import { Routes, Route } from "react-router-dom";
import ProductCategory from "../../routing-components/products-category/productcategory";
import Shoppingcart from "../../routing-components/shopping-cart/shoppingcart";
import Singleproduct from "../../routing-components/single-product/singleproduct";
import Layout from "../layout";

export default class Routing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>


      <Routes>
      <Route path="" element={<ProductCategory />} />
      <Route path="assignment_2_venia" element={<ProductCategory />} />

      {/* <Route path="singleproduct" element={<Singleproduct />} /> */}

      <Route path="singleproduct/:id" element={<Singleproduct /> } />
      <Route path="shoppingcart" element={<Shoppingcart /> } />

      

    
      </Routes>
    


            
            </>
        )
    }
}