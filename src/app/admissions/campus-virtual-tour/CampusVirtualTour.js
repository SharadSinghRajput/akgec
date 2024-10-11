'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Maximize } from 'lucide-react'

export default function CampusVirtualTour() {
  const viewerRef = useRef(null)
  const [viewer, setViewer] = useState(null)
  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0)
  const [fov, setFov] = useState(100)

  const panoramas = [
    'https://pannellum.org/images/alma.jpg', 
    'https://pannellum.org/images/bma-1.jpg',
  ]

  useEffect(() => {
    if (typeof window !== 'undefined' && viewerRef.current) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
      script.async = true
      document.body.appendChild(script)

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'
      document.head.appendChild(link)

      script.onload = () => {
        const pannellum = window.pannellum
        if (pannellum && viewerRef.current) {
          const v = pannellum.viewer(viewerRef.current, {
            type: 'equirectangular',
            panorama: panoramas[currentPanoramaIndex],
            autoLoad: true,
            hfov: fov,
          })
          setViewer(v)
        }
      }

      return () => {
        document.body.removeChild(script)
        document.head.removeChild(link)
      }
    }
  }, [currentPanoramaIndex, fov])

  const handleZoomIn = () => {
    const newFov = Math.max(30, fov - 10);
    setFov(newFov);
    viewer?.setHfov(newFov);
  }

  const handleZoomOut = () => {
    const newFov = Math.min(120, fov + 10);
    setFov(newFov);
    viewer?.setHfov(newFov);
  }

  const handleReset = () => {
    if (viewer) {
      const initialFov = 100;
      setFov(initialFov);
      viewer.setHfov(initialFov);
      viewer.setYaw(0); // Reset yaw
      viewer.setPitch(0); // Reset pitch
    }
  }

  const handleFullscreen = () => viewer?.toggleFullscreen()

  const handleNextPanorama = () => {
    setCurrentPanoramaIndex((currentPanoramaIndex + 1) % panoramas.length)
  }

  const handlePreviousPanorama = () => {
    setCurrentPanoramaIndex((currentPanoramaIndex - 1 + panoramas.length) % panoramas.length)
  }

  return (
    <div className="w-full mx-auto py-4">
      <div ref={viewerRef} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"></div>
      <div className="mt-4 flex justify-center space-x-2">
        <button onClick={handlePreviousPanorama} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={handleNextPanorama} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <ChevronRight className="h-6 w-6" />
        </button>
        <button onClick={handleZoomIn} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <ZoomIn className="h-6 w-6" />
        </button>
        <button onClick={handleZoomOut} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <ZoomOut className="h-6 w-6" />
        </button>
        <button onClick={handleReset} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <RotateCcw className="h-6 w-6" /> {/* Reset button with rotation icon */}
        </button>
        <button onClick={handleFullscreen} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <Maximize className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
