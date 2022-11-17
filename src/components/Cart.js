export default function Cart(props) {
    const {countCartItems} = props;
    return <div>
    <div className="col-1">Cart </div>
    {countCartItems}
    </div>
}