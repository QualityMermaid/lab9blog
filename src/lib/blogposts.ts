
import { allPosts as POSTS } from "contentlayer/generated"


export function getPosts(){
    return POSTS
}

export function getPostBySlug(slug: string){
    return POSTS.find((post)=> post.slug === slug)
}

export function getPostsByTopic(topic: string){
    return POSTS.filter((post)=> post.topic === topic)
}