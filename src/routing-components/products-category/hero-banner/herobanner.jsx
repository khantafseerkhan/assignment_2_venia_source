import React from "react";

class Herobanner extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 banner-label  tab-hide phone-hide">
                <div className="label">
                    Women's
                </div>
                <div className="vertical-line">
                    <hr />
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12  aem-GridColumn--phone--12 heroimg" >
               <img src={require("../../../assets/img/heroimg.PNG")} alt="Banner Image" />

               <div className="center-text-section">
               
               </div>
            </div>
            {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}
        </div>
            
        )
    }
}


export default Herobanner;
