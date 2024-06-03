 
import { Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Navbar = () => {
    return ( 
        <div className="d-flex flex-column flex-shrink-0 shadow h-100 sidebar bg-primary text-white" id="sidebar">

            <div className="h-25 bg-primary d-flex align-items-center justify-content-center text-white"> <img src="public/rilixLogo.svg" alt=""  className="h-50" /></div>
        
    <ul className="nav nav-pills flex-column mb-auto text-white">
                <li className="nav-item link link-opacity-75-hover" >
                    
                    <Link to={'material-ui'} className="nav-link text-white p-3 nav link  link-underline-dark " id={'contact'} >
                        <div className="pe-3">
                        <CalendarMonthIcon className="text-white" /> 
                        </div>
                        <span>Material UI DatePicker </span> </Link>
                </li>
                
                
                  
                

                <li className="nav-item ink-offset-2 link-offset-3-hover ">
                    
                    <Link to={'react-block-vertical'} className="nav-link text-white p-3 icon-link-hover  " id={'contact'}>
      
       <div className="pe-3">
                        <CalendarMonthIcon className="text-white icon-link-hover" /> 
                        </div>                  <span> React-DP Block Vert. </span> </Link>
                </li>
                {/* Horizontal */}
                <li className="nav-item">
                    <Link to={'/react-block-horizontal'} className="nav-link nav text-white p-3  " id={'contact'}>
                        <div className="pe-3">
                        <CalendarMonthIcon className="text-white" /> 
                        </div> <span> Block DatePicker Horizontal</span>  </Link>
                </li>
                   <li className="nav-item">
    <Link to={'react-inline'} className="nav-link text-white p-3  " id={'contact'}> <div className="pe-3">
                        <CalendarMonthIcon className="text-white" /> 
                        </div> <span> React-DP InLine DatePicker</span> </Link>
                </li>
                <li className="nav-item">
                    
    <Link to={'react-classes'} className="nav-link text-white p-3  "id={'contact'} ><div className="pe-3">
                        <CalendarMonthIcon className="text-white" /> 
                        </div><span>  React-DP Classes DatePicker</span> </Link>
                </li>
                <li className="nav-item">
                    
    <Link to={  '/react-portals'} className="nav-link text-white p-3  "id={'contact'} ><div className="pe-3">
                        <CalendarMonthIcon className="text-white" /> 
                        </div><span>  Modal inline</span> </Link>
                </li>
           
           

                {/* react-classes */}
            </ul>
            
           
    <hr/>
        </div>
   
    
    

      

     );
}
 
