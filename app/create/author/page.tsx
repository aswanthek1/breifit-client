import Input from "@/app/components/Shared/Atoms/Input/Input";
import PageTitle from "../../components/Shared/Atoms/PageTitle/PageTitle";
import FileInput from "@/app/components/Shared/Atoms/FileInput/FileInput";
import Button from "@/app/components/Shared/Atoms/Button/Button";
import { constants } from "@/constants/constants";
import FormComponent from "@/app/components/Shared/Molecules/FormComponent/FormComponent";


export default function CreateAuthor() {
    const handleSubmit = async () => {
    }
    return (
        <>
            <PageTitle title="Say About You" />
            <FormComponent>
                <div className="flex flex-col-reverse md:flex-row justify-around gap-10 md:gap-5 w-full">
                    <div className=" w-full md:w-[60%] flex flex-col gap-10">
                        <Input label="Enter your Name" type="text" name="name" />
                        <Input label="Enter Your Email" type="email" name='email' />
                        <Input label="Your Proffession" type="text" name='proffession' />
                        <Input label="Company Name" type="text" name='companyname' />
                        <Button text="Save Details" backgroundColor={`bg-[${constants.BUTTONBGCOLOR}]`} />
                    </div>
                    <div className="md:mt-5">
                        <FileInput />
                    </div>
                </div>
            </FormComponent>
        </>
    )
}