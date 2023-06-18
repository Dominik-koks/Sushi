import React from 'react'
import logotip from './../assets/header/logotip.png'
import strelka from './../assets/header/Vector.png'
import flag from './../assets/header/flag.png'
import telefon from './../assets/header/telefon.png'
import kolokol from './../assets/header/kolokol.png'
import serdce from './../assets/header/serdce.png'
import man from './../assets/header/man.png'
import cart from './../assets/header/cart.png'
import Cart from './cart'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../redux/slices/homeSlice'
import { Link } from 'react-router-dom'







export default function Header() {

    const open = useSelector(state => state.home.open)
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(setOpen(!open))
    }

    return (
        <div className='header'>
            <div className="header-container">
                <div className="logo">
                    <Link to='/'> <img src={logotip} alt="logo" /></Link>
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
                        <ul>
                            <Link to='/'><li>Главная</li></Link>
                            <Link to='/delivery'><li>Доставка</li></Link>
                            <Link to='/we'><li>О нас</li></Link>
                            <Link to='/news'><li>Новости</li></Link>
                        </ul>


                        {/* <Link to='/home'> <p>Главная</p></Link>
                        <Link to='/delivery'><p>Доставка</p></Link>
                        <Link to='/we'><p>О нас</p></Link>
                        <p>Новости</p> */}
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
                    <button onClick={openCart} className="carts">
                        <p>Корзина</p>
                        <img src={cart} alt="cart" />
                    </button>
                    {open && <Cart />}
                </div>
            </div>
        </div>
    )
}
