import React from 'react';
import {withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";

class Map extends React.Component{
    render(){
        const markers = this.props.markers.map((mrk, i) => {
            const marker = {
              position: {
                lat: mrk.location.lat,
                lng: mrk.location.lng
              }
            };
            return <Marker key={i} {...marker}><InfoWindow><div>{mrk.content}</div></InfoWindow></Marker>;
        });

        const center = this.props.center;
        return(
              <GoogleMap
                defaultZoom={15}
                defaultCenter={center}
              >
                
              {markers}

              </GoogleMap>
        )
    }
}

export default withGoogleMap(Map);