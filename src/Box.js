import React from "react";

const Box = ({ item, handleClicked, setChangeColor }) => {
  return item.isVisible ? (
    <div
      className={"box " + (item.isClicked ? "green " : "yellow ")}
      key={item.id}
      onClick={() => handleClicked(item)}
    >
      {item.id}
    </div>
  ) : (
    <div></div>
  );
};
export default Box;
