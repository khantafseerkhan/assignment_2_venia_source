import '../src/assets/css/main.css';
import '../src/assets/css/aemgrid.css';
import Layout from './layout/layout';
import {useSelector , useDispatch} from "react-redux";
import hasClass from "./assets/customjs/custom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App=() =>{
  const myState=useSelector((state) => state.changeTheState);

  return (
    <>
<Layout />
      {/* <Route path="singleproduct" element={<Singleproduct />} /> */}
      {/* <Layout /> */}
    

      

    {/* <div>app js ===={myState.value}</div> */}
   
    </>
  );
}

export default App;
