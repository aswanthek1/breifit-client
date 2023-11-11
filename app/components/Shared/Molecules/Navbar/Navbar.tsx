import Image from "next/image";
import Button from "../../Atoms/Button/Button";
import Link from "next/link";
import Logo from "../../Atoms/Logo/Logo";

const Navbar = () => {
    return (
        <>
            <div className="w-full px-5 py-3 border-2 shadow-2xl flex justify-between items-center">
                <Logo/>
                <Link href={'/'}>
                    <Button text="Login As Admin" />
                </Link>
            </div>
        </>
    )
}

export default Navbar;