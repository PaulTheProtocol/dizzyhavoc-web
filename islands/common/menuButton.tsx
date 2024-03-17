import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
export default function MenuButton() {
  if(!IS_BROWSER) return <></>;
  const isMobile = globalThis.matchMedia("(max-width: 768px)").matches;
    let [category, setCategory] = useState<string>('');
    const handleCategoryChange = (category: string) => {
        history.pushState("", document.title, window.location.pathname
        + window.location.search);
        let newCategory = category;
        if (category === '/Home') {
            newCategory = '/';
        }
        category = newCategory;
        window.location.pathname = `${newCategory.toLocaleLowerCase()}`;
        setCategory(null);
    }
    

        {if(isMobile){return (
            <><div>
            <select class="text-3xl font-bold text-[#3d3d3d] dark:text-[#ccb286]  text-center w-[50px] sm:w-[150px] shadow-lg font-[Poppins] rounded-lg hover:scale-[102%] border border-[#e9e9e9] dark:border-[#ffffff1f] cursor-pointer dark:bg-[#191919] bg-[#f1f1f1]" name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                <option class="category " value="" selected disabled hidden>{"≡"}</option>
                <option class="text-2xl font-normal" >{"/Home"}</option>
                <option class="text-2xl font-normal" >{"/Stats"}</option>
                <option class="text-2xl font-normal" >{"/dApps"}</option>
                <option class="text-2xl font-normal" >{"/About"}</option>
            </select>
        </div></>
            )}

        if(!isMobile){ return (
            <><div>
            <select class="text-2xl text-[#3d3d3d] dark:text-[#ccb286]  text-center w-[50px] sm:w-[150px] shadow-lg font-[Poppins] rounded-lg hover:scale-[102%] border border-[#e9e9e9] dark:border-[#ffffff1f] cursor-pointer dark:bg-[#191919] bg-[#f1f1f1]" name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                <option class="category" value="" selected disabled hidden>{"Menu"}</option>
                <option >{"/Home"}</option>
                <option >{"/Stats"}</option>
                <option >{"/dApps"}</option>
                <option>{"/About"}</option>
            </select>
        </div></>
        )}}
    
}
