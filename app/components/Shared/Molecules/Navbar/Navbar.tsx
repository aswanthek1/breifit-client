import Button from "../../Atoms/Button/Button";
import Link from "next/link";
import Logo from "../../Atoms/Logo/Logo";
import AccountDetails from "./AccountDetails/AccountDetails";

const Navbar = () => {
    return (
        <>
            <div className="w-full px-5 py-3 border-2 shadow-2xl flex justify-between items-center">
                <Link href={'/'}><Logo/></Link>
                {/* <Link href={'/'}>
                    <Button text="Login As Admin" />
                </Link> */}
                    <AccountDetails/>
            </div>
        </>
    )
}

export default Navbar;