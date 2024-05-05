import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
const [post,setPost] =useState([])
const [pagenumber,setPagenumber]=useState(1)
const perpage= 10
// const [perpage,setPerpage]= useState(10)



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
// }, [post])


const totalpage =Math.floor(post.length/perpage);


function handlePrevious(){
  if(pagenumber>1){
    setPagenumber(pagenumber -1)
  }
  
};

function handleNext(){
  if(pagenumber<10){
    setPagenumber(pagenumber +1)
  }
  
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
    <button onClick={handlePrevious}  >Pre</button>

           <span>{pagenumber}/{totalpage}</span>
  <button onClick={handleNext}>Next</button>
     

      
      
    </div>
  )
}

export default Main
