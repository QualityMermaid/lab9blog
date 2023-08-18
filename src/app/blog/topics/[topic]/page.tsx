import { merienda, montserrat } from "@/font/fonts"
import { getPostsByTopic, getPosts } from "@/lib/blogposts"
import Image from "next/image"
import Link from "next/link"
import Tim from "@/components/Tim"
import NotFound from "@/app/not-found"

type BlogPageParams = {
  params: {
    topic: string;
  }
}

export function generateStaticParams(){
  const posts = getPosts()
  return posts.map((post)=>({topic: post.topic}))
}

export default function BlogTopics({params}:BlogPageParams) {
  const posts = getPostsByTopic(params.topic)
  console.log(posts)

  if(params.topic === "tim"){
    return(
      <>
      <Tim></Tim>
      <p>he</p>

      </>
    )
  } else if (!posts){
    NotFound()
  }

return (
  <main >
      <nav className="flex gap-6 justify-center mb-3 pb-2 sticky top-36 bg-black">
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/`}>All</Link>
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/equipment`}>Equipment</Link>
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/information`}>Information</Link>
                <Link className="text-lime-400 hover:text-blue-400" href={`/blog/topics/fun`}>Fun</Link>
        </nav>
        <div className="p-3">
          <ul className="p-2 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
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
  </main>
)
}