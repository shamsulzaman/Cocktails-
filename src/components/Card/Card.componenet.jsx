const Card =(props)=>{
    const {strDrink, strDrinkThumb,strInstructions,strCategory} = props.drink
    return(        

        <div className="card mb-4" style={{maxWidth: "100%"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={strDrinkThumb} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{`${strDrink}`}</h5>
                    <p className="card-text">{strCategory}</p>
                    <p className="card-text"><small >{strInstructions}</small></p>
                </div>
                </div>
            </div>
        </div>




        
    )
}
export default Card