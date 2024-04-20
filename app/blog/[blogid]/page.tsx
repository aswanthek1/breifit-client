export const dynamic = 'force-dynamic'
import { GetWithoutToken } from "@/lib/axios"
import { BlogType } from "@/utils/blogUtils";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogPlaceholder from '../../../public/blogPlaceholder.png'
import IconButton from "@/app/components/Shared/Atoms/IconButton/IconButton";
import LoggedInContainer from "@/app/components/Shared/Molecules/LoggedInContainer/LoggedInContainer";
import { Edit } from "@mui/icons-material";
import Link from "next/link";

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

export default async function BlogView({ params }: PageType) {
    const blog: BlogType = await getBlogById(params.blogid)
    if (!blog) {
        return notFound()
    }
    return (
        <div className="flex md:flex-row flex-col mt-7 md:px-14 py-6 gap-9">
            <div className="flex flex-col gap-16 w-full ">
                <LoggedInContainer blog={blog}>
                    <Link href={`/blog/${blog._id}/edit`}>
                        <IconButton Icon={Edit} extraClasses="fixed left-[4%]" />
                    </Link>
                </LoggedInContainer>
                <h1 className="text-center text-4xl font-bold text-red-400 ">
                    {blog?.tittle}
                </h1>
                <div className='blogImageDiv w-full relative' >
                    {
                        blog?.image ?
                            <Image
                                src={blog?.image}
                                alt={blog?.tittle}
                                loading="lazy"
                                width={0}
                                height={0}
                                sizes="100vw"
                                // fill
                                className="object-cover w-auto mx-auto h-auto md:h-[400px] static"
                            />
                            :
                            <Image
                                alt={""}
                                loading="lazy"
                                src={blogPlaceholder}
                                width={0}
                                height={0}
                                sizes="100vw"
                                // fill
                                className="object-cover w-full h-[400px] static"
                            />
                    }
                </div>
                <p
                    dangerouslySetInnerHTML={{ __html: blog?.content }}
                    className=" font-serif text-justify text-[20px] text-[#767676] " />
                <h1 className="text-2xl font-bold text-red-400">
                    By: {blog?.author?.name}
                </h1>
            </div>
        </div>
    )
}