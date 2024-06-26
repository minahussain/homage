import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'

const EntryTile = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
        <div className="overflow-hidden relative aspect-[250/250] bg-primary-400 shadow">
            {/* <Image
                src={entry.imgHref}
                alt={'aaliyah in blue jacket'}
                className="object-cover object-top"
                layout="fill"
            ></Image> */}
            <PrismicNextImage
                className={'object-cover object-top'}
                field={entry.image}
            />
        </div>
    )
}

export default EntryTile
