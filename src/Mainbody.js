
import { useState, useEffect } from "react";
const Mainbody = () => {

const [meme, setmeme] = useState({
  topText: '',
  bottomText: '',
  randomImage: 'https://via.placeholder.com/450x450/150/FFFFFF?text=Click+the+button+to+pick+a+random+meme+image'
});
const [allmemes, setAllMemes] = useState([]);

useEffect(()=>{
  fetch('https://api.imgflip.com/get_memes')
  .then(res=>res.json())
  .then(data=>setAllMemes(data.data.memes));
}, [])
// console.log(allmemes)

  function getmemeimg() {
    const randomNo = Math.floor(Math.random() * allmemes.length);
    const url = allmemes[randomNo].url;
    setmeme(prevmeme=>({
      ...prevmeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    // console.log(event.target.value);
    const {name, value} = event.target;

    setmeme(prevmeme=>({
      ...prevmeme,
      [name]: value
    }))
  }

    return (  
        <main className="body">
            <input 
            type="text" 
            name="topText"
            className="A" 
            placeholder="Top Text.."
            value={meme.topText}
            onChange={handleChange}
            />
            <input type="text" 
            name="bottomText"  
            className="B" 
            placeholder="BottomText.."
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button onClick={getmemeimg}>Get a new meme image</button>
            <div className="meme">
            <img src={meme.randomImage} alt="" className="memepic"/>
            <h2 className="meme--text-top">{meme.topText}</h2>
            <h2 className="meme--text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
 
export default Mainbody;
