// "use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { Butterfly_Kids } from "next/font/google";
import Image from "next/image";

// 1 Method To Get Server Data If You are using this approach it will only work as client side server or not work without "use client"

// export default function Home() {

//   return <SessionProvider>
//     <RealHome/>
//   </SessionProvider>
// }

  function RealHome () {
    const session = useSession();

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Hi There <br />
          {session.status === "authenticated" && <button onClick={()=> {
            signOut()
          }} >LogOut</button>}
          {session.status === "unauthenticated" && <button onClick={()=> {
            signIn()
          }} >Log In</button>}
      </div>
    )
}

export default async function Home() {

  const sessions  = await getServerSession()
  return <div>
    {JSON.stringify(sessions)}
  </div>
}

