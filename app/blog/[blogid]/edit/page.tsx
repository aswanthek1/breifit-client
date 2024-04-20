import PageTitle from "@/app/components/Shared/Atoms/PageTitle/PageTitle";
import BlogForm from "@/app/components/Shared/Molecules/BlogForm/BlogForm";
import { GetWithoutToken } from "@/lib/axios";
import { BlogType } from "@/utils/blogUtils";
import { notFound } from "next/navigation";

const getBlogById = async (blogId: string) => {
    try {
        const { data } = await GetWithoutToken(`/blog/getBlog/${blogId}`, {})
        return data;
    } catch (error) {}
}

type PageType = {
    params: {
        blogid: string
    }
}

export default async function EditBlog({params}:PageType) {
    const blog: BlogType = await getBlogById(params.blogid)
    if (!blog) {
        return notFound()
    }
    return (
        <>
            <PageTitle title="Edit Your Blog" />
            <BlogForm blog={blog} />
        </>
    )
}