"use client";
import Button from "@/app/components/Shared/Atoms/Button/Button";
import FileInput from "@/app/components/Shared/Atoms/FileInput/FileInput";
import Input from "@/app/components/Shared/Atoms/Input/Input";
import FormComponent from "@/app/components/Shared/Molecules/FormComponent/FormComponent";
import Progress from "@/app/components/Shared/Molecules/Progress/Progress";
import TextEditor from "@/app/components/Shared/Molecules/TextEditor/TextEditor";
import { constants } from "@/constants/constants";
import { PostWithFile } from "@/lib/axios";
import { BlogType, checkBlogValidation } from "@/utils/blogUtils";
import { makePreviewImage } from "@/utils/commonUtils";
import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function BlogForm() {
    const [blogData, setBlogData] = useState<BlogType>({
        content: '',
        image: '',
        tittle: ''
    })
    const [imagePreview, setImagePreview] = useState<string | undefined>('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const valid = checkBlogValidation(blogData)
        if (!valid.value) {
            return toast.error(valid.message)
        }
        try {
            setLoading(true)
            const formData: any = new FormData()
            formData.append('tittle', blogData.tittle)
            formData.append('content', blogData.content)
            formData.append('image', blogData.image)
            const { data } = await PostWithFile('/blog/addBlog', formData)
            setBlogData({content:'', image:'', tittle:''})
            setImagePreview("")
            setLoading(false)
            toast.success(data?.message)
        }
        catch (error) {
            setLoading(false)
            toast.error(constants.COMMON_ERROR)
        }
    }
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBlogData({ ...blogData, [event.target.name]: event.target.value })
    }
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const image: string | undefined = makePreviewImage(event.target.files[0])
            setBlogData({ ...blogData, image: event.target.files[0] })
            if (image) {
                setImagePreview(image)
            }
            else {
                setImagePreview('')
            }
        }
    }
    const handleEditorChange = (data: any) => {
        setBlogData({ ...blogData, content: data })
    }
    return (
        <>
            <Progress loading={loading} />
            <FormComponent handleSubmit={handleSubmit}>
                <div className="flex justify-center gap-10 items-start">
                    <Input classes="w-full" value={blogData.tittle} onChange={handleFormChange} name="tittle" placeHolder="Enter your blog title..." />
                    <FileInput image={imagePreview} onChange={handleImageChange} />
                </div>
                <div className="my-5">
                    <TextEditor value={blogData.content} onChange={handleEditorChange} />
                </div>
                <div className="flex my-10 justify-end">
                    <Button buttonType="submit" text="Save Details" />
                </div>
            </FormComponent>
        </>
    )
}