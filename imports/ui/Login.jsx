import React,{Component} from 'react';
import {Link} from 'react-router';

class Login extends Component{


	render(){
		return (

				 <div>
			        <div>
			          <Link to='/'>Login</Link>
			          <Link to='/signup'>Sign Up</Link>
			          <Link to='/login'>Log In</Link>
			        </div>
			        This is Login page.
			      </div>
			)
	}
}


export default Login;