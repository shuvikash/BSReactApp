import React from 'react';
import './AddEditUser.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import LocationSearchInput from './LocationSearchInput.jsx';

class AddEditUser extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
		controlledDate: moment(),
        firstName:'',
        lastName: '',
        email:'',
        mobile:'',
        age: '',
        location:''		
		};
	this.handleChangeDate = this.handleChangeDate.bind(this);
	this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
	this.handleChangeLastName = this.handleChangeLastName.bind(this);
	this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangeMobile = this.handleChangeMobile.bind(this);
	this.handleChangeAge = this.handleChangeAge.bind(this);
	this.handleChangeLocation = this.handleChangeLocation.bind(this);
	this.handlePath = this.handlePath.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChangeDate(date) {
		this.setState({ controlledDate: date });
    }
	handleChangeFirstName(e) {
		this.setState({ firstName: e.target.value });
    }
	handleChangeLastName(e) {
		this.setState({ lastName: e.target.value });
    }
	handleChangeEmail(e) {
		this.setState({ email: e.target.value });
    }
	handleChangeMobile(e) {
		this.setState({ mobile: e.target.value });
    }
	handleChangeAge(e) {
		this.setState({ age: e.target.value });
    }
	handleChangeLocation(address) {
		this.setState({ location: address });
    }
	handlePath(e) {
		window.location='/';
    }
	//submit the data to api through axios for checking user exists or not
    handleSubmit(e) {
	//to prevent default action happening
    e.preventDefault();
	let date=this.state.controlledDate.format("Do MMM YYYY")
	axios.post("http://localhost:8086/users", 
	{firstName:this.state.firstName,
	 lastName:this.state.lastName,
	 email:this.state.email, 
	 mobile:this.state.mobile,
	 age:this.state.age,
	 dob:date,
	 location:this.state.location
	}).then(res => {
        console.log(res);
        console.log(res.data);
		if(res.data=="inserted")
		{
		window.location='/'
		}
      });
    }
	
    render() {console.log(this.state.location)
     return (
	 <div>
	 <div className="header">
	  <h4> &ensp;&#9776; &emsp; Bombay Software</h4>
	 </div>
	   <div className="form_wrapper">
	   <form onSubmit={this.handleSubmit}>
	    <div className="add_update">
	      <h4>Add/Update User</h4>
	    </div>
		<div className="form-group">
		  <label htmlFor="first_name" className="cols-sm-2 control-label">First Name</label>
		  <div className="input-group col-sm-12">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-user" aria-hidden="true"></i></span>
		    <input type="text" className="form-control" name="firstname" id="first_name"  placeholder="Enter Your First Name" onChange={this.handleChangeFirstName} required />
		   </div>
		</div>   
		<div className="form-group">   
		  <label htmlFor="last_name" className="cols-sm-2 control-label">Last Name</label>
		  <div className="input-group col-sm-12">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-user" aria-hidden="true"></i></span>
		    <input type="text" className="form-control" name="lastname" id="last_name"  placeholder="Enter Your Last Name" onChange={this.handleChangeLastName} required />
		  </div>
		</div>
		<div className="form-group">
		  <label htmlFor="email" className="cols-sm-2 control-label">Email Id</label>
		  <div className="input-group col-sm-12">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
		    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" className="form-control" name="email" id="email"  placeholder="Enter Your Email" onChange={this.handleChangeEmail} required />
		  </div>
        </div>
		<div className="form-group">
		  <label htmlFor="mobile" className="cols-sm-2 control-label">Mobile</label>
		  <div className="input-group col-sm-12">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-phone" aria-hidden="true"></i></span>
		    <input type="text" pattern="[6789][0-9]{9}" className="form-control" name="mobile" id="mobile"  placeholder="Enter Your Mobile no." onChange={this.handleChangeMobile} required />
		  </div>
        </div>
		<div className="form-group">
		 <div className="row align-items-center mt-4">
		  <div className="col-sm-5">
		   <label htmlFor="age" className="cols-sm-2 control-label">Age</label>
		  </div>
		  <div className="col-sm-7">
		   <label htmlFor="dob" className="cols-sm-2 control-label">Date of Birth</label>
		  </div>
		 </div>
		 
		  <div className="row align-items-center mt-4">
          <div className="col-sm-5">
            <input type="number" name="age" min="1" max="100" placeholder="Enter age" className="form-control" onChange={this.handleChangeAge} required />
          </div>
          <div className="col-sm-7">
			
			<DatePicker
             onChange={this.handleChangeDate}
             selected={this.state.controlledDate}
		     dateFormat="DD/MM/YYYY"
             withPortal
			 className="form-control"
            />
          </div>
		  </div>
        </div>
		<div className="form-group">
		  <label htmlFor="location" className="cols-sm-2 control-label">Location</label>
		  <div className="input-group col-sm-12">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i></span>
			<LocationSearchInput onChangeLocation={this.handleChangeLocation}/>
		  </div>
        </div>
		<br />
		<div className="form-group ">
		<div className="row align-items-center mt-4"> 
          <div className="col-sm-7">
            <button type="button" className="btn btn-danger" onClick={this.handlePath}><span className="glyphicon glyphicon-remove"></span>Cancel</button>
          </div>
		  <div className="col-sm-5">
            <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-ok"></span>Add/Update User</button>
          </div>
        </div>
		</div></form>
      </div>
	 </div>
	 );
    }
}

export default AddEditUser;	