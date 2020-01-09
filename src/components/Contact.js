import React ,{Component } from 'react';

class Contact extends Component{
    
    render(){
        return (
            <div className="row">
            <div className="col-md-12 jumbotron">
            <h1 className="text-center r"> Contact us</h1>
            </div>
            <div className="col-md-12 jumbotron  ">
            <form action="" className="form-group">
            <label for="name"> Name </label>
            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" />
            
            <label for="email" > Email</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="enter your email"/> 
            
            <label for="text-area">message </label>
            <textarea row="4" name="message" id="message" className="form-control" placeholder="enter your message" >  </textarea>
            </form>
            <button className="btn btn-info"  > submit</button> 
            

 

            </div>
            </div>
        );
    }
}
export default Contact;