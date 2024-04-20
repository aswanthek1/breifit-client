import PageTitle from "@/app/components/Shared/Atoms/PageTitle/PageTitle";
import BlogForm from "../../components/Shared/Molecules/BlogForm/BlogForm";

export default function CreateBlog () {
    return (
        <>
            <PageTitle title="Create Your Blog" />
            <BlogForm/>
        </>
    )
}