import EntryCard from '@/components/EntryCard'
import { analyze } from '@/utils/ai'
import { prisma } from '@/utils/db'
import { createClient } from '@/prismicio'
import { PrismicLink } from '@prismicio/react'

const getEntry = async (entryId) => {
    const entry = await prisma.entry.findUnique({
        where: {
            id: entryId,
        },
        include: {
            analysis: true,
        },
    })

    return entry
}

const EntryPage = async ({ params }) => {
    // const entry = await getEntry(params.id)
    const client = createClient()

    const entry = await client.getByUID('entry', params.id)
    const data = entry.data
    console.log(data)
    const { name, location, type, year, source, sourceHref } = data

    const sourceLink = (
        <PrismicLink field={sourceHref} className="underline">
            {source}
        </PrismicLink>
    )

    let analysis = data?.analysis
    if (!analysis) {
        analysis = await analyze(
            `${data?.name}, ${data?.location}, ${data?.type}, ${data?.imagealttext}, ${data?.year}`,
        )
        // await prisma.analysis.create({
        //     data: {
        //         entryId: entry?.id,
        //         ...analysis,
        //     },
        // })
    }
    const { mood, subject, color } = analysis
    const analysisData = [
        { name: 'Style', value: subject },
        { name: 'Mood', value: mood },
    ]
    return (
        <div className="h-full w-full grid grid-cols-[500px_auto] gap-4 px-4">
            <div>
                <EntryCard entry={entry} />
            </div>
            <div className="p-2 flex flex-col gap-8 justify-center">
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-3xl font-thin">
                        {name} • {location}
                    </h1>
                    <h2 className="text-md font-mono">
                        {type} / {year}
                        {source && <> / {sourceLink}</>}
                    </h2>
                </div>
                <div className="p-3 border border-primary-400/40 rounded-md shadow-lg bg-primary-400/10">
                    <h2 className="text-2xl font-extralight mb-4">Analysis</h2>
                    <div>
                        <ul>
                            {analysisData.map((item) => (
                                <li
                                    key={item.name}
                                    className="px-2 py-4 flex flex-items items-center justify-between border-b border-primary-400/30"
                                >
                                    <span className="font-extrabold">
                                        {item.name}
                                    </span>
                                    <span className="font-extralight">
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                            <li
                                key={'color'}
                                className="px-2 py-4 flex flex-items items-center justify-between"
                            >
                                <span className="font-extrabold">Color</span>
                                <span className="font-extralight text-xs flex flex-col gap-1 justify-center">
                                    <span
                                        className="px-2 py-2 rounded-md"
                                        style={{ backgroundColor: color }}
                                    >
                                        {' '}
                                    </span>
                                    {color}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage
