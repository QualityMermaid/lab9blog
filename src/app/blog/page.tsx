import Link from "next/link"
import Image from "next/image";

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
    {title: "Mers", topic: "information", heroImg: "/images/mers.jpeg", description: "What is a mer/mermaid/merman/merchild/merperson (etc)?",},
    {title: "Tails", topic: "equipement", heroImg: "/images/tail.jpeg", description: "A list of mer tails from fabric to silicone and more",},
    {title: "Monofins", topic: "equipement", heroImg: "/images/monofin.jpeg", description: "A list of monofins used in tails",},
    {title: "Safty", topic: "safty", heroImg: "/images/safty.png", description: "What are some good safty tips for being a mer.",},
    {title: "Media", topic: "information", heroImg: "/images/OpheraMermaid.png", description: "Where can you find mers in the media",},
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
            <h3>Topic Sorting</h3>
            <div className="flex gap-3">
            <Link href="/blog">Default</Link>
            <Link href="/blog?sortBy=topicasc">Ascending Topics</Link>
            <Link href="/blog?sortBy=topicdec">Descending Topics</Link>
            </div>
            <ul className="p-2">
                {blogposts.map((post) => {
                    return(
                        <li key={post.title}>
                            <Link href={`/blog/${post.title}`}>{post.title}
                            <Image src={post.heroImg} alt={post.title} width={200} height={400}/>
                            <p>{post.description}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
