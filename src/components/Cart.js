export default function Cart(props) {
    const {cart, cost, onAdd, onRemove, countCartItems} = props;
    return <div>
    <div className="col-1">
        <h2>Your Dogs</h2>
        <h3>total number added: {countCartItems}</h3>
        <div>
            {cart.length === 0 && <div>cart is empty</div>}
            {cart.map((dog) => (
                <div key={dog.id} className="row">
                    <div className="col-1">
                        <h1>{dog.name}</h1></div>
                </div>
            ))}
        </div>
        <h3>Total Cost: ${cost}</h3>
        </div>
    </div>
}