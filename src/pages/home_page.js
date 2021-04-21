import React from 'react'
import axios from 'axios'
class HomePage extends React.Component{
	constructor(){
		super()
		this.state={
			users: [{
				name: "ananda"
			}]
		}
	}
componentWillMount(){
	console.log('0------ini mau dipasang')
	const url='https://jsonplaceholder.typicode.com/users'
	axios.get(url)
		.then(pengguna=>{
			console.log(pengguna.data);
			this.setState({
			users:pengguna.data
		})
	})
}
render(){
	console.log('1------ini sedang dipasang')
	return(
		<div>
		{this.state.users.map((user,idx) => {
			return(
				<div key={idx}>{user.name}</div>
				)
			})}
			</div>
			)
		}
	}
export default HomePage;