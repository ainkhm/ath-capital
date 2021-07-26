import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
	const history = useHistory();

	return (
		<nav className='main_menu'>
			<div className='logo'>
				<a href='https://ath-capital.web.app/'>
					<img src='assets/logo.png'></img>
				</a>
			</div>
			<div className='links'>
				<ul className='main_menu-left'>
					<li className='menu-item'>
						<a href='https://ath-capital.web.app/#features'>Преимущества</a>
					</li>
					<li className='menu-item'>
						<a href='https://ath-capital.web.app/#transactions'>О нас</a>
					</li>
					<li className='menu-item'>
						<a href='https://ath-capital.web.app/#algoritm'>Алгоритм</a>
					</li>
					<li className='menu-item'>
						<Link to='/policy'> Публичная оферта</Link>
					</li>
				</ul>
				<ul className='main_menu-right'>
					{/* <li className="menu-item"><a href="#">Связаться с нами</a></li> */}
					<li className='menu-item'>
						<a onClick={() => history.push('/login')}>Вход</a>
					</li>
					<li className='menu-item'>
						<a className='btn-primary' onClick={() => history.push('/signup')}>
							Регистрация
						</a>
					</li>
				</ul>
			</div>
			<a
				onClick={() => history.push('/login')}
				className='mobile-btn btn-primary'
			>
				Вход
			</a>
		</nav>
	);
}

export default Navbar;
