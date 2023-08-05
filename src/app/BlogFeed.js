import React from 'react'
import { FiUser} from 'react-icons/fi'
import { AiOutlineCalendar} from 'react-icons/ai'
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3000/api/blogs', {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${day} ${month} ${year}`;
};


export default async function BlogFeed() {
  const data = await getData();
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3   gap-4 mx-auto px-4 grid-cols-1'>
      {data.map((blogPost) => (
       
        <Link href={`/blog/${blogPost._id}`} key={blogPost.id} >
        <div
          key={blogPost._id}
          className="bg-white shadow-sm hover:-mt-2 shadow-black h-full rounded-lg overflow-hidden"
        >
          <img
            src={blogPost.headerImage}
            alt="Blog Post"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{blogPost.title}</h2>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <AiOutlineCalendar className="mr-2" />
              {formatDate(blogPost.date)}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <FiUser className="mr-2" />
              {blogPost.author}
            </div>
            <p className="text-gray-700 mt-4">{blogPost.header}</p>
            <button className="bg-[#FF6701] hover:bg-[#4F200D] text-white px-4 py-2 rounded-md mt-4">
              Read More
            </button>
          </div>
          </div>
        </Link>
        ))
}
    </div >
  )
}
