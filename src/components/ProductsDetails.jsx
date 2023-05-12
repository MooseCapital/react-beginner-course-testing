import { useParams} from "react-router-dom";
import productsData from "../data/productsData.js";

function ProductsDetails() {
    let param = useParams()


    let currentProduct = productsData.find(item => item._id === Number(param.productId))

    return (
        <>
            <h3>{currentProduct?.name} details</h3>
            <h3>price: ${currentProduct?.price}</h3>
            <p>{currentProduct?.description}</p>
        </>
    )
}

export default ProductsDetails
