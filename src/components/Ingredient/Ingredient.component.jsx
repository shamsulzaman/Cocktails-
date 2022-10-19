import "./ingredient-box.sytle.css"
const Ingredients = (props) => {
    const Ingredients = props.Ingredients
    const glassType = props.glass
    let count = 1
    //let paraP = document.querySelector(".paraP")
    

    // Ingredients.forEach(element => {
    //   paraP.append(element+" ")
    //   console.log(element)
        
        
    // });
    

    // <div className={`ingredient-container ${props.className}`} >
    //     <h3>Ingredient List</h3>
    //     {Ingredients.map((i)=>{
    //         count += 1
    //         return (
    //             <p key={count}>{i}</p>
    //         )
    //     })}
    // </div>

    return(

        <div className="card" style={{width: "100%"}}>
            
            <div className="card-body">
                <h5 className="card-title">Ingredient List</h5>
                <p className="paraP">{Ingredients}</p>
                
                    
                <p>{glassType}</p>

                
                
            </div>
        </div>




    )

}

export default Ingredients