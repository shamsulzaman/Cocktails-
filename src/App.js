
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [inState, setInState] = useState()
  const [lastDrink ,setDrink] = useState({})
   

  useEffect(()=>{
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(drinks => setDrink(drinks.drinks[0]))
      .catch(err => {
        let placeHolder = [{
          strDrink: "Error with api",
          strDrinkThumb: "https://static.thenounproject.com/png/3674270-200.png"
        }]
        setDrink(placeHolder[0])
      })

  },[inState])

  const Clk = (e) =>{
    e.preventDefault() 
    setInState(e)
    
  }
  // Clk()
  const {strDrink, strDrinkThumb,strInstructions,strCategory} = lastDrink
  //console.log(lastDrink)
  
  
  return (
    <div className="App">

      

      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} width="180" height="180"/>
      <h3>{strCategory}</h3>
      <p>{strInstructions}</p>

      <button onClick={Clk}>Suprise Me</button>

     
      
    </div>
  );
}

export default App;
