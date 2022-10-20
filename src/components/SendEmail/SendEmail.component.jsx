
const SendMail = (props) =>{
    const test = props.onClick
    return(
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Get the recipe</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Get the recipe</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="model-form-cont" className="modal-body">
                    <form >
                    <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                        <input id="client-email" type="email" className="form-control" required placeholder="example@xyz.com" />
                    </div>
                    {/* <div className="mb-3">
                        <label for="message-text" className="col-form-label">Message:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                    </div> */}
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="send-button" type="button" onClick={test} className="btn btn-primary" >Get It</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
export default SendMail