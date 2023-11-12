'use client';

import Button from "@/app/components/Shared/Atoms/Button/Button";
import FileInput from "@/app/components/Shared/Atoms/FileInput/FileInput";
import Input from "@/app/components/Shared/Atoms/Input/Input";
import FormComponent from "@/app/components/Shared/Molecules/FormComponent/FormComponent";
import { constants } from "@/constants/constants";

export default function CreateAuthorForm() {
    const handleSubmit = async () => {
        console.log('submitting author')
    }
    return (
        <FormComponent  handleSubmit={handleSubmit}>
                <div className="flex flex-col-reverse md:flex-row justify-around gap-10 md:gap-5 w-full">
                    <div className=" w-full md:w-[60%] flex flex-col gap-10">
                        <Input required label="Enter your Name" type="text" name="name" />
                        <Input required label="Enter Your Email" type="email" name='email' />
                        <Input label="Your Proffession" type="text" name='proffession' />
                        <Input label="Company Name" type="text" name='companyname' />
                        <Button buttonType="submit" text="Save Details" backgroundColor={`bg-[${constants.BUTTONBGCOLOR}]`} />
                    </div>
                    <div className="md:mt-5">
                        <FileInput />
                    </div>
                </div>
            </FormComponent>
    )
}