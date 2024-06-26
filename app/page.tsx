import { auth, currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
    const { userId } = await auth()
    let href = userId ? '/discover' : '/new-user'
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
                <div>
                    <h1 className="text-6xl font-thin">Homage</h1>
                </div>
                <Link
                    href={href}
                    className="font-mono text-md flex px-12 py-2 h-full justify-center
                    cursor-pointer text-light-100 rounded-full
                    shadow-[inset_0_0px_24px_0px_rgba(38,13,4,0.4)]
                    duration-700 hover:shadow-lg
                    border border-primary-400/70
                    bg-gradient-to-r from-primary-900 via-amber-900 to-primary-800 
                    bg-size-150 bg-pos0 hover:bg-pos-100
                    hover:border-light-300 hover:text-light-300"
                >
                    Enter
                </Link>
            </div>
        </main>
    )
}
