import React from 'react'
import { useGetAboutUs } from '../../api/about'

const Page = () => {
    const {data} = useGetAboutUs();
    
  return (
    <div className='container'>
      <img src='/Layout/damarose.png'/>
      <h1>Our Privacy</h1> 
      <h2>English</h2>
      <p>{data?.data?.content?.en}</p>
      <h2>Arabic</h2>
      <p>{data?.data?.content?.ar}</p>
    </div>
  )
}

export default Page