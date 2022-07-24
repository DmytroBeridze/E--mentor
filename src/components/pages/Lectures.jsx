import React from "react";
// Google maps__________________
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// End Google maps__________________
const Lectures = () => {
  // Google maps__________________

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: { API_KEY },
    // googleMapsApiKey: "AIzaSyBbt0F3RGczTmbyVMMyFIVd8wxxFRN0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  // End Google maps__________________
  return (
    <>
      <h1>Lectures</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis velit ab ut voluptates ullam voluptatem optio vitae totam autem,
        deleniti dolorum. Dolor, accusantium veniam omnis nulla nemo eum magnam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis velit ab ut voluptates ullam voluptatem optio vitae totam autem,
        deleniti dolorum. Dolor, accusantium veniam omnis nulla nemo eum magnam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis velit ab ut voluptates ullam voluptatem optio vitae totam autem,
        deleniti dolorum. Dolor, accusantium veniam omnis nulla nemo eum magnam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis velit ab ut voluptates ullam voluptatem optio vitae totam autem,
        deleniti dolorum. Dolor, accusantium veniam omnis nulla nemo eum magnam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis velit ab ut voluptates ullam voluptatem optio vitae totam autem,
        deleniti dolorum. Dolor, accusantium veniam omnis nulla nemo eum magnam!
      </p>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </>
  );
};
export default Lectures;
