import React from 'react'
import { useStore } from '../stores/useStore'
import { Layout } from '../components/layout/Layout'

export function Overview() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <Layout>
            <div className={`min-h-[100dvh] ${light ? 'bg-white' : 'bg-[#0a0f1a]'}`} />
        </Layout>
    )
}
