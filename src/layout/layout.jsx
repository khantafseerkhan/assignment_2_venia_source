import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Routing from "./routes/routing";


const Layout=()=> {

    
  

        return (
            <>


         
                <header><Header /></header>

                 <div  className="aem-Grid aem-Grid--12"> 
                 <Routing />
                  </div> 

                <footer  ><Footer /></footer>
            </>
        )

    }



export default Layout;