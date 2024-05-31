 
import { Link } from "react-router-dom";
export const Navbar = () => {
    return ( 
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-primary h-100">
        
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
      <Link to={'material-ui'} className="nav-link active <hr/> text-white" > Material UI DatePicker </Link>
                </li>    <hr/>
                   <li className="nav-item">
      <Link to={'react-block'} className="nav-link active text-white" >  React-DP Common DatePicker </Link>
                </li>    <hr/>
                   <li className="nav-item">
    <Link to={'react-inline'} className="nav-link active text-white" >  React-DP InLine DatePicker </Link>
                </li>
           

    </ul>
    <hr/>
        </div>
   
    
    

      

     );
}
 
