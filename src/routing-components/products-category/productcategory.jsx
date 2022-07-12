import React, { useState, useMemo } from 'react';

import Filter from "./filter-section/filter";
import Herobanner from "./hero-banner/herobanner";
import Products from "./product/product";
import { getservice } from "../../apiservice/customservice";
import { useEffect } from "react";
import { hasClass, GetSortOrder,GetReverseSort,removeloader,activeloader} from "../../assets/customjs/custom";
import { useParams } from "react-router-dom";
import Pagination from "../../components/paginations/pagination";

let PageSize = 5;


const ProductCategory = (props) => {


    const [productDetails, setProductDetails] = useState([]);
    const [filteredData,setFilteredData]=useState([]);

    const [currentPage, setCurrentPage] = useState(1);
   useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        setFilteredData(productDetails.slice(firstPageIndex, lastPageIndex));
        //return productDetails.slice(firstPageIndex, lastPageIndex);

      
    }, [currentPage]);



    const sortChange = (event) => {

        if(event.target.value=="lowest"){
           let sortedData= productDetails.sort(GetSortOrder("price"));


            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
    
            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));
        }else if(event.target.value=="highest"){

           // productDetails.sort(GetReverseSort("price"));
            let sortedData = productDetails.slice().sort((a, b) => b.price - a.price);

            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
    
            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));

        }

    }





    const openNav = () => {
        let phonenav = document.getElementById("absolute-postion");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";

        } else {
            //  document.getElementById("mainbody").style.overflow="hidden";

            phonenav.classList.add("activenav");

        }

    }

    useEffect(() => {
        // this.props.updateproductslist(['1']);

        try{activeloader();}catch(e){}



        const apires = getservice('https://fakestoreapi.com/products');
        apires.then(json => {

            try{removeloader()}catch(e){}
            // this.props.updateproductslist(json);
            setProductDetails(json)

            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
    
            setFilteredData(json.slice(firstPageIndex, lastPageIndex));

        });



        // setTimeout(() => {
        //  //   this.props.updateproductslist(['1','2']);

        // }, 10000);
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <>


            {/* Banner Section */}
            <div className="hero-banner">

                <Herobanner />
            </div>


            {/* Head Section */}


            <div className="product-head">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left padding10">
                        <div className="product-top"> Clothing / Women’s / Outerwear</div>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 center padding10 tab-show phone-show ">
                        <div className="product-top">
                            <img alt="Filters" src={require("../../assets/img/sliders.png")} /><a onClick={() => openNav()}>Filters</a>
                        </div>

                    </div> <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 center padding10 tab-show phone-show">
                        <div className="product-top">
                            <img alt="up arrow" src={require("../../assets/img/arrow-up.png")} />
                            <img alt="down arrow" src={require("../../assets/img/arrow-down.png")} />
                            <a >Sort</a>


                        </div>

                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left padding10  tab-center phone-center">
                        <div className="product-top">{productDetails.length} Results</div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 right padding10 tab-hide phone-hide">

                        <div className="product-top right">
                            <select className="select-form" onChange={(e) => sortChange(e)}>
                                <option selected>Sort by Price</option>
                                <option value={"lowest"}>Lowest</option>
                                <option value={"highest"}>Highest</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* filter and Product */}

            <div className="aem-Grid aem-Grid--12">

                <Filter />
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">

                    {
                    filteredData.length > 0 &&
                        (<Products allproduct={filteredData} />)

                    }


                    <div className='pagination-section'>

                        {filteredData.length > 0 && (<Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={productDetails.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />)}

                    </div>

                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>








        </>


    )
}



export default ProductCategory