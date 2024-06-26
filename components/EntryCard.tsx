import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

const EntryCard = ({ entry }) => {
    const date = new Date(entry.data.createdAt).toDateString()
    const { name, location, type, source, sourceHref, year } = entry.data
    console.log(entry.data)
    const sourceLink = (
        <PrismicLink field={sourceHref} className="underline">
            {source}
        </PrismicLink>
    )

    return (
        <div
            className="p-2 flex flex-col gap-2
         overflow-hidden"
        >
            <div className="w-[500px] h-full relative aspect-[500/500]">
                {/* <Image
                    src={entry.imgHref}
                    alt={'aaliyah in blue jacket'}
                    className="object-cover object-top rounded-lg shadow-orange-900"
                    layout="fill"
                /> */}
                <PrismicNextImage
                    className={
                        'object-top object-cover aspect-[500/500] rounded-lg shadow-orange-900'
                    }
                    field={entry.data.image}
                />
            </div>
            {/* <div className="flex flex-col gap-2 w-[550px] h-full">
                <h1 className="text-4xl font-thin">
                    {name} • {location}
                </h1>
                <h2 className="text-lg font-mono">
                    {type} / {year}
                    {source && <> / {sourceLink}</>}
                </h2>
            </div> */}
        </div>
    )
}

export default EntryCard
