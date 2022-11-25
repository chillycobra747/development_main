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
  const [sex, setSex] = useState("Any Gender");
  const [priceLimit, setPriceLimit] = useState("Any Price");
  const [dogList, setDogList] = useState(dogs);

  const maleDogs = dogs.filter(d  => {
    return d.sex === "Male";
  });
  const femaleDogs = dogs.filter(d  => {
    return d.sex === "Female";
  });
  const highDogs = dogs.filter(d  => {
    return d.price > 500;
  });
  const lowDogs = dogs.filter(d  => {
    return d.price < 500;
  });

  const sexToggle = event => {
    setDogList(dogs);
    if (sex === "Male") {  
      setSex("Female");        
      if (priceLimit === "Above $500") {
        const fList = femaleDogs.filter(d  => {
          return d.price > 500;
        });
        setDogList(fList); 
      } else if (priceLimit === "Below $500") {
        const fList = femaleDogs.filter(d  => {
          return d.price < 500;
        });
        setDogList(fList);
      } else {
          setDogList(femaleDogs); 
      }
      
    } else {    
      setSex("Male");      
      if (priceLimit === "Above $500") {
        const fList = maleDogs.filter(d  => {
          return d.price > 500;
        });
        setDogList(fList); 
      } else if (priceLimit === "Below $500") {
        const fList = maleDogs.filter(d  => {
          return d.price < 500;
        });
        setDogList(fList);
      } else {
          setDogList(maleDogs); 
      }
      
    } 
    // if (sex === "Female") {
    //   setDogList(maleDogs);
    //   setSex("Male");
    // } else {     
    //   setDogList(femaleDogs);
    //   setSex("Female");
    // }
  }

  const priceToggle = event => {
    setDogList(dogs);
    if (priceLimit === "Below $500") {
      setPriceLimit("Above $500");           
      if (sex !== "Any Gender") {
        const fList = highDogs.filter(d  => {
          return d.sex === sex;
        });
        setDogList(fList); 
      } else {
          setDogList(highDogs); 
        }
    } else {
      setPriceLimit("Below $500");   
      if (sex !== "Any Gender") {
        const fList = lowDogs.filter(d  => {
          return d.sex === sex;
        });
        setDogList(fList); 
      } else {
          setDogList(lowDogs); 
        }
      }
  }
  
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
          <button onClick={sexToggle}>{sex} Dogs</button>
          <button onClick={priceToggle}>{priceLimit}</button>
   
        
        </div>
        
        <div className="block col-2">  
        <h3>Showing dogs of {sex} and {priceLimit}</h3>
        <div className="row">
            {dogList.map((dog) => (
                <ShelterDog 
                    key={dog.id} 
                    dog={dog} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    dogCard={cart.find((x) => x.id === dog.id)}>
                </ShelterDog>               
            ))}
        </div>
        {/* <div>
        
        {dogList.filter(person => person.sex === "Female").map(dog => (
                <ShelterDog 
                    key={dog.id} 
                    dog={dog} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    dogCard={cart.find((x) => x.id === dog.id)}>
                </ShelterDog>               
            ))}
        </div> */}

    </div>

      <Grid cart={cart} onAdd={onAdd} onRemove={onRemove} dogs={dogList}/>   
      </div>
      
    </div>
  );
}

export default App;
