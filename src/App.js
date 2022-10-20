import './App.css';
import Card from './components/Card/Card.componenet';
import SupriseButn from './components/SupriseButn/SupriseButn.component';
import Ingredients from './components/Ingredient/Ingredient.component';
import SendEmail from './components/SendEmail/SendEmail.component';
import { useState, useEffect } from 'react'

function App() {
  const [inState, setInState] = useState()
  const [lastDrink ,setDrink] = useState({})
  const {strGlass} = lastDrink
  let count = 1
  let ingLi = []  
   

  useEffect(()=>{
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(drinks => setDrink(drinks.drinks[0]))
      .catch(err => {
        let placeHolder = [{
          strDrink: "Sorry! The Network is down",
          strDrinkThumb: "https://static.thenounproject.com/png/3674270-200.png"
        }]
        setDrink(placeHolder[0])
      })

  },[inState])

  const Clk = (e) =>{
    e.preventDefault() 
    setInState(e)   
    
  }

Object.entries(lastDrink).forEach(v => {
     if(v[0] === `strIngredient${count}` && v[1] != null){
        ingLi.push(" [" + v[1]+"] ")
        count += 1
    }
}
)

const Test =  (e) =>{
  e.preventDefault()
  let userMail =  document.querySelector("#client-email")
  let sendBtn =  document.querySelector("#send-button")
  let formCont =  document.querySelector("#model-form-cont")
  
  console.log("clicked" + userMail.value)
  
  const {strDrink,strInstructions} = lastDrink

  fetch(`https://script.google.com/macros/s/AKfycbzxp9oQtblMd2AblYt7TpT3vkfUr2PN8JmkaR5M4Q42ceYZuL8Kym3mlnYx7EnyZ__L/exec?username=${userMail.value}&name=${strDrink}&ingredients=${ingLi}&instructions=${strInstructions}`)
    .then(resp => resp.json())
    .then(data => console.log(data))

  sendBtn.setAttribute("disabled", "")
  formCont.innerHTML =`<p>Thank you ${userMail.value}! You should recieve this information shortly!</p>`

}

  return (
    <div className="App">
        
      <div className='container bg-primary bg-gradient p-2 bg-opacity-25' > 
        <Card drink={lastDrink}/>
        <Ingredients glass={strGlass}Ingredients={ingLi}/> 
        <SupriseButn className="col-md-2 .offset-md-2" click={Clk}/>
        <SendEmail onClick = {Test}/>
        
      </div>
      <footer className='text-bg-dark p-3'>        
        <p>Cocktails-Bar</p>
        <span >© 2022 Company, Inc</span>
        <span > Powered By</span>
        <a href="https://www.thecocktaildb.com/" >
          <p>CocktailDB</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
