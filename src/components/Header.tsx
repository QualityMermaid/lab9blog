import Link from "next/link";
import { merienda, lumanosimo } from "@/font/fonts"

export default function Header() {
  return (
    <header className={`${merienda.className} p-2`} >
        <h1 className={`${merienda.className} text-fuchsia-500 text-5xl text-center`}>MerTails</h1>
        <nav>
            <ul className="flex gap-3">
                <li className=" text-fuchsia-500  hover:text-blue-500"><Link href="/">Home</Link></li>
                <li className=" text-fuchsia-500 hover:text-blue-500"><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}
