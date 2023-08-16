import Link from "next/link";
import { merienda, lumanosimo } from "@/font/fonts"

export default function Header() {
  return (
    <header className={`sticky top-0 left-0 right-0 bg-black w-ful ${lumanosimo.className} p-5`} >
        <h1 className={`${merienda.className} text-fuchsia-500 text-5xl text-center`}>MerTalk</h1>
        <nav>
            <ul className="flex gap-3 justify-center">
                <li className=" text-purple-500  hover:text-blue-500"><Link href="/">Home</Link></li>
                <li className=" text-purple-500 hover:text-blue-500"><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}
