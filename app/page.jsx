import NavBar from "@/Components/NavBar";
import Banner from "@/Components/Banner";
import Album from "@/Components/Album";
import SideBar from "@/Components/SideBar";
export default function Home() {
  return (
    <div id="root">
      <NavBar/>
      <SideBar/>
      <div id ="Main Page" class="w-full h-full">
        <Banner/>
      </div>
    </div>
    
    
  );
}
