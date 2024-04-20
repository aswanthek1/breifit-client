"use client";
import { useAppSelector } from "@/lib/hooks";
import { BlogType } from "@/utils/blogUtils";

export default function LoggedInContainer({ children, blog }: {
    children: React.ReactNode,
    blog?: BlogType
}) {
    const { author, isLoggedIn } = useAppSelector((state) => state.user);
    if(blog) {
        if(blog.author?._id === author._id){
            return <>{children}</>
        }
        else {
            return ;
        }
    }
    return (
        <>
         {  
            isLoggedIn ? children : null
         }
        </>
    )
}