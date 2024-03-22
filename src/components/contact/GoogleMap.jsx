import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const GoogleMap = ({location, zoomLevel}) => {
     
  return (
    <div style={{height: "60vh", width: "100%"}}>
        <GoogleMapReact
        bootstrapURLKeys={{key: ''}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        >
        <LocationPin
        lat={Location.lat}
        lng={Location.lng}
        text={Location.address}
        />
        </GoogleMapReact>
    </div>
  )
}

export default GoogleMap