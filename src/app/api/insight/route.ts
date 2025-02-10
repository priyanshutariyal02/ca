import { connectDB } from "@/lib/mongodb";
import InsightModel from "@/models/insight";
import { NextRequest } from "next/server";

// Add static configuration
export const dynamic = 'force-static';

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { title, image, content } = await request.json();

    if (!title || !content || !image) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newBlog = await InsightModel.create({ title, content, image });

    return Response.json(
      { message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();

  try {
    const blogs = await InsightModel.find().sort({ createdAt: -1 });
    return Response.json(blogs, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}