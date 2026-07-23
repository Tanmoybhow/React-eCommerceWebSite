import React, { useEffect, useState } from "react";

const Theme = ({ className }) => {
    let [colorTheme,setColorTheme] = useState(localStorage.getItem("voltMartTheme") || "light");
      const html = document.documentElement;
   

    useEffect(()=>{
      html.classList.remove("dark","light")
      html.classList.add(colorTheme);

      localStorage.setItem("voltMartTheme",colorTheme);
    },[colorTheme]);
  

    const changeTheme = (e)=>{
      if(e.target.checked){
        setColorTheme("dark");
      }else{
        setColorTheme("light");
      }
    }


  return (
    <label class={`relative inline-flex items-center cursor-pointer `}>
      <input class="sr-only peer" type="checkbox" checked={colorTheme==="dark"} onChange={changeTheme} />
      <div class="w-13 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-[2px] after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-6 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
    </label>
  );
};

export default Theme;
