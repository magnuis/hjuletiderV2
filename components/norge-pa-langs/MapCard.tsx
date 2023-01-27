'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { stravaData } from '../../type'
import { useWindowSize } from '../../hooks/UseWindowSize'

interface MapCardProps {
  strava: stravaData
}

function MapCard({ strava }: MapCardProps) {
  const centerLat = (strava.start_latlng[0] + strava.end_latlng[0]) / 2
  const centerLng = (strava.start_latlng[1] + strava.end_latlng[1]) / 2

  const MapWithNoSSR = dynamic(() => import('./leaflet/Map'), {
    ssr: false,
  })

  return (
    <div className="px-10 relative w-full" style={{ height: '50vh' }}>
      <div id="map" className="relative" style={{ height: '80%', width: '100%' }}>
        <MapWithNoSSR zoom={8} center={[centerLat, centerLng]} points={strava.points} />
      </div>
    </div>
  )
}

interface LargeMapCardProps {
  points: [number, number][]
}

function LargeMapCard({ points }: LargeMapCardProps) {
  const windowSize = useWindowSize()

  const centerLat = (points[0][0] + points[points.length - 1][0]) / 2
  const centerLon = (points[0][1] + points[points.length - 1][1]) / 2

  const MapWithNoSSR = dynamic(() => import('./leaflet/Map'), {
    ssr: false,
  })
  return (
    <div className="px-10 relative w-full" style={{ height: '85vh' }}>
      <div id="map" className="relative" style={{ height: '100%', width: '100%' }}>
        <MapWithNoSSR
          zoom={windowSize.width < 700 ? 4 : 5}
          center={[centerLat, centerLon]}
          points={points}
        />
      </div>
    </div>
  )
}

export { MapCard, LargeMapCard }
