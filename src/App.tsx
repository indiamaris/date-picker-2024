

import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import './App.css'
export const App = () => {
  


 
  return (<>
    
     <div className="container-fluid p-5">

      <div className="row ">
        <div className="col-2 ">
          <Navbar />
        </div>
       
        <div className="col-10">
          <div className="card"><Outlet /></div>   </div>
      </div>
     

</div>

  </>);
};