// Layout.js
import React from "react";
import NavBar from "@/Components/NavBar";
import SideBar from "@/Components/SideBar";

const Layout = ({ children }) => {
  return (
    <div id="root" className="relative">
      <div id="Layout" className="flex w-full h-full">
        <NavBar />
        <SideBar />
        <main class=" ml-60 relative inset-0	-mr-1.5 mb-0 px-7	 w-full h-full max-md:ml-16">
          <div id="Home-Content" class="mt-16 h-full	">
            <div id="Home-Container" class="m-auto relative w-full ">
              <div id="Gallary" class="pt-8	pb-6 static	">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
