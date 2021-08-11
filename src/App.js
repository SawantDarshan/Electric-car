import "./App.css";
import Nav from "./modules/Nav";
import Hero from "./modules/Hero";
import Trending from "./modules/Trending";
import Compare from "./modules/CompareCars";
import Brands from "./modules/Brands";
import About from "./modules/About";

//data(JSON) example
const data = { category: ["car", "bike", 3, 4, 5] };
const cars = [
  { name: "foo", specs: ["bar", "bazz"] },
  { name: "foo", specs: ["bar", "bazz"] },
];

//car names list
const carList = cars.map((car) => car.name);

function App() {
  return (
    <div className="App">
      <Nav category={data.category} carList={carList}></Nav>
      <main>
        <Hero></Hero>
        <Trending></Trending>
        <Compare></Compare>
        <Brands></Brands>
        <About></About>
      </main>
    </div>
  );
}

export default App;
