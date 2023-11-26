export const makePreviewImage = (image:File): string | undefined => {
    if(!image) return;
    return URL.createObjectURL(image)
}

export const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ReturnValidationType = {
    value: boolean,
    message: string
}

export type LoadingType = boolean;