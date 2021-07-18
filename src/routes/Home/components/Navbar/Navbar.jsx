import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Navbar() {

  const history = useHistory();

  return (
    <nav className="main_menu">
      <div className="logo">
        <a href="index.html">ATH Capital</a>
      </div>
      <div className="links">
        <ul className="main_menu-left">
          <li className="menu-item"><a href="#">Контакты</a></li>
          <li className="menu-item"><a href="#">О нас</a></li>
          <li className="menu-item"><a href="#">Преимущества</a></li>
        </ul>
        <ul className="main_menu-right">
          <li className="menu-item"><a href="#">Связаться с нами</a></li>
          <li className="menu-item"><a href="#">Вход</a></li>
          <li className="menu-item"><a href="#" className="btn-primary" onClick={() => history.push('/login')}>Регистрация</a></li>
        </ul>
      </div>
      <a href="#" id="nav-btn">
        <span className="nav-btn" />
      </a>
    </nav>
  )
}

export default Navbar
