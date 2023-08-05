import React from 'react'
import { FiUser } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import Link from 'next/link';

async function getData() {
    const res = await fetch('https://vaavdi.vercel.app/api/blogs', {
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



export default async function Featured() {
    const data = await getData();
    const posts = data.filter((blog) => blog.isFeatured);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-auto px-4">
        {/* Large post */}
        <Link href={`/blog/${posts[0]._id}`} key={posts[0]._id}>
            <div
                key={posts[0]._id}
                className="bg-white shadow-sm hover:-mt-2 shadow-black h-fit rounded-lg overflow-hidden col-span-2"
            >
                <img
                    src={posts[0].headerImage}
                    alt="Blog Post"
                    className="w-full h-40 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">{posts[0].title}</h2>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                        <AiOutlineCalendar className="mr-2" />
                        {formatDate(posts[0].date)}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                        <FiUser className="mr-2" />
                        {posts[0].author}
                    </div>
                    <p className="text-gray-700 text-sm mt-4">{posts[0].header}</p>
                    <p className="text-gray-700 text-sm mt-4">{posts[0].description}</p>
                    {/* <button className="bg-[#FF6701] hover:bg-[#4F200D] text-white px-4 py-2 rounded-md mt-4">
                        Read More
                    </button> */}
                </div>
            </div>
            <div className='p-4 bg-[#4F200D] text-white  rounded-lg mt-4'>
           <h1 className=' text-2xl  font-bold '>Editorial - संपादकीय<hr className='w-full h-2 text-'></hr><span className=' text-amber-200'>विशेष लेख: {posts[0].title}</span></h1> 
           </div>
        </Link>

        {/* Side cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  justify-end gap-4">
            {posts.slice(1).map((blogPost, index) => (
                <Link href={`/blog/${blogPost._id}`} key={blogPost._id}>
                    <div
                        key={blogPost._id}
                        className={`bg-white shadow-sm w-full h-full   hover:-mt-2 shadow-black  rounded-lg overflow-hidden ${
                            index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                        }`}
                    >
                        <img
                            src={blogPost.headerImage}
                            alt="Blog Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-md font-bold mb-4">{blogPost.title}</h2>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                                <AiOutlineCalendar className="mr-2" />
                                {formatDate(blogPost.date)}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                                <FiUser className="mr-2" />
                                {blogPost.author}
                            </div>
                            <p className="text-gray-700 text-sm mt-4">{blogPost.header}</p>
                            <button className="bg-[#FF6701] hover:bg-[#4F200D] text-white px-4 py-2 rounded-md mt-4">
                                Read More
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    )
}

