export default function CreateLayout({children}:{children:React.ReactNode}) {
    return (
        <main className="min-h-full flex flex-col items-center gap-10 py-10 px-7 sm:px-10 md:px-20">
            {children}
        </main>
    )
}