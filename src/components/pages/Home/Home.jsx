import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import Car1 from '../../../assets/image/product/1.jpg';
import Car2 from '../../../assets/image/product/2.jpg';
import Car3 from '../../../assets/image/product/3.jpg';
import Car4 from '../../../assets/image/product/4.jpg';
import Car5 from '../../../assets/image/product/9.jpg';
import Car6 from '../../../assets/image/product/10.jpg';
import Team1 from '../../../assets/image/team/team-1.jpg';
import Team2 from '../../../assets/image/team/team-2.jpg';
import Team3 from '../../../assets/image/team/team-3.jpg';
import Team4 from '../../../assets/image/team/team-4.jpg';


export default class Home extends Component {
	render() {
		return (
            <div>
				
            <br />
            <br />
        
        <section className="article">
        <div className="container py-5">
          <h1 className="text-center">New Product</h1><br />
          <div className="row">
            <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car1} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
              <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car2} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
              <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car3} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car4} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
              <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car5} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
              <div className="col-lg-4 wow bounceIn" data-wow-delay="0.3s">
                <div className="card">
                  <img src={Car6} alt="" className="img-fluid" />
                  <p className="pt-3"><Link to="/cars">DODGE RAM 1500</Link></p>
                  <span id="cost">2000$</span>
                  <span id="name">HATCHBACK</span>
                  <small>
                      <Link to="/cars">2021</Link>
                      <Link to="/cars">MANUAL</Link>
                      <Link to="/cars">AIR CONDITION</Link>
                  </small>
                </div>
              </div>
          </div>
        </div>
    </section>
    
    <div class="title-box">
          <h1>Our Team</h1>
        </div>
        <div class="row team">
        <div class="team-row col-md-3">
          <div class="profile-box">
            <h4>Ahmad</h4>
            <small>Founder</small>
            <img src={Team1} alt="" />
            <div class="social-link">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="team-row col-md-3">
          <div class="profile-box">
            <h4>Ali</h4>
            <small>Founder</small>
            <img src={Team2} alt="" />
            <div class="social-link">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="team-row col-md-3">
          <div class="profile-box">
            <h4>Zahra</h4>
            <small>Founder</small>
            <img src={Team3} alt="" />
            <div class="social-link">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="team-row col-md-3">
          <div class="profile-box">
            <h4>Omar</h4>
            <small>Founder</small>
            <img src={Team4} alt="" />
            <div class="social-link">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        </div>
    </div>
		)
	}
}
