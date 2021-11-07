import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFwaGFnaGFubm91Y2hpIiwiYSI6ImNrdm1kbHZ1ZjllamMzMHM3NzM3czMweGQifQ.FL52UMDqPsTARFYEk4SA9w";

const map = (props) => {
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [9.537499, 33.886917],
      zoom: 5.2,
    });

    if(props.pickupCoordinates){
      addToMap(map,props.pickupCoordinates)
    }
    if(props.dropoffCoordinates){
      addToMap(map,props.dropoffCoordinates)
    }
    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding : 60
      })
    }
  },[props.pickupCoordinates , props.dropoffCoordinates]);

  const addToMap = (map,coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map">
          
  </Wrapper>;
};

export default map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
