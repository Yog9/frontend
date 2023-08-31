import React from "react";
import Box from "./Box";

import { useEffect, useState } from "react";
export default function App() {
  const [queue, setQueue] = useState([]);
  const [grid, setGrid] = useState([
    {
      id: 1,
      isClicked: false,
      isVisible: true
    },
    {
      id: 2,
      isClicked: false,
      isVisible: true
    },
    {
      id: 3,
      isClicked: false,
      isVisible: true
    },
    {
      id: 4,
      isClicked: false,
      isVisible: true
    },
    {
      id: 5,
      isClicked: false,
      isVisible: false
    },
    {
      id: 6,
      isClicked: false,
      isVisible: false
    },
    {
      id: 7,
      isClicked: false,
      isVisible: true
    },
    {
      id: 8,
      isClicked: false,
      isVisible: true
    },
    {
      id: 9,
      isClicked: false,
      isVisible: true
    }
  ]);

  // Useeffect written for testing purpose
  useEffect(() => {
    console.log("grid", grid);
    console.log("queue", queue);
  }, [grid, queue]);

  // Sets grid item isClicked to true when clicked and add
  // its to our queue if it is not already in the queue
  // Queue is array that stores the order in which
  // divs were clicked
  const handleClicked = (item) => {
    grid.map((gridItem) => {
      if(!queue.includes(gridItem)){
        if (gridItem.id === item.id) {
          return setQueue((queueItem) => [...queueItem, gridItem]);
        }
      }
    });
    setGrid(
      grid.map((gridItem) => {
        if (gridItem.id === item.id) {
          gridItem.isClicked = true;
        }
        return gridItem;
      })
    );
  };


  // Logic to be added for settimeout and changing back color
  // in every 1 sec

  useEffect(()=>{
    if(queue.length === 7){
      for(let i = 0; i< 7; i++){
        setTimeout(()=>{
            // setGrid() 
            // if id of queue is equal to id of grid array
            // update is clicked to false
        }, i*1000)
      }
    }
  },[queue])


  return (
    <div className="App">
      <div className="container">
        {grid.map((item, id) => {
          return <Box item={item} key={id} handleClicked={handleClicked} />;
        })}
      </div>
    </div>
  );
}