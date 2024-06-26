import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const POST = async () => {
    const user = await getUserByClerkId()
    const entry = await prisma.entry.create({
        data: {
            authorId: user.id,
            name: 'Lil Kim',
            location: 'Crush On You',
            year: 1997,
            type: 'MV',
            imgAltText:
                'Lil Kim in blue fur coat and pants with white boots and dark blue leather gloves with blue fur trim. With blue hair, necklace, and jeweled earrings to match.',
            imgHref:
                'https://i.pinimg.com/564x/20/86/ea/2086ea91f3a11e20d87c69150d91bf64.jpg',
            sourceHref: 'https://www.imdb.com/title/tt8876858/mediaindex',
            source: 'IMDB',
        },
    })

    // const analysis = await analyze(
    //     `${entry?.name}, ${entry?.location}, ${entry?.type}, ${entry?.imgAltText}, ${entry?.year}`
    // )
    // await prisma.analysis.create({
    //     data: {
    //         entryId: entry.id,
    //         ...analysis,
    //     },
    // })

    revalidatePath('/discover')
    return NextResponse.json({ data: entry })
}
