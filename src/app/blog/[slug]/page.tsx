type TopicPageParam = {
    post: string,
}
export default function BlogTopic({params}: {params: TopicPageParam}) {
    console.log(params.post)
  return (
    <div>
        <h2>{params.post}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem labore fugit adipisci eos maiores a cum nemo ex! Adipisci voluptatem sit aliquam beatae aspernatur inventore quod in tempore accusamus.</p>
    </div>
  )
}
