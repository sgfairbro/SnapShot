import React, { createContext, useState } from "react";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.imgur.com/3/account/sgfairbro/images',
  headers: { 
    'Authorization': apiKey, 
    'Cookie': 'postpagebeta=1'
  }
};

let initialImages = []

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImages = query => {
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setImages(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch(error => {
        console.log(
          "Error fetching image data: ",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, getImages }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
