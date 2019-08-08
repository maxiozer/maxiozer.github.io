import React from 'react'
import ReactGA from 'react-ga';

import cv from "../assets/pdf/Maximiliano-David-Ozernickz-CV.pdf"

class Footer extends React.Component {
    registerEvent = (label) => ReactGA.event({
        category: 'Footer',
        action: 'link',
        label: label
    });

    
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a onClick={this.registerEvent.bind(this, "Linkedin")} href="https://www.linkedin.com/in/maximilianoozernickz" target="__blank"  rel="noopener noreferrer" className="icon fa-linkedin"></a></li>
                        <li><a onClick={this.registerEvent.bind(this, "CV")} href={cv} target="_blank"  rel="noopener noreferrer"className="icon fa-id-badge"><span className="label">Email</span></a></li>
                        <li><a onClick={this.registerEvent.bind(this, "Mail")} href="mailto:maxoozer@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
