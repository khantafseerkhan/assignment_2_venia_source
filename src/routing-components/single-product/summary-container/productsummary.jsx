import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux-management/actions/actions";


const Productsummary = (props) => {
    //productdata

    const dispatch = useDispatch();
    const [quantity, setQauntity] = useState(1);



    const incQuantity = () => {
        setQauntity(quantity + 1);

    }

    const decQuantity = () => {
        if (quantity > 1) {
            setQauntity(quantity - 1);

        }
    }
    const AddProduct = (inputdata) => {
        // const productData = useSelector(state => state.updateCartProduct);
        console.log("AddProduct    ==== " + JSON.stringify(inputdata))
        let obj = {
            id: inputdata.id,
            price: inputdata.price,
            description: inputdata.description,
            title: inputdata.title,
            rating: inputdata.rating,
            category: inputdata.category,
            image: inputdata.image,
            quantity: quantity
        }
        dispatch(addToCart(obj));
    }
    return (

        <div className="aem-Grid aem-Grid--12">

            {props.productdata && (
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12  aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12 product-summary">
                        <div className="aem-GridColumn aem-GridColumn--default--12">
                            <div className="flow"></div>
                            <div className="productdetails-section border-inside-bottom-3">
                                <div className="title-section">{props.productdata.title}</div>
                                <div className="price-section">&#36; {props.productdata.price}</div>
                                {/* <div className="rating-section">{props.productdata.rating.count}</div> */}
                                <div className="summary-section">{props.productdata.description}</div>

                            </div>

                            <div className="selection-section">
                                <div className="color-section">
                                    <div className="title-section">Color</div>
                                    <ul>
                                        <li><button>color</button></li>
                                        <li><button>color</button></li>
                                        <li><button>color</button></li>
                                        <li><button>color</button></li>

                                    </ul>
                                </div>

                                <div className="size-section">
                                    <div className="title-section">Size</div>

                                    <ul>
                                        <li><button>XS</button></li>
                                        <li><button>S</button></li>
                                        <li><button>M</button></li>
                                        <li><button>L</button></li>
                                        <li><button>XL</button></li>


                                    </ul>
                                </div>

                                <div className="quntity-section">
                                    <div className="title-section">Quantity</div>

                                    <button onClick={() => decQuantity()}>-</button>
                                    <input type="text" value={quantity} />
                                    <button onClick={() => incQuantity()}>+</button>


                                </div>


                                <div className="add-section">

                                    <button type="button" onClick={() => AddProduct(props.productdata)}>Add To Cart</button>

                                    <div>
                                        <a href=""><img src={require("../../../assets/img/heart.png")} /><span>Save</span></a>
                                        <a href=""><img src={require("../../../assets/img/share-2.png")} /><span>Share</span></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}


            {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


        </div>


    )
}


export default Productsummary;