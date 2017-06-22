import React, { Component } from 'react';

import './RepDetails.css';

class RepDetails extends Component {
    render() {
        let pNumber = null;
        const { 
            name,
            district,
            phone,
            office,
            link
         } = this.props.rep;
         if (phone) pNumber = phone.split('-');
        return (
            <div
                className="detail-cont"
            >
                <h1 className="thin">Info</h1>
                <div>
                    <h4>
                        First Name <span>{name ? `: ${name.split(' ')[0]}` : ''}</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Last Name <span>{name ? `: ${name.split(' ')[1]}` : ''}</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        District <span>{phone ? district ? `: ${district}` : ': N/A' : ''}</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Phone Number <span>{phone ? `: (${pNumber[0]}) ${pNumber[1]}-${pNumber[2]}` : ''}</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Office <span>{office ? `: ${office}` : ''}</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Website <a href={link}>
                            <span>{link ? `: ${link}` : ''}</span>
                        </a>
                    </h4>
                </div>
            </div>
        )
    }
}

export default RepDetails;