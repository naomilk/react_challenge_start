import React from "react";
import { Tile } from "../../components/tile/Tile"

export const TileList = ({objects = []}) => {

  return (
    <div>
      {
        objects.map((object, index) => {
          return (
            <Tile key={index} object={object} />
          )
        })
      }
    </div>
  );
};
