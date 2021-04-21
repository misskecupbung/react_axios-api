import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component{
	constructor(){
		super()
		this.state={
			menus:[
			{label: 'Home', path: "/"},
			{label: 'About', path: "/about"},
			{label: 'Contact', path: "/contact"}
		]
	}
}
render(){
	return(
		<ul>
		{ this.state.menus.map((menu,idx) => (
			<li key={idx} style={styles.menuLi}>
			<Link to={menu.path}>{menu.label}</Link>
			</li>
		))}
	</ul>
	)
}
}
const styles={
	menuLi: {
		display: "inline-block",
		padding: '10px'
	}
}

export default Navbar;