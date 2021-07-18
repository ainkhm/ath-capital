import React from 'react'
import { Link } from 'react-router-dom'

function Main() {

  return (
    <section className="main">
      <div className="main-header">
        <h1 className="heading">ATH capital. Доход сегодня</h1>
        <p>
          Познакомьтесь с платежной платформой, созданной для любого бизнеса и
          любого пути клиента.
        </p>
        <a href="#" className="btn-primary">
          Начни свое путешествие с нами
        </a>
      </div>
      <div className="main-video">
        <video
          video__selfhosted
          className="video__selfhosted"
          autoPlay
          muted
          playsInline
          loop
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
          width="100%"
        >
          <source src="assets/anthem.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </section>

  )
}

export default Main
