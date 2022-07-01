import React from "react";
import { useNavigate } from "react-router-dom";



const Products=(props)=> {



    let navigate = useNavigate();

    const redirect = (element) => {
      navigate("/singleproduct/"+element.id);
    };
  
        return (
            <div className="aem-Grid aem-Grid--12">
                
                
                {
                   props.allproduct.length>0 && (
                    props.allproduct.map(element => {
                            return (
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 center padding10">
                                <div className="product-card " onClick={()=>redirect(element)}>
                                    <div className="card-body">
                                        <img src={element.image} alt="img"/>
                                    </div>
                                    <div className="card-footer">
                                        <div className="title">{element.title.substring(0, 30)}</div>
                                        <div className="price">&#36;{element.price}</div>
                                        <img src={require("../../../assets/img/heart.png")}/>
                                    </div>
            
                                </div>
                            </div>
            
                            )
                        }
        
                        )
                    )
               }
            </div>

        )
    }


export default Products;