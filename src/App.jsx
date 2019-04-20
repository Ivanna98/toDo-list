import {List} from './components/List';
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }


    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, { text: this.state.term, id: new Date().getTime()} ]
        });
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                   <input value={this.state.term} onChange={this.onChange} />
                   <button>Submit</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
}