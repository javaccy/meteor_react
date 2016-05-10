import React,{Component} from 'react';
import {Link} from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';
class NavBar extends Component{
	handChange(value){
		this.context.router.push(value);
		this.setState({tabIndex:value})
		console.log(value);
	}
	constructor(props){
		super(props);
		this.state = {tabIndex:"/"}
	}

	componentWillMount(){
		this.setState({
			tabIndex: this.getSelectedIndex()
		});
	}

	getSelectedIndex(){
		return this.context.router.isActive('/', true) ? '/' :
				this.context.router.isActive('/signup') ? '/signup' :
				this.context.router.isActive('/login') ? '/login' : '';
	}

	render(){
		let styles = {
			root:{
				height:'64px',
				backgroundColor:'#00bcd4',
				boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
			},
			tabs:{
				width:'390px',
				position:'absolute',
				right:'60px',
				textTransform:'uppercase'
			},
			tab:{
				height:'64px',
				color:'#fff'
			},
			inkBar:{
				height:'4px',
				marginTop:'-4px'
			}
		}
		return (
				<div style={styles.root}>
					<Tabs value={this.state.tabIndex} onChange={this.handChange.bind(this)}
						  style={styles.tabs}
						  inkBarStyle={styles.inkBar}
						  tabItemContainerStyle={{backgroundColor:'transparent'}}>
						<Tab label='Home' value="/" style={styles.tab}/>
						<Tab label='Sign Up' value="/signup" style={styles.tab}/>
						<Tab label='Log In' value="/login" style={styles.tab}/>
					</Tabs>
				</div>				
			)
	}
}


NavBar.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
	router: React.PropTypes.object.isRequired

}

export default NavBar;