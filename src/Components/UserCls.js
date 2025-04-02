import React from "react";


class UserCls extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            count:0,
            count1:1

        }
    }
 
    render(){
        return(
            <div>
                <h1>h1 aqrun{this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{
                   this.setState({
                    count:this.state.count+1
                   })
                }}>counter</button>
            </div>
            
        );
    }
}

export default UserCls;
