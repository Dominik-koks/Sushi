import React from 'react'
import crestick from './../assets/header/cart/crestick.png'
import plus from './../assets/header/cart/plus.png'
import minus from './../assets/header/cart/minus.png'
import paket from './../assets/header/cart/paket.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, minusItem, plusItem } from '../redux/slices/cartSlice'
import { setOpen } from '../redux/slices/homeSlice'


export default function Cart() {

    const open = useSelector(state => state.home.open)
    const cart = useSelector(state => state.cart.item)
    const price = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(setOpen(!open))
    }

    const removeItem = (id) => {

        dispatch(deleteItem(id))
    }

    const minItem = (id) => {
        dispatch(minusItem(id))
    }

    const plItem = (id) => {
        dispatch(plusItem(id))
    }

    return (
        <>

            {price ? <div className='cart'>
                <div className="cart-container" >
                    <div className="cart-header">
                        <p>Ваш заказ</p>
                        <img onClick={openCart} src={crestick} alt="crestick" />
                    </div>
                    <div className="cart-item-container">
                        {cart && cart.map((item, i) => <div key={i} className="cart-item">
                            <div className="item-container1">
                                <img onClick={() => removeItem(item)} className='item-img1' src={crestick} alt="crestic" />
                                <img className='item-img2' src={item.imageUrl} alt="item1" />
                                <div className="item-info">
                                    <h3>{item.name}</h3>
                                    <p>Вес: {item.mas}гр</p>
                                </div>
                            </div>
                            <div className="item-container2">
                                <h3>{item.price}</h3>
                                <button onClick={() => minItem(item.id)}><img src={minus} alt='minus'></img></button>
                                <p>{item.count}</p>
                                <button onClick={() => plItem(item.id)}><img src={plus} alt='plus'></img></button>
                            </div>

                        </div>)}
                    </div>
                    <div className="cart-info">
                        <p>Минимальная сумма заказа 400 грн</p>
                    </div>
                </div >
                <div className="cart-footer">
                    <div className="cart-footer-container">
                        <div className="footer-container1">
                            <h6>Итого:</h6>
                            <div>
                                <div>{price}</div>
                                <p>грв</p>
                            </div>
                        </div>
                        <div className="footer-container2">
                            <button>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div > : <div className='cart'>
                <div className="cart-container">
                    <div className="cart-header">
                        <p>Ваш заказ</p>
                        <img onClick={openCart} src={crestick} alt="crestick" />
                    </div>
                    <div className="nocart">
                        <div className="nocart-container">
                            <img src={paket} alt="paket" />
                            <h3>В вашей корзине пока пусто</h3>
                            <p>Тут появятся товары, которые<br />вы закажите</p>
                            <button className='nocart-button1'>Повторить прошлый заказ</button><br />
                            <button className='nocart-button2'>История заказов</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>

    )
}


