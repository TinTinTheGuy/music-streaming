import NavBar from "@/Components/NavBar";
import Banner from "@/Components/Banner";
import SideBar from "@/Components/SideBar";
import Artist from "@/Components/Artist";
import TrendingList from "@/Components/TrendingList";
import Footer from "@/Components/Footer";
import Radio from "@/Components/Radio";
import Playlist from "@/Components/Playlist";
import Layout from "@/Components/Layout";
// import Footer from "@/Components/Footer";
export default function Home() {
  return (
     <Layout>
      
                <Banner />
                <TrendingList />
                <Artist />
                <Playlist />
                <Radio />
                <Footer />
 
      </Layout>
  );
}
