import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListUser from './ListUser.jsx';
import AddEditUser from './AddEditUser.jsx';

class Main extends React.Component{
	render(){
		return(		
			<Router>
				<div>
					<Route path="/" exact component={ListUser} />
					<Route path="/addupdate" exact component={AddEditUser} />
				</div>
			</Router>
		)
	}
}

export default Main;