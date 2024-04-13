import { AuthorType } from "./authorUtils"

export type BlogType = {
    _id?: string
    tittle:string,
    image: any,
    author?: AuthorType,
    content: string
}


export const checkBlogValidation = (data:BlogType) => {
    if(data.tittle?.length < 3 || data.tittle.length > 30) {
        return {
            value: false,
            message: 'Title need minimum 3 and maximum 30 characters'
        }
    }
    if(!data?.image || data?.image === '') {
        return {
            value: false,
            message: 'A cover image is required'
        }
    }
    if(data?.content?.length < 10) {
        return {
            value: false,
            message: 'Content needs minimum 10 characters'
        }
    }
    return {
        value: true,
        message: ''
    }
}