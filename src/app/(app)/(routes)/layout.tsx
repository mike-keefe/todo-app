import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'tewdew - the ✨ clever ✨ to-do list app',
    description:
        'Take your productivity to the next level effortlessly with the power of AI.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={dm_sans.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
