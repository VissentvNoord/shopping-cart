import getProduct from "../general/Product";

const Product = ({ id }) => {
    const productData = getProduct(id);
    console.log(productData);

    if(productData.loading){
        return(
            <div>
                <p>Loading</p>
            </div>
        );
    }

    if(productData.error){
        return(
            <div>
                <p>Network error</p>
            </div>
        )
    }

    const data = productData.data;

    return (
        <div className="coverproduct">
            <img className="coverimg" src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
        </div>
    );
}

const Cover = () => {
    return (
        <div className="cover bottom-border">
            <Product id={1} />
            <div className="seperator" />
            <Product id={2} />
        </div>
    );
}

export default Cover;