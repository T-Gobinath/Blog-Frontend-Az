import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { TechNeural } from '../components/ui/TechNeural'
import { HomeTimeline } from '../components/ui/HomeTimeline'
import { FeatureShowcase } from '../components/ui/FeatureShowcase'
import { OurBusinesses } from '../components/ui/OurBusinesses'
import { BoardOfDirectors } from '../components/ui/BoardOfDirectors'
import { Footer } from '../components/ui/Footer'

export function Home() {
    return (
        <Layout>
            <Hero />

            {/* GREEN SPHERE Section */}
            <TechNeural />

            {/* Our Businesses Section */}
            <OurBusinesses />

            {/* Board of Directors Section */}
            <BoardOfDirectors />

            {/* Interactive Timeline Section */}
            <HomeTimeline />

            {/* Feature Showcase Section */}
            <FeatureShowcase />

            {/* Footer */}
            <Footer />

        </Layout>
    )
}
