function ProductListing({product, addItem}){
    console.log(product);

    function onAddClicked(){
        addItem(product.id);
    }

    return(
        <Wrapper>
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>

            <div className="product-info">
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <button onClick={onAddClicked}>Add to cart</button>
            </div>
        </Wrapper>
    );
}

function Wrapper({children}){
    return(
        <div className="product-listing">
            {children}
        </div>
    );
}

export default ProductListing;