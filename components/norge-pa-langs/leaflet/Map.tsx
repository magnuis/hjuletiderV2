import { MapContainer, TileLayer, useMap, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { getHistoricalWeather } from '../../../lib/weather'

interface MapProps {
  center: [number, number]
  points: [number, number][]
  zoom: number
}

const Map = ({ center, points, zoom }: MapProps) => {
  //   function SetViewOnClick({ coords }) {
  //     const map = useMap()
  //     if (coords != null) {
  //       map.setView(coords[0][0], map.getZoom())
  //     } else {
  //       map.setView([[59, 6]], map.getZoom())
  //     }
  //     return null
  //   }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFnbnVpcyIsImEiOiJjbGQ1d2djaDUwZjduM29xbTh1a24zZ2N0In0.Ug5DniffGMFleALZQ7vcrg`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {/* <SetViewOnClick coords={center} /> */}
      <Polyline positions={points} />;
    </MapContainer>
  )
}

export default Map
