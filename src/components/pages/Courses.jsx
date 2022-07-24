import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import styles from "./courses.module.scss";
// Google MAps_________________________
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const containerStyle = {
  width: "500px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// End Google Maps______________________________
const Courses = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: { data },
    });
    console.log(axios);
  };
  // console.log(data);

  // Google map_________________
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: { APIKEY },
  //   // googleMapsApiKey: "AIzaSyCJyxG08yG0CaNTg_Oi49hFFvasCFaSvtU",
  // });

  // // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   // setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   // setMap(null);
  // }, []);

  return (
    <>
      <h1>Courses</h1>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        quae distinctio vero, voluptas fugit ullam ipsum. In a sit fugit
        consequuntur, eius, ullam, esse nihil magni perspiciatis nemo recusandae
        error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laboriosam quae distinctio vero, voluptas fugit ullam ipsum. In a sit
        fugit consequuntur, eius, ullam, esse nihil magni perspiciatis nemo
        recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Laboriosam quae distinctio vero, voluptas fugit ullam ipsum. In a
        sit fugit consequuntur, eius, ullam, esse nihil magni perspiciatis nemo
        recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Laboriosam quae distinctio vero, voluptas fugit ullam ipsum. In a
        sit fugit consequuntur, eius, ullam, esse nihil magni perspiciatis nemo
        recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Laboriosam quae distinctio vero, voluptas fugit ullam ipsum. In a
        sit fugit consequuntur, eius, ullam, esse nihil magni perspiciatis nemo
        recusandae error? COURSES
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue="test"
            {...register("example", { required: true })}
          />
          {errors.example && <span>This field is required</span>}

          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value={"submit"} />
        </form>
      </div>
      {/* Google maps_________________________ */}
      {/* AIzaSyBbt0F3RGczTmbyVMMyFIVd8wxxFRN0 */}
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};
export default Courses;
