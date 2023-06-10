import React from 'react'
import logotip from './../assets/header/logotip.png'
import strelka from './../assets/header/Vector.png'
import flag from './../assets/header/flag.png'
import telefon from './../assets/header/telefon.png'
import kolokol from './../assets/header/kolokol.png'
import serdce from './../assets/header/serdce.png'
import man from './../assets/header/man.png'
import cart from './../assets/header/cart.png'







export default function Header() {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="logo">
                    <img src={logotip} alt="logo" />
                    <img className='strelka' src={strelka} alt="strelka" />
                </div>
                <div className="navbar">
                    <div className="location">
                        <div className="country">
                            <img src={flag} alt="flag" />
                            <p>Киев</p>
                        </div>
                        <p>RU</p>
                    </div>
                    <div className='navigate'>
                        <p>Главная</p>
                        <p>Доставка</p>
                        <p>О нас</p>
                        <p>Новости</p>
                    </div>
                    <div className="contacts">
                        <img src={telefon} alt="telefon" />
                        <p>+38 097 699 34 38</p>
                    </div>
                </div>
                <div className='header-info'>
                    <img className='icons1' src={kolokol} alt="kolokol" />
                    <img className='icons2' src={serdce} alt="serdce" />
                    <img className='icons3' src={man} alt="man" />
                    <div className="cart">
                        <p>Корзина</p>
                        <img src={cart} alt="cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}
