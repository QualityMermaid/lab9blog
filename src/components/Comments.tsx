import { WEBSITE_URL } from "config"

export default async function Comments({slug}: {slug:string}){
    // this will show all comments and be able for people to add more comments
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {next:{revalidate: 1}})
    const comments = await commentsRes.json()
    return(
        <>
            <form action={`/api/comments/${slug}`} method="POST">
                <label className="text-purple-400" htmlFor="username">Name</label>
                <br/>
                <input className="bg-gray-700 m-1" name="username"/>
                <br/>
                <br/>
                <label className="text-purple-400" htmlFor="comment">Comment</label>
                <br/>
                <textarea className="bg-gray-700 m-1" name="comment" cols={30} rows={10}/>
                <br/>
                <br/>
                <button type="submit" className="border border-white p-1">Send Comment</button>
            </form>
            <h3>Comments</h3>
            <ul>
            {/* @ts-ignore*/}
            {comments.map((comment) => {
                return (
                    <li key={comment.uuid}>
                        {comment.username} says...
                        <br/>
                        {comment.comment}
                    </li>
                )
            })}
            </ul>
        </>
    )
}