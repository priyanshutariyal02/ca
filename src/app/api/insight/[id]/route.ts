import { connectDB } from "@/lib/mongodb";
import InsightModel from "@/models/insight";
import { NextRequest } from "next/server";

// Add these export configurations
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return [1, 2, 3].map((id) => ({
    id: id.toString(),
  }));
}

type Props = {
  params: {
    id: string;
  };
};

export async function GET(_request: NextRequest, context: Props) {
  await connectDB();

  try {
    const blog = await InsightModel.findById(context.params.id);

    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    return Response.json(blog, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
