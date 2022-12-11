import { updateProductList } from "../../actions/productAction";

const updateProduct = (product) => {
    // console.log(product);
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/products/${product._id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);

        if (data.acknowledged) {
            dispatch(updateProductList(product));
        }
    };
}

export default updateProduct;