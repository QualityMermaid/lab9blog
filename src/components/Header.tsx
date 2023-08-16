import Link from "next/link";

export default function Header() {
  return (
    <header>
        <h1>MerTails</h1>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}
