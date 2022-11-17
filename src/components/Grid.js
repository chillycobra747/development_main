import ShelterDog from "./ShelterDog.js";

export default function Grid(props) {
    const {dogs} = props;
    return <div className="block col-2">  
        <h2>Dogs in Shelter</h2>
        <div className="row">
            {dogs.map((dog) => (
                <ShelterDog key={dog.id} dog={dog}></ShelterDog>
                
            ))}
        </div>
    </div>
  }