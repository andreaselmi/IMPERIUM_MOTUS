import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.scss";

interface Props {
  text: string;
  lat: number;
  lng: number;
}

const Marker = ({ text }: Props) => (
  <div>
    <div className={styles.pointer} />
  </div>
);

const Map = () => {
  const defaultProps = {
    center: {
      lat: 40.326572,
      lng: 18.181265,
    },
    zoom: 20,
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBsxs-wDqSaoXpFgoHza3KFJz_8rx37_M8" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  );
};

export default Map;
