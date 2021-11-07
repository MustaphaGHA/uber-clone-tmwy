import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFwaGFnaGFubm91Y2hpIiwiYSI6ImNrdm1kbHZ1ZjllamMzMHM3NzM3czMweGQifQ.FL52UMDqPsTARFYEk4SA9w";

const Map = (props) => {
  
  useEffect(() => {
    const Map1 = new mapboxgl.Map({
      container: "Map1",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [9.537499, 33.886917],
      zoom: 5.2,
    });

    if(props.pickupCoordinates){
      addToMap(Map1,props.pickupCoordinates)
    }
    if(props.dropoffCoordinates){
      addToMap(Map1,props.dropoffCoordinates)
    }
    if(props.pickupCoordinates && props.dropoffCoordinates){
      Map1.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding : 60
      })
    }
  },[props.pickupCoordinates , props.dropoffCoordinates]);

  const addToMap = (Map1,coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(Map1);
  };

  return <Wrapper id="Map1">
          
  </Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
