import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth";

function Account() {
    const { logout } = useAuth()
    
  return (
    <div>
        <Head>
            <title>Account Settings - ContentBay</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="/static/img/ContentBay.svg"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="/static/img/profilepic.png"
            alt=""
            className="cursor-pointer rounded"
            onClick={logout}
          />
        </Link>
      </header>
      <main className="pt-24">
        <div>
            <h1 className="text-3xl md:text-4xl">Account</h1>
            <div className="-ml-0.5 flex items-center gap-x-1.5">
                <img src="/static/img/membersince.svg" alt="" className="h-7 w-7"/>
                <p className="text-xs font-semibold text-[#555]">Hello</p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Account