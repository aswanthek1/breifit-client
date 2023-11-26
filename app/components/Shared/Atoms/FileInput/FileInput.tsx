import Image from "next/image";
import FileSvg from "../FileSvg/FileSvg";

type FileInputType = {
    image: any,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FileInput({ image, onChange }: FileInputType) {
    return (
        <div className="relative w-fit m-auto">
            <div className="flex items-center justify-center">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center h-40 w-40 md:h-52 md:w-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 px-3">
                    <div className="flex flex-col items-center justify-center pt-4 pb-5">
                        <FileSvg />
                        <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                    </div>
                    <input onChange={onChange} id="dropzone-file" type="file" className="hidden" />
                    {image && <Image
                        src={image}
                        alt="author"
                        width={100}
                        height={100}
                        className="absolute top-0 right-0 w-full h-full"
                    />}
                </label>
            </div>
        </div>
    )
}