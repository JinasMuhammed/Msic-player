import React ,{Component } from 'react';

class About extends Component{
    render(){
        return (
            <div className="row">
            <div className="col-md-12 jumbotron">
            <h1 className="text-center"> About Us</h1> 
            
            <h2 className="text-center"><u> OUR STORY </u></h2>
            </div>
            <div className="col-md-12  ">
            <p className=" text-bold well">
       This is a sample web Application ..musics taken from spotify 
</p>
            </div>

            </div>
        );
    }
}
export default About;