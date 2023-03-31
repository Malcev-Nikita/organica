import React from "react";


class Bottom_Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            icons: ['Coffee', 'Tea', 'Pizza', 'Paste', 'Soup', 'Salad', 'Coctail', 'Bowl', 'Smoothies', 'Juice', 'Kakao', 'Lemonade'],
            menu: [ "Кофе", "Чай", "Пицца", "Паста", "Супы", "Салаты", "Коктейли", "Боулы", "Смузи", "Сок", "Какао", "Лимонад" ],
        }
    }

    render() {
        let i = -1

        return (
            <div className="bottom_nav">
            {
                this.props.menu.map((item) => {
                    { i++ }
                    return (
                        <div className="bottom_nav_card" onClick={() => this.props.chandeIndexItem(this.props.menu.indexOf(item) + 1)}>
                            <img className="bottom_nav_card_img" src={require(`../../image/icon/${this.state.icons[i]}.svg`)} />
                            <p> {this.state.menu[i]} </p>
                        </div>
                    )
                })    
            }
            </div>
        )
    }
}

export default Bottom_Nav