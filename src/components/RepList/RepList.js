import React, { Component } from 'react';

import './RepList.css';

class RepList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const { showDetails, reps } = this.props;
        let selection = e.target.innerText;
        reps.map((rep, i) => {
            if (rep.name === selection) selection = rep;
            return true;
        });
        showDetails(selection)
    }
    render() {
        const { reps } = this.props;
        return (
            <div
                className="list-cont"
            >
                <h1
                    className="thin"
                >
                    List / <span className="blue">Representatives</span>
                </h1>
                <div className="list-header">
                    <h4>Name</h4>
                    <h4>Party</h4>
                </div>
                <div 
                    className="scroll"
                >
                    {reps && reps[0] && reps.map((rep) =>
                        <div 
                            className="list-data"
                            key={rep.phone}
                        >
                            <h4
                                className="pointer"
                                onClick={this.handleClick}
                            >
                            {rep.name}</h4>
                            <h4>{rep.party}</h4>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default RepList;