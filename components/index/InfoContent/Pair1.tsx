export default function Pair1(){
    const content1 =
    "DizzyHavoc is a new deployment method for smart contracts, specifically designed to reduce costs and enhance flexibility.";
    const content2 =
    "* What makes DizzyHavoc unique is the utilization of the EVM bytecode language instead of Solidity. This implies a more low-level and hardware-specific form of programming, closely tied to the architecture of CPUs.";
    return(
        <>
        <div class="md:flex-row w-full gap-5 justify-center items-center mx-auto sm:mx-0 flex-col flex">
        <div class="flex flex-row p-9 sm:size-[450px] size-full dark:text-[#d2d2d2] text-[#3d3d3d] h-full rounded-xl shadow-lg dark:bg-blur4 bg-blur2 sm:flex-col">
          <div class="flex flex-col">
            <ul>
              <h1 class="sm:text-3xl text-2xl font-[Poppins]">
                Simplified Cross-Chain contracts.
              </h1>
              <p class="mt-4 dark:sm:font-normal sm:font-normal font-normal dark:font-light text-xl">
                {content1}
              </p>
              <p class="mt-2 font-medium text-xl">{content2}</p>
            </ul>
          </div>
        </div>
        <div class="flex flex-row p-4 mt-7 sm:mt-0 sm:size-[450px] size-[320px] dark:text-[#d2d2d2] text-[#3d3d3d] rounded-xl shadow-lg dark:bg-blur4 bg-blur2">
          <div class="w-full h-full">
            <div
              class="size-[100%] rounded-lg dark:bg-[url('/info/darksolvsbytecode.png')] bg-[url('/info/solvsbytecode.png')]"
              style="background-size: contain; background-repeat: no-repeat;"
            >
            </div>
          </div>
        </div>
      </div>
      </>
    )
}