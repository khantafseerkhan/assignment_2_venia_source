import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { hasClass } from "../../../assets/customjs/custom";

const Filter = (props) => {
    const [colors, setColors] = useState([]);
    const [optionsArray, setOptionsArray] = useState([])

    const color = [{
        colorname: "Black",
        colorcode: "#172026 0% 0% no-repeat padding-box",

    },
    {
        colorname: "White",
        colorcode: "#FFFFFF 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Green",
        colorcode: "#2D9D78 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Yellow",
        colorcode: "#FDBA5E 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Blue",
        colorcode: "blue 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Marrown",
        colorcode: "#E34850 0% 0% no-repeat padding-box",

    }
        ,
    {
        colorname: "Purple",
        colorcode: "#6408D3 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Rose",
        colorcode: "#F9009A 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Orange",
        colorcode: "#EB7327 0% 0% no-repeat padding-box",

    },
    {
        colorname: "Gradient",
        colorcode: "transparent linear-gradient(180deg, #AF52FF 0%, #7950E8 16%, #4F5ADA 29%, #57CB76 43%, #EBC250 56%, #FF8810 69%, #E32F0F 83%, #BF1919 100%) 0% 0% no-repeat padding-box",

    }



    ]


    const options = [
        {
            label: "Option1"
        }, {
            label: "Option2"
        }, {
            label: "Option3"
        }, {
            label: "Option4"
        }, {
            label: "Option5"
        }, {
            label: "Option6"
        }, {
            label: "Option7"
        }, {
            label: "Option8"
        }, {
            label: "Option9"
        },
    ]






    const closeNav = () => {
        let phonenav = document.getElementById("absolute-postion");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";


        }
    }

    useEffect(() => {
        setColors(color);
        setOptionsArray(options)

    }, [])
    return (
        <>
            <div className="aem-GridColumn aem-GridColumn--default--3 tab-hide phone-hide">
                <div className="filter-container ">
                    <div className="title border-inside-bottom-1">Filters</div>
                    <div className="filter border-inside-bottom-1">
                        <div className="heading">
                            Attribute
                        </div>
                        <ul>
                            {
                                optionsArray.length > 0 &&
                                (optionsArray.slice(0, 4).map((element) =>

                                    <li><input type="checkbox" /> <span>{element.label}</span></li>
                                )
                                )
                            }
                            <li><span className="showmore">Show more</span></li>



                        </ul>
                    </div>

                    <div className="filter border-inside-bottom-1">
                        <div className="heading">
                            Attribute
                        </div>
                        <ul>
                            {

                                optionsArray.length > 0 &&
                                (optionsArray.slice(0, 6).map((element) =>

                                    <li><input type="checkbox" /> <span>{element.label}</span></li>
                                )

                                )
                            }

                        </ul>
                    </div>

                    <div className="filter border-inside-bottom-1">
                        <div className="heading">
                            Colors
                        </div>
                        <ul className="color-section">
                            {

                                colors.length > 0 &&

                                (colors.map((element) => {
                                    return (
                                        <li><div className="colordiv" style={{ background: element.colorcode }}></div></li>
                                    )
                                }))
                            }

                        </ul>
                    </div>


                    <div className="filter border-inside-bottom-1">
                        <div className="heading">
                            Attribute
                        </div>
                        <ul>
                            {
                                optionsArray.length > 0 &&

                                (optionsArray.slice(0, 8).map((element) =>

                                    <li><input type="checkbox" /> <span>{element.label}</span></li>
                                ))
                            }

                        </ul>
                    </div>


                </div>
            </div>
            <div className="aem-Grid aemGrid--12 phone-show shadow phone-show absolute-postion" >
                <div className="aem-GridColumn aem-GridColumn--phone--12 phonenav" id="absolute-postion">
                    <div className="header">Filters
                        <div>   <a onClick={() => closeNav()}>&#x2715;</a></div>
                    </div>


                    <div className="filter-container ">
                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 4).map(element =>

                                        <li><input type="checkbox" /> <span>{element.label}</span></li>
                                    )

                                }
                                <li><span className="showmore">Show more</span></li>



                            </ul>
                        </div>

                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 6).map(element =>

                                        <li><input type="checkbox" /> <span>{element.label}</span></li>
                                    )
                                }

                            </ul>
                        </div>

                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Colors
                            </div>
                            <ul className="color-section">
                                {
                                    colors.map(element => {
                                        return (
                                            <li><div className="colordiv" style={{ background: element.colorcode }}></div></li>
                                        )
                                    })
                                }

                            </ul>
                        </div>


                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 8).map(element =>

                                        <li><input type="checkbox" /> <span>{element.label}</span></li>
                                    )
                                }

                            </ul>
                        </div>


                    </div>



                </div>
            </div>
        </>




    )
}


export default Filter;