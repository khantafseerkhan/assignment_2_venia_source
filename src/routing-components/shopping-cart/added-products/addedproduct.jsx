import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity, removeProduct } from "../../../redux-management/actions/actions";


const Addedproduct = (props) => {
    const dispatch = useDispatch();
  //  const [selectedProducts, setSelectedProducts] = useState([]);
    let selectedProducts = useSelector(state => state.updateCartProduct.cartProduct);


    useEffect(() => {
     //   setSelectedProducts(productData);

    }, [])
    const quantInc=(element,index)=>{

        dispatch(incQuantity(element.id))

      //  const productData = useSelector(state => state.updateCartProduct.cartProduct);
     document.getElementById(element.id).value=selectedProducts[index].quantity;

       // setSelectedProducts(useSelector(state => state.updateCartProduct.cartProduct))

    }

    const quantDec=(element,index)=>{
        dispatch(decQuantity(element.id));

        document.getElementById(element.id).value=selectedProducts[index].quantity;

        //setSelectedProducts(useSelector(state => state.updateCartProduct.cartProduct))

    }


    const removeproduct=(index)=>{
        let tempcart=selectedProducts;

        tempcart.splice(index,1)
        console.log("here is lenght  "+tempcart.length)
        dispatch(removeProduct(index));

     //   setSelectedProducts(tempcart);




    }
    return (
        <div className="">
      {selectedProducts.map((element,index)=>{
            return (
                  <div className="aem-Grid aem-Grid--12 productcontainer">
                    {/* image section */}
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--tablet--2 aem-GridColumn aem-GridColumn--phone--2">

                    <div className="image-container">
                        <img src={element.image} alt="" />
                        </div>
                </div>


                {/* centered details and quantity section */}
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn aem-GridColumn--tablet--9 aem-GridColumn aem-GridColumn--phone--9">


                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--phone--10 details padding14">
                            <div className="title-section">{element.title}</div>
                            <div className="sub-section">
                                <span>size :</span><span>XL</span><br />
                                <span>color :</span><span>Red</span><br />
                                <span>&#36; {element.price*element.quantity}</span>
                               </div>


                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--phone--10 quantitycontainer padding14">
                        <div className="quntity-section">

                                 <button onClick={()=>quantDec(element,index)}>-</button>
                                 <input type="text" value={element.quantity} id={element.id}/>
                                 <button onClick={()=>quantInc(element,index)}>+</button>
                            
                            
                             </div>
                        </div>
                    </div>
                </div>

                {/* edit section */}
                <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn aem-GridColumn--tablet--1 aem-GridColumn aem-GridColumn--phone--1 edit-section">
                   <ul className="tab-hide phone-hide">
                    <li>
                        <a ><img src={require("../../../assets/img/edit-2.png")} /> <span>Edit item</span></a>
                    </li>

                    <li>
                        <a ><img src={require("../../../assets/img/trash-2.png")}  /> <span>Remove</span></a>
                    </li>


                    <li>
                        <a ><img src={require("../../../assets/img/heart.png")}/> <span>Save for later</span></a>
                    </li>
                    </ul>
                    
                    <img src={require("../../../assets/img/more-horizontal.png")} className="tab-show phone-show"/>

                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>
            )
          }

          )}
        </div>


    )
}

export default Addedproduct;