type dataType = {
    totalBlogs:number
}

export default function BlogsHeader ({totalBlogs}:dataType) {
    return (
        <div className="w-full flex justify-start">
            <div className="flex gap-2">
                <span className="font-bold">Total Blogs:</span>
                <span className="font-semibold">{totalBlogs}</span>
            </div>
        </div>
    )
}