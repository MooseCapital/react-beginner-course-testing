import productsData from "../data/productsData.js";
import {Link} from "react-router-dom";
import React, {Fragment} from "react";

function ProductsRouter(props) {

    const Products = productsData.map(item => {
        return (
            <div  key={item._id}>
                <Link to={`/products/${item._id}`}> {item.name} </Link>
            </div>
        )
    })

    return (
        <>
            <h3 className={"light-mode"}>products</h3>
            {Products}
        </>
    )
}

export default ProductsRouter
