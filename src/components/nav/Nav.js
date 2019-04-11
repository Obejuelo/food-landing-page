import React, { Component } from 'react';
import './nav.css';

import { slide as Menu } from 'react-burger-menu'
import LoginModal from '../loginModal/LoginModal';

class Nav extends Component {
    state = {
        scroll: window.scrollY,
        searchShow: false,
        searchText: '',
        signInModal: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateScroll);
    }

    updateScroll = () => {
        this.setState({ scroll: window.scrollY })
    }

    // Method to change searchShow state
    changeSearchShow = () => {
        this.setState({ searchShow: !this.state.searchShow });
    }

    search = () => {
        let input = document.getElementById('search');
        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.changeSearchText();
                console.log(this.state.searchText);
            } else {
                return
            }
        })
    }

    // Method to change searchText state
    changeSearchText = () => {
        let input = document.getElementById('search').value;
        this.setState({ searchText: input });
    }

    // Method to show modal sign in
    changeShowModalSignIn = (value) => {
        this.setState({ signInModal: value });
    }

    // Method to change opacity of navBar
    setOpacity = () => {
        let op;
        if (this.state.scroll > 50 & this.state.scroll < 245) op = this.state.scroll / 250;
        if (this.state.scroll < 50) op = 0;
        if (this.state.scroll > 245) op = 1;
        return op;
    }

    // Method to add shadow to the navBar
    setShadow = () => {
        if (this.state.scroll > 250)
            return `0 2px 10px rgba(0,0,0,.2)`
        return '';
    }

    // Method to show or hide input search
    renderSearch = () => {
        if (this.state.searchShow) {
            return <input
                type="text"
                name="search"
                id="search"
                onKeyUp={this.search}
                placeholder='Search'
                autoFocus />
        }
    }

    render() {
        return ([
            <div
                key={1}
                className="nav"
                style={{
                    background: `rgba(255,255,255,${this.setOpacity()})`,
                    boxShadow: this.setShadow()
                }}>
                <Menu customBurgerIcon={<img src="assets/icons/burger.png" alt='' />}>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/burgers">Burgers</a>
                    <a className="menu-item" href="/pizzas">Pizzas</a>
                    <a className="menu-item" href="/desserts">Desserts</a>
                </Menu>
                <div className='sign-container'>
                    {this.renderSearch()}
                    <span
                        className='icon'
                        onClick={this.changeSearchShow}>
                        <i className="fas fa-search"></i>
                    </span>
                    <button
                        className='btn btn-sign btn-sm'
                        onClick={() => this.changeShowModalSignIn(true)}>
                        Sign In
                    </button>
                </div>
            </div>,
            <LoginModal
                key={2}
                showModal={this.state.signInModal}
                closeModal={this.changeShowModalSignIn} />
        ])
    }
}

export default Nav;