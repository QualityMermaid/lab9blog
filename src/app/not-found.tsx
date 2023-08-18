import Link from "next/link";

export default function NotFound() {
    return (
      <>
      <div className="text-center pb-4">
          <h2 className=" text-xl text-purple-400"> <span className="text-3xl text-lime-400">404</span> Page not found</h2>
          <h3 className=" text-xl text-purple-400"> Please try this page instead <Link className="text-lime-400 text-2xl hover:text-pink-500" href="/blog/tim">HERE</Link></h3>
      </div>      
      </>
    );
  }