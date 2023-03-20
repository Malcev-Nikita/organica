import React from "react";

import Nav from "../components/Home/Nav";
import Menu from "../components/Home/Menu";

class Home extends React.Component {
    render () {
        return (
            <div className="Home">
                <Nav />
                <Menu />
            </div>
        );
    }
}

export default Home;
