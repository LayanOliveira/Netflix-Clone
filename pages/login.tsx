import Head from "next/head"
import Image from "next/image"

function Login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent">
      <Head>
        <title>ContentBay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      src="/login/movieposterbg.jpg"
      alt="Logo"
      fill
      className="-z-10 hidden opacity-60 sm:inline"
      object-fit="cover"
      />
    </div>
  )
}

export default Login