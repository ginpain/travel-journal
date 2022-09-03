import { useState } from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import './index.css'
import data from './data'




export default function App() {
  const blogs=data.map(item => {
    return(
      <Blog
        key={item.id}
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


