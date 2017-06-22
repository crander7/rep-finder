import React, { Component } from 'react';

import './DropDown.css';

const noSenators = ['DC', 'PR', 'AS', 'GU', 'MP', 'VI']

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e) {
        const { handleChange } = this.props;
        const selection = e.target.value;
        if (selection.length === 1) handleChange(selection, false, false);
        else {
            let noSen = false;
            noSenators.map(state => {
                if (state === selection) noSen = true;
                return true;
            });
            handleChange(selection, true, noSen);
        }
    }
    render() {
        const { options } = this.props;
        return (
            <div className="drop">
                <select
                    className="drop-down pointer"
                    onChange={this.handleSelect}
                >
                    <option 
                        value=""
                    ></option>
                    {options.map((option) =>
                        <option
                            className="highlight"
                            value={option.id}
                            key={option.id}
                        >
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
        )
    }
}

export default DropDown;