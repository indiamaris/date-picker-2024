 
import { Link } from "react-router-dom";
export const Navbar = () => {
    return ( 
        <div className="d-flex flex-column flex-shrink-0 p-1 shadow h-100 sidebar" id="sidebar">
        
    <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" 
                >
      <Link to={'material-ui'} className="nav-link text-dark p-3 nav " id={'contact'} > <span>Material UI DatePicker </span> </Link>
                </li>    
                  
                 <li className="nav-item">
      <Link to={'react-block-vertical'} className="nav-link text-dark p-3  " >  React-DP Block DatePicker Vertical </Link>
                </li>
                {/* Horizontal */}
                <li className="nav-item">
      <Link to={'/react-block-horizontal'} className="nav-link text-dark p-3  " >  React-DP Block DatePicker Horizontal  </Link>
                </li>
                   <li className="nav-item">
    <Link to={'react-inline'} className="nav-link text-dark p-3  " >  React-DP InLine DatePicker </Link>
                </li>
           

    </ul>
    <hr/>
        </div>
   
    
    

      

     );
}
 
