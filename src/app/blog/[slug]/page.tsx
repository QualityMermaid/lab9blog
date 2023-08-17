import { merienda, montserrat } from "@/font/fonts"
import { getPostBySlug, getPosts } from "@/lib/blogposts"
import { PageNotFoundError } from "next/dist/shared/lib/utils"
import Image from "next/image"

type BlogPageParams = {
  params: {
    slug: string;
  }
}

export function generateStaticParams(){
  const posts = getPosts()
  return posts.map((post)=>({slug: post.slug}))
}

export default function BlogTopic({params}:BlogPageParams) {
  const post = getPostBySlug(params.slug)

  if(!post){
    PageNotFoundError
  }

return (
  <main className="p-3">
      <h2 className={`${merienda.className} text-purple-400 text-3xl`}>{post?.title}</h2>
      {/* <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur" blurDataURL={`/_next/image?url=${post?.heroImg}&w=16&q=1`} src={post?.heroImg} alt={post?.title} width={200} height={200}/>       */}
      <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur" blurDataURL={`/_next/image?url=${post?.heroImg}&w=16&q=1`} src={`${post?.heroImg}`} alt={`${post?.title}`} width={200} height={200}/>      

      <h3 className={`${montserrat.className} text-lime-400`}>{post?.description}</h3>
      <p>{post?.content}</p>
  </main>
)
}