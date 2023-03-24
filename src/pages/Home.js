import React from "react";

import Nav from "../components/Home/Nav";
import Menu from "../components/Home/Menu";

import "../styles/Home_style.css"

class Home extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            menu: [ "Кофе", "Чай", "Пицца", "Паста", "Супы", "Салаты", "Коктейли", "Боулы", "Смузи", "Сок", "Какао", "Лимонад" ],
            index: 0,
            slider: 0,
            favorite: false,
        }

        this.chandeIndexItem = this.chandeIndexItem.bind(this)
        this.changeFavorite = this.changeFavorite.bind(this)
    }

    chandeIndexItem(id) {
        this.setState({
            index: id,
            slider: -1920 * id,
        })
    }

    changeFavorite(value) {
        this.setState({
            favorite: !value,
        })
    }
    
    render () {
        if (this.state.favorite) 
            Object.values(document.getElementsByClassName("favorite_container")).map(item => item.classList.add("favorite_container_active"))

        else
            Object.values(document.getElementsByClassName("favorite_container")).map(item => item.classList.remove("favorite_container_active"))

        return (
            <div className="Home" style={{transform: `translateX(${this.state.slider}px)`}}>
                <Nav menu={this.state.menu} index={this.chandeIndexItem} slider={this.slider} />

                {
                    this.state.menu.map(item => ( 
                        <Menu item={item} index={this.chandeIndexItem} favorite={this.state.favorite} changeFavorite={this.changeFavorite} />
                    ))
                }
            </div>
        );
    }
}

export default Home;
