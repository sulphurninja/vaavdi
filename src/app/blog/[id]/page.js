import { fetchBlogPost } from '@/lib/actions/blog.actions';
import React from 'react'
import { FiEye } from 'react-icons/fi';

async function getData(id) {
    try{
        const res = await fetchBlogPost({ params: { id } });
        return res.json();
    }catch(error){
        console.log(error, "THE ERROR?");
    } 
}

export default async function BlogPost({ params }) {
    const data = await getData(params.id);
    return (
        <div className='mx-auto my-auto  text-black'>
              <div >
                    <a className="block rounded-lg overflow-hidden border border-gray-300 hover:border-gray-400 hover:shadow-md">
                        <img src={data.headerImage} alt={data.title} className="object-cover h-64 w-full" />
                        <div className="p-4">
                            <h1 className="text-2xl underline font-semibold mb-4">{data.title}</h1>
                            <h2 className="text-lg font-semibold mb-4">{data.header}</h2>
                            {data.description.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-black -600 text-justify mb-4">{paragraph}
                              
                                </p>
                            ))}
                            <div className='flex my-auto items-center text-lg px-2 space-x-2'>
                            <FiEye/>
                            <h1 className='font-bold'> {data.views} Views</h1> 

                            </div>
                        </div>
                    </a>
                </div>
        </div>
    )
}
