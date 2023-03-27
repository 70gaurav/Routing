import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Blog() {
    const [blog,setblog]= useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response.data)
        setblog(response.data)
    })
    },[])
  return (
    <>
    {
        blog.map((element)=> {
            return(
                <div key={element.id}>
                    <h3><Link to={`/blog/${element.id}`}>{element.title}</Link></h3>
                    <p>{element.body}</p>
                    

                </div>
                
            )
        })
    }
    </>
  )
}

export default Blog