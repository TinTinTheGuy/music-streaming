import React from 'react'

const SideBar = () => {
  return (
        <aside id="sidebar-logo" class="z-50 relative w-60 h-screen  pt-16 pb-12 bg-zinc-400" aria-label="Sidebar">
        <div id="sidebar-wrapper"class="h-full flex flex-col ">
            <nav id="sidebar-navbar" class="w-full">
            <div id="sidebar-brand" class="fixed top-0 flex items-center w-60 h-16 pr-6 pl-7">
                <div id="sidebar-items">
                    <button id="Home-Button" class="">
                        <div class="w-28 h-10 inline-block ">
                            {/* Need Logo Image on div*/}
                        </div>

                    </button>
                

                </div>

                </div>
               

            </nav>
          
        </div>
        </aside>  
  )
}

export default SideBar