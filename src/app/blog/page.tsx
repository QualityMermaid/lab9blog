import Link from "next/link"
import Image from "next/image";
import { merienda, montserrat } from "@/font/fonts"
import { getPosts } from "@/lib/blogposts";



type BlogSearchQuery = {
    sortBy: string;
}

type BlogTopic = {
    title: string;
    topic: string;
    heroImg: string;
    description: string;
}

const blogposts: BlogTopic[]= getPosts()

function compareBlogTopics(a: BlogTopic, b: BlogTopic){
    if(a.topic < b.topic){
        return -1
    } else if(a.topic > b.topic){
        return 1
    } else {
        return 0
    }
}

function compareBlogTitle(a: BlogTopic, b: BlogTopic){
    if(a.title < b.title){
        return -1
    } else if(a.title > b.title){
        return 1
    } else {
        return 0
    }
}

export default function BlogPage({searchParams}:{searchParams: BlogSearchQuery}) {
    console.log(searchParams)
    if(searchParams.sortBy === "topicasc"){
        blogposts.sort(compareBlogTopics)
    } else if ( searchParams.sortBy === "topicdec"){
        blogposts.sort(compareBlogTopics).reverse()
    } else if (searchParams.sortBy === "alphabet"){
        blogposts.sort(compareBlogTitle)
    }

    return (
        <main >
            <nav className="flex gap-6 justify-center mb-3 pb-2 sticky top-36 bg-black">
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/equipment`}>Equipment</Link>
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/information`}>Information</Link>
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/fun`}>Fun</Link>
            </nav>
            <div className="p-3">
                <div className="border border-dashed border-purple-400 w-fit p-2">
                    <h3 className="text-lime-400 ">Sorting</h3>
                    <div className="flex gap-3">
                    {/* <Link className="text-blue-400 hover:text-purple-400" href="/blog">Default</Link> */}
                    <Link className="text-blue-400 hover:text-purple-400" href="/blog?sortBy=topicasc">Topic</Link>
                    <Link className="text-blue-400 hover:text-purple-400" href="/blog?sortBy=alphabet">Alphabetical</Link>
                    </div>
                </div>
                <div>
                    <ul className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogposts.map((post) => {
                            return(
                                <li className="border-dashed border-2 h- border-sky-400 m-2 p-2 hover:border-purple-500 hover:bg-gray-800" key={post.slug}>
                                    <Link className={`grid justify-center text-center  ${merienda.className}`} href={`/blog/${post.slug}`}>
                                    <span className="text-purple-400 text-2xl">{post.title}</span>
                                    <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur"   blurDataURL={`/_next/image?url=${post.heroImg}&w=16&q=1`}
                                    src={post.heroImg} alt={post.title} width={200} height={200}/>
                                    <p className={` ${montserrat.className}`}>{post.description}</p>
                                    <p className={` text-lime-400 ${montserrat.className}`}>{post.topic}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}
