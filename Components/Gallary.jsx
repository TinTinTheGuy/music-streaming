import React from 'react'
import Artist from './Artist'
import TrendingList from './TrendingList'
import Radio from './Radio'
import Playlist from './Playlist'
import Footer from './Footer'
import Banner from './Banner'

const Gallary = () => {
  return (
  <div class="ml-60 relative h-full ">
    <div class="relative  w-full h-full  ">
      <main class=" relative inset-0	-mr-1.5 mb-0 px-7	 ">
        <div id="Home-Content" class="mt-16 h-full	">
          <div id="Home-Container" class="m-auto relative w-full ">
            <div id="Gallary" class="pt-8	pb-6 static	">
              <Banner/>
              <TrendingList/>  
               <Artist/>
               
               <Playlist/>
               <Radio/>
               <Footer/>


               
               




              

            </div>
            


          </div>



        </div>
        
      </main>
    </div>
    </div>
  )
}

export default Gallary