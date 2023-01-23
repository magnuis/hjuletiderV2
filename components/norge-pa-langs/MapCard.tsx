'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { stravaData } from '../../type'

interface MapCardProps {
  strava: stravaData
}

export default function MapCard({ strava }: MapCardProps) {
  const centerLat = (strava.start_latlng[0] + strava.end_latlng[0]) / 2
  const centerLng = (strava.start_latlng[1] + strava.end_latlng[1]) / 2

  const MapWithNoSSR = dynamic(() => import('./leaflet/Map'), {
    ssr: false,
  })

  return (
    <div className="px-10 relative w-full" style={{ height: '50vh' }}>
      <div id="map" className="relative" style={{ height: '80%', width: '100%' }}>
        <MapWithNoSSR center={[centerLat, centerLng]} points={strava.points} />
      </div>
    </div>
  )
}
