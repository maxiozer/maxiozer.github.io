import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h2>
                        <strong>Maximiliano David Ozernickz</strong>
                    </h2>
                    <h1>
                        <p>Software Engineer, Tech Lead.</p>
                    </h1>
                    <Footer />
                </div>
            </header>
        )
    }
}

export default Header
