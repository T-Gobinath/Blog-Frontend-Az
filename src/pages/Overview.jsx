import React from 'react'
import { useStore } from '../stores/useStore'

import { Layout } from '../components/layout/Layout'

export function Overview() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <Layout>
            <div className={`relative w-full min-h-[100dvh] transition-colors duration-500 ${light ? 'bg-transparent text-gray-900' : 'bg-transparent text-tima-white'}`}>

                {/* Page Content */}
                <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 max-w-[1920px] mx-auto">
                    {/* Content goes here */}
                </div>

            </div>
        </Layout>
    )
}
