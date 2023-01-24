import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/logo.png.webp"
import { Menu, Dropdown } from 'antd';
import "./index.scss"

const Header = () => {
  return (
    <div id='header'>
      <div className="container">
        <div className="headers">
            <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Blog
              </Menu.Item>
              <Menu.Item key="1">
              Blog Details
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Blog
          </a>
        </Dropdown>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add-product"}>Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wishList"}>Wish List</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="btn">
                <button>Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
