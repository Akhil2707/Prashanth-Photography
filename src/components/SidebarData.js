import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SidebarData=[{
       title:"Dashboard",
       icon:<DashboardIcon/>,
       path:"/dashboard"
       
    },
    {
        title:"All records",
        icon:<AccountBalanceIcon/>,
        path:"/allrecords"
        
     },
     {
        title:"Tables",
        icon:<AddReactionIcon/>,
        path:"/tables"
        
     },
     {
        title:"Management",
        icon:<AddToHomeScreenIcon/>,
        path:"/management"
        
     },
     {
        title:"All MetaData",
        icon:<AssignmentIcon/>,
        path:"/allmetadata"
        
     }
]