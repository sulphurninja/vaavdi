import { NextResponse } from "next/server"
import connectDb from "@/lib/utils/connectDB";
import BlogPost from "@/lib/models/BlogPost";

export const GET = async (request) => {
    //fetch
    try {
        await connectDb();
        const posts = await BlogPost.find().sort({ date: -1 }); // Sort by 'date' field in descending order
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
}