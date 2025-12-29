import React from 'react'
import Lawicon from "../assets/lawicon.png"
import { Link } from 'react-router-dom'
import Callicon from "../assets/callicon.png"
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <>
            <section className='header-sec'>
                <div className="container">
                    <div className="header-start">
                        <div className="header-start-left">
                            <div className="header-logo">
                                <a href="/">
                                    <img src={Lawicon} alt="logo" />
                                </a>
                            </div>

                        </div>
                        <div className="header-start-middle">
                            <div className="header-links">
                                <Link to='/'>Home</Link>
                                <Link to='/service'>service</Link>
                                {/* <Link to='#about'>About</Link> */}
                                 <a href="#about">About</a>
                                <a href="#serve">contact</a>
                            </div>
                        </div>
                        <div className="header-start-right">
                            <div className="header-rgt-icn">
                                <img src={Callicon} alt="" />
                            </div>
                            <div className="header-rgt-toy">
                                <span>8639062427</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header