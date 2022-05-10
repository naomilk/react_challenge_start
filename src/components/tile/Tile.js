import React from "react";

export const Tile = ({object}) => {
  return (
    <div className="tile-container">
      {
        Object.values(object).map((value, index) => {
          if (index === 0) {
            return (<p className="tile tile-title" key={index} >{ value }</p>)
          } else {
            return (<p className="tile" key={index} >{ value }</p>)
          }
        })
      }
    </div>
  );
};
