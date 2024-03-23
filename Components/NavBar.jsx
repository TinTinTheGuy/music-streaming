import React from 'react'


const NavBar = () => {
  return (
   

<header class="fixed items-center flex left-60 top-0 right-0 px-16 z-50 h-16 bg-zinc-400	">
  <div id="level" class="relative w-full z-10 flex items-center justify-between">
    <div id="level-left" class="flex grow mr-2.5 items-center justify-start">
    <div id="setting-tem" class="relative mr-2.5">
        <button class="flex items-center cursor-none opacity-30 select-none bg-white leading-normal cursor-pointer relative">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
          {/* Need Icons */}
        </button>

      </div>

      <div id="setting-tem" class="relative mr-2.5">
        <button class="flex items-center cursor-none opacity-30 select-none bg-white leading-normal cursor-pointer relative">
<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
          {/* Need Icons */}

        </button>

      </div>
      <form id="level-search" class="relative block w-full max-w-md">
        <div id="level-search-container" class="relative rounded-2xl h-10 bg-white">
          <div id="input-wrapper" class="absolute top-0 left-9 bottom-0 right-2.5">
            <button id="search-icon" class="flex rounded-full	items-center leading-normal text-center cursor-pointer relative">
              {/* Need Icon */}
            </button>
            <input type='text' class="m-0 inline-block text-base h-8 top-0.5 relative border-0 leading-8	py-1" placeholder='Search for music...'/>

          </div>

        </div>
        

      </form>

    </div>

    <div id="level-right" class="flex grow mt-0 items-center justify-end">
      <a id="Upgrade" class="mr-3 py-2.5 px-2.5 rounded-2xl bg-violet-500 tracking-wide leading-5	text-white  ">
        Upgrade Account
      </a>
      <div id="Download" class="mr-3 bg-amber-200	 relative rounded-2xl">
        <a id="Download" class="flex py-2.5 px-2.5 items-center rounded-full leading-5 text-center cursor-pointer relative ">
          Download App

          {/* Need Icon */}
        </a>
      </div>

      <div id="setting-item" class="relative mr-2.5">
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white leading-normal cursor-pointer relative">

        </button>

      </div>

      <div id="setting-user" class="relative mr-2.5">
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white leading-normal cursor-pointer relative">

        </button>

      </div>
    </div>


  </div>
    
</header>

  )
}

export default NavBar
