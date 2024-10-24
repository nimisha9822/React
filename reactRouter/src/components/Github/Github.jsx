import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  //immediatley load kr leta hai sab data jaise hi cursor aata hai tbhi click krne se bhi phle
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/nimisha9822')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nimisha9822')
    return response.json()
}