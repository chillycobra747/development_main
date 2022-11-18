import './App.css';
import './index.css';
import Grid from "./components/Grid";
import Cart from './components/Cart';
import data from './DogData'
import { useState } from 'react';

function App() {
  const {dogs} = data; 
  const [cart, setCart] = useState([]);

  const onAdd = (dog) => {
    const exist = cart.find((x) => x.id === dog.id);
    if (exist) {
      const newCartItems = cart.map((x) => 
        x.id === dog.id ? {...exist, qty: exist.qty + 1} : x);
      setCart(newCartItems)
    } else {
      setCart([...cart, {...dog, qty:1}]);
    }
  }
  const onRemove = (dog) => {
    const exist = cart.find((x) => x.id === dog.id); 
    if (exist.qty === 1) {
      const newCartItems = cart.filter((x) => x.id !== dog.id);
      setCart(newCartItems);
    } else {
      const newCartItems = cart.map((x) => 
      x.id === dog.id ? {...exist, qty: exist.qty-1} : x);
      setCart(newCartItems);
    }
  }
  return (
    <div className="App">
      <header className="App-header"> Providence Shelter</header>
      <h1>hi</h1>
      <div className="row">
        <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} countCartItems = {cart.length} />
        <Grid cart={cart} onAdd={onAdd} onRemove={onRemove} dogs={dogs}/>   
      </div>
    </div>
  );
}

export default App;
