import { GetWithoutToken } from "@/lib/axios"
import Progress from "../components/Shared/Molecules/Progress/Progress";
import BlogCard from "../components/Shared/Molecules/Blog/BlogCard/BlogCard";
import PageTitle from "../components/Shared/Atoms/PageTitle/PageTitle";
import Link from "next/link";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Suspense } from "react";
import Loading from "../loading";
import BlogsHeader from "../components/Shared/Molecules/Blog/BlogsHeader/BlogsHeader";

let loading = false
const revalidatedData = async (page: number = 1, limit: number = 5) => {
    // const data = await fetch(`${BASE_URL}blog/getBlogsByPaginage/:1?&limit:10`, {
    //     next: { revalidate: 10 },
    //   })
    //   const ddd = await data.json()
    //   return ddd
    try {
        loading = true;
        const { data } = await await GetWithoutToken(`/blog/getBlogsByPaginage/${page}?&limit=${limit}`, {})
        loading = false;
        return data
    } catch (error) {
        loading = false
    }
}

export default async function BlogsPage({ searchParams }: any) {
    // let page = 1
    let limit = 6
    const page = Number(searchParams.page ?? 1);
    const blog = await revalidatedData(page, limit)
    const getPage = (prev = false) => {
        let newPage = page
        if (prev) {
            if (page === 1) {
                newPage = page
            }
            else {
                newPage = page - 1
            }

        }
        else {
            if (page === blog?.totalPage) {
                newPage = page
            }
            else {
                newPage = page + 1
            }
        }
        return newPage
    }
    return (
        <>
            {/* <Progress loading={loading} /> */}
            <Suspense fallback={<Loading />}>
                <PageTitle title="Blogs" />
                <BlogsHeader totalBlogs={blog.count}/>
                <BlogCard blogs={blog.data} />
                <div className="W-full mt-5 flex items-center justify-center gap-5" >
                    <Link href={`/blog/?page=${getPage(true)}`} className="rounded-[50%] p-2 bg-[#D9D9D9] cursor-pointer" ><NavigateBefore /></Link>
                    <div>{page}</div>
                    <Link href={`/blog/?page=${getPage(false)}`} className="rounded-[50%] bg-[#D9D9D9] p-2 cursor-pointer"><NavigateNext /></Link>
                </div>
            </Suspense>
        </>
    )
}