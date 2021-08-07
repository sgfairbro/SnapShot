import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, getImages } = useContext(PhotoContext);
  useEffect(() => {
    getImages();
  });

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
