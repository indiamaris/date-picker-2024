
import {
  createBrowserRouter,
} from "react-router-dom";

import { MaterialUi } from "../datePicker-material-ui.js";
import { App } from "../App.js";
import { DatepickerBlock  } from "../datePicker-block-vertical.js";
import { DatepickerInline } from "../datePicker-inline.js";
import { DatepickerPortalInline } from "../datePicker-portal-inline.js";
import { DatepickerBlockVertical } from '../datePicker-block-horizontal';
import { DatepickerClasses } from "../datePicker-block-classescopy.js";


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
        path: '/react-block-vertical',
     element:<DatepickerBlock />
    }
            ,
      {
        path: '/react-block-horizontal',
     element:<DatepickerBlockVertical/>
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
            }
        ,
    {
        path: '/react-classes',
     element:<    DatepickerClasses/>
            }
        ,
    {
        path: '/react-portals',
     element:<    DatepickerPortalInline/>
    }]

    
  
    },


    
  
])