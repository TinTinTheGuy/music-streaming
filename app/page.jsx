import NavBar from "@/Components/NavBar";
import Banner from "@/Components/Banner";
import SideBar from "@/Components/SideBar";
import Gallary from "@/Components/Gallary";
import TrendingList from "@/Components/TrendingList";
export default function Home() {
  return (
    <div id="root" className="flex min-h-screen">
        <div>
          <SideBar />
          <NavBar />
          <Gallary />
          <TrendingList />
        </div>
      </div>
  );
}
