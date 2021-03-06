import React from "react";


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>

            <div className="aem-Grid aem-Grid--12 border-inside-bottom-2">

                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">Account</div>
                    <ul>
                        <li><a href="javascript:void(0)" role='button' aria-label='Sign in'>Sign in</a></li>
                        <li><a href="javascript:void(0)" role='button' aria-label='Register'>Register</a></li>
                        <li><a href="javascript:void(0)" role='button' aria-label='Order Status'>Order Status</a></li>

                        <li><a href="javascript:void(0)" role='button' aria-label='Returns'>Returns</a></li>

                        <li><a href="javascript:void(0)" role='button' aria-label='Register'>Register</a></li>


                    </ul>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">About Us</div>
                    <ul>
                        <li><a href="javascript:void(0)"  role='button' aria-label='Our Story'>Our Story </a></li>
                        <li><a href="javascript:void(0)"  role='button' aria-label='Careers'>Careers</a></li>


                    </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">Help</div>
                    <ul>
                        <li><a  href="javascript:void(0)" role='button' aria-label='Contact Us'>Contact Us</a></li>
                        <li><a href="javascript:void(0)" role='button' aria-label='Order Status'>Order Status</a></li>
                        <li><a href="javascript:void(0)" role='button' aria-label='Returns'>Returns</a></li>



                    </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">Follow Us!</div>
                    <ul>
                        <li>
                            <p>Lorem ipsum dolar sit amet , consectetur adipiscing elite sed do eiusmod
                                tempor incididant ut labore et dolore
                            </p>
                        </li>
                        <li>

                            <a href="javascript:void(0)"  >
                                <img alt="Instagram Icon" src={require("../../assets/img/instagram.png")} />
                            </a>
                            <a href="javascript:void(0)">
                                <img alt="Facebook Icon" src={require("../../assets/img/facebook.png")} />
                            </a>
                            <a href="javascript:void(0)">
                                <img alt="Twitter Icon" src={require("../../assets/img/twitter.png")} />
                            </a>

                        </li>



                    </ul>
                </div>

            </div>

            <div className="aem-Grid aem-Grid--12 footer-bottom-container tab-hide phone-hide">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12  footer-bottom order-3">
                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6 center" >
                        <span className="logo"><span className="right-slash">\</span><span className="left-slash">/</span>ENIA</span>

                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12  footer-bottom order-1">
                        <div className="desc-section">
                        &#169; Company Name Address ,Ave ,City Name ,State ZIP 
                        </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12  footer-bottom order-2">
                        <div className="list-terms">
                            <ul>
                                <li><a  href="javascript:void(0)"  role='button' aria-label='Terms of Use'>Terms of Use</a></li>
                                <li><a  href="javascript:void(0)"  role='button' aria-label='Privacy Policy'>Privacy Policy</a></li>

                            </ul>
                        </div>
                </div>
            </div>


            <div className="aem-Grid aem-Grid--12 footer-bottom-container tab-show phone-show">
                

            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  footer-bottom order-2">
                        <div className="list-terms">
                            <ul style={{    justifyContent: "center"}}>
                                <li><a  href="javascript:void(0)"  role='button' aria-label='Terms of Use'>Terms of Use</a></li>
                                <li><a  href="javascript:void(0)"  role='button' aria-label='Privacy Policy'>Privacy Policy</a></li>

                            </ul>
                        </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  footer-bottom order-1">
                        <div className="desc-section" style={{    justifyContent: "center"}}>
                        &#169; Company Name Address ,Ave ,City Name ,State ZIP 
                        </div>
                </div>

            </div>



        </>



        )
    }


}