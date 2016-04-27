import React,{Component} from 'react';
import {Link} from 'react-router';

class SignUp extends Component{


	render(){
		return (

				 <div>
			        <div>
			          <Link to='/'>SignUp</Link>
			          <Link to='/signup'>Sign Up</Link>
			          <Link to='/login'>Log In</Link>
			        </div>
			        This is signUp page.
			      </div>
			)
	}
}


export default SignUp;