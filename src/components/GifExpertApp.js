import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="header">
      <h2 className="header-title">GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <ul className="categories">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
      <footer className="footer">Create by Gumidev.</footer>
    </div>
  );
};
