import React from "react";

import "../../styles/Home_Menu_style.css"

import { BiHome } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

const menu = require('../../Menu.json')

class Menu extends React.Component {
    render () {
        return (
            <section className="menu">
                <div className="container">
                    <button className="back" onClick={() => this.props.index(0)}>
                        <BiHome />
                    </button>

                    <button className="favorite" onClick={() => this.props.changeFavorite(this.props.favorite)}>
                        <AiOutlineHeart />
                    </button>

                    <div className="favorite_container">

                    </div>

                    <h3 className="menu_header">{this.props.item}</h3>

                    <div className="menu_container">
                    { 
                        menu.map(item => {
                            if (item.categoty === this.props.item) {
                                return (
                                    <div className="menu_card">
                                        <img className="menu_card_img" src={`./menu/${item.photo}`} alt="" />
                                        <h3 className="menu_card_header">{item.name}</h3>
                                        <p className="menu_card_weight">{item.weight} гр.</p>
                                        <p className="menu_card_price">{item.price} ₽</p>
                                    </div>
                                )
                            }

                            else {
                                return false
                            }
                        })   
                    }
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;
