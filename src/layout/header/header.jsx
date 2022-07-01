import React from "react";
import { hasClass } from "../../assets/customjs/custom";
// import { useNavigate, useParams } from "react-router-dom";


  const Header=(props)=>{

  //  let navigate = useNavigate();

    const openNav=()=>{
        let phonenav=document.getElementById("phonenav");
         if(hasClass(phonenav,"activenav")){
            phonenav.classList.remove("activenav");

         }else{
            phonenav.classList.add("activenav");

         }

    }
    const closeNav=()=>{
        let phonenav=document.getElementById("phonenav");
        if(hasClass(phonenav,"activenav")){
           phonenav.classList.remove("activenav");

        }
    }


    const goToCart=()=>{
     //   navigate("/shoppingcart")
    }


        return (
            <> <div className="header-container">
                <div className="aem-Grid aem-Grid--12">

                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--2 padding14 phone-show">
                        <img className="search" src={require("../../assets/img/menu.png")} onClick={()=> openNav()}/>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6 center" >
                        <span className="logo"><span className="right-slash">\</span><span className="left-slash">/</span>ENIA</span>

                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn aem-GridColumn--tablet--7 phone-hide">
                        <nav className="navigation ">
                            <ul className="flex">
                                <li><a href="">Women</a></li>
                                <li><a href="">Men</a></li>

                                <li><a href="">Smart Gear</a></li>

                                <li><a href="">Accessories</a></li>

                            </ul>
                        </nav>

                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--tablet--3 aem-GridColumn--phone--4">

                        <nav className="navigation right-nav">
                            <ul className="flex">
                                <li><img className="search" src={require("../../assets/img/search.png")} /> <span className="tab-hide phone-hide">Search</span></li>
                                <li className="phone-hide"><img className="search" src={require("../../assets/img/user.png")} /> <span className="tab-hide" >Sign in</span></li>
                                <li><img className="search" onClick={()=>goToCart()} src={require("../../assets/img/shopping-bag.png")} /> </li>

                            </ul>
                        </nav>
                    </div>



                </div>



            </div>

                <div className="aem-Grid aemGrid--12 phone-show shadow phone-show">
                    <div className="aem-GridColumn aem-GridColumn--phone--12 phonenav" id="phonenav">
                        <div className="header">Shopping Category
                            <div>   <a href="" onClick={()=>closeNav()}>&#x2715;</a></div>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="">Women</a></li>
                                <li ><a href="">Men</a></li>
                                <li><a href="">Smart Gear</a></li>

                                <li><a href="">Accessories</a></li>

                            </ul>
                        </nav>

                        <div className="bottom-section shadow">
                            <div className="bottom-footer">
                                <div>
                                    <img src={require("../../assets/img/user.png")} style={{ paddingRight: "10px" }} />
                                    <a href="">Account</a>
                                </div>

                                <div>
                                    <a href="">Sign in</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        )
    }

    export default Header;