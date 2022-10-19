const Ingredients = (props) => {
    const Ingredients = props.Ingredients
    const glassType = props.glass

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