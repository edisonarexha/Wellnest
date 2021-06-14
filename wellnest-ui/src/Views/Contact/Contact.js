import React, { Component } from 'react';
import './Contact.css';
import NavBar from '../NavBar';


export class Contact extends Component {

	state = {
		Name: "",
		Email: "",
		Message: "",
	};
	setName = (event) => {
		this.setState({ Name: event.target.value });
	}
	setEmail = (event) => {
		this.setState({ Email: event.target.value });
	}
	setMessage = (event) => {
		this.setMessage({ Message: event.target.value });
	}
	userMessage = () => {
		console.log("test")
		fetch('https://localhost:5000/api/Contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(this.state)
		}).then(() => {
		})
	}

	render() {
		return (
			<div>
				<NavBar />


				<div class="background">

					<div class="inner">
						<form action="">
							<h3 className='cu-text'>Contact Us</h3>
							<label class="form-group">
								<input type="text" class="f-dezign" value={this.state.Name} onChange={this.setName} required />
								<span>Name</span>
								<span class="border"></span>
							</label>
							<label class="form-group">
								<input type="email" class="f-dezign" value={this.state.Email} onChange={this.setEmail} required />
								<span for="">E-Mail</span>
								<span class="border"></span>
							</label>
							<label class="form-group" >
								<textarea name="" id="ta" class="f-dezign" defaultValue={this.state.Message} onChange={this.setMessage} required></textarea>
								<span for="">Message</span>
								<span class="border"></span>
							</label>
							<button onClick={() => this.userMessage()} className='button'>Submit </button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;