import Link from "next/link";
import { Children } from "react";

export default function layout() {
  return (
    <nav>
    <h2>Topics</h2>
    <ul>
        <Link href={`/blog/topics/equipment`}>Equipment</Link>
        <Link href={`/blog/topics/information`}>Information</Link>
        <Link href={`/blog/topics/fun`}>Fun</Link>
    </ul>
</nav>
  )
}
