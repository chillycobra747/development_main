import { useState } from 'react';

export default function Cart(props) {
    const {cart, cost, onAdd, onRemove, countCartItems, dogs} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState(dogs);
    const menuItems = [...new Set(dogs.map((Val) => Val.category))];

    const [filter, setFilter] = useState(""); 

    return (
    <div>
        <div className="col">
            <h2>Your Dogs</h2>
           
            <h3>total number added: {countCartItems}</h3>
            
            <div>
                {cart.length === 0 && <div>
                    <h4>You Have No Dogs</h4></div>}
                {cart.map((dog) => (
                    <div key={dog.id} className="row">
                        <div className="col">
                            <h1>{dog.name}</h1></div>
                    </div>
                ))}
            </div>
            <h3>Total Cost: ${cost}</h3>
            </div>
    </div>
    )
}