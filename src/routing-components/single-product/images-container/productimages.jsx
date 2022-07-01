
import React from "react";

const Productimages=(props)=> {
    //propductimg
        return (
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--2 ">
                    <div className="img-menu">
                        <ul>
                            <li><img src={props.propductimg} alt="item" /> </li>

                            <li><img src={props.propductimg} alt="item" /> </li>
                            <li><img src={props.propductimg} alt="item" /> </li>
                            <li><img src={props.propductimg} alt="item" /> </li>

                            <li><img src={props.propductimg} alt="item" /> </li>


                        </ul>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--10 ">
                    <div className="present-img">
                    <img src={props.propductimg} alt="item" />
                    </div>
                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>

        )
    }


export default Productimages