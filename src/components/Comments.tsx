import { WEBSITE_URL } from "config"
import CommentForm from "./CommentForm"


export default async function Comments({slug}: {slug:string}){
    // this will show all comments and be able for people to add more comments
    let comments = []
    try{
        const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {next:{revalidate: 4}})
        comments = await commentsRes.json()
    } catch (error){
        console.log(error)
    }

    return(
        <div>
            <h3 className="text-lime-400 text-2xl">Comment</h3>
            <CommentForm slug={slug}/>
            <h3 className="text-lime-400 text-2xl">Comments</h3>
            <ul>
            {/* @ts-ignore*/}
            {comments.map((comment) => {
                return (
                    <li className="border border-blue-400 p-1 m-2" key={comment.uuid}>
                        <h3 className="text-xl text-fuchsia-400 p-1">{comment.username}</h3>
                        <p className="p-2">{comment.comment}</p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}