import { Toaster } from "react-hot-toast"
type ToastType = {
    position?: 'top-left'| 'top-center'| 'top-right'| 'bottom-left'| 'bottom-center'| 'bottom-right'
}

const ToasterComponent = ({ position = 'top-center' }: ToastType) => {
    return (
        <>
            <Toaster
                position={position}
            />
        </>
    )
}

export default ToasterComponent;