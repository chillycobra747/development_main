import './App.css';
import './index.css';
import Grid from "./components/Grid";
import Cart from './components/Cart';
import data from './DogData'
import { useState } from 'react';
import styled from "styled-components";

function App() {
  const {dogs} = data; 
  const [dogList, setDogList] = useState(dogs);
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  const types = ["Any Sex", "Male", "Female"];
  const [active, setActive] = useState(types[0]);
  const [sex, setSex] = useState("Any Sex");

  const [priceLimit, setPriceLimit] = useState("Any Price");
  const priceTypes = ["Any Price", "Below $500", "Above $500"];
  const [priceActive, setPriceActive] = useState(priceTypes[0]);

  const [sorted, setSorted] = useState("Sort");

  const maleDogs = dogs.filter(d  => { return d.sex === "Male";});
  const femaleDogs = dogs.filter(d  => { return d.sex === "Female";});
  const highDogs = dogs.filter(d  => { return d.price > 500;});
  const lowDogs = dogs.filter(d  => {return d.price < 500;});

  // I learned how to make these toggle buttons using https://react.school/ui/button#buttoncomponentstyle
  const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap; 
    align-self: center;
  `
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin: 10px 0px;
    cursor: pointer;;
    `
  const ButtonToggle = styled(Button)`
    opacity: 0.6;
    ${({ active }) =>
      active &&
      `
      opacity: 1;
    `}`;

  const sexToggle = (currSex) => {
    setActive(currSex);
    setDogList(dogs);
    if (currSex === "Female") {  
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
    } else if (currSex === "Male") {    
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
    } else {    
      setSex("Any Sex");      
      setDogList(dogs); 
      if (priceLimit === "Above $500") {
        setDogList(highDogs); 
      }
      else if (priceLimit === "Below $500") {
        setDogList(lowDogs);
      }
    }
  }

  const PriceButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ priceActive }) =>
  priceActive &&
    `
    opacity: 1;
  `}
`;
  const priceToggle = (currPrice, setPriceActive) => {
    setDogList(dogs);
    setPriceActive(currPrice)
    if (currPrice === "Above $500") {
      setPriceLimit("Above $500");           
      if (sex !== "Any Sex") {
        const fList = highDogs.filter(d  => {
          return d.sex === sex;
        });
        setDogList(fList); 
      } else {
          setDogList(highDogs); 
        }
    } else if (currPrice === "Below $500") {
      setPriceLimit("Below $500");   
      if (sex !== "Any Sex") {
        const fList = lowDogs.filter(d  => {
          return d.sex === sex;
        });
        setDogList(fList); 
      } else {
          setDogList(lowDogs); 
        }
      }
      else {    
        setPriceLimit("Any $500");       
        setDogList(dogs); 
        if (sex === "Female") {
          setDogList(femaleDogs); 
        }
        else if (sex === "Male") {
          setDogList(maleDogs);
        }
      }
  }

  const sort = event => {
    if (sorted === "Unsort"){
      setSorted("Sort");
      const unsortedList = dogList.sort(() => Math.random() - 0.5);
      setDogList(unsortedList);
    } else {
      setSorted("Unsort");
      const lowestFirst = [...dogList].sort((a, b) => a.price - b.price);
      const sortedList = lowestFirst.map(d => {
        return d; 
      })
      setDogList(sortedList);
    }    
  }

  const onAdd = (dog) => {
    const newCartItems = cart.map((x) => 
      x.id === dog.id);
    setCart(newCartItems);
    setCart([...cart, {...dog, qty:1}]);
    setCost(cost + dog.price);
  }

  const onRemove = (dog) => {
    const newCartItems = cart.filter((x) => 
      x.id !== dog.id);
    setCart(newCartItems);
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
              <div className = "toggles">
                <ButtonGroup className="sexToggles">
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
                <ButtonGroup className="priceToggles">
                  {priceTypes.map(currPrice => (
                    <PriceButtonToggle
                      key={currPrice}
                      priceActive={priceActive === currPrice}
                      onClick={() => priceToggle(currPrice, setPriceActive)}
                    >
                      {currPrice}
                    </PriceButtonToggle>
                  ))}
                </ButtonGroup>
              </div>
                <button onClick={sort}>{sorted} By Price</button>
              </div>
        </div>

     <div className="block col-2">  
      <h3>Showing dogs of {sex} and {priceLimit}</h3>
      <Grid cart={cart} onAdd={onAdd} onRemove={onRemove} dogs={dogList}/>   
      </div>
      
    </div>
  );
}

export default App;
