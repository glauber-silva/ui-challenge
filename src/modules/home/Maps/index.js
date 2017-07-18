import React from 'react';
import {withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";

class Map extends React.Component{
    render(){
        

        const markers = this.props.markers.map((mrk, i) => {
          if(mrk.position.lat){
            return <Marker key={i} {...mrk}><InfoWindow><div>{mrk.content}</div></InfoWindow></Marker>;
          }
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