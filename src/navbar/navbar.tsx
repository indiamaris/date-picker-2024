 
import { Link } from "react-router-dom";
export const Navbar = () => {
    return ( 
      <div className="container h-100 bg-info  ">
        
         <div className="container d-flex  flex-column  bg-info shadow list-group list-group-flush">
             <div className="card" >
                    <div className="card-body" >
                 <div className="card-title mb-5">       <h6 >DatePickers 2024-React</h6> </div>
      

             <div>
                 

        <Link to={'material-ui'} className="list-group-item"> Material UI DatePicker </Link>
    </div>
      <div>
        <Link to={'react-block'} className="list-group-item">  React-DP Common DatePicker </Link>
    </div>
    <div>
        <Link to={'react-inline'} className="list-group-item">  React-DP InLine DatePicker </Link>
                 </div>
                 
             </div>
             </div></div></div>
     );
}
 
