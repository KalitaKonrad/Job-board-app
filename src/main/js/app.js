import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react');
// const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employers: []};
    }


    componentDidMount() {
        // SFETCHOWAC DANE Z API!
        
        // client({
        //     method: "GET",
        //     path: '/api/employers'
        // }).done(res => this.setState({employers: res.entity._embedded.employers}));
    }

    render() {
        return (
            <div>
                BENIZ
                <EmployerList employers={this.state.employers}/>
            </div>
        )
    }
}