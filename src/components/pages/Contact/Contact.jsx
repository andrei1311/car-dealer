import React, { Component } from 'react';

import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<section className="section pb-5">
					<br />
					<br />

			<div className="row">
  			<div className="col-lg-5 mb-4">
			<div className="card">

	  		<div className="card-body">
			<div className="form-header blue accent-1">
		  		<h3><FontAwesomeIcon icon={faEnvelope} /> Contacteaza-ne:</h3>
			</div>
				<p>Nu ezita sa ne contactezi pentru mai multe informatii!</p>
		<br />
		<div className="md-form">
		  <i className="prefix grey-text"></i>
		  <label for="form-name">Nume</label>
		  <input type="text" id="form-name" className="form-control" />		  
		</div>

		<div className="md-form">
		  <i className="prefix grey-text"></i>
		  <label for="form-email">Email</label>
		  <input type="text" id="form-email" className="form-control" />
		</div>

		<div className="md-form">
		  <i className="prefix grey-text"></i>
		  <label for="form-Subject">Subiect</label>
		  <input type="text" id="form-Subject" className="form-control" />
		</div>

		<div className="md-form">
		  <i className="prefix grey-text"></i>
		  
		  <label for="form-Message">Mesajul tau</label>
		  <textarea type="text" id="form-text" className="form-control md-textarea" rows="3"></textarea>
		</div>

		<div className="text-center mt-4">
		  <button>Trimite</button>
		</div>

	  </div>

	  <br />
	<div className="row left text-center">
	  <div className="col-md-3">
		<span><FontAwesomeIcon icon={faLocationArrow} /></span>
		<strong>Adresa</strong>
		<br />	
		<p>Str. XYZ</p>
	  </div>

	  <div className="col-md-3">
		<span><FontAwesomeIcon icon={faPhone} /></span>
		<strong>Telefon</strong>
		<br />
		<p>0765 002 768</p>
	  </div>

	  <div className="col-md-3">
		<span><FontAwesomeIcon icon={faEnvelope} /></span>
		<strong>Email</strong>
		<br />	
		<p>yourbestcar@mail.com</p>
	  </div>
	</div>

	</div>

  </div>
  <div className="col-lg-7">
	<div id="map-container-google-11" className="z-depth-1-half map-container-6">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5698.064540279929!2d26.09876282668786!3d44.432500266409114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3f9032bbe9%3A0x71a08d3f1c8e3a2b!2sCentrul%20Vechi%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1634487585676!5m2!1sro!2sro" allowfullscreen="" loading="lazy"></iframe>
	</div>

	

  </div>
</div>

</section>
			</div>
		)
	}
}
