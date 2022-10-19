import './App.css';
import Card from './components/Card/Card.componenet';
import SupriseButn from './components/SupriseButn/SupriseButn.component';
import Ingredients from './components/Ingredient/Ingredient.component';
import SendEmail from './components/SendEmail/SendEmail.component';
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
          strDrink: "Sorry!",
          strDrinkThumb: "https://static.thenounproject.com/png/3674270-200.png"
        }]
        setDrink(placeHolder[0])
      })

  },[inState])

  const Clk = (e) =>{
    e.preventDefault() 
    setInState(e)   
    
  }
let count = 1
let ingLi = []
Object.entries(lastDrink).forEach(v => {
     if(v[0] === `strIngredient${count}` && v[1] != null){
        ingLi.push(" [" + v[1]+"] ")
        count += 1
    }
}
)
const {strGlass} = lastDrink

  
  return (
    <div className="App">
        
      <div className='container'> 
        <Card drink={lastDrink}/>
        <Ingredients glass={strGlass}Ingredients={ingLi}/> 
        <SupriseButn className="col-md-2 .offset-md-2" click={Clk}/>
        
      </div>
      <SendEmail/>

      
      
      

      
      

     
      
    </div>
  );
}

export default App;
