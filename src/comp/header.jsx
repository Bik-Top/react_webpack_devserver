import React, {Component} from 'react';
//import {Component} from 'react-dom';





class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        };

        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        let as = this;
        setTimeout( function () {
            return as.setState({data: 'Data updated from the child component...'})
        }, 1000)
    }



    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <div>
                                <input type = "text" value = {this.state.data}
                                       onChange = {this.updateState} />
                                <h4>{this.state.data}</h4>
                            </div>
                            <div>
                                <Content myDataProp = {this.state.data}
                                         updateStateProp = {this.updateState}></Content>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button onClick = {this.updateState}>CLICK</button>
                                <h4>{this.state.data}</h4>
                            </div>
                        </li>
                        <li>1 - {this.props.name}</li>
                        <li>2 - {this.props.age}</li>
                        <li>3 - {this.props.sex}</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

class Content extends React.Component {

    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}>CLICK</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

    export default Header;
