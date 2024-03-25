import NavBar from "@/Components/NavBar";
import Banner from "@/Components/Banner";
import SideBar from "@/Components/SideBar";
import Gallary from "@/Components/Gallary";
export default function Home() {
  return (
    <body class="m-0 p-0">
    <div id="root" class="relative">
      <div id="Layout" class="flex w-full h-screen">
      <NavBar/>
      <SideBar/>
      <Gallary/>
      </div>
      

    </div>
    </body>
    
    
  );
}
