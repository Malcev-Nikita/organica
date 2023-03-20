import React from "react";

import "../../styles/Home_Nav_style.css"

import logo from "../../image/img/logo.png"

class Nav extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            menu: [ "Кофе", "Чай", "Смузи", "Пицца", "Паста", "Супы", "Салаты", "Боулы", "Сок", "Лимонад", "Коктейли", "Какао" ],
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
                                <a className="nav_li" href="" > {item} </a>
                            )
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
