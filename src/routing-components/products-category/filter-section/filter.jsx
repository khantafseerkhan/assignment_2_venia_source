import React from "react";

class Filter extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="filter-container">
                <div className="title border-inside-bottom-1">Filters</div>
                <div className="filter border-inside-bottom-1">
                    <div className="heading">
                        Attribute
                    </div>
                    <ul>
                        <li><input type="checkbox" /> <span>option</span></li>
                        <li><input type="checkbox" /> <span>option</span></li>

                        <li><input type="checkbox" /> <span>option</span></li>

                        <li><input type="checkbox" /> <span>option</span></li>

                    </ul>
                </div>

                <div className="filter border-inside-bottom-1">
                    <div className="heading">
                        Attribute
                    </div>
                    <ul>
                        <li><input type="checkbox" /> <span>option</span></li>
                        <li><input type="checkbox" /> <span>option</span></li>

                        <li><input type="checkbox" /> <span>option</span></li>

                        <li><input type="checkbox" /> <span>option</span></li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Filter;