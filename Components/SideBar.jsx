import React from "react";

const SideBar = () => {
  return (
    <aside
      id="sidebar-logo"
      class="z-50 fixed w-60 h-screen pt-16 pb-12 bg-purple-600"
      aria-label="Sidebar"
    >
      <div id="sidebar-wrapper" class="h-full flex flex-col ">
        <nav id="sidebar-navbar" class="w-full">
          <div
            id="sidebar-brand"
            class="fixed top-0 flex items-center w-60 h-16 pr-6 pl-7"
          >
            <div id="sidebar-items">
              <button id="Home-Button" class="">
                <div class="w-28 h-10 inline-block ">
                  {/* Need Logo Image on div*/}
                </div>
              </button>
            </div>
          </div>
        </nav>
        <nav id="sidebar-navbar-2" class="relative mb-4">
          <ul>
            <li class="font-bold text-white border-l-2 border-solid border-transparent">
              <a class="flex items-center text-sm font-medium py-3 px-5">
                {/* SVG or ICONS with margin right 12px */}
                Library
              </a>
            </li>
            <li class="font-bold text-white border-l-2 border-solid border-transparent">
              <a class="flex items-center text-sm font-medium py-3 px-5">
                {/* SVG or ICONS with margin right 12px */}
                Explore
              </a>
            </li>
            <li class="font-bold text-white border-l-2 border-solid border-transparent">
              <a class="flex items-center text-sm font-medium py-3 px-5">
                {/* SVG or ICONS with margin right 12px */}
                Top 100
              </a>
            </li>
            <li class="font-bold text-white border-l-2 border-solid border-transparent">
              <a class="flex items-center text-sm font-medium py-3 px-5">
                {/* SVG or ICONS with margin right 12px */}
                Radio
              </a>
            </li>
          </ul>
        </nav>

        <div id="sidebar-divide" class="relative h-px border-solid border-t-2">
          {/* Seperate Bar Needed  */}
        </div>

        <div id="sidebar-navbar-3" class="relative w-full h-full">
          <div class="relative overflow-hidden -mr-1.5 mb-0  mt-4">
            <nav class="w-full">
              <ul>
                <li class="font-bold text-white border-l-2 border-solid border-transparent">
                  <a class="flex items-center text-sm font-medium py-3 px-5">
                    {/* SVG or ICONS with margin right 12px */}
                    Library
                  </a>
                </li>

                <li class="font-bold text-white border-l-2 border-solid border-transparent">
                  <a class="flex items-center text-sm font-medium py-3 px-5">
                    {/* SVG or ICONS with margin right 12px */}
                    Library
                  </a>
                </li>

                <li class="font-bold text-white border-l-2 border-solid border-transparent">
                  <a class="flex items-center text-sm font-medium py-3 px-5">
                    {/* SVG or ICONS with margin right 12px */}
                    Library
                  </a>
                </li>

                <li class="font-bold text-white border-l-2 border-solid border-transparent">
                  <a class="flex items-center text-sm font-medium py-3 px-5">
                    {/* SVG or ICONS with margin right 12px */}
                    Library
                  </a>
                </li>
              </ul>
            </nav>

            <div
              id="login-noti"
              class="py-3.5 px-2 rounded-lg text-center my-2.5 mx-5 text-white bg-gray-500"
            >
              <div class="mb-2.5 font-semibold">Sign In to explore</div>

              <button class="flex rounded-full border-white justify-center items-center bg-black border-solid text-white py-1.5 px-9 m-auto">
                <span> Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar-playlist">
        <button class="relative w-60 l-0 h-14 bottom-0 border-solid border-t-2 text-white py-0 px-7 font-medium">
          {/* Icon Needed with margin right 12px */}
          <span>Add Playlist</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
