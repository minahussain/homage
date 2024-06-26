'use client'
import { newEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
        const { data } = await newEntry()
        router.push(`/discover/${data.id}`)
    }

    return (
        <div
            className="cursor-pointer overflow-hidden text-light-100 rounded-full text-center
            shadow-[inset_0_0px_24px_0px_rgba(38,13,4,0.4)]
            duration-700 hover:shadow-lg
            border border-primary-400/70
            bg-gradient-to-r from-primary-900 via-amber-900 to-primary-800 
            bg-size-150 bg-pos0 hover:bg-pos-100
            hover:border-light-300 hover:text-light-300"
            onClick={handleOnClick}
        >
            <div className="px-10 py-1">
                <span className="font-mono">New Entry</span>
            </div>
        </div>
    )
}

export default NewEntryCard
