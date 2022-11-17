export default function ShelterDog(props) {
    const {dog, onAdd, onRemove} = props;
    return (
        <div className = "dogItem"> 
            <h3>{dog.name}</h3>
            <h2>{dog.breed}</h2>
            <h2>{dog.special}</h2>
            <button onClick={() => onAdd(dog)}>Add to cart</button>
        </div>
    )
}