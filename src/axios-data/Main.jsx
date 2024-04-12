import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
const [post,setPost] =useState([])
const [pagenumber,setPagenumber]=useState(1)
const perpage= 10


useEffect(() => {
 async function fetchData(){
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    console.log(result.data)
    setPost(result.data)
 }
 fetchData()
}, [])

// useEffect(() => {
//     setPerpage(Math.floor(post,length/perpage))
// }, [post])\


const totalpage =Math.floor(post.length/perpage);


function handlePrevious(){
  setPagenumber(pagenumber -1)
};

function handleNext(){
  setPagenumber(pagenumber +1)
}

const  firstpage = (pagenumber - 1)*perpage
const lastpage =pagenumber*perpage
 

  return (
   
 <div className='products'>
    {post.slice(firstpage,lastpage).map((item,index)=>{
     
        return(
            <>
            <h3  key={index}>{item.title}</h3>
            <h4 key={index}>{item.body}</h4>
       </>
        )
     }
    )}
    <button onClick={handlePrevious} style={{visibility:pagenumber === 1 ? 'visible' : 'hidden'}} >Pre</button>
     <p>{pagenumber}</p>
  <button onClick={handleNext} style={{visibility:pagenumber === totalpage ? 'hidden' : 'visible'}}>Next</button>
     

      
      
    </div>
  )
}

export default Main
