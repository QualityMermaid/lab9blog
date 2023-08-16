type TopicPageParam = {
  slug: string,
}
import { merienda, montserrat } from "@/font/fonts"

export default function BlogTopic({params}: {params: TopicPageParam}) {
  console.log(params)
return (
  <main className="p-7">
      <h2 className={`${merienda.className} text-purple-400 text-3xl`}>{params.slug}</h2>
      <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem labore fugit adipisci eos maiores a cum nemo ex! Adipisci voluptatem sit aliquam beatae aspernatur inventore quod in tempore accusamus.</p>
  </main>
)
}