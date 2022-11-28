export default function Cart(props) {
    const {cart, cost, countCartItems} = props;
    return (
    <div>
      <h2>Your Dogs</h2>
      <h3>Number Dogs Added: {countCartItems}</h3>
      <div>
        {cart.map((dog) => (
            <div className="col">
              <h1>{dog.name}</h1>
            </div>
        ))}
      </div>
      <h3>Total Cost: ${cost}</h3>
    </div>
    )
}