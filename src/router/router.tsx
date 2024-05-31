
import {
  createBrowserRouter,
} from "react-router-dom";

import { MaterialUi } from "../material-ui.js";
import { App } from "../App.js";
import { DatepickerBlock  } from "../datePicker-block.js";
import { DatepickerInline } from "../datePicker-inline.js";
import { DatepickerPortalInline } from "../datePicker-portal-inline.js";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [ {
        path: '/material-ui',
     element:<MaterialUi/>
    },
    ,
    {
        path: '/react-block',
     element:<DatepickerBlock />
    }
    ,
    {
        path: '/react-inline',
     element:<DatepickerInline/>
    }
    ,
    {
        path: '/portal-inline',
     element:<DatepickerPortalInline/>
    }]
    },
    
  
])