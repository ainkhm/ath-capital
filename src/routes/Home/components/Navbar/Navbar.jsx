import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
	const history = useHistory();

	return (
		<nav className='main_menu'>
			<div className='logo'>
				<a href='#'>
					<img src='assets/logo.png'></img>
				</a>
			</div>
			<div className='links'>
				<ul className='main_menu-left'>
					<li className='menu-item'>
						<a href='#features'>Преимущества</a>
					</li>
					<li className='menu-item'>
						<a href='#transactions'>О нас</a>
					</li>
					<li className='menu-item'>
						<a href='#algoritm'>Алгоритм</a>
					</li>
				</ul>
				<ul className='main_menu-right'>
					{/* <li className="menu-item"><a href="#">Связаться с нами</a></li> */}
					<li className='menu-item'>
						<a href='#' onClick={() => history.push('/login')}>
							Вход
						</a>
					</li>
					<li className='menu-item'>
						<a
							href='#'
							className='btn-primary'
							onClick={() => history.push('/signup')}
						>
							Регистрация
						</a>
					</li>
				</ul>
			</div>
			{/* <a href='#' id='nav-btn'>
				<span className='nav-btn' />
			</a> */}
		</nav>
	);
}

export default Navbar;
