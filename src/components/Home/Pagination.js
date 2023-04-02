import React from "react";
import anime from "animejs";

class Pagination extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            i: 0
        }
    }

    render() {
        const menu = document.getElementsByClassName('menu')[this.props.index - 1]
        const menu_card = menu === undefined ? (0) : (menu.querySelectorAll('.menu_card').length)
        let index = 0

        if (menu_card > 8) {
            return (
                <div className="pagination">
                {
                    Array(Math.ceil(menu_card / 8)).fill(1).map(e => {
                        index++

                        if (index === 1) {
                            return ( 
                                <div className="page page_active" onClick={(e) => {  
                                    Array.from(document.getElementsByClassName('page')).map(e => e.classList.remove('page_active'))
                    
                                    anime({
                                        targets: e.target,
                                        scale: [ 1.6, 1],
                                        duration: 500,
                                    })
                    
                                    e.target.classList.add("page_active")
                                }}> 
                                    {index} 
                                </div> 
                            )
                        }

                        else {
                            return ( 
                                <div className="page" onClick={(e) => {  
                                    Array.from(document.getElementsByClassName('page')).map(e => e.classList.remove('page_active'))
                    
                                    anime({
                                        targets: e.target,
                                        scale: [ 1.6, 1],
                                        duration: 500,
                                    })
                    
                                    e.target.classList.add("page_active")
                                }}> 
                                    {index} 
                                </div> 
                            )
                        }
                    })
                }
                </div>
            )
        }
    }
}

export default Pagination