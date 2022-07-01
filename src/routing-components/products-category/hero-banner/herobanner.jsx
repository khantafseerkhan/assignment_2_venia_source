import React from "react";

class Herobanner extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6 banner-label ">
                <div className="label">
                    Women's
                </div>
                <div className="vertical-line">
                    <hr />
                </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 ">
               text
            </div>
            {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}
        </div>
            
        )
    }
}


export default Herobanner;
