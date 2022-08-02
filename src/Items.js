import Product from './Product';
import TechData from './TechData';

const Items = () => {
    const Data = TechData.map(item =>{
        return <Product 
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        discountPercentage={item.discountPercentage}
        stock={item.stock}
        thumbnail={item.thumbnail}
        />
    })
    return ( 
        <div className="items">
            <h1 className="items--heading">
                All Available Items
            </h1>
            <div className="product--layout">
            {Data}
            </div>
        </div>
     );
}
 
export default Items;