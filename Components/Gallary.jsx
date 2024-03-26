import React from 'react'
import Artist from './Artist'

const Gallary = () => {
  return (
    <div class="fixed	ml-60 w-full h-full ">
      <main class="absolute inset-0	-mr-1.5 mb-0 px-7	 ">
        <div id="Home-Content" class="mt-16 h-full	">
          <div id="Home-Container" class="m-auto relative w-full ">
            <div id="Gallary" class="pt-8	pb-6 	fixed">
              <div id="Gallary-Container" class="items-center justify-center flex relative  ">
                <div id="Button" class="l-0 absolute h-full z-10 cursor-pointer">
                  <button class="left-6	">
                      {/* Need Adjustment */}
                  </button>
                  
                </div>

                <div id="Gallary-items" class="relative   z-1 pr-5		h-auto w-auto rounded-lg	">
                  <div id="Gallary-card" class="relative max-w-full	">
                    <a class="no-underline	cursor-pointer ">
                      <div id="Gallary-Images" class="relative overflow-hidden rounded-lg	block">
                        <figure class=" h-auto w-auto rounded-xl">
                          <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg" class="h-auto w-full"/>
                        </figure>

                      </div>

                    </a>

                  </div>

                </div>
                <div id="Gallary-items" class="relative   z-1 pr-5	h-auto rounded-lg	">
                  <div id="Gallary-card" class="relative max-w-full	">
                    <a class="no-underline	cursor-pointer ">
                      <div id="Gallary-Images" class="relative overflow-hidden rounded-lg	block">
                        <figure class=" h-auto w-auto rounded-xl">
                          <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg" class="h-auto w-full"/>
                        </figure>

                      </div>

                    </a>

                  </div>

                </div>
                <div id="Gallary-items" class="relative   z-1 h-auto rounded-lg	">
                  <div id="Gallary-card" class="relative max-w-full	">
                    <a class="no-underline	cursor-pointer ">
                      <div id="Gallary-Images" class="relative overflow-hidden rounded-lg	block">
                        <figure class=" h-auto w-auto rounded-xl">
                          <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg" class="h-auto w-full"/>
                        </figure>

                      </div>

                    </a>

                  </div>

                </div>
                

              </div>         
               <Artist/>



              

            </div>
            


          </div>



        </div>
        
      </main>
    </div>
  )
}

export default Gallary