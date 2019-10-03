import React from 'react';
import '../styles/Header.css';


const Header = () => (
  <div>
    <div className="header__backgound-square"/>
    <div className="header__backgound-square_rotate"/>

    <nav className="header">
      <ul className="header__list__links">
        <li className="header__list-links__link-name">
          <a className="header__list-links__link " href="#">Dia</a>
        </li>
        <li>
          <a className="header__list-links__link" href="#">Home</a>
        </li>
        <li>
          <a className="header__list-links__link" href="#">About us</a>
        </li>
        <li>
          <a className="header__list-links__link" href="#">Service</a>
        </li>
        <li>
          <a className="header__list-links__link" href="#">Work</a>
        </li>
        <li>
          <a className="header__list-links__link" href="#">Contact Us</a>
        </li>
        <li className="header__list-links__link-hire">
          <a className="header__list-links__link" href="#">Hire us</a>
        </li>
      </ul>
    </nav>

    <div className="header__content">
      <div className="header__content-sign">
        Global digital agency
      </div>
      <div className="header__content-text">
        By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath.
      </div>
      <button type="button" className="header__content-button">Learn more</button>
    </div>

    <div className="header__image-size">
      <div className="header__image" />
    </div>

    <div className="header__image__text">
      <div className="header__image__text__list-links">
        <a className="header__image__text__list-links-link" href="">Facebook</a>
        <a className="header__image__text__list-links-link" href="">Twitter</a>
        <a className="header__image__text__list-links-link" href="">Instagram</a>
      </div>
      <div className="header__image__text-sign">intro</div>
      <div className="header__image__text-text">By the same illusion which <br/> lifts the horizon.</div>
    </div>
  </div>
)

export default Header