export default function Cart(props) {
    const {cart, cost, countCartItems} = props;
    return (
    <div>
      <h2>Your Dogs</h2>
      <h3>Number Dogs Added: {countCartItems}</h3>
      <div>
          {cart.length === 0 && <div>
              <h4>You Have No Dogs</h4></div>}
          {cart.map((dog) => (
            <div key={dog.id} className="row">
              <div className="col">
                <h1>{dog.name}</h1></div>
            </div>
          ))}
      </div>
      <h3>Total Cost: ${cost}</h3>
    </div>
    )
}