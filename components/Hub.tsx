import { CheckIcon } from "@heroicons/react/24/outline"
import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth"


function Hub() {
    const { logout } = useAuth()

    return (
        <div>
            <Head>
                <title>Home - ContentBay</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="border-b border-white/10 bg-[#141414]">
                <Link href="/">
                    <img
                        src="/static/img/ContentBay.svg"
                        alt="Logo"
                        width={150}
                        height={90}
                        className="cursor-pointer object-contain"
                    />
                </Link>
                <button className="text-lg font-medium hover:underline"
                    onClick={logout}>
                    Sign Out
                </button>
            </header>

            <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
                <div className="mt-4 flex flex-col space-y-4">
                    <div className="flex w-full items-center justify-center self-end md:w-3/5">
                        <div className="HubBox">MyFlix</div>
                        <div className="HubBox">Musify</div>
                        <div className="HubBox">ComicBay</div>
                        <div className="HubBox">NovelsBay</div>
                    </div>
                    <div
                        className="flex justify-center">Pick your poison.
                    </div>
                </div>

                <h1 className="mb-3 text-3xl font-medium">
                    Choose the plan that's right for you
                </h1>
                <div>
                    <ul>
                        <li className="flex items-center gap-x-2 text-lg">
                            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                            Ad-free.
                        </li>
                        <li className="flex items-center gap-x-2 text-lg">
                            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                            just for you.
                        </li>
                        <li className="flex items-center gap-x-2 text-lg">
                            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                            your plan anytime.
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Hub