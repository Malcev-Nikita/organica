import React from "react";

import "../../styles/Home_Nav_style.css"

import logo from "../../image/img/logo.png"


class Nav extends React.Component {
    render () {
        return (
            <nav className="nav">
                <div className="nav_opacity"> 
                    <div className="container">
                        <img src={logo} className="nav_logo" 
                            onMouseMove={(e) => e.target.style.transform = `perspective(150px) rotateY(${(e.nativeEvent.offsetY - e.target.offsetWidth / 2) / 6}deg) rotatex(${((e.nativeEvent.offsetX - e.target.offsetHeight / 2) / 6) * -1}deg)`}
                            onMouseOut={(e) => e.target.style.transform = ``}
                        />

                        <div className="nav_ul">
                        {
                            this.props.menu.map((item) => 
                                <a className="nav_li" onClick={() => this.props.index(this.props.menu.indexOf(item) + 1)} > { item } </a>
                            )
                        }
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
