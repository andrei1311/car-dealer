import React, { Component } from 'react';

import './Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

export default class Services extends Component {
	render() {
		return (
			<div>
				<section id="services">
          <div class="container">
              <h1>Serviciile noastre</h1>
              <div class="row services">
                  <div class="col-md-3 text-center">
                      <div class="icon">
                      <FontAwesomeIcon icon={faCar} />
                      </div>
                      <h3>Masini second-hand</h3>
                      <p>
                         In stoc sau la comanda
                      </p>
                  </div>
                  <div class="col-md-3 text-center">
                      <div class="icon">
                      <FontAwesomeIcon icon={faTruck} />
                      </div>
                      <h3>Asistenta auto</h3>
                      <p>
                         Non-Stop
                      </p>
                  </div>
                  <div class="col-md-3 text-center">
                      <div class="icon">
                      <FontAwesomeIcon icon={faWrench} />
                      </div>
                      <h3>Service auto</h3>
                      <p>
                         Peste 150 de clienti fericiti
                      </p>
                  </div>
                  <div class="col-md-3 text-center">
                      <div class="icon">
                      <FontAwesomeIcon icon={faCoins} />
                      </div>
                      <h3>Finantare auto</h3>
                      <p>
                          Unul dintre colegii nostrii te poate ajuta cu dosarul de finantare.
                      </p>
                  </div>
              </div>
          </div>
      </section>
			</div>
		)
	}
}
