import Link from "next/link";
import Logo from "../../Atoms/Logo/Logo";
import AccountDetails from "./AccountDetails/AccountDetails";
import { getUserSession } from "@/lib/session";

export default async function Navbar() {
    const session = await getUserSession()
    return (
        <>
            <div className="w-full px-5 py-3 border-2 shadow-2xl flex justify-between items-center">
                <Link href={'/'}><Logo /></Link>
                {/* <Link href={'/'}>
                    <Button text="Login As Admin" />
                </Link> */}
                <AccountDetails sessionData={session} />
            </div>
        </>
    )
}