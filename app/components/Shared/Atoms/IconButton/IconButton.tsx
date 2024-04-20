import { ArrowBackIos } from "@mui/icons-material";
import { MouseEventHandler } from "react";

type ButtonType = {
    Icon?: any,
    onClick?:MouseEventHandler<HTMLDivElement>,
    style?:any,
    extraClasses?:string
}

export default function IconButton({Icon=ArrowBackIos, onClick, extraClasses=""}:ButtonType) {
    return (
        <div onClick={onClick} className={`bg-slate-300 w-fit rounded-md p-2 shadow-md hover:shadow-xl cursor-pointer ${extraClasses}`}>
            <Icon/>
        </div>
    )
}