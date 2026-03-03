import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { HomeTimeline } from '../components/ui/HomeTimeline'

export function Home() {
    return (
        <Layout>
            <Hero />



            {/* Interactive Timeline Section */}
            <HomeTimeline />

        </Layout>
    )
}
