import React from "react";

const NavBar = () => {
  return (
    <header class="fixed items-center flex left-60 top-0 right-0 px-7 z-50 h-16 bg-bgDarkBg max-md:fixed max-md:left-16">
      <div
        id="level"
        class="relative w-full z-10 flex items-center justify-between"
      >
        <div
          id="level-left"
          class="flex grow mr-2.5 items-center justify-start"
        >
          <div id="setting-tem" class="relative mr-2.5">
            <button class="flex items-center cursor-none opacity-30 select-none  leading-normal cursor-pointer relative">
              <svg viewBox="0 0 512 512" height="1em" fill="white" class="mr-3">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
              </svg>{" "}
            </button>
          </div>

          <div id="setting-tem" class="relative mr-2.5">
            <button class="flex items-center cursor-none opacity-30 select-none leading-normal cursor-pointer relative">
              <svg viewBox="0 0 512 512" height="1em" fill="white" class="mr-3">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
              </svg>
            </button>
          </div>
          <form id="level-search" class="relative  w-full max-w-md">
            <div
              id="level-search-container"
              class="relative rounded-2xl h-10 bg-bgWhite"
            >
              <button
                id="search-icon"
                class="absolute left-2.5 h-full  rounded-full	items-center leading-normal text-center cursor-pointer relative"
              >
                <svg
                  viewBox="0 0 512 512"
                  height="20px"
                  fill="black"
                  class="mr-3"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </button>

              {/* Need fixed */}
              <div
                id="input-wrapper"
                class="relative text-bgDarkBg inline-block  	 "
              >
                <input
                  type="text"
                  class="relative border-none h-5			 "
                  placeholder="Search for music..."
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div id="level-right" class="flex grow mt-0 items-center justify-end">
          <a
            id="Upgrade"
            class="mr-3 py-2.5 px-2.5 rounded-2xl bg-bgDarkInactive tracking-wide leading-5	text-textDarkText  "
          >
            Upgrade Account
          </a>
          <div
            id="Download"
            class="mr-3 bg-bgDarkInactive	 relative rounded-2xl"
          >
            <a
              id="Download"
              class="flex py-2.5 px-2.5 text-textDarkText items-center rounded-full leading-5 text-center cursor-pointer relative "
            >
              <i id="icon" class="m-1">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clip-rule="even-odd"
                    d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                  ></path>

                  <path
                    d="M6 16.8333H14"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </i>
            </a>
          </div>

          {/* Icon from uiverse */}
          <div id="setting-item" class="relative mr-2.5">
            <button class="w-10 h-10 flex items-center justify-center rounded-full bg-bgDarkInactive leading-normal cursor-pointer relative">
              <svg viewBox="0 0 512 512" height="1em" fill="white">
                <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
              </svg>{" "}
            </button>
          </div>

          <div id="setting-user" class="relative ">
            <button class="w-10 h-10 flex items-center justify-center rounded-full bg-bgDarkInactive leading-normal cursor-pointer relative ">
              <img src="/images/user.png" class="rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
