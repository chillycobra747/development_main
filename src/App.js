import './App.css';
import './index.css';
import Grid from "./components/Grid";
import Cart from './components/Cart';
import data from './DogData'
import { useState } from 'react';
import ShelterDog from "./components/ShelterDog.js";
import styled from "styled-components";

function App() {
  const {dogs} = data; 
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  const [sex, setSex] = useState("Any Gender");
  // const [sex, setSex] = useState(types[0]);
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

  const ButtonGroup = styled.div`
  display: flex;
`
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const types = ["Any Sex", "Male", "Female"];
const [active, setActive] = useState(types[0]);

function ToggleGroup() { 
  return (
    <ButtonGroup>
      {types.map(currSex => (
        <ButtonToggle
          key={currSex}
          active={active === currSex}
          onClick={() => sexToggle(currSex)}
        >
          {currSex}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

  const sexToggle = (currSex) => {
    setActive(currSex);
    setDogList(dogs);
    if (currSex === "Male") {  
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

  const sort = event => {
    const lowestFirst = [...dogList].sort((a, b) => a.price - b.price);
    const sortedList = lowestFirst.map(d => {
      return d; 
    })
    setDogList(sortedList);
  }

 

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
          <button className="sexToggle" onClick={sexToggle}>{sex} Dogs</button>
          
          <ButtonGroup>
          <Button> Group 1 </Button>
          <Button> Group 2 </Button>
        </ButtonGroup>
        <ToggleGroup />


          <button onClick={priceToggle}>{priceLimit}</button>
          <button onClick={sort}>Sort</button>
        </div>
        
        {/* <div className="row">
            {dogList.map((dog) => (
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
     <div className="block col-2">  
      <h3>Showing dogs of {sex} and {priceLimit}</h3>
      <Grid cart={cart} onAdd={onAdd} onRemove={onRemove} dogs={dogList}/>   
      </div>
      
    </div>
  );
}

export default App;
