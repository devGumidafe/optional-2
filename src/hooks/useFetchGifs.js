import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      .then((images) => {

        setState({
          images,
          loading: false,
        });
      })
      .catch(console.log);
  }, [category]);

  return state;
};
