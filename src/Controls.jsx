import React, { useContext } from "react";
import { mixtapeContext } from "./components/mixtapeContext";


export const Controls = () => {
  const [genre,setGenre,sortOrder,setSortOrder] = useContext(mixtapeContext); 
  return (
    <div className="controls">
      TODO: add some controls!
    </div>
  );
};
