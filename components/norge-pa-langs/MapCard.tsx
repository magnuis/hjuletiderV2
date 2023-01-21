'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { stravaData } from '../../type'

interface MapCardProps {
  strava: stravaData
}

export default function MapCard({ strava }: MapCardProps) {
  const MapWithNoSSR = dynamic(() => import('./leaflet/Map'), {
    ssr: false,
  })

  return (
    <div className="px-10 relative w-full" style={{ height: '40vh' }}>
      <div id="map" className="relative" style={{ height: '80%', width: '100%' }}>
        <MapWithNoSSR />
      </div>
    </div>
  )
}
