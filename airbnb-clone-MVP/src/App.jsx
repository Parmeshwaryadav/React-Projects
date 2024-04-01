import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Cards from "./components/Cards";
import data from "./data";
// import { useState, useEffect, useRef } from "react";

const App = () => {
  const cards = data.map((dataValue) => {
    return (
      <Cards
        key={dataValue.id}
        image={dataValue.image}
        places={dataValue.place}
        rating={dataValue.ratings}
        description={dataValue.description}
        date={dataValue.date}
        price={dataValue.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <div className="flex flex-wrap justify-evenly ">{cards}</div>
    </>
  );
  // Navbar
  // Main / Hero section
  // carousal
  // footer
};

export default App;
