import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { TechNeural } from '../components/ui/TechNeural'
import { BusinessSlider } from '../components/ui/BusinessSlider'
import { HomeTimeline } from '../components/ui/HomeTimeline'
import { FeatureShowcase } from '../components/ui/FeatureShowcase'


import { Footer } from '../components/ui/Footer'

export function Home() {
    return (
        <Layout>
            <Hero />

            {/* GREEN SPHERE Section */}
            <TechNeural />

            {/* Horizontal Image Slider Section */}
            <BusinessSlider />

            {/* Interactive Timeline Section */}
            <HomeTimeline />

            {/* Feature Showcase Section */}
            <FeatureShowcase />

            {/* Footer */}
            <Footer />

        </Layout>
    )
}
