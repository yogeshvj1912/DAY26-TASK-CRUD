import React from 'react'
import Sidebar from './dashboard/Sidebar'
import Topbar from './dashboard/Topbar'
import Dashboard from './dashboard/Dashboard'
import { Outlet } from 'react-router-dom'
import Userlist from './dashboard/Userlist'
import UserCreate from './dashboard/UserCreate'
import UserView from './dashboard/UserView'

function Portal() {
  return (
        <div id="wrapper">
     <Sidebar />
     <div id="content-wrapper" className="d-flex flex-column">
       <div id="content">
         <Topbar />
         <div className="container-fluid">
           <Outlet>
           <Dashboard />
          <Userlist/>
          <UserCreate/>
          
           </Outlet>
           
         </div>
       </div>
     </div>
   </div>
  )
}

export default Portal