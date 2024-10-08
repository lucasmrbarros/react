import style  from './App.module.css';
import { Planet } from './Planet';

function App() {
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true}
  ]

  return (
    <div ClassName = "App">
      {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>
      )}
    </div>
  );
}

export default App;  
