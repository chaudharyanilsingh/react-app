import React, {Component} from 'react';
class Statedemo extends Component{

    constructor(){
        super()
        this.state={
            message: 0
        
        };
    }

changefun() {
    this.setState(prevState => ({
    message: prevState.message+1
    }))

}
changeText(event)
{
    this.setState({
        firstname:event.target.value
        
    })
    
}
changefun2(){
    this.changefun();
    this.changefun();
}

    render(){
    return<div>
        <h1> number :  {this.state.message}</h1>
        <button onClick={()=>this.changefun2()}>change</button>
        <input type="text" id="firstname" onChange={this.changeText.bind(this)} />
    <h2> name is : {this.state.firstname}</h2>

        </div>
    
    }
}
export default Statedemo;