import { useState } from 'react';
import './App.css';


const App = () => {
  const [formval, setFormval] = useState({
    firstname : '',
    lastname : '' ,
    email: '',
    comments: '',
    employement: '',
    favColor: ''
  });

  const [checked, setChecked] = useState(false);
  // console.log(checked);
  const handleCheck = ()=>{
    setChecked(prevcheck => (!prevcheck));
  }

  
  
  // console.log(formval);
  function handleChange(event){
    // console.log(event.target)
    const {name, value, type, checked} = event.target;  
    setFormval(prevFormval => {
      return {
        ...prevFormval,
        [name] : type === 'checkbox' ? checked : value
        // [name] === checked ? formval.isBlind: !formval.isBlind
      }
    })
  }


  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(formval);
    console.log(checked);
  }
  return ( 
    <div>
      <form onSubmit={handleSubmit}>
      <br />
      <label htmlFor="firstname">Enter Firstname</label>
      <input
       type="text" 
       name='firstname'
       value={formval.firstname}
       onChange={handleChange}/>
      <br />
      <br />
       <label htmlFor="lastname">Enter lastname</label>
      <input
       type="text" 
       name='lastname'
       value={formval.lastname}
       onChange={handleChange}/>
        <br /> 
        <br /> 
       <label htmlFor="email">Enter email</label>
       <input
       type="text" 
       name='email'
       value={formval.email}
       onChange={handleChange}/>
       <br />
       <br />
       <textarea 
       name='comments'
       value={formval.comments}
       onChange={handleChange}
       />
       <br /><br />
       <input 
       type="checkbox"
       id="isBlind" 
       name="isBlind" 
       value={formval.isBlind}
      //  checked={formval.isBlind}
       onChange={handleCheck}
       />
       <label htmlFor="isBlind">Are u blind?</label>
       <br /><br />
       <fieldset>
        <legend>Pick Your Employement Status</legend>
        <input 
        type="radio" 
        name='employement'
        id='unemployed'
        value='unemployed'
        checked={formval.employement === 'unemployed'}
        onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br /><br />
        <input 
        type="radio" 
        name='employement'
        id='part-time'
        value='part-time'
        checked={formval.employement === 'part-time'}
        onChange={handleChange}
        />
        <label htmlFor="part-time">part-time</label>
        <br /><br />
        <input 
        type="radio" 
        name='employement'
        id='full-time'
        value='full-time'
        checked={formval.employement === 'full-time'}
        onChange={handleChange}
        />
        <label htmlFor="full-time">full-time</label>
       </fieldset>
       <br /><br />
       <fieldset>
        <legend>Favorite Color?</legend>
       <select 
       id="favColor"
       name='favColor'
       onChange={handleChange}
       value={formval.favColor}>
        <option value="">--Choose--</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Pink">Pink</option>
       </select>
       </fieldset>
       <br /><br />
       <button>Submit</button>
      </form>
    </div>
   );
}
 
export default App;