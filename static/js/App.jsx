import React from 'react';
import LoadingButton from './components/LoadingButton';
import axios from 'axios';

export default class App extends React.Component {

    handleClick() {
        console.log('foo')
        axios.get('http://localhost:8080/api/test').then(function(response) {
            console.log(response)
        });
    }

    render () {
        return (
            <div>
                <LoadingButton
                    onClick={this.handleClick}
                    bsStyle="primary"
                >
                    Default
                </LoadingButton>
                <p> Hello React!</p>
            </div>
        )
    }
}
