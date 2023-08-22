"use client"

import { WEBSITE_URL } from "config"
import { useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

export default function CommentForm({slug}: {slug: string}){
  const router = useRouter()
  const [isPending, startTransistion] = useTransition()
  
  // add this to fix hydration issue with lastpass
  // or disable it
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  // setIsClient(true);
  // }, []);
  // if (!isClient) return null;
  

  async function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault() 
   // @ts-ignore
    const username = event.target.username.value || "annonymous"
   // @ts-ignore
    const comment = event.target.comment.value

    // form validation
    
    const formData = new FormData()
    formData.append("username", username)
    formData.append("comment", comment)

    const options = {body: formData, method: "POST"}
    const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options)
    console.log(res)

   // @ts-ignore
    event.target.username.value = ""
   // @ts-ignore
    event.target.comment.value = ""

    startTransistion(() => {
      router.refresh();
    });
  }
  return(
    <form onSubmit={handleFormSubmit} className="flex flex-col p-1 m-2">
      <label className="text-purple-400" htmlFor="username">Name</label>
      <input className="bg-gray-700 m-1 p-1" name="username" placeholder="leave blank if you want to post anonymously"/>
      <label className="text-purple-400" htmlFor="comment">Comment</label>
      <textarea className="bg-gray-700 m-1 p-1" name="comment" placeholder="please type your comment here" cols={30} rows={10} required/>
      <button type="submit" disabled={isPending} className="border border-white p-1 mt-4 hover:border-lime-400 hover:text-lime-400">
        {isPending ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  )
}