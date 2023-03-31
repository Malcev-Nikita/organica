import React from "react";


class Pagination extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            i: 0
        }

        this.increment = this.increment.bind(this)
        this.page = this.page.bind(this)
    }

    increment() {
        this.setState({
            i: this.state.i + 1
        })
    }

    page(menu_card) {
        this.setState({i: 0})
        while (this.state.i <= Math.ceil(menu_card / 6)) {
            console.log(Math.ceil(menu_card / 6))
            console.log(this.state.i)
            this.increment()
            return (
                <div className="page"> {this.state.i} </div>
            )
        }
    }

    render() {
        const menu = document.getElementsByClassName('menu')[this.props.index - 1]
        const menu_card = menu === undefined ? (0) : (menu.querySelectorAll('.menu_card').length)

        if (menu_card > 6) {
            return (
                <div className="pagination">
                {
                    this.page(menu_card)
                }
                </div>
            )
        }
    }
}

export default Pagination