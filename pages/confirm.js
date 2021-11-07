import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/map";
import { useRouter } from "next/router";
import RideSelector from '../components/rideselector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibXVzdGFwaGFnaGFubm91Y2hpIiwiYSI6ImNrdm1kbHZ1ZjllamMzMHM3NzM3czMweGQifQ.FL52UMDqPsTARFYEk4SA9w",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibXVzdGFwaGFnaGFubm91Y2hpIiwiYSI6ImNrdm1kbHZ1ZjllamMzMHM3NzM3czMweGQifQ.FL52UMDqPsTARFYEk4SA9w",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, []);

  return (
    <Wrapper>
      <Link href="/search">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector/>
        <ConfirmButtonContainer>
          <ConfirmButton>

            Confirm UberX
          
          </ConfirmButton>
            
        </ConfirmButtonContainer>
      
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const BackButton = tw.img`
bg-red-200 rounded-full h-12 w-12 p-2  mr-2  
`

const ConfirmButton = tw.div`
bg-black text-white m-4 text-center py-4
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;
const Wrapper = tw.div`
flex h-screen flex-col 
`;
