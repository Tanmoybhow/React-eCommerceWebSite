import React, { useEffect, useState } from 'react'

const Pagination = ({page,setPage,productsLength,products}) => {
    const [pageView,setPageView] = useState("");
   
  console.log(productsLength, page)
    useEffect(()=>{
     if(page==1){
        setPageView("1 2 ...")
     }else if(page==productsLength){
        setPageView("... 2 3")
     }else{
        setPageView("... 2 ...")
     }
    },[page])

    const x = pageView.split(" ").map(item=>item);
    console.log(x)

    const selectedStyle = (item)=>{
         if(item!=="..."){
             setPage(Number(item));
            window.scrollTo(0,0)
         }
    }

    useEffect(()=>{
       if(products.length<8){
        setPage(1);
       }
    },[products])

  return (
    <div className='mt-4 flex items-center justify-center gap-4'>
      <button disabled={page==1} className={` text-white px-3 py-1 rounded cursor-pointer ${page==1?"bg-blue-400":"bg-blue-600"}`} onClick={()=>{
        if(page>1){
            setPage(prev=>prev-1)
            window.scrollTo(0,0)
        }
      }}>Prev</button>

      <span className='flex gap-3'>{pageView.split(" ").map(item=>{
        return <div className={`${item==page?"bg-blue-600 text-white":null} px-3 rounded py-2 cursor-pointer`} onClick={()=>selectedStyle(item)}>{item}</div>
      })}</span>

      <button className={`${page<productsLength?"bg-blue-600 text-white":null} text-white px-3 py-1 rounded`} onClick={()=>{
        if(page<productsLength){
            setPage(prev=>prev+1)
            window.scrollTo(0,0)
        }
      }}>Next</button>
    </div>
  )
}

export default Pagination
