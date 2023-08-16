import Link from "next/link"

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
    {title: "Mers", topic: "information", heroImg: "", description: "A mer/mermaid/merman/merchild/merperson (etc) is...",},
    {title: "Tails", topic: "equipement", heroImg: "", description: "A list of mer tails from beginner to advance",},
    {title: "Monofins", topic: "equipement", heroImg: "", description: "A list of monofins used in tails",},
    {title: "Safty", topic: "safty", heroImg: "", description: "What are some good safty tips for mering.",},
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
        <main>
            <h2>Blog</h2>
            <Link href="/blog">Default</Link>
            <Link href="/blog?sortBy=topicasc">Ascending Topics</Link>
            <Link href="/blog?sortBy=topicdec">Descending Topics</Link>
            <ul>
                {blogposts.map((post) => {
                    return(
                        <li key={post.title}>
                            <Link href={`/blog/${post.title}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
