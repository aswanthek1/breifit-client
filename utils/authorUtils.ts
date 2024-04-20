import { ReturnValidationType, validEmail } from "./commonUtils"

export type AuthorType = {
    _id?:string,
    password?:string,
    name?:string,
    email:string,
    proffession?:string,
    company_name?:string,
    image?: File | {},
    role?:string
}

export const checkValidation = (data:AuthorType, passwordCheck:boolean = false):ReturnValidationType => {
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
    else if(passwordCheck && (!data?.password?.trim()?.length || data.password?.trim()?.length < 4 || data.password?.trim()?.length > 15)) {
        return {
            value: false,
            message:'Password must need minimum 4 and can have maximum characters of 15'
        }
    }
    else {
        return {
            value: true,
            message: ''
        }
    }
}

export const loginValidation = (data:AuthorType): ReturnValidationType => {
    if(!data.email || !validEmail.test(data.email)) {
        return {
            value: false,
            message: 'A valid email is required'
        }
    }
    else if(!data?.password?.trim()?.length || data.password?.trim()?.length < 4 || data.password?.trim()?.length > 15) {
        return {
            value: false,
            message:'Password must need minimum 4 and can have maximum characters of 15'
        }
    }
    else {
        return {
            value: true,
            message: ''
        }
    }
}