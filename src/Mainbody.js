
import axios from "axios";
import { useState } from "react";
const Mainbody = () => {

const [meme, setmeme] = useState("");
const getimg = () =>{
fetch('https://meme-api.herokuapp.com/gimme/memes')
  .then(r=>r.json())
  .then(json=>{
    setmeme(json.url);
  })
}
    return (  
        <main className="body">
            <input type="text" name="" id="" className="A" placeholder="Top Text.."/>
            <input type="text" name="" id="" className="B" placeholder="BottomText.."/>
            <button onClick={getimg}>Get a new meme image</button>
            <img src={meme} alt="" />
        </main>
    );
}
 
export default Mainbody;
