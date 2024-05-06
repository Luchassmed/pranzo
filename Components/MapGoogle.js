"use client";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "50%",
};

const MapGoogle = () => {
  return (
    //The <Map></Map> need the following props
    //initialCenter={} will be the center on the Map
    <Map
      google={window.google}
      zoom={17}
      style={mapStyles}
      initialCenter={{
        lat: 55.68748900618472,
        lng: 12.589557009063478,
      }}
    >
      //The Maker Component have a prop positio={}
      //in which you decide the position of it
      <Marker
        position={{
          lat: 55.68748900618472,
          lng: 12.589557009063478,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCOEPhDlDYn9JEmJofaFP53KPKEKzaOHxg",
})(MapGoogle);
