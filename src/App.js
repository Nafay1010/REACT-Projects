import { useState } from "react";
import './App.css';
import BoxData from './Boxes';
import Box from './Box';

const App = () => {
  const [Squares, setSquares] = useState(BoxData);
  
  function toggle(id){
    setSquares(prevSq=>{
      return prevSq.map(sq=>{
        return sq.id === id ? {...sq, on: !sq.on} : sq;
      })
    })
  }
  
  const toBox = Squares.map(sq=> (
    <Box
    key={sq.id}
    id={sq.id}
    on={sq.on}
    toggle={toggle}
    />
  ))

  return ( 
    <div>
      {toBox}
    </div>
   );
}
 
export default App;