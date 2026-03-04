import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { TechNeural } from '../components/ui/TechNeural'
import { HomeTimeline } from '../components/ui/HomeTimeline'

export function Home() {
    return (
        <Layout>
            <Hero />

            {/* GREEN SPHERE Section */}
            <TechNeural />

            {/* Interactive Timeline Section */}
            <HomeTimeline />

        </Layout>
    )
}
