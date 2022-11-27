import ShelterDog from "./ShelterDog.js";

export default function Grid(props) {
    const {dogs, addDog, removeDog, cart} = props;
    return <div className="grid">  
        <div className="row">
            {dogs.map((dog) => (
                <ShelterDog 
                    key={dog.id} 
                    dog={dog} 
                    addDog={addDog}
                    removeDog={removeDog}
                    dogCard={cart.find((x) => x.id === dog.id)}>
                </ShelterDog>               
            ))}
        </div>
    </div>
  }