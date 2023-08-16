import Image from "next/image";


export default function Home() {
  return (
    <main className=" p-3">
      <h3>This is a blog all about Mers! Splash in for some fintastic content!!!</h3>
      <div className="flex justify-center p-3">
      <Image src="/images/merswim.jpeg" alt="swimming mers" width={200} height={400} className="border rounded-full animate-spin-slow p-1"/>
      </div>
    </main>
  )
}
