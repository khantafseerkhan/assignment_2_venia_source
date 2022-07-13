import '../src/assets/css/main.css';
import '../src/assets/css/aemgrid.css';
import Layout from './layout/layout';
import {useSelector , useDispatch} from "react-redux";

const App=() =>{
  const myState=useSelector((state) => state.changeTheState);

  return (
    <>

<div id="loadingsection" className='loadingsection' style={{display:"none"}}>
    <img src={require("./assets/img/loadericon.gif")}  alt="Loading...."/>

</div>
{/* <Routing /> */}
      {/* <Route path="singleproduct" element={<Singleproduct />} /> */}
      <Layout />
     


      

    {/* <div>app js ===={myState.value}</div> */}
   
    </>
  );
}

export default App;
