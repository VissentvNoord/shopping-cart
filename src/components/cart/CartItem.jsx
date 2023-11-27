import getProduct from "../general/Product";

function CartItem({ id, count, setCount }) {
    const product = getProduct(id);

    if (product.loading) {
        return (
            <div>
                <p>loading...</p>
            </div>
        )
    }

    if (product.error) {
        return (
            <div>
                <p>Network error</p>
            </div>
        )
    }

    const data = product.data;

    function Increase(){
        setCount().Increase(id);
    }

    function Decrease(){
        setCount().Decrease(id);
    }

    return (
        <div className="cart-item bottom-border">
            <div className="item-img-container rounded">
                <img className="item-img rounded" src={data.image} alt="" />
            </div>

            <div className="item-info">
                <div className="top-row">
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.category}</p>
                    </div>

                    <div>
                        <button>x</button>
                    </div>
                </div>

                <div className="bottom-row">
                    <div className="set-quantity rounded">
                        <button onClick={Decrease}>-</button>
                        <p>{count}</p>
                        <button onClick={Increase}>+</button>
                    </div>

                    <div>
                        <p>{data.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;