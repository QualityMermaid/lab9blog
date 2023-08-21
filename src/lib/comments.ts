// import short-uuid
import { kv } from "@vercel/kv"
import short from "short-uuid"

export async function saveComment(username:string, comment:string, slug:string) {
  // generate a unique ID for this comment
  const uuid = short.generate()
  // stringify our comment object
  const commentObject = JSON.stringify({
    username,
    comment,
    uuid
  })
  //add the comment to the kv store
  kv.set(`comment:${uuid}`, commentObject)
// add this comment to the list of comments for the post - comments:post-one
  const commentList = await kv.lpush(`comments:${slug}`, uuid)
  // list will look like: comments:post-one 1234 123 123 1234

  return uuid
}

export async function getComments(slug: string) {
  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1)
  const commentKeys = commentIds.map(id=> `comment:${id}`) //[comment:1234, comment:2345, comment:54234]

  if(commentKeys.length < 1){
    return []
  }

  const comments = await kv.mget(...commentKeys)

  return comments
}
