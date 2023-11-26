import { ReturnValidationType, validEmail } from "./commonUtils"

type AuthorType = {
    name:string,
    email:string,
    proffession?:string,
    company_name?:string,
    image?: File | {}
}

export const checkValidation = (data:AuthorType):ReturnValidationType => {
    if(!data?.name || data?.name?.trim()?.length < 2 || data?.name?.trim()?.length > 100) {
        return {
            value: false,
            message: 'A valid name is required'
        }
    }
    else if(!data.email || !validEmail.test(data.email)) {
        return {
            value: false,
            message: 'A valid email is required'
        }
    }
    else {
        return {
            value: true,
            message: ''
        }
    }
}