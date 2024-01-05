import React, { useContext } from "react";
import { mixtapeContext } from "./components/mixtapeContext";
import { Song } from "./Song";

 const [songs,genre,sortOrder] = useContext(mixtapeContext);
export const SongList = () => {
  // Your code here! ✨
  return (
    <>
      <h2>TODO: Update taste in music...? </h2>
    </>
  );
};
