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
            menu: [ ["Кофе", <BiCoffeeTogo />], 
                    ["Чай", <TbTeapot />], 
                    ["Пицца", <CiPizza />], 
                    ["Паста", <CiBowlNoodles />], 
                    ["Супы", <MdOutlineSoupKitchen />], 
                    ["Салаты", <TbSalad />], 
                    ["Коктейли", <FaCocktail />] ],

            icon: false,
        }
    }

    render () {
        // if (document.getElementsByClassName('nav')[0].classList.contains('nav_active')) this.setState({icon: true})
        // else this.setState({icon: true})

        console.log(document.getElementsByClassName('nav')[0].classList)
        
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
                                <a className="nav_li" href="" > {item[0]} </a>
                            )
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
