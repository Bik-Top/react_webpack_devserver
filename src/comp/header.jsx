import React, {Component} from 'react';
//import {Component} from 'react-dom';





class Header extends React.Component{
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>1 - {this.props.name}</li>
                        <li>2 - {this.props.age}</li>
                        <li>3 - {this.props.sex}</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
