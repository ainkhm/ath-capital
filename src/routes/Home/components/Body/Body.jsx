import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Body() {
	const history = useHistory();
	return (
		<>
			<section className='customers'>
				<div className='customers-logo'>
					<img src='assets/binance.png' alt='Binance' />
				</div>
				<div className='customers-logo'>
					<img src='assets/digi-finex.png' alt='Digi Finex' />
				</div>
				<div className='customers-logo'>
					<img src='assets/coinbase.png' alt='Coinbase' />
				</div>
				<div className='customers-logo'>
					<img src='assets/huobi.png' alt='Huobi Global' />
				</div>
				<div className='customers-logo'>
					<img src='assets/okex.png' alt='OKEX' />
				</div>
				<div className='customers-logo'>
					<img src='assets/bitfinex.png' alt='bit-fixex' />
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
				</div>
			</section>
			<section className='payments'></section>
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
						src='assets/dashboard.png'
						alt='ATH dashboard'
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
				</div>

				<div className='sm-slider'></div>
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
