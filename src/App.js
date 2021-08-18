import "./App.css";
import Nav from "./modules/Nav";
import Hero from "./modules/Hero";
import Trending from "./modules/Trending";
import Compare from "./modules/CompareCars";
import Brands from "./modules/Brands";
import About from "./modules/About";
import data from "./Data";
import { useState } from "react";

//data(JSON) example
function App() {
  const [cars, setCars] = useState(data[0]);
  console.log(cars);
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <Trending key={cars.name}{...cars}></Trending>
        <Compare></Compare>
        <Brands></Brands>
        <About></About>
      </main>
    </div>
  );
}

export default App;
