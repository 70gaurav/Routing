import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Singleblog() { 
  const { id } = useParams();
  const [singlepost,setsinglepost] = useState({})
  useEffect(()=>{
    async function fetchdata(){
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setsinglepost(result.data)
    }
    
    fetchdata()
  },[])
  return (
    <div>
      <h3>{singlepost.title}</h3>
      <p>{singlepost.body}</p>
    </div>
  )
}

export default Singleblog