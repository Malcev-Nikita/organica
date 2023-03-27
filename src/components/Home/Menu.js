import React from "react";
import anime from 'animejs/lib/anime.es.js';

import "../../styles/Home_Menu_style.css"

import { BiHome } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiBookmarkMinus } from 'react-icons/ci';

const menu = require('../../Menu.json')

class Menu extends React.Component {
    constructor (props) {
        super(props) 

        this.state = {
            favorite_menu: [],
            index: 0,
            i: 0,
        }
    }

    render () {
        let favorite_menu_copy = []

        if (JSON.parse(localStorage.getItem("favorite")) != null && this.state.favorite_menu.length === 0) {
            this.setState({
                favorite_menu: JSON.parse(localStorage.getItem("favorite"))
            })
        }

        return (
            <section className="menu">
                <div className="container">
                    <button className="back" onClick={() => this.props.index(0)}>
                        <BiHome />
                    </button>

                    <button className="favorite" onClick={() => {
                        this.props.changeFavorite(this.props.favorite) 
                    }}>
                        <AiOutlineHeart />
                        {
                            JSON.parse(localStorage.getItem("favorite")) != null ? (
                                <p>{ JSON.parse(localStorage.getItem("favorite")).length }</p>
                            ) : ("")
                        }
                    </button>

                    <div className="favorite_container">
                    {
                        (JSON.parse(localStorage.getItem("favorite")) != null) ? (
                            JSON.parse(localStorage.getItem("favorite")).map((item, key) => (
                                <div className="favorite_card">
                                    <img className="favorite_card_img" src={`./menu/${item.photo}`} alt="" />
                                    <h3 className="favorite_card_header">{item.name}</h3>
                                    <p className="favorite_card_price">{item.price} ₽</p>
                                    <CiBookmarkMinus className="favorite_card_minus" onClick={() => {
                                        if (JSON.parse(localStorage.getItem("favorite")).length === 1) {
                                            this.setState({
                                                favorite_menu: []
                                            })
                                            favorite_menu_copy = []
                                            localStorage.removeItem("favorite")
                                        }
                                        else {
                                            favorite_menu_copy = this.state.favorite_menu
                                            favorite_menu_copy.splice(key, 1)
                                            
                                            this.setState({
                                                favorite_menu: favorite_menu_copy
                                            })
    
                                            localStorage.setItem("favorite", JSON.stringify(this.state.favorite_menu))
                                        }
                                    }} />
                                </div>
                            ))
                        ) : ("")
                    }
                    </div>

                    <h3 className="menu_header">{this.props.item}</h3>

                    <div className="menu_container">
                    { 
                        menu.map(item => {
                            if (item.categoty === this.props.item) {
                                return (
                                    <div className="menu_card">
                                        <button className="menu_favorite" onClick={(e) => {
                                            // anime({
                                            //     targets: e.target.localName === "svg" ? (e.target.parentNode) : (e.target),
                                            //     padding: 0,
                                            //     width: 0,
                                            //     height: 0,
                                            //     duration: 300,
                                            // })
                                            let elem = e.target.localName === "svg" ? (e.target) : (e.target.querySelector('svg'))
                                            console.log(elem.getBoundingClientRect())
                                            anime({
                                                targets: elem,
                                                color: '#000',
                                                translateX: 1920 - elem.getBoundingClientRect().x - 70,
                                                translateY: -elem.getBoundingClientRect().y + 40,
                                            })

                                            favorite_menu_copy = this.state.favorite_menu
                                            favorite_menu_copy.push(item)

                                            this.setState({
                                                favorite_menu: favorite_menu_copy
                                            })

                                            localStorage.setItem("favorite", JSON.stringify(this.state.favorite_menu))
                                        }}>
                                            <AiOutlineHeart />
                                        </button>
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
