const POSTS = [
    {title: "Mers", slug:"mers", topic: "information", heroImg: "/images/mers.png", description: "What is a mer?", content: "stuff",},
    {title: "Tails", slug:"tails", topic: "equipment", heroImg: "/images/tail.png", description: "A list of mer tails!", content: "",},
    {title: "Monofins", slug:"monofins", topic: "equipment", heroImg: "/images/monofin.png", description: "A list of monofins used in tails.", content: "",},
    {title: "Safty", slug:"safty", topic: "information", heroImg: "/images/safty.png", description: "Safty tips for being a mer.", content: "",},
    {title: "Media", slug:"media", topic: "information", heroImg: "/images/OpheraMermaid.png", description: "Where can you find mers in the media.", content: "",},
    {title: "Fun", slug:"fun", topic: "fun", heroImg: "/images/bubbles.png", description: "Fun!!!", content: "",},
]

export function getPosts(){
    return POSTS
}

export function getPostBySlug(slug: string){
    return POSTS.find((post)=> post.slug === slug)
}

export function getPostsByTopic(topic: string){
    return POSTS.filter((post)=> post.topic === topic)
}