import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker'
import * as ELG from 'esri-leaflet-geocoder';



const Map = ({ address, city, country }) => {
  const [center, setCenter] = useState([0, 0])

  useEffect(() => {
    ELG.geocode().text(address).run((err, results, response) => {
      if (results?.results?.length > 0) {
        const { lat, lng } = results.results[0].latlng
        setCenter([lat, lng])
      }
    })
  }, [address])

  return (
    <MapContainer
      center={center}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        height: '40vh',
        width: '100%',
        marginTop: '20px',
        zIndex: 0
      }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  )
}

export default Map
