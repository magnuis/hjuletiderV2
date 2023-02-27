import { MapContainer, TileLayer, useMap, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

interface MapProps {
  center: [number, number]
  points: [number, number][]
  zoom: number
}

const Map = ({ center, points, zoom }: MapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        className="z-10"
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFnbnVpcyIsImEiOiJjbGQ1d2djaDUwZjduM29xbTh1a24zZ2N0In0.Ug5DniffGMFleALZQ7vcrg`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {/* <SetViewOnClick coords={center} /> */}
      <Polyline className="z-10" positions={points} />;
    </MapContainer>
  )
}

export default Map
