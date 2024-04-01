import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div>
    <div>
        <SideBar/>
    </div>

        <div>
            <NavBar/>
        </div>
        </div>
  )
}

export default Layout