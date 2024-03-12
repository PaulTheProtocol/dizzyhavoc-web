import Available from "../components/AvailableOn.tsx";
export default function Animated() {
  return (
    <div>
      <div class="flex flex-col h-screen justify-start sm:justify-center items-center">
        <div class="absolute h-screen border-transparent sm:border-[#595959] border-2 sm:border-t-transparent sm:border-e-transparent sm:border-s-transparent border-t-transparent border-e-transparent border-s-transparent w-full overflow-hidden -z-10 top-[6.5rem] sm:top-0">
          <div class="opacity-25 sm:opacity-100" id="stars-container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
          <section2>
            <div class="air air1"></div>
            <div class="air air2"></div>
            <div class="air air3"></div>
            <div class="air air4"></div>
          </section2>
        </div>
        <div class="w-full flex justify-center divcontainer">
          <div class="flex flex-col mt-[10rem] sm:mt-0  items-center">
            <div class="absolute min-w-full">
              <div class="w-full z-[10] shadow-xl">
                <p class="font-medium font-[Poppins] unselectable z-10 w-full tracking-tighter italic absolute text-[1.5rem] sm:text-[2.3rem] text-center dark:text-[#d2d2d2] text-[#3d3d3d] px-2">
                  Upgradeable, machine-coded*, multi-chain, DeFi/GameFi
                  ecosystem.
                </p>
              </div>
              <div
                class="trapeze invisible sm:visible mt-4 sm:max-w-[73rem] max-w-[70%] mx-auto z-[-10] shadow-lg"
                id="trapeze"
              ></div>
            </div>
            <a
              class="font-medium font-[Poppins] z-10 tracking-tighter italic sm:mt-[7.5rem] mt-[7.5rem] text-[1.1rem] sm:text-[1.7rem] text-center dark:text-[#d2d2d2] text-[#3d3d3d]"
              href="#info"
            >
              <div class="cursor-pointer text-[#3b2d82] dark:text-[#e0cdad] hover:scale-[105%]">
                Learn more
              </div>
            </a>
          </div>
        </div>
        <div class="flex relative mt-[8rem] sm:mt-0 sm:absolute bottom-5">
          <Available />
        </div>
      </div>
    </div>
  );
}
