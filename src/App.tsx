

import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import './App.css'
export const App = () => {
  


 
  return (<>
    
     <div className="container-fluid">

      <div className="row ">
        <div className="col-2 ">
          <div className="container-long">    <Navbar /></div>
       
        </div>
       
        <div className="col-10">
          <div className=" h-100 d-flex align-items-center justify-content-center w-100 ">

            <div className="d-flex align-items-center justify-content-center  w-75 h-50   "><Outlet /></div></div>   </div>
      </div>
     

</div>

  </>);
};