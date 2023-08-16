type TopicPageParam = {
  slug: string,
}
export default function BlogTopic({params}: {params: TopicPageParam}) {
  console.log(params)
return (
  <div>
      <h2>{params.slug}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem labore fugit adipisci eos maiores a cum nemo ex! Adipisci voluptatem sit aliquam beatae aspernatur inventore quod in tempore accusamus.</p>
  </div>
)
}