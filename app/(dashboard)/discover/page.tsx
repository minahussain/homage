import EntryTile from '@/components/EntryTile'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { createClient } from '@/prismicio'
import Link from 'next/link'

const getEntries = async () => {
    const user = await getUserByClerkId()
    const entries = await prisma.entry.findMany({
        where: {
            // authorId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return entries
}

const DiscoverPage = async () => {
    const client = createClient()

    const entries = await client.getAllByType('entry')

    // const entries = await getEntries()
    return (
        <div>
            <div className="grid grid-cols-3 gap-0.5">
                {entries.map((entry) => (
                    <Link key={entry.id} href={entry.url || ''}>
                        <EntryTile entry={entry.data} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DiscoverPage
