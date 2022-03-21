import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="category-title">{category}</h2>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-container">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
