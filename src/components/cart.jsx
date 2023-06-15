import React from 'react'
import crestick from './../assets/header/cart/crestick.png'
import item1 from './../assets/menu/items/item1.png'
import plus from './../assets/header/cart/plus.png'
import minus from './../assets/header/cart/minus.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../redux/slices/cartSlice'


export default function Cart() {

    const cart = useSelector(state => state.cart.item)
    const dispatch = useDispatch()

    const removeItem = () => {

        dispatch(deleteItem())
    }


    return (
        <div className='cart'>
            <div className="cart-container">
                <div className="cart-header">
                    <p>Ваш заказ</p>
                    <img src={crestick} alt="crestick" />
                </div>
                <div className="cart-item-container">
                    {cart && cart.map(item => <div className="cart-item">
                        <div className="item-container1">
                            <img onClick={() => removeItem} className='item-img1' src={crestick} alt="crestic" />
                            <img className='item-img2' src={item.imageUrl} alt="item1" />
                            <div className="item-info">
                                <h3>{item.name}</h3>
                                <p>Вес: {item.mas}гр</p>
                            </div>
                        </div>
                        <div className="item-container2">
                            <h3>{item.price}</h3>
                            <button><img src={minus} alt='minus'></img></button>
                            <p>count</p>
                            <button><img src={plus} alt='plus'></img></button>
                        </div>

                    </div>)}
                </div>
                <div className="cart-info">
                    <p>Минимальная сумма заказа 400 грн</p>
                </div>
            </div>
            <div className="cart-footer">
                <div className="cart-footer-container">
                    <div className="footer-container1">
                        <h6>Итого:</h6>
                        <div>
                            <div>580</div>
                            <p>грв</p>
                        </div>
                    </div>
                    <div className="footer-container2">
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
