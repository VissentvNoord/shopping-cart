import ProductListing from "../general/ProductListing";
import { useState, useEffect } from "react";

const getAllProducts = () =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`, { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    return { data, error, loading };
}

function getProducts(products, addItem){
    return products.data.map(item => (
        <ProductListing key={item.id} product={item} addItem={addItem} />
    ));
}

function Browse({ addItem }) { 
    const products = getAllProducts();

    if(products.loading){
        return <p>Loading..</p>;
    }

    if(products.error){
        return <p>Network error</p>
    }

    console.log(products.data);

    return (
        <div className="browse-container">
            {getProducts(products, addItem)}
        </div>
    );
}

export default Browse;