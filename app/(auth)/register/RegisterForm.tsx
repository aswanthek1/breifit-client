'use client';

import { constants } from "@/constants/constants";
import Input from "../../components/Shared/Atoms/Input/Input";
import FormComponent from "../../components/Shared/Molecules/FormComponent/FormComponent";
import React, { useState } from "react";
import { AuthorType, checkValidation } from "@/utils/authorUtils";
import Button from "../../components/Shared/Atoms/Button/Button";
import toast from "react-hot-toast";
import { LoadingType } from "@/utils/commonUtils";
import { Post } from "@/lib/axios";
import Progress from "../../components/Shared/Molecules/Progress/Progress";
import Link from "next/link";

export default function RegisterForm() {
    const [loading, toggleLoading] = useState<LoadingType>(false);
    const [authorData, setAuthorData] = useState<AuthorType>({
        name: '',
        email: '',
        password: '',
    })
    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(authorData, 'authordata')
        const valid = checkValidation(authorData, true) /// this true is for checking password validation
        if (!valid.value) {
            return toast.error(valid.message)
        }
        toggleLoading(true)
        try {
            const created = await Post('/author/register', authorData)
        } catch (error) {
            toast.error(constants.COMMON_ERROR)
        }
        finally {
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
                    <Input onChange={handleFormChange} name="name" value={authorData.name} label={constants.AUTHOR.name} />
                    <Input onChange={handleFormChange} name="email" value={authorData.email} label={constants.AUTHOR.email} />
                    <Input onChange={handleFormChange} name="password" value={authorData.password} label={constants.AUTHOR.password} type="password" />
                    <Button buttonType="submit" text="Create Account" backgroundColor={`bg-[${constants.BUTTONBGCOLOR}]`} />
                    <div className="flex justify-start items-center gap-3">
                        <p className="font-semibold text-lg">
                            Allready have an account?
                        </p>
                        <Link className="text-blue-500 font-bold text-lg hover:underline" href="/login">Login</Link>
                    </div>
                </div>
            </FormComponent>
        </>
    )
}