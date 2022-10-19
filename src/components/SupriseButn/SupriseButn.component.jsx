const SupriseButn = (props) => {
    const onClk = props.click
    const newClass = props.className
    return(
        <div>
            <button className={`${newClass} btn btn-primary btn-lg .mb-2`} style={{marginTop:"10px",marginBottom:"15px"}} onClick={onClk}>Suprise Me</button>
        </div>
    )

}

export default SupriseButn