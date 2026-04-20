import React, { Suspense, lazy } from 'react'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/ui/Hero'

// Lazy load below-the-fold components
const GreenSphereFrame = lazy(() => import('../components/ui/GreenSphereFrame').then(m => ({ default: m.GreenSphereFrame })))
const BusinessSlider = lazy(() => import('../components/ui/BusinessSlider').then(m => ({ default: m.BusinessSlider })))
const HomeTimeline = lazy(() => import('../components/ui/HomeTimeline').then(m => ({ default: m.HomeTimeline })))
const FeatureShowcase = lazy(() => import('../components/ui/FeatureShowcase').then(m => ({ default: m.FeatureShowcase })))
const SocialPill = lazy(() => import('../components/ui/SocialPill').then(m => ({ default: m.SocialPill })))
const Footer = lazy(() => import('../components/ui/Footer').then(m => ({ default: m.Footer })))

// Fallback loader
const ComponentLoader = () => null

export function Home() {
    return (
        <Layout>
            <Hero />

            {/* Green Sphere Framed Section */}
            <Suspense fallback={<ComponentLoader />}>
                <GreenSphereFrame />
            </Suspense>

            {/* Horizontal Image Slider Section */}
            <Suspense fallback={<ComponentLoader />}>
                <BusinessSlider />
            </Suspense>

            {/* Interactive Timeline Section */}
            <Suspense fallback={<ComponentLoader />}>
                <HomeTimeline />
            </Suspense>

            {/* Feature Showcase Section */}
            <Suspense fallback={<ComponentLoader />}>
                <FeatureShowcase />
            </Suspense>

            {/* Social Pill Navigation */}
            <Suspense fallback={<ComponentLoader />}>
                <SocialPill />
            </Suspense>

            {/* Footer */}
            <Suspense fallback={<ComponentLoader />}>
                <Footer />
            </Suspense>

        </Layout>
    )
}
