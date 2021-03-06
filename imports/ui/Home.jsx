import React,{Component} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

class Home extends Component{

	getStyles() {
		return {
			root: {
				flexGrow: '1',
				backgroundImage: 'url(/images/home-bg.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			},
			slogan: {
				textAlign: 'center',
				color: '#fff',
				textTransform: 'uppercase',
				fontSize: '25px',
				fontWeight: '500',
				width: '100%',
				paddingTop: '50px',
				paddingBottom: '50px',
				backgroundColor: 'rgba(0,0,0,0.5)',
				'@media (min-width: 600px)': {
					fontSize: '50px',
					paddingBottom: '100px',
					paddingTop: '100px'
				}
			}
		};
	}

	render(){
		const styles = this.getStyles();
		return (
			<div style={styles.root}>
				<div style={styles.slogan}>
					chat room demo
				</div>
			</div>
		)

	}
}


export default Radium(Home);