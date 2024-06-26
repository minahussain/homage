import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Homage',
    description:
        'A style archive dedicated to honoring Black style icons in entertainment and media',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
                <PrismicPreview repositoryName={repositoryName} />
            </html>
        </ClerkProvider>
    )
}
