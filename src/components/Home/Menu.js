import React from "react";

import "../../styles/Home_Menu_style.css"

import { BiHome } from 'react-icons/bi';

class Menu extends React.Component {
    render () {
        return (
            <section className="menu">
                <div className="container">
                    <button className="back" onClick={() => this.props.index(0)}>
                        <BiHome />
                    </button>

                    <h3 className="menu_header">{this.props.item}</h3>
                </div>
            </section>
        );
    }
}

export default Menu;
