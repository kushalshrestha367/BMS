import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { baseUrl } from '../../config'
import axios from 'axios'

const Home = () => {
  const [blogs,setBlogs] = useState([]);
  const fetchBlogs = async() => {
    const response = await axios.get(`${baseUrl}/blog`)
    if (response.status === 200){
      setBlogs(response.data.data)
    }
  }
  useEffect(() => {
     fetchBlogs();
  }, [])

  return (
  <Layout>
   <div className='flex flex-wrap justify-center space-x-6 mt-7' >
    {
      blogs.length > 0 && blogs.map((blog) => {
        return(
          <Card blog={blog} />
        )
      })
    }
   <footer/>
   </div>
  </Layout>
  )
}

export default Home