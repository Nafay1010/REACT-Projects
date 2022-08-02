import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import AddData from './BoughtProductsData';
const Product = (props) => {
    // const [Product, setProduct] = useState(
    //     {
    //         title : '',
    //         price : '',
    //         discountPercentage : ''
    //     }
    // );

    const Buy = (title, price) =>{
        const product = {title, price};
        fetch('http://localhost:8000/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }).then(()=>{
            console.log('Item Added');
            window.location.reload();
        }).catch(err=> {
            console.log('Error', err);
        })
    }
    return (
        <div className="product">
            <img src={props.thumbnail} alt="" className="thumbnail"/>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            {props.stock === 0 ? <h3 className="OutofStock">Out of Stock</h3> : <h3 className="inStock">In Stock</h3>}
            <h2 className="price--discount"><span className="dollar-sign">$</span><span className="price">{props.price}</span>    
            <span className="discount">-{props.discountPercentage}%</span></h2>
            <div className="button-placement">
            {props.stock === 0 ? 
            <button className="OutofStockbtn">Add to Cart <FontAwesomeIcon icon={faCartShopping} className='icon'/></button> : 
            <button className="Add--to--cart" onClick={() => Buy(props.title, props.price)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} className='icon'/></button>}
            </div>
        </div>
     );
}
 
export default Product;