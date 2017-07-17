import React from 'react';
import {withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component{
    render(){
        const markers = this.props.markers || [];
        return(
          <div>
              <GoogleMap
                defaultZoom={13}
                defaultCenter={{lat: -23.5565751, lng:-46.6617431}}
              >
                  {markers.map((marker, index) => (
                      <Marker{...marker} />
                    )
                  )}

              </GoogleMap>
          </div>
        )
    }
}

export default withGoogleMap(Map);