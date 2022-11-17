export default function ShelterDog(props) {
    const {dog} = props;
    return (
        <div className = "card"> 
            <h3>{dog.name}</h3>
            <h2>{dog.breed}</h2>
            <h2>{dog.special}</h2>
            <button>Add to cart</button>
        </div>
    )
}