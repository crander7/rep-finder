import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './../DropDown/DropDown';
import Header from './../Header/Header';
import RepDetails from './../RepDetails/RepDetails';
import RepList from './../RepList/RepList';
import states from './../../states.json';
import reps from './../../repTypes';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rep: {},
            type: '',
            state: '',
            noSenator: false,
            reps: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRepSelect = this.handleRepSelect.bind(this);
    }
    handleChange(val, state, senators) {
        if (state) this.setState({ state: val, noSenator: senators });
        else {
            val = Number(val) ? 'representatives' : 'senators';
            this.setState({ type: val });
        }
    }
    handleRepSelect(repInfo) {
        this.setState({ rep: repInfo });
    }
    async handleSubmit() {
        this.setState({ reps: [], rep: {} });
        if (!this.state.type || !this.state.state) alert('You must select a representative type and state!');
        else {
            if (this.state.noSenator && this.state.type === 'senators') alert('The selected state has no Senators. Try a different state or search representatives.');
            else {
                const res = await axios.get(`/${this.state.type}/${this.state.state}`);
                this.setState({ reps: res.data.results });
            } 
        }
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div className="search-cont">
                    <DropDown options={reps} handleChange={this.handleChange} />
                    <DropDown options={states} handleChange={this.handleChange} />
                    <button
                        className="pointer"
                        type="button"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
                <div className="data-disp">
                    <RepList reps={this.state.reps} showDetails={this.handleRepSelect} />
                    <RepDetails rep={this.state.rep}/>
                </div>
            </div>
        );
    }
}

export default App;
