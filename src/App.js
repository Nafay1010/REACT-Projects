import './App.css';
import Checkout from './Checkout';
import Headers from './Header';
import Items from './Items';

const App = () => {
  return ( 
    <div>
      <Headers />
      <Checkout/>
      <main className='items--checkout'>
        <Items/>
      </main>
    </div>
   );
}
 
export default App;