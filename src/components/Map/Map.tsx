import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.scss";

interface Props {
  text: string;
  lat: number;
  lng: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker = ({ text, lng, lat }: Props) => (
  <a
    href={
      "https://www.google.it/maps/place/Via+dei+Bersaglieri,+24,+73020+Castromediano+LE/@40.3265808,18.1790638,17z/data=!3m1!4b1!4m5!3m4!1s0x13442f72df4eea97:0xdc63e72b808839d5!8m2!3d40.3265808!4d18.1812525"
    }
    target={"_blank"}
    rel="noreferrer"
  >
    <div className={styles.pointer} />
  </a>
);

const Map = () => {
  const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const defaultProps = {
    center: {
      lat: 40.326572,
      lng: 18.181265,
    },
    zoom: 15,
  };
  return googleApiKey ? (
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleApiKey }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      options={{
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#181818",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1b1b1b",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8a8a8a",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#373737",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#3c3c3c",
              },
            ],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#4e4e4e",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3d3d3d",
              },
            ],
          },
        ],
      }}
    >
      <Marker
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  ) : null;
};

export default Map;
