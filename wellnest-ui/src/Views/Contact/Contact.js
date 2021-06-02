import React,{Component} from 'react';
import './Contact.css';


export class Contact extends Component{
    render(){
        return(
            
            <div class="background">
			<div class="inner">
				<form action="">
					<h3>Contact Us</h3>
					<label class="form-group">
						<input type="text" class="f-dezign" required/>
						<span>Name</span>
						<span class="border"></span>
					</label>
					<label class="form-group">
						<input type="email" class="f-dezign" required/>
						<span for="">E-Mail</span>
						<span class="border"></span>
					</label>
					<label class="form-group" >
						<textarea name="" id="" class="f-dezign" required></textarea>
						<span for="">Message</span>
						<span class="border"></span>
					</label>
					<button>Submit </button>
				</form>
			</div>
		</div>
        )
    }
}

export default Contact;