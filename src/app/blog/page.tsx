import Link from "next/link"
import Image from "next/image";
import { merienda, montserrat } from "@/font/fonts"


type BlogSearchQuery = {
    sortBy: string;
}

type BlogTopic = {
    title: string;
    topic: string;
    heroImg: string;
    description: string;
}

const blogposts: BlogTopic[]= [
    {title: "Mers", topic: "information", heroImg: "/images/mers.png", description: "What is a mer?",},
    {title: "Tails", topic: "equipement", heroImg: "/images/tail.png", description: "A list of mer tails from fabric to silicone and more!",},
    {title: "Monofins", topic: "equipement", heroImg: "/images/monofin.png", description: "A list of monofins used in tails.",},
    {title: "Safty", topic: "safty", heroImg: "/images/safty.png", description: "What are some good safty tips for being a mer.",},
    {title: "Media", topic: "information", heroImg: "/images/OpheraMermaid.png", description: "Where can you find mers in the media.",},
]

function compareBlogTopics(a: BlogTopic, b: BlogTopic){
    if(a.topic < b.topic){
        return -1
    } else if(a.topic > b.topic){
        return 1
    } else {
        return 0
    }
}

export default function BlogPage({searchParams}:{searchParams: BlogSearchQuery}) {
    if(searchParams.sortBy === "topicasc"){
        blogposts.sort(compareBlogTopics)
    } else if ( searchParams.sortBy === "topicdec"){
        blogposts.sort(compareBlogTopics).reverse()
    }

    return (
        <main className="p-2">
            <div className="border border-dashed border-purple-400 w-fit p-2">
            <h3 className="text-lime-400 ">Topic Sorting</h3>
            <div className="flex gap-3">
            <Link className="text-blue-400 hover:text-purple-400" href="/blog">Default</Link>
            <Link className="text-blue-400 hover:text-purple-400" href="/blog?sortBy=topicasc">Group Ascending</Link>
            <Link className="text-blue-400 hover:text-purple-400" href="/blog?sortBy=topicdec">Group Descending</Link>
            </div>
            </div>
            <div className="">
            <ul className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogposts.map((post) => {
                    return(
                        <li className="border-dashed border-2 h- border-sky-400 m-2 p-2 hover:border-purple-500 hover:bg-gray-800" key={post.title}>
                            <Link className={`grid justify-center text-center  ${merienda.className}`} href={`/blog/${post.title}`}>
                            <span className="text-purple-400">{post.title}</span>
                            <Image className="mx-auto p-2 h-60 w-fit" src={post.heroImg} alt={post.title} width={200} height={200}/>
                            <p className={` ${montserrat.className}`}>{post.description}</p>
                            <p className={` text-lime-400 ${montserrat.className}`}>{post.topic}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </div>
        </main>
    )
}
