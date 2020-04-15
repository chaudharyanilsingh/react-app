import React,{Component} from 'react';
class ClassComponent extends Component{
    render(){
        
        return <div>
            <h1>this is inside class Component</h1>
             <h2> hello {this.props.name}</h2> 
        </div>
    }
}
export default ClassComponent