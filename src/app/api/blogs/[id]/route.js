import { NextResponse } from "next/server"
import connectDb from "@/lib/utils/connectDB";
import BlogPost from "@/lib/models/BlogPost";

export const GET = async (request, {params}) => {
    const {id} = params;
    try {
        await connectDb();
        const posts = await BlogPost.findById(id); // Sort by 'date' field in descending order
        posts.views += 1;
        await posts.save();
    
      
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
}