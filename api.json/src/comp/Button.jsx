import React from "react";

import {products} from "./Products"

const Button = () => {
    const { addCartCount} = React.useContext(products);
    return <button onClick = { () => handleCartCount (1)}> ADD TO CART</button>
}

export default Button;