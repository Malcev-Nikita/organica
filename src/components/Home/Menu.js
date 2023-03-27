import React from "react";

import "../../styles/Home_Menu_style.css"

import { BiHome } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiBookmarkMinus } from 'react-icons/ci';

const menu = require('../../Menu.json')

class Menu extends React.Component {
    constructor (props) {
        super(props) 

        this.state = {
            favorite_menu: []
        }
    }

    render () {
        const { favorite_menu } = this.state;

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
                    {
                        // (document.cookie != null) ? (
                        //     favorite_menu.map((item, key) => (
                        //         <div className="favorite_card">
                        //             <img className="favorite_card_img" src={`./menu/${item.photo}`} alt="" />
                        //             <h3 className="favorite_card_header">{item.name}</h3>
                        //             <p className="favorite_card_price">{item.price} ₽</p>
                        //             <CiBookmarkMinus className="favorite_card_minus" onClick={() => localStorage.removeItem("favorite")} />
                        //         </div>
                        //     ))
                        // ) : ("")
                    }
                    </div>

                    <h3 className="menu_header">{this.props.item}</h3>

                    <div className="menu_container">
                    { 
                        menu.map(item => {
                            if (item.categoty === this.props.item) {
                                return (
                                    <div className="menu_card">
                                        <button className="menu_favorite" onClick={() => {
                                            if (JSON.parse(localStorage.getItem("favorite")) != null) {
                                                console.log(1)
                                                this.setState({
                                                    favorite_menu: JSON.parse(localStorage.getItem("favorite"))
                                                })
                                            }
                                            console.log(this.state.favorite_menu)

                                            this.setState({
                                                favorite_menu: this.state.favorite_menu.push(item)
                                            })
                                            // favorite_menu.push(item)
                                            // console.log(favorite_menu)
                                            // console.log(JSON.parse(localStorage.getItem("favorite")))
                                            localStorage.setItem("favorite", JSON.stringify(this.state.favorite_menu))
                                            // if(localStorage.getItem("favorite"))
                                            // console.log(localStorage.getItem("favorite"))
                                            // console.log(document.cookie)
                                            // document.cookie = `favorite = ${JSON.stringify(this.state.JSON)}`
                                            // console.log(JSON.parse(document.cookie.slice(9, document.cookie.length)))
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
