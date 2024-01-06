'use client';

import React, { useState } from 'react'
import Button from "@/app/components/Shared/Atoms/Button/Button";
import FileInput from "@/app/components/Shared/Atoms/FileInput/FileInput";
import Input from "@/app/components/Shared/Atoms/Input/Input";
import FormComponent from "@/app/components/Shared/Molecules/FormComponent/FormComponent";
import { constants } from "@/constants/constants";
import Axios, { PostWithFile } from "@/lib/axios";
import { LoadingType, makePreviewImage } from '@/utils/commonUtils';
import { AuthorType, checkValidation } from '@/utils/authorUtils';
import { toast } from 'react-hot-toast';
import Progress from '@/app/components/Shared/Molecules/Progress/Progress';

export default function CreateAuthorForm() {
    const [authorData, setAuthorData] = useState<AuthorType>({
        name: '',
        email: '',
        proffession: '',
        company_name: '',
        image: {},
    })
    const [imagePreview, setImagePreview] = useState<string | undefined>('')
    const [loading, toggleLoading] = useState<LoadingType>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorData({ ...authorData, [event.target.name]: event.target.value })
    }
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const image: string | undefined = makePreviewImage(event.target.files[0])
            setAuthorData({ ...authorData, image: event.target.files[0] })
            if (image) {
                setImagePreview(image)
            }
            else {
                setImagePreview('')
            }
        }
    }
    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        toggleLoading(true)
        try {
            const valid = checkValidation(authorData)
            if (!valid.value) {
                toggleLoading(false)
                return toast.error(valid.message)
            }
            const formData:any = new FormData()
            authorData.name && formData.append('name', authorData.name)
            authorData.email && formData.append('email', authorData.email)
            authorData.proffession && formData.append('proffession', authorData.proffession)
            authorData.company_name && formData.append('company_name', authorData.company_name)
            authorData.image instanceof Blob && formData.append('image', authorData.image)
            const {data} = await PostWithFile('/author/create', formData)
            toast.success(data?.message)
        } catch (error) {
            toast.error(constants.COMMON_ERROR)
        }
        finally {
            toggleLoading(false)
        }

    }
    return (
        <>
            <Progress loading={loading}/>
            <FormComponent handleSubmit={handleSubmit}>
                <div className="flex flex-col-reverse md:flex-row justify-around gap-10 md:gap-5 w-full">
                    <div className=" w-full md:w-[60%] flex flex-col gap-10">
                        <Input onChange={handleChange} value={authorData.name} required label={constants.AUTHOR.name} type="text" name="name" />
                        <Input onChange={handleChange} value={authorData.email} required label={constants.AUTHOR.email} type="email" name='email' />
                        <Input onChange={handleChange} value={authorData.proffession} label={constants.AUTHOR.proffession} type="text" name='proffession' />
                        <Input onChange={handleChange} value={authorData.company_name} label={constants.AUTHOR.company} type="text" name='company_name' />
                        <Button buttonType="submit" text="Save Details" backgroundColor={`bg-[${constants.BUTTONBGCOLOR}]`} />
                    </div>
                    <div className="md:mt-5">
                        <FileInput image={imagePreview} onChange={handleImageChange} />
                    </div>
                </div>
            </FormComponent>
        </>
    )
}