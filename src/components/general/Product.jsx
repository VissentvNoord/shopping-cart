import { useState, useEffect } from "react";

const getProduct = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
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
  };

  export default getProduct;