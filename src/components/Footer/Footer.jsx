import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
	render() {
		return (
<footer className="text-center text-lg-start">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div className="me-5 d-none d-lg-block">
      <span>Urmareste-ne si pe:</span>
      <a href="" className="me-4 text-reset">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="" className="me-4 text-reset">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Your best car
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="hover col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Servicii
          </h6>
          <p>
            <Link to="/services" className="text-reset">Masini second-hand</Link>
          </p>
          <p>
            <Link to="/services" className="text-reset">Asistenta auto</Link>
          </p>
          <p>
            <Link to="/services" className="text-reset">Service auto</Link>
          </p>
          <p>
            <Link to="/services" className="text-reset">Finantare auto</Link>
          </p>
        </div>
        <div className=" hover col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Link-uri rapide
          </h6>
          <p>
            <Link to="/" className="text-reset">Acasa</Link>
          </p>
          <p>
            <Link to="/blog" className="text-reset">Blog</Link>
          </p>
          <p>
            <Link to="/services" className="text-reset">Servicii</Link>
          </p>
          <p>
            <Link to="/cars" className="text-reset">Masini</Link>
          </p>
          <p>
            <Link to="/about" className="text-reset">Despre noi</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contacteaza-ne
          </h6>
          <p><span><FontAwesomeIcon icon={faLocationArrow} /></span> Str. Xyz</p>
          <p>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            yourbestcar@mail.com
          </p>
          <p><span><FontAwesomeIcon icon={faPhone} /></span> 0765 002 768</p>
          <p><span><FontAwesomeIcon icon={faWhatsapp} /></span> 0765 002 768</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4">
    © 2021 Copyright:
    <span><a className="text-reset fw-bold">Andrei Agrigoroaie</a></span>
  </div>
</footer>
		)
	}
}
