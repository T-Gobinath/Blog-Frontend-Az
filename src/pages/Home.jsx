import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'
import { GreenSphereFrame } from '../components/ui/GreenSphereFrame'
import { BusinessSlider } from '../components/ui/BusinessSlider'
import { HomeTimeline } from '../components/ui/HomeTimeline'
import { FeatureShowcase } from '../components/ui/FeatureShowcase'
import { SocialPill } from '../components/ui/SocialPill'
import { Footer } from '../components/ui/Footer'

export function Home() {
    return (
        <Layout>
            <Hero />

            {/* Green Sphere Framed Section */}
            <GreenSphereFrame />

            {/* Horizontal Image Slider Section */}
            <BusinessSlider />

            {/* Interactive Timeline Section */}
            <HomeTimeline />

            {/* Feature Showcase Section */}
            <FeatureShowcase />

            {/* Social Pill Navigation */}
            <SocialPill />

            {/* Footer */}
            <Footer />

        </Layout>
    )
}
