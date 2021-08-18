import React from 'react';

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
            this.state={
                hasError:false
            }
        
    }
    componentDiCatch(error, info){
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            return<h1> oops</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundry;
