import React from 'react'
import Link from 'next/link'

const AppHomepageLink: React.FC = () => {
    return <div className="text-red">
      <Link href="/">App Homepage</Link>
    </div>
}

export default AppHomepageLink
