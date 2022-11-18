export default function Cart(props) {
    const {cart, onAdd, onRemove, countCartItems} = props;
    return <div>
    <div className="col-1">Cart </div>
        <h2>Your Dogs</h2>
        <h3>total number added: {countCartItems}</h3>
        <div>
            {cart.length === 0 && <div>cart is empty</div>}
            {cart.map((dog) => (
                <div key={dog.id} className="row">
                    <div className="col-1">{dog.name}</div>
                </div>
            ))}
        </div>
    </div>
}