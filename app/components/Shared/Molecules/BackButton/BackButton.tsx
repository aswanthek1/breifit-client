"use client";

import { usePathname, useRouter } from "next/navigation";
import IconButton from "../../Atoms/IconButton/IconButton";

export default function BackButton() {
    const router = useRouter()
    const pathname = usePathname()
    const handleBackClick = () => {
        router.back()
    }
    if (['/', '/login', '/register'].includes(pathname)) {
        return;
    }
    return (
        <div className="fixed left-[4%] ">
            <IconButton extraClasses="py-[8px] ps-[13px] pe-[3px]" onClick={handleBackClick} />
        </div>
    )
}