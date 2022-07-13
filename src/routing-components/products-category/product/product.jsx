import React from "react";
import { useNavigate } from "react-router-dom";



const Products = (props) => {



    let navigate = useNavigate();

    const redirect = (element) => {
        navigate("/singleproduct/" + element.id);
    };

    return (
        <>
           

            {/* prducts  section   ====  */}
            <div className="aem-Grid aem-Grid--12">


                {
                    props.allproduct.length > 0 && (
                        props.allproduct.map(element => {
                            return (
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 center padding10">
                                    <div className="product-card " onClick={() => redirect(element)}  role='button' aria-label={element.title}>
                                        <div className="card-body">
                                            <img src={element.image} alt={element.title} />
                                        </div>
                                        <div className="card-footer">
                                            <div className="title">{element.title.substring(0, 30)}</div>
                                            <div className="price">&#36;{element.price}</div>
                                            <img alt="Save to Favourites" src={require("../../../assets/img/heart.png")} />
                                        </div>

                                    </div>
                                </div>

                            )
                        }

                        )
                    )
                }
            </div>
        </>
    )
}


export default Products;