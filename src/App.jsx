import { useState } from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import './index.css'
import data from './data'




export default function App() {
  const blogs=data.map((item,index) => {
    return(
      <Blog
        key={index}
        item = {item}
      />
    )
  })
  return(
    <>
      <Header />
      <div className='main'>
        {blogs}
      </div>
      
    </>
  )

}


