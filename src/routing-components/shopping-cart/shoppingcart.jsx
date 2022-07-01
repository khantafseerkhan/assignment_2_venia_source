import { useEffect } from "react";
import { useState } from "react";
import Addedproduct from "./added-products/addedproduct";
import Pricesummary from "./price-summary/pricesummary";
import Recentlyviewed from "./recently-viewed/recentlyviewed";
import { useSelector, useDispatch } from "react-redux";
import Shippingsection from "./shipping-section/shippingsection";

const Shoppingcart = () => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const productData = useSelector(state => state.updateCartProduct.cartProduct);

    useEffect(() => {
        setSelectedProducts(productData)
    }, [])
    return (
        <>
{selectedProducts.length==0?
(

    <div className="aem-Grid aem-Grid--12">
    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12">
    <div className="msg">Nothing to show into cart.......</div>
    </div>
    


</div>

    
):(
    <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12">
                    <Addedproduct/>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12">
                    <Pricesummary />
                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>

)
}
        

            {/* shipping secton    */}

            <div className="aem-Grid aem-Grid--12">


                <Shippingsection />

                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>

            <div className="aem-Grid aem-Grid--12">

                <div className="aem-GridColumn aem-GridColumn--default--12  ">
                    <Recentlyviewed />
                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>
        </>
    )
}

export default Shoppingcart;