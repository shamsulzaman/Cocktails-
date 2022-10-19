const SupriseButn = (props) => {
    const onClk = props.click
    const newClass = props.className
    return(
        <div>
            <button className={`${newClass} btn btn-primary btn-lg`} style={{marginTop:"10px"}} onClick={onClk}>Suprise Me</button>
        </div>
    )

}

export default SupriseButn