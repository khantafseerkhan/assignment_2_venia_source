import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getservice } from "../../apiservice/customservice";
import Productdescription from "./description-container/productdescription";
import Productimages from "./images-container/productimages";
import Productsummary from "./summary-container/productsummary";

const Singleproduct = () => {
    const id = useParams().id;

    const [singleProductdata, setSingleProductdata] = useState({});

    let navigate = useNavigate();


    const tocart = () => {
        navigate("/shoppingcart");
    }




    useEffect(() => {

        // this.props.updateproductslist(['1']);


        const apires = getservice('https://fakestoreapi.com/products/' + id);
        apires.then(json => {
            // this.props.updateproductslist(json);
            // setSingleProductdata(json)
            let temp = []
            //temp.push(json)
            //   console.log(temp)
            setSingleProductdata(json);

        });



        // setTimeout(() => {
        //  //   this.props.updateproductslist(['1','2']);

        // }, 10000);
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <>

            <div><button type="button" onClick={() => tocart()}>cart</button></div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn aem-GridColumn--phone--12">
                    <Productimages propductimg={singleProductdata.image} />
                </div>


                <div className="aem-GridColumn aem-GridColumn--default--6 aemGridColumn aem-GridColumn--tablet--6 aem-GridColumn aem-GridColumn--phone--12">
                    <Productsummary productdata={singleProductdata} />
                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>


            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--12">
                    <Productdescription productdata={singleProductdata} />
                    <hr />
                </div>

                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>
        </>
    )
}


export default Singleproduct;


