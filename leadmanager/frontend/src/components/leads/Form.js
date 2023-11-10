import React, {Component} from "react";
import { connect } from "react-redux";
import {addLead, deleteLead, getLeads} from "../../actions/leads";
import  ProtoTypes from 'prop-types';
import {Leads} from "./Leads";
import PropTypes from "prop-types";


export  class Form extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead:  PropTypes.func.isRequired
    }
    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e =>{
        e.preventDefault();
        const {name, email, message }=this.state;
        const lead = {name, email, message };
        this.props.addLead(lead);

    };
    render(){
        const {name, email, message }=this.state;
        return(
            <div className="card card-body mt-4 mb-4">
                <h2 className="font-weight-bold">Add Lead Form </h2>
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

// const mapStateToProps = state => ({
//     leads: state.leads.leads
// });

export default connect(null , { addLead })(Form);
