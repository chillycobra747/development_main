export default function ShelterDog(props) {
    const {dog, onAdd, onRemove, dogCard} = props;
    return (
        <div className = "dogItem"> 
            <h1>{dog.name}</h1>
            <h4>{dog.age} months</h4>
            <h3>{dog.breed}</h3>
            <h3>{dog.special}</h3>
            <img className="small" src={dog.image} alt={dog.name}/>
            <div>
                {dogCard ? (
                <div>
                    <button onClick={() => onRemove(dogCard)} className="remove">Remove dog</button>
                </div>
            ) : (
                <button onClick={() => onAdd(dog)}>Add dog</button>
            )}
                
            </div>
        </div>
    )
}