import './App.css';
import Grid from "./components/Grid";
import Cart from './components/Cart';
import data from './DogData'

function App() {
  const {dogs} = data; 
  return (
    <div className="App">
      <header className="App-header"> Providence Shelter</header>
      <h1>Hi</h1>
      <div className="row">
        <Cart/>
        <Grid dogs={dogs}/>   
      </div>
    </div>
  );
}

export default App;
