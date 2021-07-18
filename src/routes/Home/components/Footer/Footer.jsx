import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <footer className="footer">
      <div className="footer-main">
        <ul className="footer-link">
          <li className="footer-link-title">
            <a href="#">
              <strong>ATH capital</strong>
            </a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Правила использоваания</a>
          </li>
          <li>
            <a href="#">Помощь</a>
          </li>
        </ul>
        <ul className="footer-link">
          <li className="footer-link-title">
            <a href="#">
              <strong>Решения</strong>
            </a>
          </li>
          <li>
            <a href="#">Партнеры</a>
          </li>
          <li>
            <a href="#">О токенах</a>
          </li>
          <li>
            <a href="#">Отчеты</a>
          </li>
        </ul>
        <ul className="footer-link">
          <li className="footer-link-title">
            <a href="#">
              <strong>База знаний</strong>
            </a>
          </li>
          <li>
            <a href="#">Поддержка</a>
          </li>
          <li>
            <a href="#">Документация</a>
          </li>
        </ul>
        <ul className="footer-link">
          <li className="footer-link-title">
            <a href="#">
              <strong>Платформа</strong>
            </a>
          </li>
          <li>
            <a href="#">Сертификация</a>
          </li>
          <li>
            <a href="#">Лицензии</a>
          </li>
          <li>
            <a href="#">Правила использования</a>
          </li>
        </ul>
        <div className="contact">
          <h2>Подписаться на рассылку</h2>
          <form action className="newsletter_form">
            <div className="newsletter_form-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                required
              />
              <button className="btn_submit" type="submit">
                <i className="fas fa-angle-right" />
              </button>
            </div>
            <span className="email_note">
              Введите валидный e-mail.
              <br />
              example@yourdomain.com
            </span>
          </form>
          <span className="privacy_reading">
            Я подтверждаю, что прочитал Политику конфиденциальности ATH Capital и
            согласен на использование моих данных в соответствии с ней.
          </span>
          <div className="social_media">
            <a href="#">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.81243 0C2.8114 0 3.62485 0.83487 3.62485 1.85852C3.62485 2.8838 2.8114 3.71867 1.81243 3.71867C0.81028 3.71867 0 2.8838 0 1.85852C0 0.83487 0.81028 0 1.81243 0Z"
                  fill="#A5AFBD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.247314 15.441H3.37585V5.1264H0.247314V15.441Z"
                  fill="#A5AFBD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33691 5.12706H8.33384V6.53641H8.37507C8.7921 5.72595 9.81169 4.87155 11.3324 4.87155C14.4942 4.87155 15.0793 7.00511 15.0793 9.78313V15.4417H11.9571V10.4276C11.9571 9.2298 11.9333 7.69188 10.3334 7.69188C8.70647 7.69188 8.45911 8.99382 8.45911 10.3381V15.4417H5.33691V5.12706Z"
                  fill="#A5AFBD"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width={18}
                height={15}
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.3519 11.5254C3.46703 11.4582 2.29055 10.071 1.97849 8.94455C2.50275 9.04696 3.01922 9.02615 3.53256 8.89655C3.54661 8.89335 3.55909 8.88535 3.58562 8.87255C2.56361 8.62774 1.77564 8.06932 1.22953 7.16529C0.867538 6.56526 0.692782 5.90924 0.699023 5.18921C1.20769 5.46762 1.74132 5.62283 2.31239 5.63883C1.54472 5.07241 1.02981 4.33158 0.819168 3.38274C0.610085 2.43711 0.745833 1.53948 1.20925 0.691445C3.17213 3.06113 5.65616 4.36198 8.68786 4.57639C8.66602 4.42758 8.64417 4.29958 8.63013 4.16837C8.52871 3.29314 8.69878 2.47871 9.15908 1.73788C9.7364 0.809849 10.5602 0.232228 11.6181 0.0562211C12.8383 -0.148586 13.9025 0.208227 14.7934 1.09306C14.8527 1.15386 14.9026 1.17146 14.9853 1.15386C15.7311 0.985856 16.4333 0.710645 17.0949 0.320231C17.1105 0.310631 17.1261 0.30263 17.1432 0.29463C17.1464 0.29303 17.1526 0.29303 17.1666 0.29303C16.8811 1.15706 16.3584 1.82589 15.6141 2.31711C16.3163 2.2371 16.9872 2.04669 17.6347 1.75868C17.6394 1.76508 17.6441 1.77148 17.6488 1.77629C17.5099 1.96189 17.3757 2.1539 17.2322 2.33471C16.8468 2.82112 16.4052 3.24834 15.9137 3.61955C15.8716 3.64995 15.8513 3.68036 15.8529 3.73636C15.8731 4.28838 15.8529 4.8388 15.7858 5.38602C15.6469 6.54286 15.3317 7.6437 14.8511 8.69654C14.3549 9.78458 13.7074 10.7654 12.8914 11.6279C11.5105 13.0919 9.84562 14.0375 7.9077 14.4776C7.24301 14.6264 6.56895 14.7016 5.88865 14.7224C3.79782 14.7848 1.86458 14.2519 0.0858176 13.1255C0.0624128 13.1111 0.0405683 13.0951 0 13.0695C1.26542 13.2087 2.46999 13.0423 3.62774 12.5575C4.24251 12.2967 4.81203 11.9575 5.3519 11.5254Z"
                  fill="#A5AFBD"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width={8}
                height={17}
                viewBox="0 0 8 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.20544 2.76195C6.66694 2.74324 7.12845 2.75727 7.59137 2.75727H7.78165V0.119561C7.53599 0.0930596 7.27755 0.0540863 7.0191 0.0400559C6.54624 0.0166719 6.07196 -0.008271 5.59768 0.00264152C4.87347 0.0197898 4.18903 0.213097 3.58978 0.683895C2.90392 1.2264 2.52762 1.98716 2.3842 2.88511C2.32455 3.25457 2.30893 3.63963 2.30041 4.01689C2.28763 4.60773 2.29899 5.19856 2.29899 5.79096V6.01388H0V8.95871H2.28479V16.3636H5.07795V8.97118H7.35565C7.47209 7.99061 7.58569 7.02096 7.70497 6.01233C7.52179 6.01233 7.35849 6.01077 7.19377 6.01233C6.54624 6.01544 5.05949 6.01233 5.05949 6.01233C5.05949 6.01233 5.06517 4.55161 5.08079 3.91868C5.10351 3.05191 5.57211 2.78689 6.20544 2.76195Z"
                  fill="#A5AFBD"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-info-item">
          <a href="#">Правила пользования</a>-<a href="#">Cookies</a>-
          <span className="copyright">© 2021 ATH capital</span>
        </div>
      </div>
    </footer>

  )
}

export default Navbar
