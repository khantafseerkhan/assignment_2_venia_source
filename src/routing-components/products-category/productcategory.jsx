import React from "react";
import Filter from "./filter-section/filter";
import Herobanner from "./hero-banner/herobanner";
import Products from "./product/product";
import { connect } from "react-redux";
import { updateproductslist } from "../../redux-management/actions/actions";
import { getservice } from "../../apiservice/customservice";
import { useEffect } from "react";
import { useState } from "react";



const ProductCategory=(props)=> {
const [productDetails,setProductDetails] =useState([]);
    
   
useEffect(() => {
        console.log("come into")
       // this.props.updateproductslist(['1']);


        const apires = getservice('https://fakestoreapi.com/products');
        apires.then(json => {
           // this.props.updateproductslist(json);
           console.log("data   -====  "+JSON.stringify(json))
           setProductDetails(json)
            
        });


        
        // setTimeout(() => {
        //  //   this.props.updateproductslist(['1','2']);

        // }, 10000);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

        return (
            <>


                {/* Banner Section */}
                {/* <div className="hero-banner">

                    {/* Banner Section
                    <Herobanner />
                </div> */}


                {/* Head Section */}


                <div className="product-head">

                </div>

                {/* filter and Product */}

                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2">
                        <Filter />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--9 ">
                        <Products allproduct={productDetails} />
                    </div>
                    {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


                </div>








            </>


        )
    }



export default ProductCategory