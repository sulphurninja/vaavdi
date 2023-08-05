import Image from 'next/image'
import Header from './Header'
import Hero from './Hero'
import BlogFeed from './BlogFeed'
import Featured from './FeaturedSlider'

export default function Home() {
  return (
    <div className='relative mx-auto'>
      <Hero />
      <div className='md:p-4 md:text-start text-2xl mt-8 font-cool md:text-4xl text-[#4F200D]'>
        <h1 className='hover:text-orange-500 ml-4  cursor-pointer'>Latest Posts</h1>
      </div>
      <Featured  />

      <div className='p-4 font-cool text-4xl text-center mt-4 mb-4 text-[#4F200D]'>
        <h1 className='hover:text-orange-500 ml-4  cursor-pointer'>All Posts</h1>
      </div>
      <BlogFeed />



    </div>
  )
}
