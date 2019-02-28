import React from 'react'

import cv from "../assets/pdf/Maximiliano-David-Ozernickz-CV.pdf"

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/maximilianoozernickz" target="__blank" className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
                        <li><a  href={cv} target="_blank" className="icon fa-id-badge"><span className="label">Email</span></a></li>
                        <li><a  href="mailto:maxoozer@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    
                    </ul>
                    <ul className="copyright">
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
