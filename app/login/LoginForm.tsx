'use client';

import { constants } from "@/constants/constants";
import Button from "../components/Shared/Atoms/Button/Button";
import Input from "../components/Shared/Atoms/Input/Input";
import FormComponent from "../components/Shared/Molecules/FormComponent/FormComponent";
import { AuthorType, loginValidation } from "@/utils/authorUtils";
import { useState } from "react";
import { LoadingType } from "@/utils/commonUtils";
import Progress from "../components/Shared/Molecules/Progress/Progress";
import toast from "react-hot-toast";
import { Post } from "@/lib/axios";

export default function () {
    const [loading, toggleLoading] = useState<LoadingType>(false);
    const [authorData, setAuthorData] = useState<AuthorType>({
        email: '',
        password: '',
    })
    const handleSubmit = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const valid = loginValidation(authorData)
        if (!valid.value) {
            return toast.error(valid.message)
        }
        toggleLoading(true)
        try {
            const created = await Post('/author/login', authorData)
        } catch (error) {
            toast.error(constants.COMMON_ERROR) 
        }
        finally{
            toggleLoading(false)
        }
    }
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorData({
            ...authorData,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <Progress loading={loading} />
            <FormComponent handleSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 w-full md:w-[80%] lg:w-[60%] mx-auto" >
                    <Input onChange={handleFormChange} name="email" value={authorData.email} label={constants.AUTHOR.email} />
                    <Input onChange={handleFormChange} name="password" value={authorData.password} label={constants.AUTHOR.password} type="password" />
                    <Button buttonType="submit" text="Login" backgroundColor={`bg-[${constants.BUTTONBGCOLOR}]`} />
                </div>
            </FormComponent>
        </>
    )
}