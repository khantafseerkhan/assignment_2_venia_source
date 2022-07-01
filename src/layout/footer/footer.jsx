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
                        <li><a href="">Sign in</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Order Status</a></li>

                        <li><a href="">Returns</a></li>

                        <li><a href="">Register</a></li>


                    </ul>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">About Us</div>
                    <ul>
                        <li><a href="">Our Story </a></li>
                        <li><a href="">Careers</a></li>


                    </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12  footermenu">
                    <div className="header">Help</div>
                    <ul>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Order Status</a></li>
                        <li><a href="">Returns</a></li>



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

                            <a href="">
                                <img src={require("../../assets/img/instagram.png")} />
                            </a>
                            <a href="">
                                <img src={require("../../assets/img/facebook.png")} />
                            </a>
                            <a href="">
                                <img src={require("../../assets/img/twitter.png")} />
                            </a>

                        </li>



                    </ul>
                </div>

            </div>

            <div className="aem-Grid aem-Grid--12 footer-bottom-container">
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
                                <li><a>Terms of Use</a></li>
                                <li><a>Privacy Policy</a></li>

                            </ul>
                        </div>
                </div>
            </div>



        </>



        )
    }


}