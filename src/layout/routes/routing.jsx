import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategory from "../../routing-components/products-category/productcategory";
import Shoppingcart from "../../routing-components/shopping-cart/shoppingcart";
import Singleproduct from "../../routing-components/single-product/singleproduct";

export default class Routing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>


    <BrowserRouter>
      <Routes>
      <Route path="assignment_2_venia" element={<ProductCategory />} />
      {/* <Route path="singleproduct" element={<Singleproduct />} /> */}

      <Route path="singleproduct/:id" element={<Singleproduct /> } />
      <Route path="shoppingcart" element={<Shoppingcart /> } />

      

    
      </Routes>
    </BrowserRouter>
    


            
            </>
        )
    }
}