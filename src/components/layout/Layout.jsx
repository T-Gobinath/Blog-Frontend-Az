import React, { useRef } from 'react'
import { useStore } from '../../stores/useStore'

export function Layout({ children }) {
    const theme = useStore((state) => state.theme)
    const scrollContainerRef = useRef(null)

    return (
        <div className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${theme === 'light'
            ? 'bg-transparent text-gray-900'
            : 'bg-transparent text-tima-white'
            }`}>

            {/* UI Overlay */}
            <main
                id="main-scroll"
                ref={scrollContainerRef}
                className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden"
            >
                {/* Enable pointer events for children content */}
                <div className="pointer-events-auto min-h-full">
                    {children}
                </div>
            </main>
        </div>
    )
}
