export default function ShelterDog(props) {
    const {dog, addDog, removeDog, dogCard} = props;
    return (
        <div className = "dogItem"> 
            <h1>{dog.name}</h1>
            <h3>{dog.breed}</h3>
            <h3>{dog.sex}</h3>
            <h4>{dog.age} months</h4>
            <h3>Price: ${dog.price}</h3>
            <img className="small" src={dog.image} alt={dog.name}/>
            <div>
                {dogCard ? (
                <div>
                    <button onClick={() => removeDog(dogCard)} className="remove">Remove dog</button>
                </div>
            ) : (
                <button onClick={() => addDog(dog)}>Add dog</button>
            )}    
            </div>
        </div>
    )
}