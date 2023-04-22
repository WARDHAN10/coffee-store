import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const findUs: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="find-us-container">
      <div className="find-us-header">Find Us</div>
      <div id="map" className="map-container"></div>
      <div className="map-link">
        <Map />
      </div>
    </div>
  );
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
export default findUs;
