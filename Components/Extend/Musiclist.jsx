import React from 'react'

const Musiclist = () => {
  return (
    <div class="relative pt-10">
        <div class="mb-8 p-0">
            <div id="title" class="items-center flex-row flex">
                <h2>
                    Top List
                </h2>

            </div>

        </div>
        <div id="list" class="mb-8">
          <div class="overflow-hidden rounded">
            <div class="border-b-2 ">
              <div id="medi" class="rounded items-center flex text-left p-2.5">
                <div id="medi-left" class="flex w-6/12 mr-3">
                  <div id="Top-Number" class="flex justify-center items-center mr-4">
                    <span class="min-w-12">
                        1
                    </span>
                    <div id="sort" class="w-4 h-9 flex justify-center items-center">
                      {/* Need check */}
                    <i class="fa-solid fa-minus" />

                    </div>


                  </div>
                  <div id="Song-Thump" class="mr-4 block relative overflow-hidden cursor-pointer rounded">
                    <figure class="w-10 h-10">
                      <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg"
                    class="h-full w-full" />

                    </figure>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Musiclist