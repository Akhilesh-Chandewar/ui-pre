import { redirect } from "next/navigation";

export default async function Home() {
  const isLogin = false

  if(!isLogin) {
    redirect("/login")
  }

  const timerResponse = await fetch("http://localhost:3000/api/timer" , {
    cache: "force-cache",
    next: { revalidate: 10, tags: ["timer"] } ,
  })
  const timerData = await timerResponse.json()

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-3xl">
      <h1>Home</h1>
      <br/>
      <h2>Caching and Revalidation</h2>
      <p>Time : {timerData.readable}</p>
      <p>RequestId : {timerData.requestId}</p>
      <br/>
    </div>
  );
}
