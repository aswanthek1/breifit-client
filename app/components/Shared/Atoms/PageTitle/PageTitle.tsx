type TitleType = {
    title: string,
    style?: any
}

export default function PageTitle({ title, style }: TitleType) {
    return (
        <h1 style={style} className="text-center font-bold text-2xl">
            {title}
        </h1>
    )
}