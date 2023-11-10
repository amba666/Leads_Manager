import React, {Component} from "react";


export  class Form extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }
    render(){
        return(
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead Form </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                               name="name" onChange={this.onChange} value={name}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                               name="email" onChange={this.onChange} value={email}/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea type="text" className="form-control"
                               name="message" onChange={this.onChange} value={message}/>
                    </div>
                    <div className="form-group">

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>


                </form>
             </div>
        )
    }
}

export default Form
