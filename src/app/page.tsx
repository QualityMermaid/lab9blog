import { montserrat } from "@/font/fonts";
import Image from "next/image";


export default function Home() {
  return (
    <main className=" p-3">
      <h3 className={`${montserrat.className}`}>This is a blog all about Mers! <span className="text-blue-500">Splash</span> in for some <span className="text-purple-500">FIN</span>tastic content!!!</h3>
      <span className=" relative flex justify-center p-3 m-5">
      <Image src="/images/merssim.png" alt="swimming mers" width={200} height={400} className=" rounded-full p-1 absolute"/>
      <Image src="/images/merssim.png" alt="swimming mers" width={200} height={400} className=" rounded-full animate-ping-slow p-1 relative"/>
      </span>
    </main>
  )
}
