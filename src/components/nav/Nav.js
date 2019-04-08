import React, { Component } from 'react';
import './nav.css';

import { bubble as Menu } from 'react-burger-menu'

class Nav extends Component {
    state = {
        scroll: window.scrollY
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateScroll);
    }

    updateScroll = () => {
        this.setState({ scroll: window.scrollY })
    }

    setOpacity = () => {
        let op;
        if (this.state.scroll > 50 & this.state.scroll < 245)
            op = this.state.scroll / 250;
        if (this.state.scroll < 50)
            op = 0;
        if (this.state.scroll > 245)
            op = 1;
        return op;
    }

    setShadow = () => {
        if (this.state.scroll > 250)
            return `0 2px 10px rgba(0,0,0,.2)`
        return '';
    }

    render() {
        return (
            <div
                className="nav"
                style={{
                    background: `rgba(255,255,255,${this.setOpacity()})`,
                    boxShadow: this.setShadow()
                }}>
                <Menu customBurgerIcon={<img src="assets/icons/menu.png" alt='' />}>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/burgers">Burgers</a>
                    <a className="menu-item" href="/pizzas">Pizzas</a>
                    <a className="menu-item" href="/desserts">Desserts</a>
                </Menu>
                <div className='sign-container'>
                    <span className='icon'><i className="fas fa-search"></i></span>
                    <button className='btn btn-sign btn-sm'>Sign In</button>
                </div>
            </div>
        )
    }
}

export default Nav;