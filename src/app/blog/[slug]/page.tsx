import { merienda, montserrat } from "@/font/fonts"
import { getPostBySlug, getPosts } from "@/lib/blogposts"
import Image from "next/image"
import Tim from "@/components/Tim"
import NotFound from "@/app/not-found"
import {kv} from "@vercel/kv"


type BlogPageParams = {
  params: {
    slug: string;
  }
}

export function generateStaticParams(){
  const posts = getPosts()
  return posts.map((post)=>({slug: post.slug}))
}

export default async function BlogTopic({params}:BlogPageParams) {
  const post = getPostBySlug(params.slug)


  if(params.slug === "tim"){
    return(
      <>
      <Tim></Tim>
      </>
    )
  } else if (!post){
    return(
      NotFound()
    )  }

    const blogPostViews = await kv.incr(post.slug + ":postView")
    console.log(blogPostViews)

return (
  <main className="p-3">
      <h2 className={`${merienda.className} text-purple-400 text-3xl`}>{post?.title}</h2>
      <h3>This post has been read {blogPostViews} times.</h3>
      <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur" blurDataURL={`/_next/image?url=${post?.heroImg}&w=16&q=1`} src={`${post?.heroImg}`} alt={`${post?.title}`} width={200} height={200}/>      
      <h3 className={`${montserrat.className} text-lime-400`}>{post?.description}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} className="prose dark:prose-invert p-1"></div>  
      </main>
)
}