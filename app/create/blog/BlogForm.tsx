"use client";
import FileInput from "@/app/components/Shared/Atoms/FileInput/FileInput";
import Input from "@/app/components/Shared/Atoms/Input/Input";
import FormComponent from "@/app/components/Shared/Molecules/FormComponent/FormComponent";
import Progress from "@/app/components/Shared/Molecules/Progress/Progress";

export default function BlogForm() {
    const handleSubmit = () => {

    }
    const handleFormChange = () => {

    }
    const handleImageChange = () => {

    }
    return (
        <>
            <Progress loading={false} />
            <FormComponent handleSubmit={handleSubmit}>
                <Input onChange={handleFormChange} name="tittle" placeHolder="Enter your blog title..." />
                <FileInput image={''} onChange={handleImageChange} />
            </FormComponent>
        </>
    )
}