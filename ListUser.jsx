import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import './ListUser.css';

class ListUser extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
		 users: [],
         currentPage: 1,
         itemPerPage: 5,
		 activePage: 2		 
		};
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber,currentPage: pageNumber});
    }
	//To retrieve the data before the initial render from api through  axios
	componentWillMount(){
		axios.get("http://localhost:8086/users")
		  .then(res => {
			const users= res.data;
			this.setState({ users });
		  })
    }
    handleNextClick() {
		const page=Math.ceil(this.state.users.length / this.state.itemPerPage);
		if(this.state.currentPage<page)
		{
		const next=this.state.currentPage+1;
        this.setState({
         currentPage: next,activePage: next
		});
		}
    }
	handlePreviousClick() {
		if(this.state.currentPage>1)
		{
		const next=this.state.currentPage-1;
        this.setState({
         currentPage: next,activePage: next
		});
		}
    }
	render() {

	// Logic for displaying users
    const indexOfLastUser = this.state.currentPage * this.state.itemPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.itemPerPage;
    const currentUser = this.state.users.slice(indexOfFirstUser, indexOfLastUser);
	
	return (
	
	<div className="container">
	  <div className="header">
	  <h4> &ensp;&#9776; &emsp; Bombay Software</h4>
	  </div>
	<div className="table-responsive"> 	  
    <table className="list">
     <thead>
      <tr className="tableheader">
	    <th>First Name</th>
        <th>Last Name</th>
		<th>Email</th>
		<th>Mobile</th>
		<th>Age</th>
		<th>DOB</th>
		<th>Location</th>
        <th>Action</th>
      </tr>
     </thead>
     <tbody>
	  { 
	  currentUser.map((user,i) => 
	  <tr key={'user_' + i}>
	    <td>{user.firstName}</td>
	    <td>{user.lastName}</td>
	    <td>{user.email}</td>
	    <td>{user.mobile}</td>
	    <td>{user.age}</td>
	    <td>{user.dob}</td>
	    <td>{user.location}</td>
		<td><Link to='/addupdate'>Edit</Link></td>
	  </tr>
	  )}
      </tbody>
    </table>
   </div>
      <div className="np-btn">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <button type="button" className="btn btn-info" style={{marginRight:'895px'}} onClick={this.handlePreviousClick}>Previous</button>
        <button type="button" className="btn btn-info" onClick={this.handleNextClick}>&ensp;&emsp;Next&ensp;&emsp;</button>
      </div>
      <div className="pagination">
	   <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemPerPage}
          totalItemsCount={Math.ceil(this.state.users.length)}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange}
       />
	   </div>
	</div>
	 );
    }
}

export default ListUser;	