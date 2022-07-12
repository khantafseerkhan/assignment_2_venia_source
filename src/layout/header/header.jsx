import React from "react";
import { hasClass } from "../../assets/customjs/custom";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";



  const Header=(props)=>{

    const cartCount = useSelector(state => state.updateCartProduct.cartCount);
   

    let navigate = useNavigate();


 
    const openNav=()=>{
        let phonenav=document.getElementById("phonenav");
         if(hasClass(phonenav,"activenav")){
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow="initial";

         }else{
            phonenav.classList.add("activenav");
            document.getElementById("mainbody").style.overflow="hidden";

         }

    }
    const closeNav=()=>{
        let phonenav=document.getElementById("phonenav");
        if(hasClass(phonenav,"activenav")){
           phonenav.classList.remove("activenav");
           document.getElementById("mainbody").style.overflow="initial";


        }
    }


    const goToCart=()=>{
        navigate("/shoppingcart")
    }


        return (
            <> 
            <div className="header-container">
                <div className="aem-Grid aem-Grid--12">

                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--2 padding14 phone-show">
                        <img alt="Menu" className="search" src={require("../../assets/img/menu.png")} onClick={()=> openNav()}/>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6 center" >
                        <span className="logo"><span className="right-slash">\</span><span className="left-slash">/</span>ENIA</span>

                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn aem-GridColumn--tablet--7 phone-hide">
                        <nav className="navigation "  role='navigation' aria-label='Menu'>
                            <ul className="flex">
                                <li><a href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Women</a></li>
                                <li><a  href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Men</a></li>

                                <li><a  href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Smart Gear</a></li>

                                <li><a  href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Accessories</a></li>

                            </ul>
                        </nav>

                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--tablet--3 aem-GridColumn--phone--4">

                        <nav className="navigation right-nav">
                            <ul className="flex">
                                <li><a  href="javascript:void(0)"><img alt="Search" className="search" src={require("../../assets/img/search.png")} /> <span className="tab-hide phone-hide">Search</span></a></li>
                                <li className="phone-hide"><a  href="javascript:void(0)"><img className="search" alt="User Profile" src={require("../../assets/img/user.png")} /> <span className="tab-hide" >Sign in</span></a></li>
                                <li><a  href="javascript:void(0)"><img alt="Shopping Cart" className="search" onClick={()=>goToCart()} src={require("../../assets/img/shopping-bag.png")} />
                                {
                                    cartCount>0 && (
                                        <span className="badge">{cartCount}</span>

                                    )
                                    
                                }
                               </a>
                                </li>

                            </ul>
                        </nav>
                    </div>



                </div>



            </div>

                <div className="aem-Grid aemGrid--12 phone-show shadow phone-show">
                    <div className="aem-GridColumn aem-GridColumn--phone--12 phonenav" id="phonenav">
                        <div className="header">Shopping Category
                            <div>   <a   onClick={()=>closeNav()}>&#x2715;</a></div>
                        </div>
                        <nav  role='navigation' aria-label='Mobile Menu'>
                            <ul>
                                <li><a  href="javascript:void(0)" onClick={()=>{navigate("/assignment_2_venia"); closeNav()}}>Women</a></li>
                                <li ><a  href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Men</a></li>
                                <li><a  href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Smart Gear</a></li>

                                <li><a href="javascript:void(0)" onClick={()=>navigate("/assignment_2_venia")}>Accessories</a></li>

                            </ul>
                        </nav>

                        <div className="bottom-section shadow">
                            <div className="bottom-footer">
                                <div>
                                    <img alt="Account" src={require("../../assets/img/user.png")} style={{ paddingRight: "10px" }} />
                                    <a  href="javascript:void(0)">Account</a>
                                </div>

                                <div>
                                    <a  href="javascript:void(0)">Sign in</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        )
    }

    export default Header;