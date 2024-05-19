'use client'
import Link from 'next/link'
import React, { FC } from 'react'

interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
    return (
        <section className="prose prose-slate space-y-3 pb-8">
            <h1>tewdew</h1>
            <h2>the ✨ clever ✨ to-do list app</h2>
        </section>
    )
}

export default HeaderNav
