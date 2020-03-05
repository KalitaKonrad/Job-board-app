import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    ping = () => {
        axios.get("http://localhost:8080/pong").then(res => {
            alert('Received message from server!')
        }).catch(err => {
            alert('Something went wrong!')
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.ping}>Ping me!</button>
            </div>
        );
    }

}

export default App;
