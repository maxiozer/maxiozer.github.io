import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                        <strong>I'm Maxi</strong>
                    </h1>
                    <h1>
                        <p>Senior Full-Stack web developer and Technical Leader.</p>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
