import { useState, useCallback } from "react";

function CartData() {
    const [cart, setCart] = useState({ 1: 1, 2: 3 });

    const addItem = (id) => {
        const currentCount = cart[id] || 0;
        const updatedCart = { ...cart, [id]: currentCount + 1 };
        console.log(updatedCart);
        setCart(updatedCart);
    }

    const setCount = useCallback(() => {
        const Increase = (id) => {
            setCart(prevCart => {
                const newCount = prevCart[id] + 1;
                return { ...prevCart, [id]: newCount };
            });
        };

        const Decrease = (id) => {
            setCart(prevCart => {
                let newCount = prevCart[id] - 1;
                if(newCount <= 0) newCount = 1;
                return { ...prevCart, [id]: newCount };
            });
        };

        return { Increase, Decrease };
    }, []);

    return { cart, addItem, setCount };
}

export default CartData;