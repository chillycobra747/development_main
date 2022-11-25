import './App.css';
import './index.css';
import Grid from "./components/Grid";
import Cart from './components/Cart';
import data from './DogData'
import { useState } from 'react';
import ShelterDog from "./components/ShelterDog.js";


function App() {
  const {dogs} = data; 
  
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  const [filter, setFilter] = useState(""); 
  
  const buttons = ({ setItem, menuItems }) => {
    return (
      <>
        <div>YOOO </div>
        <div className="d-flex justify-content-center">
          {menuItems.map((Val, id) => {
            return (
              <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                key={id}
              >
                {Val}
              </button>
            );
          })}
          <button
            className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
            onClick={() => setItem(dogs)}
          >
            All
          </button>
         </div>
      </>
    );
  };
  
  const onAdd = (dog) => {
    const newCartItems = cart.map((x) => 
      x.id === dog.id);
    setCart(newCartItems);
    setCart([...cart, {...dog, qty:1}]);
    setCost(cost + dog.price);
  }

  /*
  const onAdd = (dog) => {
    const exist = cart.find((x) => x.id === dog.id);
    if (exist) {
      const newCartItems = cart.map((x) => 
        x.id === dog.id ? {...exist, qty: exist.qty + 1} : x);
      setCart(newCartItems)
    } else {
      setCart([...cart, {...dog, qty:1}]);
    }
    setCost(cost + dog.price);
  }
  */ 
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
    setCost(cost - dog.price);
  }
  return (
    <div className="App">
      <header className="App-header"> Providence Shelter</header>
      <div className="row">
        <div className="cart">  
          <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} 
            countCartItems = {cart.length} cost={cost} dogs={dogs}>              
          </Cart>
          <button onClick={() => setFilter("male")} className="filterButton">Male</button>
        
   
        
        </div>
        <div className="block col-2">  
        <div className="row">
            {dogs.map((dog) => (
                <ShelterDog 
                    key={dog.id} 
                    dog={dog} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    dogCard={cart.find((x) => x.id === dog.id)}>
                </ShelterDog>               
            ))}
        </div>

        <div>
        {dogs.filter(person => person.sex === "Female").map(dog => (
                <ShelterDog 
                    key={dog.id} 
                    dog={dog} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    dogCard={cart.find((x) => x.id === dog.id)}>
                </ShelterDog>               
            ))}
        </div>

    </div>

      <Grid cart={cart} onAdd={onAdd} onRemove={onRemove} dogs={dogs}/>   
      </div>
      
    </div>
  );
}

export default App;
