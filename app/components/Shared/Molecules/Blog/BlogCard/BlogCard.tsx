import { BlogType } from "@/utils/blogUtils";
import Link from "next/link";

type Blog = {
    blogs: BlogType[]
}

export default function BlogCard({blogs}: Blog) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
            {
                blogs?.map((blog) => {
                    return (
                        <div key={blog._id}>
                            <Link href={`/blog/${blog._id}`}>
                                <div
                                    className="md:w-[300px] w-[280px] bg-[#D9D9D9] h-[180px] rounded-[15px] mx-auto my-[30px] flex flex-col justify-center items-center font-bold font-sans text-gray-600"
                                >
                                    {blog?.tittle}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}