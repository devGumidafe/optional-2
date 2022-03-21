export const getGifs = async (category) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      img: images.downsized_medium?.url,
    }));

    return gifs;
  };