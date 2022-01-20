import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
  // kind of like a toggle. bars changes to times on click and vice versa 
    this.setState({ clicked: !this.state.clicked })
  }



  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React<i className='fab fa-react'></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {/* if the menu icon is clicked - then show times otherwise display bars */}
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
        </div>
        {/* for mobile view - if clicked add className active to the Ul, otherwise display nav-menu  */}
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.name} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;

