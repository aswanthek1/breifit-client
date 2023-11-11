import Image from "next/image"
import LogoImage from '../../../../../public/logo/b-logo.png'

const Logo = () => {
    return (
        <Image
            className="h-20 w-20"
            src={LogoImage} alt="logo" />
    )
}

export default Logo;