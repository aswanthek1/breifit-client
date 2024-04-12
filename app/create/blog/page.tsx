import PageTitle from "@/app/components/Shared/Atoms/PageTitle/PageTitle";
import BlogForm from "./BlogForm";

export default function CreateBlog () {
    return (
        <>
            <PageTitle title="Create Your Blog" />
            <BlogForm/>
        </>
    )
}