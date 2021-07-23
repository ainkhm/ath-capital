import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Body() {
	const history = useHistory();
	return (
		<>
			<section className='customers'>
				<div className='customers-logo'>
					<img src='assets/uber-logobar-svg.svg' alt='Uber logo' />
				</div>
				<div className='customers-logo'>
					<img src='assets/logobar-mango-black.png' alt='Mango logo' />
				</div>
				<div className='customers-logo'>
					<img
						src='assets/booking-com-logobar-svg.svg'
						alt='Booking.com logo'
					/>
				</div>
				<div className='customers-logo'>
					<img src='assets/ebay-logobar.svg' alt='ebay logo' />
				</div>
				<div className='customers-logo'>
					<img
						src='assets/happy-socks-logobar-svg.svg'
						alt='Happy Socks logo'
					/>
				</div>
				<div className='customers-logo'>
					<img src='assets/spotify-logobar-svg.svg' alt='Spotify logo' />
				</div>
			</section>
			<section id='features' className='features'>
				<div className='features-item'>
					<div className='features-icon'>
						<img src='assets/icon_world_green.svg' alt='Green world icon' />
					</div>
					<div className='features-text'>
						<h2>Финансовая независимость</h2>
						<p>
							Пассивный доход - не выдумка, а новая реальность. Инвестируй и
							зарабатывай вместе с нами
						</p>
						{/* <a href='#' className='link-green'>
							Инвестировать
							<i className='fas fa-angle-right' />
						</a> */}
					</div>
				</div>
				<div className='features-item'>
					<div className='features-icon'>
						<img
							src='assets/revenue-protect-icon-green-svg.svg'
							alt='Green shield icon'
						/>
					</div>
					<div className='features-text'>
						<h2>Искусственный интеллект</h2>
						<p>
							Авторский алгоритм вложения средств на основе ИИ позволяет
							избежать рисков валютной инфляции и приумножать капитал
						</p>
						{/* <a href='#' className='link-green'>
							О алгоритме
							<i className='fas fa-angle-right' />
						</a> */}
					</div>
				</div>
				<div className='features-item'>
					<div className='features-icon'>
						<img
							src='assets//issuing-icon-svg-green.svg'
							alt='Green credit card icon'
						/>
					</div>
					<div className='features-text'>
						<h2>Гибкая программа партнёрства</h2>
						<p>
							Наши эксперты по формированию инвестиционных портфелей помогут
							определить наиболее выгодное предложение для каждого
						</p>
						{/* <a href='#' className='link-green'>
							Начать сейчас <i className='fas fa-angle-right' />
						</a> */}
					</div>
				</div>
				<div />
				<div />
			</section>
			<section className='channels'>
				<div className='channels-text'>
					<h2>Выводи заработанные средства через любую платформу</h2>
					<p>
						Мы не привязываем клиентов к определённому банку или платёжной
						системе. Клиент сам вправе распоряжаться вложенными деньгами и
						прыбилью.
					</p>
					{/* <a href='#' className='link-green'>
						Узнать больше о платформе
						<i className='fas fa-angle-right' />
					</a> */}
				</div>
			</section>
			<section className='payments'>
				{/* <div className='payments-item'>
					<img
						src='assets/homepage-payment-methods-EN.gif'
						alt='Various payment method checkouts'
					/>
					<p>
						<strong>Онлайн консультации и прибыль</strong>
						<br />
						Повысьте удобство проведения личных платежей с помощью терминала для
						любых нужд. Его легко настроить, и он обладает множеством функций.
					</p>
					<a href='#' className='link-green'>
						Узнать больше <i className='fas fa-angle-right' />
					</a>
				</div> */}
				{/* <div className='payments-item'>
					<img
						src='assets/Group50378.jpg'
						alt='Point of sale payment terminal and digital wallet'
					/>
					<p>
						<strong>Плтежные методы и личный кабинет</strong>
						<br />
						Повысьте удобство проведения личных платежей с помощью терминала для
						любых нужд. Его легко настроить, и он обладает множеством функций.
					</p>
					<a href='#' className='link-green'>
						Узнать больше <i className='fas fa-angle-right' />
					</a>
				</div> */}
			</section>
			<section id='transactions' className='transactions'>
				<div className='transactions-main'>
					<div className='transactions-main-item'>
						<video
							video__selfhosted
							className='video__selfhosted'
							autoPlay
							muted
							playsInline
							loop
							webkitallowfullscreen
							mozallowfullscreen
							allowFullScreen
							width='100%'
						>
							<source src='assets/ATH.mp4' type='video/mp4' />
							Your browser does not support the video tag
						</video>
					</div>
					<div className='transactions-main-item'>
						<h2>О нас</h2>
						<p>
							Наш инвестиционный фонд ATH capital работает с 2015 года. Не
							смотря на небольшую команду из 33 трейдеров, мы успешно торгуем с
							помощью торгового алгоритма на основе Искусственного Интеллекта
							(AI) и имеем общую доходность в более 15% в месяц с момента
							существования фонда. Наша доходность формируется за счёт торговли
							на криптовалютных биржах, а также инвестиций в криптовалютные
							проекты и активы.
						</p>
					</div>
				</div>
				<div className='transactions-feature'>
					<div className='transactions-feature-item'>
						<img
							src='assets/payment-methods-icon-20-white.svg'
							alt='Payment methods'
						/>
						<h4>Методы оплаты</h4>
						<p>Предлагаем способы оплаты, которым доверяют</p>
						{/* <a href='#' className='link-green'>
							Узнать больше <i className='fas fa-angle-right' />
						</a> */}
					</div>
					<div className='transactions-feature-item'>
						<img
							src='assets/global-acquiring-icon-20-white.svg'
							alt='Local connections'
						/>
						<h4>Консультации</h4>
						<p>
							Глобальная обработка выплат, адаптированная к вам, с более низкими
							комиссиями.
						</p>
						{/* <a href='#' className='link-green'>
							Узнать больше <i className='fas fa-angle-right' />
						</a> */}
					</div>
					<div className='transactions-feature-item'>
						<img
							src='assets/revenue-optimization-icon-20-white.svg'
							alt='Transaction optimizations'
						/>
						<h4>Оптимизация транзакций</h4>
						<p>
							Получайте больше дохода, используя данные и машинное обучение для
							каждого платежа.
						</p>
						{/* <a href='#' className='link-green'>
							Узнать больше <i className='fas fa-angle-right' />
						</a> */}
					</div>
					<div className='transactions-feature-item'>
						<img
							src='assets/revenue-protect-icon-20-white.svg'
							alt='Safety and security'
						/>
						<h4>Безопасность и удобство</h4>
						<p>
							Мы применяем подход на основе данных для блокировки мошенников и
							управления рисками.
						</p>
						{/* <a href='#' className='link-green'>
							Узнать больше <i className='fas fa-angle-right' />
						</a> */}
					</div>
				</div>
			</section>
			<section id='algoritm' className='reports'>
				<div className='reports-item'>
					<h2>Зачем нам это всё?</h2>
					<p>
						Мы зарабатываем от объема средств. Предложенная нами стратегия
						выигрышная для всех! Вы получаете половину от доходности фонда без
						задержек и в полном объеме. Прозрачная аналитика по доходности Ваших
						инвестиций доступна в личном кабинете пользователя.{' '}
					</p>
					<div className='reports-item-features'>
						<div className='reports-item-fearures-item'>
							<img src='assets/rules-icon-20.svg' alt='Daily tasks' />
							<h4>Ежедневные выплаты</h4>
							<p>Легко выполняем такие задачи, как возврат средств.</p>
							{/* <a href='#' className='link-green'>
								Learn more <i className='fas fa-angle-right' />
							</a> */}
						</div>
						<div className='reports-item-fearures-item'>
							<img
								src='assets/customer-insights-icon-20.svg'
								alt='In-depth reports'
							/>
							<h4>Подробные отчеты</h4>
							<p>Преобразуйте данные в подробные отчеты.</p>
						</div>
					</div>
				</div>
				<div className='reports-item'>
					<img
						className='img_fit_full'
						src='assets/Browser.png'
						alt='ATH sales to payouts dashboard screenshot'
					/>
				</div>
			</section>
			<section className='companies'>
				<div className='companies-heading'>
					<h2>Об алгоритме</h2>
					<p>
						Знания и понимание криптовалютного рынка наших трейдеров были
						внедрены в алгоритм на основе Искусственного Интеллекта, что
						гарантирует отсутствие ошибок и эмоциональных решений. Алгоритм не
						заточен на рискованные сделки, обеспечивающий стабильный рост
						активов.
					</p>
					{/* <a href='#' className='link-green'>
						Посмотрите, с кем мы работаем <i className='fas fa-angle-right' />
					</a> */}
				</div>
				{/* <div className='companies-main'>
					<div className='companies-main-item-1'>
						<video
							video__selfhosted
							className='video__selfhosted'
							autoPlay
							muted
							playsInline
							loop
							webkitallowfullscreen
							mozallowfullscreen
							allowFullScreen
							width='100%'
						>
							<source
								src='assets/homepage-square-video-Lush.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag
						</video>
					</div>
					<div className='companies-main-item-2'>
						<img
							className='lush-logo'
							src='assets/lush-logo-horizontal-svg.svg'
							alt='USDT logo'
						/>
						<p>
							"Было здорово работать с отделами продаж и менеджерами по работе с
							клиентами. Они помогли нам выйти на рынок с нашим решением USDT
							Pay намного быстрее, чем если бы мы пытались сделать это сами."
						</p>
						<a href='#' className='link-green-btn' id='btn-play'>
							<svg
								className='white'
								width={20}
								height={20}
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z'
									fill='#0ABF53'
								/>
								<path d='M8 13L13 10L8 7V13Z' fill='#0ABF53' />
							</svg>
							<svg
								className='green'
								width={20}
								height={20}
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx={10} cy={10} r={10} fill='#0ABF53' />
								<path d='M8 13L13 10L8 7V13Z' fill='white' />
							</svg>
							Смотреть видео сейчас
						</a>
					</div>
				</div> */}
				<div className='sm-slider'>
					<div className='sm-slider-nav'>
						<span className='sm-slider-btn' />
						<span className='sm-slider-btn' />
						<span className='sm-slider-btn' />
					</div>

					{/* <div className='companies-features'>
						<div
							className='companies-features-item companies-features-item-left'
							ontouchmove='slide(0)'
						>
							<img
								src='assets/hompage-16x9-brompton.jpg'
								alt='Brompton bikes'
							/>
							<h5>Партнер 1</h5>
							<h4>Совершайте транзакции</h4>
							<a href='#' className='link-green'>
								Узнать больше <i className='fas fa-angle-right' />
							</a>
						</div>
						<div className='companies-features-item' ontouchmove='slide(1)'>
							<img src='assets/hompage-16x9-flixbus.jpg' alt='Flixbus' />
							<h5>Партнер 2</h5>
							<h4>Путь к глобальной экспансии</h4>
							<a href='#' className='link-green'>
								Узнать больше <i className='fas fa-angle-right' />
							</a>
						</div>
						<div
							className='companies-features-item companies-features-item-right'
							ontouchmove='slide(2)'
						>
							<img
								src='assets/hompage-16x9-transferwise.jpg'
								alt='Glass Transferwise office building'
							/>
							<h5>Партнер 3</h5>
							<h4>Путь к глобальной экспансии</h4>
							<a href='#' className='link-green'>
								Узнать больше <i className='fas fa-angle-right' />
							</a>
						</div>
					</div> */}
				</div>
			</section>
			<section className='account'>
				<h3>Начните ваше путешествие с ATH capital сегодня</h3>
				<a
					className='btn-primary-black'
					href='#'
					onClick={() => history.push('/signup')}
				>
					Создать аккаунт
				</a>
			</section>
		</>
	);
}

export default Body;
