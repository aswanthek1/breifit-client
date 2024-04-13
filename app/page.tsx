import Button from "./components/Shared/Atoms/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] md:min-h-[85vh] flex-col items-center justify-center px-8 md:px-0">
      <div className="relative flex place-items-center flex-col w-full gap-20">
        <h1 className='text-[40px] lg:text-[70px] font-bold text-center w-full'>BriefIt Welcome's You</h1>
        <div className="flex justify-around w-full md:w-[80%]">
          <Link href={'/blog'}>
            <Button text="Read Blogs" />
          </Link>
          <Link href={'/create/blog'}>
            <Button text="Create One" />
          </Link>
        </div>
      </div>
    </main>
  )
}
