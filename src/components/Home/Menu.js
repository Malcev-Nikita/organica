import React from "react";
import anime from 'animejs/lib/anime.es.js';

import "../../styles/Home_Menu_style.css"

import Bottom_Nav from "./Bottom_Nav";
import Pagination from "./Pagination";

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
            screen: 0,
        }
    }

    CheckingLocalStorage() {
        if (JSON.parse(localStorage.getItem("favorite")) != null) {
            JSON.parse(localStorage.getItem("favorite")).map((item, key) => {
                Array.from(document.querySelectorAll('.menu_card')).map(menu => {
                    if (item.name === menu.querySelector('h3').textContent) {
                        menu.querySelector('.menu_favorite').classList.add("menu_favorite_favorite")
                    }
                })
            })
        }
        else {
            Array.from(document.querySelectorAll('.menu_card')).map(menu => {
                menu.querySelector('.menu_favorite').classList.remove("menu_favorite_favorite")
                anime({
                    targets: menu.querySelector('svg'),
                    color: '#fff',
                    translateY: 0,
                    translateX: 0,
                    scale: 1,
                    duration: 0,
                })
            })
        }
    }    

    UnFavorite(item) {
        Array.from(document.querySelectorAll('.menu_card')).map(menu => {
            if (item.name === menu.querySelector('h3').textContent) {
                menu.querySelector('.menu_favorite').classList.remove("menu_favorite_favorite")
                anime({
                    targets: menu.querySelector('svg'),
                    color: '#fff',
                    translateY: 0,
                    translateX: 0,
                    scale: 1,
                    duration: 0,
                })
            }
        })
    }

    DeleteItemFavoriteList(key) {
        let favorite_menu_copy = []

        if (JSON.parse(localStorage.getItem("favorite")).length === 1) {
            favorite_menu_copy = []
            localStorage.removeItem("favorite")

            this.setState({
                favorite_menu: [],
            })
        }
        else {
            favorite_menu_copy = this.state.favorite_menu
            favorite_menu_copy.splice(key, 1)
            
            this.setState({
                favorite_menu: favorite_menu_copy,
            })

            localStorage.setItem("favorite", JSON.stringify(this.state.favorite_menu))
        }
    }

    AddItemFavoriteList(e, item) {
        let favorite_menu_copy = []

        try {
            let elem = e.target.localName === "svg" ? (e.target) : (e.target.querySelector('svg'))

            e.target.localName === "svg" ? (e.target.parentNode.classList.add("menu_favorite_favorite")) : 
                                        (e.target.classList.add("menu_favorite_favorite"))

            favorite_menu_copy = this.state.favorite_menu
            favorite_menu_copy.push(item)

            this.setState({
                favorite_menu: favorite_menu_copy,
            })

            localStorage.setItem("favorite", JSON.stringify(this.state.favorite_menu))

            anime({
                targets: elem,
                color: '#000',
                translateY: -elem.getBoundingClientRect().y + 39.5,
                translateX: 1920 - elem.getBoundingClientRect().x - 69.5,
                duration: () => anime.random(1200, 1800),
            })

            setTimeout(() => anime({targets: elem, scale: 0}), 1000);

            setTimeout(() => 
                anime({
                    targets: document.querySelectorAll(".favorite svg"), 
                    scale: [ 1.4, 1],
                    duration: 1000
                }), 1100);
        }
        catch {

        }
    }

    render () {
        console.log(document.getElementsByClassName('page'))

        if (JSON.parse(localStorage.getItem("favorite")) != null && this.state.favorite_menu.length === 0) {
            this.setState({
                favorite_menu: JSON.parse(localStorage.getItem("favorite"))
            })
        }

        this.CheckingLocalStorage()

        return (
            <section className="menu">
                <div className="container">
                    <button className="back" onClick={() => this.props.chandeIndexItem(0)}>
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
                                        this.UnFavorite(item)

                                        this.DeleteItemFavoriteList(key)
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
                                        <div className="menu_favorite" onClick={(e) => {
                                            this.AddItemFavoriteList(e, item)
                                        }}>
                                            <AiOutlineHeart />
                                        </div>
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

                    <Pagination index={this.props.index} />

                    <Bottom_Nav menu={this.props.menu} chandeIndexItem={this.props.chandeIndexItem} slider={this.props.slider} />
                </div>
            </section>
        );
    }
}

export default Menu;
