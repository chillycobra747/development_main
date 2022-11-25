import ShelterDog from "./ShelterDog.js";

export default function Grid(props) {
    const {dogs, onAdd, onRemove, cart} = props;
    return <div className="block col-2">  
        {/* <div className="row">
            {dogs.map((dog) => (
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
  }