import React from "react";

import "../../styles/Home_Nav_style.css"

import logo from "../../image/img/logo.png"

import { BiCoffeeTogo } from 'react-icons/bi';
import { TbTeapot, TbSalad } from 'react-icons/tb';
import { CiPizza } from 'react-icons/ci';
import { CiBowlNoodles } from 'react-icons/ci';
import { MdOutlineSoupKitchen } from 'react-icons/md';
import { FaCocktail } from 'react-icons/fa';

class Nav extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            menu: [ "Кофе", "Чай", "Пицца", "Паста", "Супы", "Салаты", "Коктейли", "Боулы", "Смузи", "Сок", "Какао", "Лимонад" ]
        }
    }

    render () {
        return (
            <nav className="nav">
                <div className="nav_opacity" />
                <div className="container">
                    <img src={logo} className="nav_logo" 
                        onMouseMove={(e) => e.target.style.transform = `perspective(150px) rotateY(${(e.nativeEvent.offsetY - e.target.offsetWidth / 2) / 6}deg) rotatex(${((e.nativeEvent.offsetX - e.target.offsetHeight / 2) / 6) * -1}deg)`}
                        onMouseOut={(e) => e.target.style.transform = ``}
                    />

                    <div className="nav_ul">
                        {
                            this.state.menu.map((item) => 
                                <a className="nav_li" href="" > { item } </a>
                            )
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
