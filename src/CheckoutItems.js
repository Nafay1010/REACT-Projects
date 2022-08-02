import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
const CheckoutItems = ({props}) => {

    // const [Props, setProps] = useState(props);
    const data = props;
    // const handledelete = (id) => {
        //     fetch('http://localhost:8000/items/' + id, {
            //         method: "DELETE"
            //     }).then(()=>{
                //         console.log('Item Deleted');
                //         window.location.reload();
                //         // setProps(data);
                //     })
                // }
                // function sum(props){
                //     if(props === [])
                //     {
                //         return false;
                //     }
                //     else
                //     {
                //         return true;
                //     }
                // }
                
                console.log('hello');
    return ( 
        <div className="Checkoutitems">
            <h1 className='receipt'>Receipt</h1> 
            {props.map((item) => (
                <div className="item-preview" key={item.id}>
                    <h2><span className='checkout--headingitem'>Item</span><span className='checkout--headingprice'>Price</span></h2>
                    <h3><span className='checkout-title'>{item.title}</span><span className='checkout--price'>${item.price}</span></h3>
                    <div className="btn-layout">
                    {/* <button onClick={() => handledelete(item.id)}>Delete</button> */}
                    </div>
                </div>
            ))}            
            {data && <h1 className="price-tag">Total Price: ${props.map(item => item.price).reduce((acc, amount) => acc + amount)}</h1>}
        </div>  
     );
}
 
export default CheckoutItems;